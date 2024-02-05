import express from 'express';
import { TraineeLandingService } from '../services/TraineeLandingForm.service';

export default class TraineeLandingController {
    //get trianer landing
    static async get(req: express.Request, res: express.Response, next: express.NextFunction){
        try {
            const trainer = await TraineeLandingService.get();
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
            const trainer = await TraineeLandingService.create(payload);

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