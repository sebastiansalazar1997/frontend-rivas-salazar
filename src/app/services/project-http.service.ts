import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectModel } from '../models/project.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectHttpService {

  constructor(private httpClient:HttpClient) {

   }
   getAll(){
     return this.httpClient.get('http://backend-rivas-salasar.test/api/v1/private/projects');

   }
   getOne(id: number){
    const url ='http://backend-rivas-salasar.test/api/v1/private/projects/' + id;
    return this.httpClient.get(url);
  }
  create(project:ProjectModel){
    const url ='http://backend-rivas-salasar.test/api/v1/private/projects' ;
    return this.httpClient.post(url,project);
  }

  update(id: number, project: ProjectModel | undefined){
    const url ='http://backend-rivas-salasar.test/api/v1/private/projects/' + id;
    return this.httpClient.put(url,project);
  }

  delete(id: number | undefined){
    const url ='http://backend-rivas-salasar.test/api/v1/private/projects/' + id;
    return this.httpClient.delete(url);
  }
  

  
  
}
