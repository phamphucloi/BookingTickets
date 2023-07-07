import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreationCarComponent } from './Functionality/Creation/Car/creationCar.component';
import { ViewCarComponent } from './Functionality/View/Car/viewCar.component';
import { EditCarComponent } from './Functionality/Edit/Car/editCar.component';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
<<<<<<< Updated upstream
import { LoginComponent } from './Authorization/Login/login.component';
import { HomepageComponent } from './HomePage/homepage.component';
import { BackgroundComponent } from './Authorization/Background/background.component';
import { RegistrationComponent } from './Authorization/Registration/registration.component';
import { PathAdminService } from './Service/path.service';
import { DiscountService } from './Service/discountService';
=======
import { DiscountComponent } from './Functionality/Creation/Discount/discount.component';
import { PathAdminService } from './Service/path.service';
import { DiscountService } from './Service/discountService';
import { ViewDisComponent } from './Functionality/View/Discount/viewDis.component';
import { EditDisComponent } from './Functionality/Edit/Discount/editDis.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    CreationCarComponent,
    EditCarComponent,
    ViewCarComponent,
<<<<<<< Updated upstream
    LoginComponent,
    HomepageComponent,
    BackgroundComponent,
    RegistrationComponent
=======
    DiscountComponent,
    ViewDisComponent,
    EditDisComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    FileUploadModule,
    BrowserAnimationsModule,
    EditorModule,
    CalendarModule,
    CheckboxModule,
  ],
  providers: [
    PathAdminService,
    DiscountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
