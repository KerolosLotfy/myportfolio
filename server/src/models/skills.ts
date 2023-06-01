import { initDB } from "../database/sql";
import { skills } from "../database/types";

export class Skills {
  create = async ({ id, title, percent }: skills) => {
    try {
      const DB = await initDB();
      const sql = `insert into skills (id,title,percent) values (?,?,?);`;
      const result = await DB.run(sql, [id, title, percent]);
      return result;
    } catch (e: any) {
      throw new Error(`Can't create new skills to ${e.message}`);
    }
  };

  getAll = async () => {
    try {
      const DB = await initDB();
      const sql = `select * from skills`;
      const result = await DB.all(sql);
      return result;
    } catch (e: any) {
      throw new Error(`Can't get all skills to ${e.message}`);
    }
  };

  getOne = async (id: string) => {
    try {
      const DB = await initDB();
      const sql = `select * from skills WHERE id =?`;
      const result = await DB.get(sql, [id]);
      return result;
    } catch (e: any) {
      throw new Error(`Can't get all skills to ${e.message}`);
    }
  };

  update = async ({ id, title, percent }: skills) => {
    try {
      const DB = await initDB();
      const sql = `UPDATE skills SET title = ?, percent = ? WHERE id = ?`;
      const result = await DB.run(sql, [title, percent, id]);
      return result;
    } catch (e: any) {
      throw new Error(`Can't Update skill to ${e.message}`);
    }
  };

  delete = async (id: string) => {
    try {
      const DB = await initDB();
      const sql = `DELETE FROM skills WHERE id =?`;
      const result = await DB.run(sql, [id]);
      return result;
    } catch (e: any) {
      throw new Error(`Can't Delete skill to ${e.message}`);
    }
  };
}
