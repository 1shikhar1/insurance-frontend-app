import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AgentLoginComponent } from './agent-login/agent-login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HomeComponent } from './home/home.component';
import { ProtectionPlanComponent } from './protection-plan/protection-plan.component';
import { ChildPlanComponent } from './child-plan/child-plan.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { ViewInsuranceAccountDetailComponent } from './view-insurance-account-detail/view-insurance-account-detail.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewCustomerForAgentComponent } from './view-customer-for-agent/view-customer-for-agent.component';
import { ViewCommissionForAgentComponent } from './view-commission-for-agent/view-commission-for-agent.component';
import { ViewPolicyPaymentForAgentComponent } from './view-policy-payment-for-agent/view-policy-payment-for-agent.component';
import { ViewPolicyClaimComponent } from './view-policy-claim/view-policy-claim.component';
import { ViewCommissionWithdrawalComponent } from './view-commission-withdrawal/view-commission-withdrawal.component';
import { ViewInsuranceSchemeComponent } from './view-insurance-scheme/view-insurance-scheme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    CustomerLoginComponent,
    AgentLoginComponent,
    ProtectionPlanComponent,
    ChildPlanComponent,
    CustomerRegistrationComponent,
    CustomerDashboardComponent,
    CustomerProfileComponent,
    ViewInsuranceAccountDetailComponent,
    AgentDashboardComponent,
    EmployeeDashboardComponent,
    AdminDashboardComponent,
    ViewCustomerForAgentComponent,
    ViewCommissionForAgentComponent,
    ViewPolicyPaymentForAgentComponent,
    ViewPolicyClaimComponent,
    ViewCommissionWithdrawalComponent,
    ViewInsuranceSchemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
