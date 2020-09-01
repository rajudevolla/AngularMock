import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AllocateServiceService } from './allocate-service.service';
import {JsonPipe} from '@angular/common'
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-allocate',
  templateUrl: './allocate.component.html',
  styleUrls: ['./allocate.component.css']
})
export class AllocateComponent implements OnInit {
  allocateForm: FormGroup;
  errorMessage: string;
 successMessage: string; 
 

  constructor(fb:FormBuilder,private allocateServie:AllocateServiceService) {
    
    this.allocateForm=fb.group({
      distributorName:['',Validators.required],
      purchaseDate:['',Validators.required],
      installationDate:['',Validators.required],
      customerId:['',Validators.required],
    });
   }

  

  ngOnInit() {
    
  }

  register() {
    this.successMessage='';
    this.errorMessage='';

   
   
    this.allocateServie.getData(
      {
        "distributorName" : this.allocateForm.controls.distributorName.value,
        "purchaseDate": this.allocateForm.controls.purchaseDate.value,
        "installationDate" : this.allocateForm.controls.installationDate.value,
         "customerId" : this.allocateForm.controls.customerId.value
      }
     
      ).subscribe(
      successMessage =>{
        console.log(successMessage.message)
        this.successMessage=successMessage.message},
      error=>{
        console.log(error.message)
        this.errorMessage=error.message});
  }
  
}
