import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-customer-document',
  templateUrl: './customer-document.component.html',
  styleUrls: ['./customer-document.component.css']
})
export class CustomerDocumentComponent implements OnInit {
  title:string="CUSTOMER DOCUMENT";
  exform:any;
  
  selectedFile: any

  constructor(private documentService:DocumentService) { }

  ngOnInit(): void {
    this.exform=new FormGroup({
      'documentType':new FormControl(null,Validators.required),
      'document':new FormControl(null,Validators.required),
    });
  }


  onFileSelected(event:any){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  uploadDocument(){
    const fd = new FormData();
    fd.append('image',this.selectedFile, this.selectedFile.name);
    
    this.documentService.addDocument(fd).subscribe((result)=>{
      console.log(result);
    })
  }
}
