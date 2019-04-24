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

const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
    ],
  },
  //level-1
  {path: 'secure', component: SecureComponent},
  //level-1
  {
    path: '', component: AppPagesComponent, children:
    [//parent-1
      {
        path: 'students', component: StudentsComponent, children:
        [
          // {path: 'payments', component: PaymentsComponent}
        ]
      },
      {path: 'payments', component: PaymentsComponent},
      {path: 'updatestud', component: UpdateStudentComponent},
      {path: 'test', component: TestComponent},
      //level-2
      {
        path: 'school', component: SchoolComponent, children:
        [
          {path: 'grade', component: SchGradeComponent},
          {path: 'fees', component: FeesComponent},
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
