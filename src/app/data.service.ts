import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{
  constructor() { }
  createDb(){
   let  target =  [
    {  id:  1,  status: 'Researching', companyName: 'xyz', email: 'xyz@xyz.com', phone1: '8888888', phone2: '9999', streetAddress:'Sample address',city:'NJ',state:'NJ',zip:'2141',country:'USA', budgetInv: '500', grossProfit: '500' }
   ];
   return {target};
  }
}