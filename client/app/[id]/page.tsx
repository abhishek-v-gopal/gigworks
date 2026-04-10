import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { cookies } from "next/headers"
import dynamic from 'next/dynamic'

import { jwtDecode } from "jwt-decode"
import PendingPage from "@/app/components/pending"
import { 
  fetchBusinessesByslug,
  ASSET_BASE_URL,
} from "@/app/api"

export const runtime = 'edge';

interface JWTPayload {
  exp?: number
  iat?: number
  sub?: string
  email?: string
  name?: string
}

interface License {
  name: string
  number: string
  url: string
  description: string
}

interface MediaItem {
  _id: string
  url: string
  type: string
}

interface BusinessProfile {
  _id: string
  name: string
  description: string
  email: string
  phone: string | null
  address: string
  city: string
  state: string
  country: string
  latitude: number
  longitude: number
  location_url: string
  operating_hours: {
    [key: string]: string
  }
  socials: {
    website?: string
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
    youtube?: string
  }
  avatar: string
  banner: string
  type: string
  additional_services: string
  gstin: string
  slug: string
}

interface BusinessData {
  profile: BusinessProfile
  user: {
    name: string
    phone: string
  }
  category: string
  subCategory: string
  subCategoryOption: string
  licenses: License[]
  media: MediaItem[]
  tags: any[]
}


// 🎯 DYNAMIC GENERATION WITH ISR FOR BETTER SEO AND PERFORMANCE
export const revalidate = 3600; // Revalidate every hour for fresh content
export const preferredRegion = 'auto' // Optimize for user's region

function sanitizeText(value?: string | null) {
  return value?.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim() || ""
}

function getServiceTerms(businessData: BusinessData) {
  const primaryService = businessData.subCategory?.trim()
  const additionalServices = businessData.profile.additional_services
    ? businessData.profile.additional_services
        .split(",")
        .map((service) => service.trim())
        .filter(Boolean)
    : []

  return [primaryService, ...additionalServices].filter(
    (term, index, terms) => Boolean(term) && terms.indexOf(term) === index
  )
}

function buildSearchPhrases(businessData: BusinessData) {
  const serviceTerms = getServiceTerms(businessData)
  const locationTerms = [
    businessData.profile.city,
    businessData.profile.state,
    businessData.profile.country,
  ].filter(Boolean)

  const basePhrases = [
    businessData.profile.name,
    businessData.subCategory,
    businessData.category,
    businessData.subCategoryOption,
    ...serviceTerms,
    ...locationTerms,
    "local service provider",
    "near me",
  ]

  const serviceLocationPhrases = serviceTerms.flatMap((service) => {
    const serviceLower = service.toLowerCase()
    return [
      `${service} near me`,
      `${serviceLower} near me`,
      `${service} in ${businessData.profile.city}`,
      `${serviceLower} in ${businessData.profile.city}`,
      `${service} in ${businessData.profile.city}, ${businessData.profile.state}`,
    ]
  })

  return Array.from(new Set([...basePhrases, ...serviceLocationPhrases].filter(Boolean)))
}

// 🎯 DYNAMIC IMPORT FOR CLIENT COMPONENTS
const BusinessProfileClient = dynamic(() => import("./profile"), {
  loading: () => <PendingPage />,
  ssr: true // Enable SSR for better SEO
})

async function getBusinessData(slug: string): Promise<{ data: BusinessData } | null> {
  try {
    const response = await fetchBusinessesByslug(slug)
    if (!response || !response.data || !response.data.profile) {
      return null;
    }
    return { data: response.data };
  } catch (err) {
    console.error("Error fetching business data:", err)
    return null;
  }
}

function getTokenData(): { tokenData: JWTPayload | null; isOwner: boolean } {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get("token")?.value

    if (!token) {
      return { tokenData: null, isOwner: false }
    }

    const decodedToken = jwtDecode<JWTPayload>(token)

    if (decodedToken.exp) {
      const currentTime = Math.floor(Date.now() / 1000)
      const isExpired = decodedToken.exp < currentTime

      if (isExpired) {
        return { tokenData: null, isOwner: false }
      }
    }

    return { tokenData: decodedToken, isOwner: false }
  } catch (error) {
    console.error("Error handling JWT token:", error)
    return { tokenData: null, isOwner: false }
  }
}



