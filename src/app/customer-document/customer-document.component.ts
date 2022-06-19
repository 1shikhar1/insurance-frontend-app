import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  documentType:any

  documents:any[] = []
  
  selectedFile: any

  constructor(private documentService:DocumentService, private http: HttpClient) { }

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

    this.documentType = this.exform.value.documentType

    const fd = new FormData();
    fd.append('image',this.selectedFile, this.selectedFile.name);
    
    this.documentService.addDocument(fd).subscribe((result)=>{
      console.log("inside upload document-->");
      // console.log(result);

      this.documents.push(result);
    })

    console.log(this.documents);
  }



  openPdf(url:string) {

    let token = "Bearer " + localStorage.getItem("token");
    this.http.get(url, {
      headers: new HttpHeaders({
         'Authorization': token
       })
     }
    ).subscribe((data)=> {
        
      console.log(data);
    });
}

}
