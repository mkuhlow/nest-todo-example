import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';

@Controller('cats')
export class CatsController {
  /*  @Get()
  findAll(@Req() request: Request): string {
    return 'Return all the cats';
  }*/

  @Get()
  findAll(): Observable<any[]> {
    return of([]);
  }

  @Post()
  create(): string {
    return 'add a cat';
  }

  @Get('ab*cd')
  findOneWildcard() {
    return 'wildcard';
  }

  @Get('docs')
  @Redirect('https://nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `this action returns a #${id} cat`;
  }
}
