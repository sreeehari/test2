import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TargetsService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getTargetInfo(){ 
       return this.httpClient.get(this.SERVER_URL + 'target');
  }

  public getTarget(targetId){
       return this.httpClient.get(`${this.SERVER_URL + 'target'}/${targetId}`); 
  }
  public createTarget(targetPost){
      return this.httpClient.post(`${this.SERVER_URL + 'target'}`, targetPost)
  }

  public deleteTarget(targetId){
      return this.httpClient.delete(`${this.SERVER_URL + 'target'}/${targetId}`)
  }
  public updateTarget(targetPost,targetId){
      return this.httpClient.put(`${this.SERVER_URL + 'target'}/${targetId}`, targetPost)
  }

}