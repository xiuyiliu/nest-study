import {Injectable} from '@nestjs/common';

export class Helper {
  help() {
    console.log('help');
  }
}

export const helperProvider = {
  provide: 'Helper',
  useValue: Helper,
};
