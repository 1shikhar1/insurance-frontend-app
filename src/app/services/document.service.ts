import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  addDocument(data:any){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/file/uploadImage";
    return this.http.post<any>(url,data, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

}
