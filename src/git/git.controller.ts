import { HttpService } from '@nestjs/axios';
import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { query } from 'express';
import { catchError, map, of } from 'rxjs';

@Controller('git')
export class GitController {

  constructor(private httpService: HttpService) {

  }

  @Get('/hello/:id/:status')
  gitHello(@Param('id') id: string, @Param('status') status: string) {
    return `Hey, git! Path to ${id} with a status ${status}`
  }

  @Get('commits/:owner/:repo/:branch')
  async fetchCommits(@Param() params: any, @Query('filter') filter: string) {
    console.log(
      `https://api.github.com/repos/${params.owner}/${params.repo}/commits?sha=${params.branch}`)

    return this.httpService
      .get(
        `https://api.github.com/repos/${params.owner}/${params.repo}/commits?sha=${params.branch}&per_page=25`
        // `https://api.github.com/repos/senivaser/JS17-Farch-Project1/commits?sha=comp_lesson02`
      )
      .pipe(
        map((raw) => {
          const data = (raw.status === 200) ?
            (filter) ?
              (filter === 'hashes') ?
                raw.data.map((el: any) => el?.commit?.tree?.sha) :
                (filter === 'messages') ?
                  raw.data.map((el: any) => el?.commit?.message) :
                  raw.data :
              raw.data :
            {}
          return { status: 'succeed', data }
        }),
        catchError((error: any) => {
          return of({ status: 'failed', data: {}, error: error.message })
        })
      )
  }

}
