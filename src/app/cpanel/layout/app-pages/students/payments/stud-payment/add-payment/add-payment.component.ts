import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import { StudentsService } from 'src/app/cpanel/shared/services/students.service';

export interface paymentEl {
  id: number,
  type: string,
  amount: number,
  student_id: number,
  created_at: Date,
  updated_at: Date
}

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {

  private dataSource: paymentEl[];
  private tableColumns: string[] = ['id', 'type', 'amount', 'date'];
  private showStudent: FormGroup;
  private addPayment: FormGroup;
  private student;

  constructor(private fB: FormBuilder,
              private httpServ: HttpService,
              private studServ: StudentsService) { }

  ngOnInit() {
    this.studServ.emitStudent.subscribe(this);
    // this.httpServ.getGrades();
    this.initForm();

  }

  next = (student) => {
    this.student = student;
    this.getPayments(student.id);
    // console.log(this.student.id);
  }

  private initForm() {
    this.showStudent = this.fB.group({
    })
    this.addPayment = this.fB.group({
      type: ['', Validators.required],
      amount: ['', Validators.required],
      student_id: ['']
    })
  }

  private getPayments(id) {
    this.httpServ.getRequest(`students/transactions/${id}`)
      .subscribe(
        results => {
          this.dataSource = results['data'];
          console.log(this.dataSource);
        },
        error => console.log(error)
      )
    ;
    console.log(id);
  }

  private submit() {

    const data = this.addPayment.getRawValue();

    data.student_id = this.student.id;

    this.httpServ.postRequest('students/transactions', data)
      .subscribe(
        results => console.log(results),
        error => console.log(error)
      )
    ;

    this.getPayments(this.student.id);
  }

}
