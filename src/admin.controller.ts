import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: 'admin.local' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin Page';
  }

  /*
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }*/
}
