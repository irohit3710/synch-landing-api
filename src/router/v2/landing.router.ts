import { Router } from "express";
import TrainerLandingController from "../../controller/TrainerLandingForm.controller";
import TraineeLandingController from "../../controller/TraineeLandingForm.controller";



export default class LandingRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes()
    }

    public routes(): void {
        //trianer
        //get
        this.router.get('/trainer/get', TrainerLandingController.get);

        //post
        this.router.get('/trainer/create', TrainerLandingController.create);

        //put

        //delete


        //trainee
        //get
        this.router.get('/trainee/get', TraineeLandingController.get);

        //post
        this.router.get('/trainee/create', TraineeLandingController.create);

        //put

        //delete


    }
}