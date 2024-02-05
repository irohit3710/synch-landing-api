import { TrainerLandingDao } from "../lib/dao/TrainerLandingForm.dao";

export class TrainerLandingService{
    //get
    static async get(){
        return await TrainerLandingDao.get();
    }

    //post
    static async create(payload:any){
        return await TrainerLandingDao.create(payload);
    }

    //update

    //delete
}