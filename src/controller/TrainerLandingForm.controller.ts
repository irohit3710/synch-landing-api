import express from 'express';
import { TrainerLandingService } from '../services/TrainerLandingForm.service';

export default class TrainerLandingController {
    //get trianer landing
    static async get(req: express.Request, res: express.Response, next: express.NextFunction){
        try {
            const trainer = await TrainerLandingService.get();
            if(!trainer){
                res.status(500).send("Unable to get details");
            }

            res.status(200).send(trainer);
        } catch (error) {
            next(error);
        }
    }
    //create triainer landing
    static async create(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const payload = req.body;
            const trainer = await TrainerLandingService.create(payload);

            if(!trainer){
                res.status(500).send("Unable to post details");
            }

            res.status(200).send(trainer);
        } catch (error) {
            next(error);
        }
    }

    //update


    //delete
    
}