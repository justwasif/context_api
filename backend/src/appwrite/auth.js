import conf from "../conf/conf";
import {Client,Account,ID} from "appwrite"

export class AuthService{
    client=new Client();
    
    constructor(){
        this.client
            .setProject(conf.appwriteprojectid)
            .setEndpoint(conf.appwriteurl);
        this.account=new Account(this.client);
    }
    async creatAccount({email,password,name}){
        try{
            const user=await this.account.create({
                userId:ID.unique(),
                email,
                password,
                name
            });
            console.log(user)
        }catch (e){
            console.error(e)
        }
    }

    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error){
            throw error;
        }
    }
    async getcurrentuser(){
        try{
            return await this.account.get()
        }catch(error){
            throw error;
        }
    }
    async logout(){
        try{
            await this.account.deleteSessions();
        }catch(error){
            throw error;
        }

    }
}

const authservice=new AuthService();
export default authservice
