import { Router } from "express";
import LandingRouter from "./landing.router";


export default class V2Router{
    public router: Router;

    constructor(){
        this.router = Router();
        this.routes()
    }

    public routes(): void {
        this.router.use('/landing',new LandingRouter().router)
    }
}