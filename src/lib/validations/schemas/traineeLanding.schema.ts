import Joi from "joi";
import { ITraineeLanding } from "../../../models/TraineeLandingForm.model";
import { SessionTypeEnum, TrainingModeEnum } from "../../enums/landingForm.enum";

const TraineeLandingValidationSchema:Joi.Schema = Joi.object<ITraineeLanding>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().optional(),
    fitnessGoal: Joi.string().required(),
    previousPlatform: Joi.string().required(),
    trainingMode: Joi.string().valid(...Object.values(TrainingModeEnum)).required(),
    sessionType: Joi.string().valid(...Object.values(SessionTypeEnum)).required(),
    likedMostPreviousExperiences: Joi.string().optional(),
    likedLeastPreviousExperiences: Joi.string().optional(),
    availability: Joi.any().required(),
    expectation: Joi.string().required(),
    specificFeature: Joi.string().required(),
    additionalInformation: Joi.string().required(),
});