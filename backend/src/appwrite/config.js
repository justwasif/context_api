import conf from "../conf/conf";
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class Service {
    client = new Client();

    constructor() {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteprojectid);

        // This is actually TablesDB, not Databases
        this.tables = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    // also fixed: creatPost -> createPost, uderid -> userId
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.tables.createRow({
                databaseId: conf.appwritedatabaseid,
                tableId: conf.appwritecollecionid,
                rowId: slug,               // or ID.unique() if you don’t want slug as ID
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                },
                // permissions: [...]  // optional, depends on how you set table perms
            });
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.tables.updateRow({
                databaseId: conf.appwritedatabaseid,
                tableId: conf.appwritecollecionid,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                },
                // permissions: [...] // optional
            });
        } catch (error) {
            throw error;
            return false
        }
    }
    async deletepost(slug){
        try{
            await this.tables.deleteRow({
                databaseId:conf.appwritedatabaseid,
                tableId:conf.appwritecollecionid,
                rowId:slug,
            });
            return true;
        } catch(error){
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }
    async getpost(slug){
        try{
            return await this.tables.getRow({
                databaseId:conf.appwritedatabaseid,
                tableId:conf.appwritecollecionid,
                rowId:slug,
            });

        }catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false;
        }

    }
    async getposts(queries=[Query.equal("index_1","active")]){
        try{
            return await this.tables.listRows({
                databaseId:conf.appwritedatabaseid,
                tableId:conf.appwritecollecionid,
                queries,
            });
        }catch (error){
            console.log("Appwrite serive :: getPosts :: error", error);
            return false;
        }

    }
    async uplodefile(file){
        try{
            return await this.bucket.createFile(
            conf.appwritebucketid,
            ID.unique(),
            file
        );
    }catch(error){
        console.log("Appwrite serive :: uploadFile :: error", error);
        return false;
        }
    }
       

    async deleteFile(fileId){
        try{
            await this.bucket.this.deleteFile(
                conf.appwritebucketid,
                fileId
            );
            return true;
        }catch(error){
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false;
        }
    }
    getfilepreview(fileId){
        return this.bucket.getfilepreview(
            conf.appwritebucketid,
            fileId
        )
    }

}
const service = new Service();
export default service
