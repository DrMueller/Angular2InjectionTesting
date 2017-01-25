import { Injectable } from '@angular/core';

@Injectable()
export class CoreFeatureService {

  constructor(public createdFrom: string) { 
    console.log(`Coretest1Service created from ` + createdFrom);
  }
}
