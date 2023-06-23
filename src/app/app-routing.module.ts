import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './HomePage/homepage.component';
import { CreationCarComponent } from './Functionality/Creation/Car/creationCar.component';
import { EditCarComponent } from './Functionality/Edit/Car/editCar.component';
import { ViewCarComponent } from './Functionality/View/Car/viewCar.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
