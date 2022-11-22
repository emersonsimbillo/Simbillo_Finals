import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const appRoutes: Routes=[
  {path: '', redirectTo: '/clothings', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

]
@NgModule({
  imports: [
    RouterModule.forRoot(
       appRoutes,
        {
            enableTracing: false, //for debugging
            preloadingStrategy: SelectivePreloadingStrategyService,
        }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }