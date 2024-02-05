import { Router } from "express"
// import V2Router from "./v2/v2.router";

export default class VersionRouter{
    public router: Router;

    constructor (){
        this.router = Router();
        this.routes();    
    }

    public routes(): void {
        // this.router.use("/v2", new V2Router().router)
    }
}