// -----------------------------------------------------------------------------------------



// 🎯 GENERATE JSON-LD FUNCTION
function generateJsonLd(businessData: BusinessData, slug: string) {

  // Format operating hours for schema.org
  const formatOperatingHoursForSchema = (hours: { [key: string]: string }) => {
    const dayMap: { [key: string]: string } = {
      mon: "Monday",
      tue: "Tuesday",
      web: "Wednesday",
      thu: "Thursday",
      fri: "Friday",
      sat: "Saturday",
      sun: "Sunday",
    }

    return Object.entries(hours)
      .filter(([_, time]) => time && time.toLowerCase() !== "closed")
      .map(([day, time]) => {
        const dayName = dayMap[day]
        if (!dayName || !time || time.toLowerCase() === "closed") return null

        const [startTime, endTime] = time.split("-")
        if (!startTime || !endTime) return null

        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: dayName,
          opens: startTime.trim(),
          closes: endTime.trim(),
        }
      })
      .filter(Boolean)
  }
  const services = getServiceTerms(businessData)
  const profileDescription = sanitizeText(businessData.profile.description)
  const pageUrl = `https://gigwork.co.in/${slug}`
  const locationUrl =
    businessData.profile.location_url ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${businessData.profile.name}, ${businessData.profile.city}, ${businessData.profile.state}`
    )}`

  // Generate social media profiles array
  const sameAs = businessData.profile.socials ? Object.values(businessData.profile.socials).filter(Boolean) : []

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": pageUrl,
    name: businessData.profile.name,
    description:
      profileDescription ||
      `${businessData.profile.name} - ${businessData.subCategory}`,
    url: pageUrl,
    telephone: `+91${businessData.profile.phone || businessData.user.phone}`,
    email: businessData.profile.email,

    // Address
    address: {
      "@type": "PostalAddress",
      streetAddress: businessData.profile.address,
      addressLocality: businessData.profile.city,
      addressRegion: businessData.profile.state,
      addressCountry: businessData.profile.country,
    },

    // Geographic coordinates
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessData.profile.latitude,
      longitude: businessData.profile.longitude,
    },

    hasMap: locationUrl,

    areaServed: [
      businessData.profile.city,
      businessData.profile.state,
      businessData.profile.country,
    ].filter(Boolean),

    serviceType: services,

    keywords: buildSearchPhrases(businessData),

    knowsAbout: buildSearchPhrases(businessData),

    mainEntityOfPage: pageUrl,

    // Images
    image: [
      businessData.profile.avatar
        ? `${ASSET_BASE_URL}/${businessData.profile.avatar}`
        : "https://gigwork.co.in/assets/media/defaultbusiness.png",
      businessData.profile.banner
        ? `${ASSET_BASE_URL}/${businessData.profile.banner}`
        : "https://gigwork.co.in/assets/media/15879.png",
    ],

    // Logo
    logo: businessData.profile.avatar
      ? `${ASSET_BASE_URL}/${businessData.profile.avatar}`
      : "https://gigwork.co.in/assets/media/defaultbusiness.png",

    // Operating hours
    ...(businessData.profile.operating_hours && {
      openingHoursSpecification: formatOperatingHoursForSchema(businessData.profile.operating_hours),
    }),

    // Services offered
    ...(services.length > 0 && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service,
          },
        })),
      },
    }),

    // Social media profiles
    ...(sameAs.length > 0 && { sameAs }),

    // Business owner/contact person
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+91${businessData.profile.phone || businessData.user.phone}`,
      email: businessData.profile.email,
      contactType: "customer service",
    },

    // Additional business info
    ...(businessData.profile.gstin && {
      taxID: businessData.profile.gstin,
    }),

    additionalType: businessData.profile.type || businessData.subCategory,

    // Business hours and availability
    ...(businessData.profile.operating_hours && {
      openingHoursSpecification: formatOperatingHoursForSchema(businessData.profile.operating_hours),
    }),

    sameAs: [
      ...(sameAs as string[]),
      ...(businessData.profile.socials?.website ? [businessData.profile.socials.website] : []),
    ].filter(Boolean),
  }

  return jsonLd
}

// 🎯 GENERATE METADATA FUNCTION
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    // Get the business slug from params
    const { id } = params

    // Fetch business data
    const result = await getBusinessData(id)

    if (!result) {
      notFound()
    }

    const { data: businessData } = result
    const { profile } = businessData
    const pageTitle = `${profile.name} | ${businessData.subCategory} in ${profile.city}, ${profile.state}`
    const cleanDescription = sanitizeText(profile.description)
    const metaDescription =
      cleanDescription.slice(0, 160) ||
      `${profile.name} is a ${businessData.subCategory} in ${profile.city}, ${profile.state}. Find contact details, services, hours, and location for this local provider near you.`
    const keywords = buildSearchPhrases(businessData)

    return {
      // Dynamic title with business name
      title: pageTitle,

      // Dynamic description
      description: metaDescription,

      // Dynamic keywords
      keywords: keywords,

      // Open Graph for social sharing
      openGraph: {
        title: pageTitle,
        description: metaDescription,
        type: "website",
        locale: "en_IN",
        url: `https://gigwork.co.in/${id}`,
        siteName: "Gigwork",
        images: [
          {
            url: profile.banner ? `${ASSET_BASE_URL}/${profile.banner}` : "https://gigwork.co.in/assets/media/15879.png",
            width: 1200,
            height: 630,
            alt: `${profile.name} - Business Banner`,
          },
          {
            url: profile.avatar
              ? `${ASSET_BASE_URL}/${profile.avatar}`
              : "https://gigwork.co.in/assets/media/defaultbusiness.png",
            width: 400,
            height: 400,
            alt: `${profile.name} - Business Logo`,
          },
        ],
      },

      // Twitter Card
      twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: metaDescription,
        images: [profile.banner ? `${ASSET_BASE_URL}/${profile.banner}` : "https://gigwork.co.in/assets/media/15879.png"],
      },

      // Canonical URL
      alternates: {
        canonical: `https://gigwork.co.in/${id}`,
      },

      // Robots directive
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      
      // Performance hints and additional metadata
      other: {
        "X-Robots-Tag": "index, follow",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
        "language": "en",
        "geo.region": "IN",
        "geo.placename": profile.city,
        "geo.position": `${profile.latitude};${profile.longitude}`,
        "ICBM": `${profile.latitude}, ${profile.longitude}`,
      },

      // Additional metadata
      category: businessData.category,
      authors: [{ name: profile.name }],
      creator: profile.name,
      publisher: "Gigwork",
    }
  } catch (error) {
    console.error("Error in generateMetadata:", error)
    return {
      title: "Business Profile | Gigwork",
      description: "Business profile on Gigwork",
      robots: {
        index: false,
        follow: false,
      },
    }
  }
}




