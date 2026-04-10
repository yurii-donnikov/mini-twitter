import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers(): any {
    return [{ name: 'qwer' }, { name: 'asadda' }];
  }
}
