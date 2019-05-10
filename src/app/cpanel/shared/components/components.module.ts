import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { StudTableComponent } from './stud-table/stud-table.component';
import { FindStudentsComponent } from './find-students/find-students.component';
import { MaterialModule } from 'src/app/material.module';
import { PaginationService } from './pagination/pagination.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CompHttpService } from './comp-http.service';

@NgModule({
  declarations: [
    PaginationComponent,
    StudTableComponent,
    FindStudentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    CompHttpService,
    PaginationService
  ],
  exports: [
    PaginationComponent,
    StudTableComponent,
    FindStudentsComponent
  ],
})
export class ComponentsModule { }
