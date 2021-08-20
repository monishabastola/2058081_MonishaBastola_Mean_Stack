import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login'
  },

  {
    component: RegisterComponent,
    path: 'register'
  },

  {
    component: PortfolioComponent,
    path: 'portfolio'
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
