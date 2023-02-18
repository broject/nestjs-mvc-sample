import { NestFactory } from '@nestjs/core';
// import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './modules/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');

    await app.listen(8080);
    console.log(`Application is running on: ${await app.getUrl()}`, process.env.NODE_ENV);
    // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    //     // Pattern#
    //     // Microservices нь message болон event хоёуланг нь таньдаг.
    //     // Pattern нь автоматаар serialize хийгдэж, message data хамт сүлжээгээр илгээдэг.
    //     // Ийм байдлаар мессеж илгээгч болон хэрэглэгчид аль request нь аль handler ашиглаж байгааг зохицуулах боломжтой.
    //     AppModule,
    //     {
    //         //Microservices use the TCP transport layer by default.
    //         transport: Transport.TCP,
    //         options: {
    //             host: 'localhost',
    //             port: 3000,
    //             retryAttempts: 0,//Number of times to retry message (default: 0)
    //             retryDelay: 0//Delay between message retry attempts (ms) (default: 0)
    //         }
    //     },
    // );
    // await app.listen();
}
bootstrap();

// Request-response#
// With this paradigm, you can be certain that the service has actually received the message (without the need to manually implement a message ACK protocol).
// However, the request-response paradigm is not always the best choice.
// For example, streaming transporters that use log-based persistence, such as Kafka or NATS streaming, are optimized for solving a different range of issues, more aligned with an event messaging paradigm (see event-based messaging below for more details).

// To enable the request-response message type, Nest creates two logical channels - one is responsible for transferring the data while the other waits for incoming responses. For some underlying transports, such as NATS, this dual-channel support is provided out-of-the-box. For others, Nest compensates by manually creating separate channels. There can be overhead for this, so if you do not require a request-response message style, you should consider using the event-based method.

// To create a message handler based on the request-response paradigm use the @MessagePattern() decorator, which is imported from the @nestjs/microservices package.
// This decorator should be used only within the controller classes since they are the entry points for your application.
// Using them inside providers won't have any effect as they are simply ignored by Nest runtime. 