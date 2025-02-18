import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthcheckController {
    
    @Get()
    healthCheck() {
        return 'Client Gateway is up and running';
    }
}
