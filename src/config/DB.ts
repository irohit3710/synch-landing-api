import mongoose from 'mongoose';
import { IServer } from '../lib/interfaces';
import dotenv from 'dotenv';
import { CONFIG } from './environment';

dotenv.config();

export class DB {
    static async connect(server?: IServer) {
        try {
            console.log("Connecting to DB");
            await mongoose.connect(
                CONFIG.DB_CONNECTION_STRING!, 
            );
            if (server) {
                server.isDbConnected = true;                
            }
            console.log('Connected to DB');            
        }
        catch (error) {
            throw error;
        }
    }
}