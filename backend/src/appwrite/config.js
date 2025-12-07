import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteprojectid);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument({
                databaseId: conf.appwritedatabaseid,
                collectionId: conf.appwritecollecionid,
                documentId : ID.unique(),
                data: {
                    TITLE:title,
                    CONTENT:content,
                    SLUG:slug,
                    IMAGE: featuredImage,
                    STATUS:status,
                    USER_ID:userId,
                }
            });
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwritedatabaseid,
                conf.appwritecollecionid,
                slug,
                {
                    TITLE:title,
                    CONTENT:content,
                    IMAGE:featuredImage,
                    STATUS:status,
                    SLUG:slug,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
            return false;
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwritedatabaseid,
                conf.appwritecollecionid,
                slug
            );
            return true;
        } catch(error){
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwritedatabaseid,
                conf.appwritecollecionid,
                slug
            );
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwritedatabaseid,
                conf.appwritecollecionid,
                queries
            );
        } catch (error){
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwritebucketid,
                ID.unique(),
                file
            );
        } catch(error){
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwritebucketid,
                fileId
            );
            return true;
        } catch(error){
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwritebucketid,
            fileId
        );
    }
}

const service = new Service();
export default service