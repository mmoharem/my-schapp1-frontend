import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpanelComponent } from './cpanel.component';
import { LayoutComponent } from './layout/layout.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { SignupComponent } from './public/signup/signup.component';
import { AppPagesComponent } from './layout/app-pages/app-pages.component';
import { AppSidenavComponent } from './layout/app-sidenav/app-sidenav.component';
import { SidenavHeaderComponent } from './layout/app-sidenav/sidenav-header/sidenav-header.component';
import { AppTopnavComponent } from './layout/app-topnav/app-topnav.component';
import { LinksComponent } from './layout/app-sidenav/links/links.component';
import { StudentsComponent } from './layout/app-pages/students/students.component';
import { StudTablesComponent } from './layout/app-pages/students/stud-tables/stud-tables.component';
import { TestComponent } from './layout/app-pages/test/test.component';
import { TeachersComponent } from './layout/app-pages/teachers/teachers.component';
import { TeachSignupComponent } from './layout/app-pages/teachers/teach-signup/teach-signup.component';
import { SchoolComponent } from './layout/app-pages/school/school.component';
import { SchGradeComponent } from './layout/app-pages/school/sch-grade/sch-grade.component';
import { AddGradeComponent } from './layout/app-pages/school/sch-grade/add-grade/add-grade.component';

//
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FullCalendarModule } from "@fullcalendar/angular";
import { OnClickDirective } from './shared/directive/on-click.directive';
import { FeesComponent } from './layout/app-pages/school/fees/fees.component';
import { AddFeesComponent } from './layout/app-pages/school/fees/add-fees/add-fees.component';
import { ShowFeesComponent } from './layout/app-pages/school/fees/show-fees/show-fees.component';
import { PaymentsComponent } from './layout/app-pages/students/payments/payments.component';
import { AddPaymentComponent } from './layout/app-pages/students/payments/stud-payment/add-payment/add-payment.component';
import { AddStudentComponent } from './layout/app-pages/students/add-student/add-student.component';
import { UpdateStudentComponent } from './layout/app-pages/students/update-student/update-student.component';
import { PdfPrintComponent } from './pdf-print/pdf-print.component';
import { PrintStudentsAllComponent } from './pdf-print/print-students-all/print-students-all.component';
import { StudMainComponent } from './layout/app-pages/students/stud-main/stud-main.component';
import { PaymMainComponent } from './layout/app-pages/students/payments/paym-main/paym-main.component';
import { AllPaymentsComponent } from './layout/app-pages/students/payments/all-payments/all-payments.component';
import { StudPaymentComponent } from './layout/app-pages/students/payments/stud-payment/stud-payment.component';


@NgModule({
  declarations: [
    CpanelComponent,
    LayoutComponent,
    PublicComponent,
    SecureComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AppPagesComponent,
    AppSidenavComponent,
    SidenavHeaderComponent,
    AppTopnavComponent,
    LinksComponent,
    StudentsComponent,
    StudTablesComponent,
    TestComponent,
    TeachersComponent,
    TeachSignupComponent,
    SchoolComponent,
    SchGradeComponent,
    AddGradeComponent,
    FeesComponent,

    AddFeesComponent,

    ShowFeesComponent,

    PaymentsComponent,

    AddPaymentComponent,

    AddStudentComponent,

    UpdateStudentComponent,

    //Directives
    OnClickDirective,

    PdfPrintComponent,

    PrintStudentsAllComponent,

    StudMainComponent,

    PaymMainComponent,

    AllPaymentsComponent,

    StudPaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    FullCalendarModule
  ],
  exports: [
    CpanelComponent
  ]
})
export class CpanelModule { }
