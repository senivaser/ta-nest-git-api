import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return `This is Test Assignment for WTT.
to get recent commits data use the next route:
   GET /git/commits/{owner}/{repository}/{branch}
    
To get data in special format use query parameter 'filter'
    ?filter=hashes    |   get only list of hashes
    ?filter=messages  |   get only list of messages
`
  }
}
