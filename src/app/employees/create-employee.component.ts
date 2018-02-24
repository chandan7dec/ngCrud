import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import {Employee} from '../models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // gender= 'male';
  // cotactPreference= 'email';
  // isActive = true;
  // department = 3;
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: '',
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null

  };
    departments: Department[] = [
    { id: 1, name: 'Help Desk'},
    { id: 2, name: 'IT'},
    { id: 3, name: 'HR'},
    { id: 4, name: 'Paroll'},
  ];
  constructor() {
    this.datePickerConfig = Object.assign({},
      {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: true,
      minDate: new Date(2018, 0, 1),
      maxDate: new Date(2018, 11, 31),
      dateInputFormat: 'DD/MM/YYYY'
      });
   }

   togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
   }

  ngOnInit() {
  }

  saveEmployee(newemployee: Employee): void {
    console.log(newemployee);
  }

}
