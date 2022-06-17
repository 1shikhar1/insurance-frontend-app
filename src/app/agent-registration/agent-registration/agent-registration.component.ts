import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/services/agent.service';


@Component({
  selector: 'agentRegistration',
  templateUrl: './agent-registration.component.html',
  styleUrls: ['./agent-registration.component.css']
})
export class AgentRegistrationComponent implements OnInit {
  title:string="AGENT REGISTRATION";
  id:any;

  constructor(private service: AgentService, private route:Router) {
  }

  exform: any;
  ngOnInit(): void {
    this.exform=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required),
      'address':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'qualification':new FormControl(null,Validators.required),
      'status':new FormControl(null,Validators.required)
    });
  }

  addAgent()
  {
    console.log("add employee ts file")
    this.service.addAgent(this.exform.value).subscribe(result=>{
      console.log(result)
      this.id = result;
      alert("This is your Auto-Generated User-Id: "+this.id.id);
      setTimeout(()=>{
        this.route.navigate(['/admin-dashboard']);
      },2000)
    })
    this.exform.reset();
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}

