import { Controller, Get, Render } from '@nestjs/common';

// test/
@Controller('/privacy')
export class PrivacyController {
    @Get()
    home() {
        return 'hello privacy!';
    }
}

@Controller('/policy')
export class PolicyController {
    @Get()
    home() {
        return 'hello policy!';
    }
}