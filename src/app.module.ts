import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitController } from './git/git.controller';
import { GitService } from './git/git.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, GitController],
  providers: [AppService, GitService],
})
export class AppModule { }
