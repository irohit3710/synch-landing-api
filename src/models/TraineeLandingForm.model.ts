import { Schema, Document, model } from "mongoose";
import { SessionTypeEnum, TrainingModeEnum, YearExperienceEnum } from "../lib/enums/landingForm.enum";


export interface ITraineeLanding extends Document {
    name: string,
    email: string,
    phone: string,
    fitnessGoal:string,
    previousPlatform: string,
    trainingMode: TrainingModeEnum,
    sessionType: SessionTypeEnum,
    likedMostPreviousExperiences:string,
    likedLeastPreviousExperiences:string,
    availability: any,
    expectation: string,
    specificFeature: string,
    additionalInformation: string,
}


const traineeLandingFormSchema = new Schema<ITraineeLanding>({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    fitnessGoal:{type:String},
    previousPlatform: { type: String },
    trainingMode: { type: String, enum: Object.values(TrainingModeEnum) },
    sessionType: { type: String, enum: Object.values(SessionTypeEnum) },
    likedMostPreviousExperiences:{type:String},
    likedLeastPreviousExperiences:{type:String},
    availability: { type: Object },
    expectation: { type: String },
    specificFeature: { type: String },
    additionalInformation: { type: String },

},
    {
        versionKey: false,
        timestamps: true,
        collection: "traineeLandingForm"
    }
)


export default model<ITraineeLanding>("traineeLandingForm", traineeLandingFormSchema)