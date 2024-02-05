import Joi from "joi";
import { SessionTypeEnum, TrainingModeEnum, YearExperienceEnum } from "../../enums/landingForm.enum";
import { ITrainerLanding } from "../../../models/TrainerLandingForm.model";

export const TrainerLandingValidationSchema: Joi.Schema = Joi.object<ITrainerLanding>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().optional(),
    qualifications: Joi.array().items(Joi.string()).required(),
    expertise: Joi.string().required(),
    experience: Joi.string().valid(...Object.values(YearExperienceEnum)).required(),
    previousPlatform: Joi.string().optional(),
    trainingMode: Joi.string().valid(...Object.values(TrainingModeEnum)).required(),
    sessionType: Joi.string().valid(...Object.values(SessionTypeEnum)).required(),
    availability: Joi.any().required(),
    expectation: Joi.string().required(),
    specificFeature: Joi.string().required(),
    additionalInformation: Joi.string().required(),

})