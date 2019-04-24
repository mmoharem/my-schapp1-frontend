import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
/////////////////////////////////////

//Services
import { HttpService } from './cpanel/shared/services/http.service';
import { TokenService } from './cpanel/shared/services/token.service';

// Material Comp & Modules
// import { MaterialModule } from './cpanel/shared/modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';

// Componenets
import { AppPagesComponent } from './cpanel/layout/app-pages/app-pages.component';
import { LinksComponent } from './cpanel/layout/app-sidenav/links/links.component';
import { StudentsComponent } from './cpanel/layout/app-pages/students/students.component';
import { StudTablesComponent } from './cpanel/layout/app-pages/students/stud-tables/stud-tables.component';
import { TestComponent } from './cpanel/layout/app-pages/test/test.component';
import { TeachersComponent } from './cpanel/layout/app-pages/teachers/teachers.component';
import { TeachSignupComponent } from './cpanel/layout/app-pages/teachers/teach-signup/teach-signup.component';
import { SchoolComponent } from './cpanel/layout/app-pages/school/school.component';
import { SchGradeComponent } from './cpanel/layout/app-pages/school/sch-grade/sch-grade.component';
import { OnClickDirective } from './cpanel/shared/directive/on-click.directive';
import { SidenavHeaderComponent } from './cpanel/layout/app-sidenav/sidenav-header/sidenav-header.component';
import { AddGradeComponent } from './cpanel/layout/app-pages/school/sch-grade/add-grade/add-grade.component';
import { FeesComponent } from './cpanel/layout/app-pages/school/fees/fees.component';
import { AddFeesComponent } from './cpanel/layout/app-pages/school/fees/add-fees/add-fees.component';
import { ShowFeesComponent } from './cpanel/layout/app-pages/school/fees/show-fees/show-fees.component';
import { PaymentsComponent } from './cpanel/layout/app-pages/students/payments/payments.component';
import { AddPaymentComponent } from './cpanel/layout/app-pages/students/payments/add-payment/add-payment.component';
import { AddStudentComponent } from './cpanel/layout/app-pages/students/add-student/add-student.component';
import { HelpersService } from './cpanel/shared/services/helpers.service';
import { StudentsService } from './cpanel/shared/services/students.service';
import { UpdateStudentComponent } from './cpanel/layout/app-pages/students/update-student/update-student.component';
import { ImgUploadService } from './cpanel/shared/services/img-upload.service';

// import { CalendarModule, DateAdapter } from "angular-calendar";
// import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
// import { FullCalendarModule } from "@fullcalendar/angular";
import { CpanelModule } from './cpanel/cpanel.module';
import { MaterialModule } from './material.module';

// Directives


@NgModule({
  declarations: [
    AppComponent,
    //
    // CpanelComponent,
    // LayoutComponent,
    // PublicComponent,
    // SecureComponent,
    // HomeComponent,
    // LoginComponent,
    // SignupComponent,
    // AppPagesComponent,
    // AppSidenavComponent,
    // SidenavHeaderComponent,
    // AppTopnavComponent,
    // LinksComponent,
    // StudentsComponent,
    // StudTablesComponent,
    // TestComponent,
    // TeachersComponent,
    // TeachSignupComponent,
    // SchoolComponent,
    // SchGradeComponent,
    // AddGradeComponent,

    // Directives
    // OnClickDirective,

    // FeesComponent,

    // AddFeesComponent,

    // ShowFeesComponent,

    // PaymentsComponent,

    // AddPaymentComponent,

    // AddStudentComponent,

    // UpdateStudentComponent,

  ],
  imports: [
    RouterModule,
    // CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CpanelModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // MaterialModule
    // CpanelModule,
    // MaterialModule,
    //
    MaterialModule,
    // MatIconModule,
    // MatSelectModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule,
    // MatCardModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatTabsModule,
    // MatToolbarModule,
    // MatDatepickerModule,
    // MatMomentDateModule,
    // MatSortModule,
    // MatMenuModule,
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory
    // }),
    // FullCalendarModule
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
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
