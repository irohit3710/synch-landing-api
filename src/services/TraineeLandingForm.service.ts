import { TraineeLandingDao } from "../lib/dao/TraineeLandingForm.dao";


export class TraineeLandingService{
    //get
    static async get(){
        return await TraineeLandingDao.get();
    }

    //post
    static async create(payload:any){
        return await TraineeLandingDao.create(payload);
    }

    //update

    //delete
}