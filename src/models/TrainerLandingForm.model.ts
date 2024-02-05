import { Schema, Document, model } from "mongoose";


export interface ITrainerLanding extends Document{
    
}


const trainerLandingFormSchema = new Schema<ITrainerLanding>({
},
    {
        versionKey: false,
        timestamps: true,
        collection: "landingForm"
    }
)


export default model<ITrainerLanding>("landingForm", trainerLandingFormSchema)