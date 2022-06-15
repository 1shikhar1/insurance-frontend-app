import { Component, OnInit } from '@angular/core';
import { AgentRegistrationService } from 'src/app/services/services/agent-registration.service';


@Component({
  selector: 'agentRegistration',
  templateUrl: './agent-registration.component.html',
  styleUrls: ['./agent-registration.component.css']
})
export class AgentRegistrationComponent implements OnInit {
  title:string="AGENT REGISTRATION";
  agent_name:string="";
  agent_code:string="";
  password:string="";
  confirmPassword:string="";
  address:string="";
  email:string="";
  qualification:string="";
  status:string="";

  constructor(private service : AgentRegistrationService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    let data={
      "agent_name":this.agent_name,
      "agent_code":this.agent_code,
      "password":this.password,
      "confirmPassword":this.confirmPassword,
      "address":this.address,
      "email":this.email,
      "qualification":this.qualification,
      "status":this.status,
    }
   this.service.addCustomer(data);
  }

}

