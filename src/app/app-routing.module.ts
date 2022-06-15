import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { ChildPlanComponent } from './child-plan/child-plan.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HomeComponent } from './home/home.component';
import { ProtectionPlanComponent } from './protection-plan/protection-plan.component';
import { ViewCommissionForAgentComponent } from './view-commission-for-agent/view-commission-for-agent.component';
import { ViewCommissionWithdrawalComponent } from './view-commission-withdrawal/view-commission-withdrawal.component';
import { ViewCustomerForAgentComponent } from './view-customer-for-agent/view-customer-for-agent.component';
import { ViewInsuranceAccountDetailComponent } from './view-insurance-account-detail/view-insurance-account-detail.component';
import { ViewInsuranceSchemeComponent } from './view-insurance-scheme/view-insurance-scheme.component';
import { ViewPolicyClaimComponent } from './view-policy-claim/view-policy-claim.component';
import { ViewPolicyPaymentForAgentComponent } from './view-policy-payment-for-agent/view-policy-payment-for-agent.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'app-home',component:HomeComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'employee-login',component:EmployeeLoginComponent},
  {path:'customer-login',component:CustomerLoginComponent},
  {path:'agent-login',component:AgentLoginComponent},
  {path:'protection-plan',component:ProtectionPlanComponent},
  {path:'child-plan',component:ChildPlanComponent},
  {path:'customer-registration',component:CustomerRegistrationComponent},
  {path:'customer-dashboard',component:CustomerDashboardComponent},
  {path:'customer-profile',component:CustomerProfileComponent},
  {path:'view-insurance-account-detail',component:ViewInsuranceAccountDetailComponent},
  {path:'agent-dashboard',component:AgentDashboardComponent},
  {path:'employee-dashboard',component:EmployeeDashboardComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'viewCustomer',component:ViewCustomerForAgentComponent},
  {path:'viewCommission',component:ViewCommissionForAgentComponent},
  {path:'viewPolicyPay',component:ViewPolicyPaymentForAgentComponent},
  {path:'viewPolicyClaim',component:ViewPolicyClaimComponent},
  {path:'viewCommWithdrawal',component:ViewCommissionWithdrawalComponent},
  {path:'viewInsuranceScheme',component:ViewInsuranceSchemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
