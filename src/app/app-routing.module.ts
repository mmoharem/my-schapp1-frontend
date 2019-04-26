import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureComponent } from './cpanel/secure/secure.component';
import { HomeComponent } from './cpanel/public/home/home.component';
import { LoginComponent } from './cpanel/public/login/login.component';
import { PublicComponent } from './cpanel/public/public.component';
import { SignupComponent } from './cpanel/public/signup/signup.component';
import { AppPagesComponent } from './cpanel/layout/app-pages/app-pages.component';
import { StudentsComponent } from './cpanel/layout/app-pages/students/students.component';
import { TestComponent } from './cpanel/layout/app-pages/test/test.component';
import { SchoolComponent } from './cpanel/layout/app-pages/school/school.component';
import { SchGradeComponent } from './cpanel/layout/app-pages/school/sch-grade/sch-grade.component';
import { FeesComponent } from './cpanel/layout/app-pages/school/fees/fees.component';
import { PaymentsComponent } from './cpanel/layout/app-pages/students/payments/payments.component';
import { UpdateStudentComponent } from './cpanel/layout/app-pages/students/update-student/update-student.component';
import { PdfPrintComponent } from './cpanel/pdf-print/pdf-print.component';
import { PrintStudentsAllComponent } from './cpanel/pdf-print/print-students-all/print-students-all.component';
import { StudMainComponent } from './cpanel/layout/app-pages/students/stud-main/stud-main.component';
import { StudTablesComponent } from './cpanel/layout/app-pages/students/stud-tables/stud-tables.component';
import { AddStudentComponent } from './cpanel/layout/app-pages/students/add-student/add-student.component';
import { FindStudComponent } from './cpanel/layout/app-pages/students/find-stud/find-stud.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
    ],
  },

  //level-1
  {
    path: 'secure', component: SecureComponent
  },

  //App-Pages
  {
    path: '',
    component: AppPagesComponent,
    children: [
      //Students
      {
        path: 'students',
        component: StudentsComponent,
        children:
        [
          {
            path: '',
            component: StudMainComponent,
            children: [
              {path: 'showall', component: StudTablesComponent},
              {path: 'addstudent', component: AddStudentComponent},
              {path: 'findstudent', component: FindStudComponent},
            ]
          },

          {path: 'payments', component: PaymentsComponent},
          {path: 'update', component: UpdateStudentComponent}
        ]
      },

      //School
      {
        path: 'school',
        component: SchoolComponent,
        children:
        [
          {path: 'grade', component: SchGradeComponent},
          {path: 'fees', component: FeesComponent},
        ]
      },

      //Test
      {
        path: 'test', component: TestComponent
      },
    ]
  },

  //Print
  {
    path: 'print',
    outlet: 'print',
    component: PdfPrintComponent,
    // children: [
    //   {path: 'printStudAll', component: PrintStudentsAllComponent}
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
