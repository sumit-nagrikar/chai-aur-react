import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

//created class to create services
export class AuthService {
    //we create client object to pass it to account
    client = new Client();
    account;//created account variable

    //if class is created we have craete constructor and have to set endpoint and projectID
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }
//createAccount service
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
//login service
    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }
//getCurrentUser service
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }
//logout service
    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

//exported object so that we could use services through dot(.) notation
export default authService


