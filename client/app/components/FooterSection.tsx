import React from 'react'
import Image from 'next/image'
import gigworks from "../../public/assets/media/gigworks.svg";


export  function FooterSection() {
  return (
    <div>
      <footer className="p-4 bg-black sm:p-6 dark:bg-gray-800 md:pt-24 pt-9">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:grid md:grid-cols-3 md:gap-8">
            <div className="mb-6  md:mb-0 md:col-span-1 -mt-2">
              <a
                href="https://gigwork.co.in"
                className="flex md:items-center justify-center"
              >
                <Image
                  src={gigworks}
                  alt="GigWork Logo"
                  width={40}
                  height={40}
                  className="w-28 md:w-40"
                />
              </a>
              <hr className="md:hidden block my-4" />

            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:col-span-2">
              <div>
                <h2 className="mb-6 text-sm font-medium uppercase text-white">
                  Quick Links
                </h2>
                <ul className="text-white text-sm">
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href=""
                      className="hover:underline"
                    >
                      About us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href=""
                      className="hover:underline"
                    >
                      Join with us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href=""
                      className="hover:underline"
                    >
                      Contact us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/privacy"
                      className="hover:underline"
                    >
                      Privacy and Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/terms"
                      className="hover:underline"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hidden md:block">
                <h2 className=" mb-6 text-sm font-bold uppercase text-white">
                  Follow us
                </h2>
                <ul className="text-white text-sm">
                  <li className="mb-4">
                    <a
                      href=""
                      className="hover:underline flex "
                    >
                      <svg
                        className="mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                          fill="white"
                        />
                      </svg>
                      Facebook
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href=""
                      className="hover:underline  flex"
                    >
                      <svg
                        className="mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.028 2C14.153 2.003 14.724 2.009 15.217 2.023L15.411 2.03C15.635 2.038 15.856 2.048 16.123 2.06C17.187 2.11 17.913 2.278 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8307 4.17773 21.2241 4.78247 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.952 8.144 21.962 8.365 21.97 8.59L21.976 8.784C21.991 9.276 21.997 9.847 21.999 10.972L22 11.718V13.028C22.0024 13.7574 21.9947 14.4868 21.977 15.216L21.971 15.41C21.963 15.635 21.953 15.856 21.941 16.122C21.891 17.187 21.721 17.912 21.475 18.55C21.2241 19.2175 20.8307 19.8223 20.322 20.322C19.8222 20.8307 19.2175 21.2242 18.55 21.475C17.913 21.722 17.187 21.89 16.123 21.94L15.411 21.97L15.217 21.976C14.724 21.99 14.153 21.997 13.028 21.999L12.282 22H10.973C10.2432 22.0026 9.51348 21.9949 8.78396 21.977L8.58996 21.971C8.35257 21.962 8.11523 21.9517 7.87796 21.94C6.81396 21.89 6.08796 21.722 5.44996 21.475C4.78279 21.2241 4.1784 20.8306 3.67896 20.322C3.1699 19.8224 2.77607 19.2176 2.52496 18.55C2.27796 17.913 2.10996 17.187 2.05996 16.122L2.02996 15.41L2.02496 15.216C2.00652 14.4868 1.99819 13.7574 1.99996 13.028V10.972C1.99719 10.2426 2.00452 9.5132 2.02196 8.784L2.02896 8.59C2.03696 8.365 2.04696 8.144 2.05896 7.878C2.10896 6.813 2.27696 6.088 2.52396 5.45C2.77565 4.7822 3.17018 4.17744 3.67996 3.678C4.17911 3.16955 4.78315 2.77607 5.44996 2.525C6.08796 2.278 6.81296 2.11 7.87796 2.06C8.14396 2.048 8.36596 2.038 8.58996 2.03L8.78396 2.024C9.51315 2.00623 10.2426 1.99857 10.972 2.001L13.028 2ZM12 7C10.6739 7 9.40211 7.52678 8.46442 8.46447C7.52674 9.40215 6.99996 10.6739 6.99996 12C6.99996 13.3261 7.52674 14.5979 8.46442 15.5355C9.40211 16.4732 10.6739 17 12 17C13.326 17 14.5978 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5978 7.52678 13.326 7 12 7ZM12 9C12.3939 8.99993 12.784 9.07747 13.148 9.22817C13.512 9.37887 13.8428 9.5998 14.1214 9.87833C14.4 10.1569 14.6211 10.4875 14.7719 10.8515C14.9227 11.2154 15.0004 11.6055 15.0005 11.9995C15.0005 12.3935 14.923 12.7836 14.7723 13.1476C14.6216 13.5116 14.4007 13.8423 14.1221 14.121C13.8436 14.3996 13.5129 14.6206 13.149 14.7714C12.785 14.9223 12.3949 14.9999 12.001 15C11.2053 15 10.4422 14.6839 9.87964 14.1213C9.31703 13.5587 9.00096 12.7956 9.00096 12C9.00096 11.2044 9.31703 10.4413 9.87964 9.87868C10.4422 9.31607 11.2053 9 12.001 9M17.251 5.5C16.9194 5.5 16.6015 5.6317 16.3671 5.86612C16.1327 6.10054 16.001 6.41848 16.001 6.75C16.001 7.08152 16.1327 7.39946 16.3671 7.63388C16.6015 7.8683 16.9194 8 17.251 8C17.5825 8 17.9004 7.8683 18.1348 7.63388C18.3693 7.39946 18.501 7.08152 18.501 6.75C18.501 6.41848 18.3693 6.10054 18.1348 5.86612C17.9004 5.6317 17.5825 5.5 17.251 5.5Z"
                          fill="white"
                        />
                      </svg>
                      Instagram
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href=""
                      className="hover:underline flex"
                    >
                      <svg
                        className="mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 22"
                        fill="none"
                      >
                        <path
                          d="M18.9 0.124512H22.5806L14.5406 9.33708L24 21.8754H16.5943L10.7897 14.2725L4.15543 21.8754H0.471429L9.07029 12.0182L0 0.126226H7.59429L12.8331 7.07423L18.9 0.124512ZM17.6057 19.6674H19.6457L6.48 2.21765H4.29257L17.6057 19.6674Z"
                          fill="white"
                        />
                      </svg>
                      Twitter (X)
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href=""
                      className="hover:underline flex"
                    >
                      <svg
                        className="mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                          fill="white"
                        />
                      </svg>
                      Linkedin
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href=""
                      className="hover:underline flex"
                    >
                      <svg
                        className="mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 4C12.855 4 13.732 4.022 14.582 4.058L15.586 4.106L16.547 4.163L17.447 4.224L18.269 4.288C19.1612 4.35589 20.0008 4.73643 20.64 5.3626C21.2791 5.98877 21.6768 6.8204 21.763 7.711L21.803 8.136L21.878 9.046C21.948 9.989 22 11.017 22 12C22 12.983 21.948 14.011 21.878 14.954L21.803 15.864L21.763 16.289C21.6768 17.1798 21.2789 18.0115 20.6396 18.6377C20.0002 19.2639 19.1604 19.6443 18.268 19.712L17.448 19.775L16.548 19.837L15.586 19.894L14.582 19.942C13.7218 19.9793 12.861 19.9986 12 20C11.139 19.9986 10.2782 19.9793 9.418 19.942L8.414 19.894L7.453 19.837L6.553 19.775L5.731 19.712C4.83881 19.6441 3.9992 19.2636 3.36004 18.6374C2.72089 18.0112 2.32319 17.1796 2.237 16.289L2.197 15.864L2.122 14.954C2.04583 13.9711 2.00514 12.9858 2 12C2 11.017 2.052 9.989 2.122 9.046L2.197 8.136L2.237 7.711C2.32316 6.82055 2.72071 5.98905 3.35966 5.36291C3.99861 4.73676 4.83799 4.35612 5.73 4.288L6.551 4.224L7.451 4.163L8.413 4.106L9.417 4.058C10.2775 4.02073 11.1387 4.00139 12 4ZM10 9.575V14.425C10 14.887 10.5 15.175 10.9 14.945L15.1 12.52C15.1914 12.4674 15.2673 12.3916 15.3201 12.3003C15.3729 12.209 15.4007 12.1055 15.4007 12C15.4007 11.8945 15.3729 11.791 15.3201 11.6997C15.2673 11.6084 15.1914 11.5326 15.1 11.48L10.9 9.056C10.8088 9.00332 10.7053 8.9756 10.5999 8.97562C10.4945 8.97563 10.3911 9.00339 10.2998 9.0561C10.2086 9.1088 10.1329 9.1846 10.0802 9.27587C10.0276 9.36713 9.99993 9.47065 10 9.576V9.575Z"
                          fill="white"
                        />
                      </svg>
                      YouTube
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href=""
                      className="hover:underline flex"
                    >
                      <svg
                        className="mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.08601 4.28C6.73601 2.52 9.11701 1.5 12.016 1.5C16.808 1.5 20.033 4.284 21.049 8.15C21.1501 8.53483 21.0941 8.94404 20.8934 9.2876C20.6928 9.63117 20.3638 9.88095 19.979 9.982C19.5942 10.083 19.185 10.0271 18.8414 9.82642C18.4978 9.62576 18.2481 9.29683 18.147 8.912C17.48 6.37 15.45 4.5 12.017 4.5C9.85301 4.5 8.29701 5.242 7.27501 6.332C6.23901 7.438 5.64001 9.02 5.64001 10.875V13.125C5.64001 14.98 6.23801 16.562 7.27401 17.668C8.29601 18.758 9.85201 19.5 12.015 19.5C13.591 19.5 14.81 19.135 15.729 18.57C16.649 18.002 17.149 17.285 17.289 16.502C17.462 15.53 17.245 14.923 16.925 14.501C16.8885 14.4526 16.8498 14.4059 16.809 14.361C16.6686 14.8491 16.4588 15.3146 16.186 15.743C14.672 18.043 11.817 18.203 9.98301 17.471C8.89201 17.036 8.01101 15.888 7.73601 14.683C7.56497 13.9675 7.62376 13.2162 7.90401 12.536C8.21601 11.786 8.78801 11.166 9.56601 10.708C10.366 10.236 11.493 10.043 12.545 10.014C12.9634 10.0035 13.3821 10.0168 13.799 10.054C13.709 9.854 13.612 9.711 13.525 9.629C13.141 9.272 12.465 8.997 11.779 9.001C11.132 9.006 10.653 9.248 10.369 9.701C10.2646 9.86804 10.1283 10.0129 9.96796 10.1273C9.80758 10.2416 9.62624 10.3233 9.4343 10.3676C9.24237 10.4119 9.04358 10.4179 8.8493 10.3854C8.65502 10.3529 8.46906 10.2824 8.30201 10.178C8.13497 10.0736 7.99013 9.93732 7.87576 9.77694C7.76138 9.61656 7.67972 9.43523 7.63542 9.24329C7.59113 9.05135 7.58508 8.85257 7.61761 8.65829C7.65014 8.46401 7.72061 8.27804 7.82501 8.111C8.77301 6.596 10.332 6.011 11.758 6.001C13.146 5.991 14.579 6.513 15.568 7.433C16.522 8.321 16.941 9.687 17.081 10.918C17.917 11.321 18.711 11.892 19.315 12.688C20.189 13.838 20.548 15.312 20.242 17.028C19.922 18.821 18.792 20.206 17.302 21.124C15.845 22.022 14.063 22.5 12.015 22.5C9.11601 22.5 6.73501 21.48 5.08501 19.72C3.44901 17.974 2.64001 15.62 2.64001 13.125V10.875C2.64001 8.381 3.45001 6.025 5.08501 4.281L5.08601 4.28ZM14.033 13.103C13.5682 13.0318 13.0981 13.0017 12.628 13.013C11.768 13.037 11.244 13.201 11.091 13.292C10.786 13.472 10.701 13.625 10.674 13.69C10.636 13.7951 10.6321 13.9096 10.663 14.017C10.699 14.177 10.784 14.35 10.901 14.497C10.9547 14.5695 11.0203 14.6324 11.095 14.683C11.1003 14.687 11.1003 14.6877 11.095 14.685C12.08 15.078 13.2 14.825 13.681 14.093C13.818 13.886 13.946 13.54 14.033 13.103Z"
                          fill="white"
                        />
                      </svg>
                      Thread
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Contact US
                </h2>
                <ul className="text-white text-sm">
                  <li className="mb-2 flex">
                    <svg
                      className="mb-2 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                    >
                      <path
                        d="M11.7501 4.99999C14.0284 4.99999 15.0001 5.89699 15.0001 7.99999H17.1668C17.1668 4.77499 15.2439 2.99999 11.7501 2.99999V4.99999ZM15.4573 10.443C15.2491 10.2683 14.9756 10.1752 14.6944 10.1832C14.4133 10.1912 14.1465 10.2998 13.9504 10.486L11.358 12.947C10.734 12.837 9.47948 12.476 8.18814 11.287C6.89681 10.094 6.50573 8.93299 6.38981 8.361L9.05373 5.96699C9.25567 5.78612 9.37346 5.53982 9.38215 5.2802C9.39085 5.02059 9.28977 4.76804 9.10031 4.57599L5.09739 0.512995C4.90786 0.320352 4.64443 0.203499 4.36306 0.187255C4.08169 0.17101 3.80454 0.256653 3.59048 0.425995L1.23964 2.28699C1.05235 2.46051 0.940556 2.69145 0.925476 2.93599C0.909226 3.18599 0.599393 9.108 5.57406 13.702C9.91389 17.707 15.3501 18 16.8472 18C17.0661 18 17.2004 17.994 17.2361 17.992C17.501 17.9783 17.7511 17.8747 17.9381 17.701L19.9531 15.53C20.1367 15.3325 20.2297 15.0768 20.2123 14.817C20.1949 14.5573 20.0685 14.3141 19.86 14.139L15.4573 10.443Z"
                        fill="white"
                      />
                    </svg>
                    <a href="#" className="hover:underline">
                    +91 73061 04563
                    </a>
                  </li>
                  <li className="mb-2 flex">
                    <svg
                      className="text-white mr-2 mb-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                      <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                    </svg>
                    <a href="mailto:mail@gigwork.co.in" className="hover:underline">
                      mail@gigwork.co.in
                    </a>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 mb-2"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z"
                        fill="white"
                      />
                    </svg>
                    <a href="#" className="hover:underline">
                      Kottayam, Kerala
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* mobile view icons */}
            <div className="md:hidden flex justify-center my-3">
              <ul className="text-white flex gap-4 text-sm">
                <li className="rounded-full p-1">
                  {/* facebook */}
                  <a
                    href=""
                    className="hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                {/* insta */}
                <li className="rounded-full p-1">
                  <a
                    href=""
                    className="hover:underline  flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M13.028 2C14.153 2.003 14.724 2.009 15.217 2.023L15.411 2.03C15.635 2.038 15.856 2.048 16.123 2.06C17.187 2.11 17.913 2.278 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8307 4.17773 21.2241 4.78247 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.952 8.144 21.962 8.365 21.97 8.59L21.976 8.784C21.991 9.276 21.997 9.847 21.999 10.972L22 11.718V13.028C22.0024 13.7574 21.9947 14.4868 21.977 15.216L21.971 15.41C21.963 15.635 21.953 15.856 21.941 16.122C21.891 17.187 21.721 17.912 21.475 18.55C21.2241 19.2175 20.8307 19.8223 20.322 20.322C19.8222 20.8307 19.2175 21.2242 18.55 21.475C17.913 21.722 17.187 21.89 16.123 21.94L15.411 21.97L15.217 21.976C14.724 21.99 14.153 21.997 13.028 21.999L12.282 22H10.973C10.2432 22.0026 9.51348 21.9949 8.78396 21.977L8.58996 21.971C8.35257 21.962 8.11523 21.9517 7.87796 21.94C6.81396 21.89 6.08796 21.722 5.44996 21.475C4.78279 21.2241 4.1784 20.8306 3.67896 20.322C3.1699 19.8224 2.77607 19.2176 2.52496 18.55C2.27796 17.913 2.10996 17.187 2.05996 16.122L2.02996 15.41L2.02496 15.216C2.00652 14.4868 1.99819 13.7574 1.99996 13.028V10.972C1.99719 10.2426 2.00452 9.5132 2.02196 8.784L2.02896 8.59C2.03696 8.365 2.04696 8.144 2.05896 7.878C2.10896 6.813 2.27696 6.088 2.52396 5.45C2.77565 4.7822 3.17018 4.17744 3.67996 3.678C4.17911 3.16955 4.78315 2.77607 5.44996 2.525C6.08796 2.278 6.81296 2.11 7.87796 2.06C8.14396 2.048 8.36596 2.038 8.58996 2.03L8.78396 2.024C9.51315 2.00623 10.2426 1.99857 10.972 2.001L13.028 2ZM12 7C10.6739 7 9.40211 7.52678 8.46442 8.46447C7.52674 9.40215 6.99996 10.6739 6.99996 12C6.99996 13.3261 7.52674 14.5979 8.46442 15.5355C9.40211 16.4732 10.6739 17 12 17C13.326 17 14.5978 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5978 7.52678 13.326 7 12 7ZM12 9C12.3939 8.99993 12.784 9.07747 13.148 9.22817C13.512 9.37887 13.8428 9.5998 14.1214 9.87833C14.4 10.1569 14.6211 10.4875 14.7719 10.8515C14.9227 11.2154 15.0004 11.6055 15.0005 11.9995C15.0005 12.3935 14.923 12.7836 14.7723 13.1476C14.6216 13.5116 14.4007 13.8423 14.1221 14.121C13.8436 14.3996 13.5129 14.6206 13.149 14.7714C12.785 14.9223 12.3949 14.9999 12.001 15C11.2053 15 10.4422 14.6839 9.87964 14.1213C9.31703 13.5587 9.00096 12.7956 9.00096 12C9.00096 11.2044 9.31703 10.4413 9.87964 9.87868C10.4422 9.31607 11.2053 9 12.001 9M17.251 5.5C16.9194 5.5 16.6015 5.6317 16.3671 5.86612C16.1327 6.10054 16.001 6.41848 16.001 6.75C16.001 7.08152 16.1327 7.39946 16.3671 7.63388C16.6015 7.8683 16.9194 8 17.251 8C17.5825 8 17.9004 7.8683 18.1348 7.63388C18.3693 7.39946 18.501 7.08152 18.501 6.75C18.501 6.41848 18.3693 6.10054 18.1348 5.86612C17.9004 5.6317 17.5825 5.5 17.251 5.5Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                {/* twitter */}
                <li className="rounded-full p-1">
                  <a
                    href=""
                    className="hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="22"
                      viewBox="0 0 24 22"
                      fill="none"
                    >
                      <path
                        d="M18.9 0.124512H22.5806L14.5406 9.33708L24 21.8754H16.5943L10.7897 14.2725L4.15543 21.8754H0.471429L9.07029 12.0182L0 0.126226H7.59429L12.8331 7.07423L18.9 0.124512ZM17.6057 19.6674H19.6457L6.48 2.21765H4.29257L17.6057 19.6674Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                {/* linkedin */}
                <li className="rounded-full p-1">
                  <a
                    href=""
                    className="hover:underline flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                {/* youtube */}
                <li className="rounded-full p-1">
                  <a
                    href=""
                    className="hover:underline flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 4C12.855 4 13.732 4.022 14.582 4.058L15.586 4.106L16.547 4.163L17.447 4.224L18.269 4.288C19.1612 4.35589 20.0008 4.73643 20.64 5.3626C21.2791 5.98877 21.6768 6.8204 21.763 7.711L21.803 8.136L21.878 9.046C21.948 9.989 22 11.017 22 12C22 12.983 21.948 14.011 21.878 14.954L21.803 15.864L21.763 16.289C21.6768 17.1798 21.2789 18.0115 20.6396 18.6377C20.0002 19.2639 19.1604 19.6443 18.268 19.712L17.448 19.775L16.548 19.837L15.586 19.894L14.582 19.942C13.7218 19.9793 12.861 19.9986 12 20C11.139 19.9986 10.2782 19.9793 9.418 19.942L8.414 19.894L7.453 19.837L6.553 19.775L5.731 19.712C4.83881 19.6441 3.9992 19.2636 3.36004 18.6374C2.72089 18.0112 2.32319 17.1796 2.237 16.289L2.197 15.864L2.122 14.954C2.04583 13.9711 2.00514 12.9858 2 12C2 11.017 2.052 9.989 2.122 9.046L2.197 8.136L2.237 7.711C2.32316 6.82055 2.72071 5.98905 3.35966 5.36291C3.99861 4.73676 4.83799 4.35612 5.73 4.288L6.551 4.224L7.451 4.163L8.413 4.106L9.417 4.058C10.2775 4.02073 11.1387 4.00139 12 4ZM10 9.575V14.425C10 14.887 10.5 15.175 10.9 14.945L15.1 12.52C15.1914 12.4674 15.2673 12.3916 15.3201 12.3003C15.3729 12.209 15.4007 12.1055 15.4007 12C15.4007 11.8945 15.3729 11.791 15.3201 11.6997C15.2673 11.6084 15.1914 11.5326 15.1 11.48L10.9 9.056C10.8088 9.00332 10.7053 8.9756 10.5999 8.97562C10.4945 8.97563 10.3911 9.00339 10.2998 9.0561C10.2086 9.1088 10.1329 9.1846 10.0802 9.27587C10.0276 9.36713 9.99993 9.47065 10 9.576V9.575Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                {/* thread */}
                <li className="rounded-full p-1">
                  <a
                    href=""
                    className="hover:underline flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.08601 4.28C6.73601 2.52 9.11701 1.5 12.016 1.5C16.808 1.5 20.033 4.284 21.049 8.15C21.1501 8.53483 21.0941 8.94404 20.8934 9.2876C20.6928 9.63117 20.3638 9.88095 19.979 9.982C19.5942 10.083 19.185 10.0271 18.8414 9.82642C18.4978 9.62576 18.2481 9.29683 18.147 8.912C17.48 6.37 15.45 4.5 12.017 4.5C9.85301 4.5 8.29701 5.242 7.27501 6.332C6.23901 7.438 5.64001 9.02 5.64001 10.875V13.125C5.64001 14.98 6.23801 16.562 7.27401 17.668C8.29601 18.758 9.85201 19.5 12.015 19.5C13.591 19.5 14.81 19.135 15.729 18.57C16.649 18.002 17.149 17.285 17.289 16.502C17.462 15.53 17.245 14.923 16.925 14.501C16.8885 14.4526 16.8498 14.4059 16.809 14.361C16.6686 14.8491 16.4588 15.3146 16.186 15.743C14.672 18.043 11.817 18.203 9.98301 17.471C8.89201 17.036 8.01101 15.888 7.73601 14.683C7.56497 13.9675 7.62376 13.2162 7.90401 12.536C8.21601 11.786 8.78801 11.166 9.56601 10.708C10.366 10.236 11.493 10.043 12.545 10.014C12.9634 10.0035 13.3821 10.0168 13.799 10.054C13.709 9.854 13.612 9.711 13.525 9.629C13.141 9.272 12.465 8.997 11.779 9.001C11.132 9.006 10.653 9.248 10.369 9.701C10.2646 9.86804 10.1283 10.0129 9.96796 10.1273C9.80758 10.2416 9.62624 10.3233 9.4343 10.3676C9.24237 10.4119 9.04358 10.4179 8.8493 10.3854C8.65502 10.3529 8.46906 10.2824 8.30201 10.178C8.13497 10.0736 7.99013 9.93732 7.87576 9.77694C7.76138 9.61656 7.67972 9.43523 7.63542 9.24329C7.59113 9.05135 7.58508 8.85257 7.61761 8.65829C7.65014 8.46401 7.72061 8.27804 7.82501 8.111C8.77301 6.596 10.332 6.011 11.758 6.001C13.146 5.991 14.579 6.513 15.568 7.433C16.522 8.321 16.941 9.687 17.081 10.918C17.917 11.321 18.711 11.892 19.315 12.688C20.189 13.838 20.548 15.312 20.242 17.028C19.922 18.821 18.792 20.206 17.302 21.124C15.845 22.022 14.063 22.5 12.015 22.5C9.11601 22.5 6.73501 21.48 5.08501 19.72C3.44901 17.974 2.64001 15.62 2.64001 13.125V10.875C2.64001 8.381 3.45001 6.025 5.08501 4.281L5.08601 4.28ZM14.033 13.103C13.5682 13.0318 13.0981 13.0017 12.628 13.013C11.768 13.037 11.244 13.201 11.091 13.292C10.786 13.472 10.701 13.625 10.674 13.69C10.636 13.7951 10.6321 13.9096 10.663 14.017C10.699 14.177 10.784 14.35 10.901 14.497C10.9547 14.5695 11.0203 14.6324 11.095 14.683C11.1003 14.687 11.1003 14.6877 11.095 14.685C12.08 15.078 13.2 14.825 13.681 14.093C13.818 13.886 13.946 13.54 14.033 13.103Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-center text-center">
            <span className="text-sm text-gray-500">
              © 2024{" "}
              <a href="https://gigwork.co.in" className="hover:underline">
                Gigwork
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
