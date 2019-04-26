import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
/////////////////////////////////////

//Services
import { HttpService } from './cpanel/shared/services/http.service';
import { TokenService } from './cpanel/shared/services/token.service';
import { HelpersService } from './cpanel/shared/services/helpers.service';
import { StudentsService } from './cpanel/shared/services/students.service';
import { ImgUploadService } from './cpanel/shared/services/img-upload.service';

// Material Comp & Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from "ngx-toastr";


//
import { CpanelModule } from './cpanel/cpanel.module';
import { MaterialModule } from './material.module';

// Directives


@NgModule({
  declarations: [
    AppComponent,
    //
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    CpanelModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //
    MaterialModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    HttpService,
    TokenService,
    HelpersService,
    StudentsService,
    ImgUploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
