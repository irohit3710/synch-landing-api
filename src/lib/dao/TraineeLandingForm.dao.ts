import TraineeLandingFormModel from "../../models/TraineeLandingForm.model";



export class TraineeLandingDao{
    //get
    static async get(){
        return await TraineeLandingFormModel.find();
    }

    //create 
    static async create(payload:any){
        return await TraineeLandingFormModel.create(payload);
    }

    //update

    //delete
}