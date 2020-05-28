import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions, FormlyConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'dynamic-form';

  
  fields: FormlyFieldConfig[] = [];
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  
  constructor(private http: HttpClient,
              private formlyJsonschema: FormlyJsonschema ){
  }
  
  ngOnInit(){
  
    this.http.get<FormlyFieldConfig[]>('assets/dynamicData.json')
      .subscribe(jsonSchema => {        
        const formlyConfig = this.formlyJsonschema.toFieldConfig(jsonSchema);
        this.fields = formlyConfig.fieldGroup;
      });
  
  }

  addInput(){
    let dynamicField:FormlyFieldConfig ={};
    dynamicField.key = "new";
    dynamicField.type = "string";
    dynamicField.defaultValue= "I am new"
    
    this.fields = [
      ...this.fields,
      dynamicField
    ];

    console.log(this.fields);
    
  }
}
