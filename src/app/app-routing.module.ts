import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './HomePage/homepage.component';
import { CreationCarComponent } from './Functionality/Creation/Car/creationCar.component';
import { EditCarComponent } from './Functionality/Edit/Car/editCar.component';
import { ViewCarComponent } from './Functionality/View/Car/viewCar.component';
import { LoginComponent } from './Authorization/Login/login.component';
import { BackgroundComponent } from './Authorization/Background/background.component';
import { RegistrationComponent } from './Authorization/Registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'creationCar',
    component: CreationCarComponent,
  },
  {
    path: 'editCar',
    component: EditCarComponent,
  },
  {
    path: 'viewCar',
    component: ViewCarComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'background',
    component: BackgroundComponent,
    children: [
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: RegistrationComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
