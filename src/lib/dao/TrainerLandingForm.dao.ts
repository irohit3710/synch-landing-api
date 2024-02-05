import TrainerLandingFormModel from "../../models/TrainerLandingForm.model";

export class TrainerLandingDao{
    //get
    static async get(){
        return await TrainerLandingFormModel.find();
    }

    //create 
    static async create(payload:any){
        return await TrainerLandingFormModel.create(payload);
    }

    //update

    //delete
}