import { Controller, Get, Redirect, Render, Res, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import type { Response } from 'express';

@Controller()
export class AppController {
    @Get()
    @Render('index')//views сангаас ямар файл харуулахыг заана
    root() {//заавал рүүт гэсэн нэртэй байх албагүй
        return { message: 'Hello world!' };
    }

    @Get('file')
    file(@Res() res: Response) {
        var { join } = require('path');
        const file = createReadStream(join(process.cwd(), 'package.json'));
        res.set({
            'Content-Type': 'application/json',
            'Content-Disposition': 'attachment; filename="package.json"',
        });
        file.pipe(res);
    }

    @Get('photo')
    photo(@Res() res) {
        // res.sendFile(__dirname + '../../public/info.png');
        res.redirect('http://localhost:8080/info.png');
    }

    @Get('json')
    view(@Res() res) {
        var fs = require('fs');
        var { join } = require('path');
        const buff = fs.readFileSync(join(process.cwd(), 'package.json'), { encoding: 'utf8' });
        res.json(JSON.parse(buff));
    }
}