import { Module } from "@nestjs/common";
import { PrivacyController, PolicyController } from './controllers/privacyPolicy';

@Module({
    imports: [],
    controllers: [PrivacyController, PolicyController],
    providers: [],
})

export class TestModule { }