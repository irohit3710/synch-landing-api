import { Schema, Document, model } from "mongoose";
import { SessionTypeEnum, TrainingModeEnum, YearExperienceEnum } from "../lib/enums/landingForm.enum";


export interface ITrainerLanding extends Document {
    name: string,
    email: string,
    phone: string,
    qualifications: [string],
    expertise: string,
    experience: YearExperienceEnum,
    previousPlatform: string,
    trainingMode: TrainingModeEnum,
    sessionType: SessionTypeEnum,
    availability: any,
    expectation: string,
    specificFeature: string,
    additionalInformation: string,
}


const trainerLandingFormSchema = new Schema<ITrainerLanding>({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    qualifications: { type: [String] },
    expertise: { type: String },
    experience: { type: String, enum: Object.values(YearExperienceEnum) },
    previousPlatform: { type: String },
    trainingMode: { type: String, enum: Object.values(TrainingModeEnum) },
    sessionType: { type: String, enum: Object.values(SessionTypeEnum) },
    availability: { type: Object },
    expectation: { type: String },
    specificFeature: { type: String },
    additionalInformation: { type: String },

},
    {
        versionKey: false,
        timestamps: true,
        collection: "trainerLandingForm"
    }
)


export default model<ITrainerLanding>("trainerLandingForm", trainerLandingFormSchema)