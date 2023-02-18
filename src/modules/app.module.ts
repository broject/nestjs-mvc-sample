import { Module } from "@nestjs/common";
import { AppController } from '../controllers/app.controller';
import imported from "../configs";

@Module({
    // imports: [
    //     // https://docs.nestjs.com/recipes/router-module
    //     // Hierarchical Routing as custom module
    //     AdminModule,// шаталсан хандалт хийх гэж байгаа модулаа заавал RouterModule.register өмнө бичиж өгнө!
    //     TestModule,// модулыг хаана зарлаж болно дотор нь module/controllers хийсэн ч болно
    //     RouterModule.register(routeInfo),
    // ],
    // OR
    imports: imported,
    // https://docs.nestjs.com/controllers
    controllers: [AppController],
    providers: [],//add middleware, services
})

export class AppModule { }