import { initDB } from "../database/sql";
import { dataTypes } from "../database/types";

export class projects {
  create = async ({
    id,
    title,
    languages,
    img,
    repo,
    demo,
    description,
    category,
  }: dataTypes["projects"]) => {
    try {
      const DB = await initDB();
      const sql = `insert into projects (id,title,languages,img,repo,demo,description,category) values (?,?,?,?,?,?);`;
      const result = await DB.run(
        sql,
        id,
        title,
        languages,
        img,
        repo,
        demo,
        description,
        category
      );
      return result;
    } catch (e: any) {
      throw new Error(`Can't create new projects to ${e.message}`);
    }
  };

  getAll = async () => {
    try {
      const DB = await initDB();
      const sql = `select * from projects`;
      const result = await DB.all(sql);
      return result;
    } catch (e: any) {
      throw new Error(`Can't get all projects to ${e.message}`);
    }
  };

  getOne = async (id: string) => {
    try {
      const DB = await initDB();
      const sql = `select * from projects WHERE id =?`;
      const result = await DB.get(sql, [id]);
      return result;
    } catch (e: any) {
      throw new Error(`Can't get all projects to ${e.message}`);
    }
  };

  update = async ({
    id,
    title,
    languages,
    img,
    repo,
    demo,
    description,
    category,
  }: dataTypes["projects"]) => {
    try {
      const DB = await initDB();
      const sql = `UPDATE projects SET title = ?, languages = ?, img = ? , repo = ?, demo =? description = ?, category = ? WHERE id = ?`;
      const result = await DB.run(sql, [
        title,
        languages,
        img,
        repo,
        demo,
        ,
        description,
        category,
        id,
      ]);
      return result;
    } catch (e: any) {
      throw new Error(`Can't Update project to ${e.message}`);
    }
  };

  delete = async (id: string) => {
    try {
      const DB = await initDB();
      const sql = `DELETE FROM projects WHERE id =?`;
      const result = await DB.run(sql, [id]);
      return result;
    } catch (e: any) {
      throw new Error(`Can't Delete project to ${e.message}`);
    }
  };
}
