import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ProjectModel} from '../models/project.model'
import { ProjectHttpService } from '../services/project-http.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
  selectedProject:ProjectModel={};
  projects:ProjectModel[]=[];
  formProject:FormGroup;


  // inyectar dependicas,metodos,objetos,etc
  constructor(private projectHttpService:ProjectHttpService,
    private formBuilder:FormBuilder){
    this.formProject=this.newFormGroupProject();
  }
  
  // llamamos metodos
  ngOnInit() {}
  newFormGroupProject():FormGroup{
    return this.formBuilder.group(
      {
        id: [null],
        code: [null, [Validators.required, Validators.maxLength(5), Validators.minLength(3)]],
        date: [null, ],
        description: [null],
        published: [null],
        title: [null, [Validators.required, Validators.minLength(5)] ]
        
      }
    )
    
  }


    getProjects():void{
      this.projectHttpService.getAll().subscribe(
        response =>{
          console.log(response);
          this.projects=response['data'];
        },
        error =>{
          console.log(error);

        });
      
    }

    getProject():void{
      this.projectHttpService.getOne(1).subscribe(
        response =>{
          console.log(response);
          this.selectedProject=response['data'];
        },
        error =>{
          console.log(error);

        }
        );
      
    }

    createProject():void{
      this.projectHttpService.create(this.selectedProject).subscribe(
        response =>{
          console.log(response);
        },
        error =>{
          console.log(error);

        }
        );
      
    }
    updateProject(project:ProjectModel):void{
      this.projectHttpService.update(project.id,project).subscribe(
        response =>{
          console.log(response);
        },
        error =>{
          console.log(error);

        }
        );
      
    }

    deleteProject(project:ProjectModel):void{
      this.projectHttpService.delete(project.id).subscribe(
        response =>{
          console.log(response)
          this.removeProject(project);
        },
        error =>{
          console.log(error);

        }
        );
      
    }
    removeProject(project: ProjectModel){
      this.projects = this.projects.filter(element => element.id !== project.id);
    }

selectProject(project: ProjectModel) {
  console.log(project);
  this.formProject.patchValue(project);
}

  onSubmit(){
    console.log('subido!')
  }

  get idField(){
    return this.formProject.controls['id']
  }
  get codeField(){
    return this.formProject.controls['code']
  }

}


