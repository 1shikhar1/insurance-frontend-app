import { Component, OnInit } from '@angular/core';

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
  }

  uploadDocument(){


  }
}
