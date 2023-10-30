import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account/my-account.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { NewServiceComponent } from './new-service/new-service.component';

const routes: Routes = [
  {
    path: 'myAccount',
    component: MyAccountComponent
  },
  {
    path: '',
    redirectTo: 'myAccount',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginRegisterComponent
  },
  {
    path: 'services',
    component: NewServiceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
