import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions, FormlyConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

import { DialogComponent } from './dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'dynamic-form';

  staticFields: FormlyFieldConfig[] = [];
  staticForm = new FormGroup({});
  staticModel: any = {};
  staticOptions: FormlyFormOptions = {};
  
  fields: FormlyFieldConfig[] = [];
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  
  constructor(private http: HttpClient,
              private formlyJsonschema: FormlyJsonschema,
              public dialog: MatDialog ){
  }
  
  ngOnInit(){
  
    this.http.get<FormlyFieldConfig[]>('assets/dynamicData.json')
      .subscribe(jsonSchema => {        
        const formlyConfig = this.formlyJsonschema.toFieldConfig(jsonSchema);
        this.staticFields = formlyConfig.fieldGroup;
        
      });
  
  }

  addInput(){
    console.log(this.staticModel.required);
    
  }

  delete(){
    this.fields.forEach((a, index)=>{
      if(a.key === "new"){
        this.fields.splice(index,1);
      }
      
    })
  }

  openDialog() {
    //this.dialog.open(DialogComponent);       
  }

  submit(){
    let key:string = this.staticModel.label;
    let type : string = "input";
    let label:string = this.staticModel.label;
    let placeholder:string = this.staticModel.placeholder;
    let description:string = 'this is name field description';
    let required: boolean = this.staticModel.required;

    let dynamicField: FormlyFieldConfig = {
      key: key,
      type: type,
      templateOptions: {
        label: label,
        placeholder: placeholder,
        description: description,
        required: required,
      },
    };

    this.fields = [
      ...this.fields,
      dynamicField
    ];
  }
}