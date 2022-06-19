import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-document',
  templateUrl: './customer-document.component.html',
  styleUrls: ['./customer-document.component.css']
})
export class CustomerDocumentComponent implements OnInit {
 title:string="CUSTOMER DOCUMENT";
 exform:any;

  constructor() { }

  ngOnInit(): void {
    this.exform=new FormGroup({
      'documentType':new FormControl(null,Validators.required),
      'document':new FormControl(null,Validators.required),
    });
  }

  uploadDocument(){
 console.log(this.exform.value.document)

  }
}
