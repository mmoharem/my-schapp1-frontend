import { combineReducers } from "redux";
import { IGradeState, gradesReducer, INIT_GRADES_STATE } from '../../layout/app-pages/school/sch-grade/grades.store/grades.store';
import { IStudentsState, studentsReducer, INIT_STUDENTS_STATE } from '../../layout/app-pages/students/store/students.store';
import { IEmployeeState, INIT_EMPLOYEE_STATE, employeeReducer } from '../../layout/app-pages/employee/store/employees.store';

export interface IAppState {
  grading: IGradeState;
  studentStore: IStudentsState;
  employeeStore: IEmployeeState
}

export const INIT_STATE: IAppState = {
  grading: INIT_GRADES_STATE,
  studentStore: INIT_STUDENTS_STATE,
  employeeStore: INIT_EMPLOYEE_STATE
}

// export function rootReducer(state: IAppState, action): IAppState {

//   // switch(action.type) {
//   //   case GET_GRADES: return gradesReducer(state, action);

//   //     return tassign(state, {
//   //         grades: [...action.grades]
//   //       });
//   // }
//   return state;
// }

export const rootReducer = combineReducers({
  grading: gradesReducer,
  studentStore: studentsReducer,
  employeeStore: employeeReducer
})
