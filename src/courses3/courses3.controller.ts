import { Controller, Get } from '@nestjs/common';

@Controller('courses3')
export class Courses3Controller {
    @Get()

    FindAll () { 
        return 'Listagem de curso'
}
}
