import { Controller, Get, Render } from '@nestjs/common';

// admin/
@Controller()
export class AdminController {
    @Get()
    root() {
        return 'hello admin!';
    }

    @Get('about')// admin/about
    about() {
        return '/admin is testing';
    }
}