// -----------------------------------------------------------------------------------------




// 🎯 MAIN PAGE COMPONENT
export default async function BusinessProfilePage({ params }: {params: { id: string }}) {
  try {
    // Get the business slug
    const { id } = params

    // Fetch business data
    const result = await getBusinessData(id)

    if (!result) {
      notFound()
    }

    const { data: businessData } = result

    // Get authentication data
    const { tokenData } = getTokenData()
    const isOwner = tokenData?.name === businessData.user?.name

    // 🎯 GENERATE JSON-LD FOR THIS SPECIFIC BUSINESS
    const jsonLd = generateJsonLd(businessData, id)

    return (
      <>
        {/* 🎯 INJECT JSON-LD INTO PAGE HEAD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd, null, 2).replace(/</g, "\\u003c"),
          }}
        />
        
        {/* 🎯 PERFORMANCE HINTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* 🎯 PRELOAD CRITICAL RESOURCES */}
        {businessData.profile.avatar && (
          <link 
            rel="preload" 
            href={`${ASSET_BASE_URL}/${businessData.profile.avatar}`} 
            as="image" 
            type="image/webp"
          />
        )}

        {/* 🎯 RENDER THE CLIENT COMPONENT WITH DATA */}
        <BusinessProfileClient 
          businessData={businessData} 
          initialTokenData={tokenData} 
          isOwner={isOwner} 
          slug={id} 
        />
      </>
    )
  } catch (error) {
    notFound()
  }
}
