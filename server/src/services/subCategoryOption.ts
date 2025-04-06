import { count, eq, sql } from "drizzle-orm";
import { db } from "../config/database/turso";
import { subCategoryOption } from "../config/database/schema";



// Get all sub-category options
export const getAllSubCategoryOptions = async () => {
  try {

    // SQL Query : SELECT * FROM sub_category_option WHERE status = 1 ORDER BY created_at DESC

    const result = await db
      .select({
        name: subCategoryOption.name
      })
      .from(subCategoryOption)
      .where(eq(subCategoryOption.status, 1))
      .orderBy(sql`created_at DESC`);

    const names = result.map(item => item.name);

    return names;
  } catch (error) {
    throw error;
  }
};



// Create a new sub-category
export const createSubCategoryOption = async (
  name: string,
  sub_category_id: string
) => {
  return new Promise(async (resolve, reject) => {
    try {
      // SQL Query : INSERT INTO sub_category (name, sub_category_id) VALUES (name, sub_category_id) RETURNING *

      let result = await db
        .insert(subCategoryOption)
        .values({ name, sub_category_id })
        .returning();
      result = result[0];

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};



// Update Sub-Category Option Status
export const updateSubCategoryOptionStatus = async (
  sub_category_option_id: string,
  status: number
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await db
        .update(subCategoryOption)
        .set({ status: status, updated_at: sql`(CURRENT_TIMESTAMP)` })
        .where(eq(subCategoryOption.id, sub_category_option_id))
        .returning();

      result = result[0];

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};



// Update Sub-Category Option
export const updateSubCategoryOption = async (
  sub_category_option_id: string,
  name: string
) => {
  return new Promise(async (resolve, reject) => {
    try {
      // SQL Query: UPDATE sub_category SET name = name WHERE id = id RETURNING *

      let result = await db
        .update(subCategoryOption)
        .set({ name: name, updated_at: sql`(CURRENT_TIMESTAMP)` })
        .where(eq(subCategoryOption.id, sub_category_option_id))
        .returning();

      result = result[0];

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
