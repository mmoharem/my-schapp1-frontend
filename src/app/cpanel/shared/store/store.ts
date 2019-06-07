import { combineReducers } from "redux";
import { IGradeState, gradesReducer, INIT_GRADES_STATE } from '../../layout/app-pages/school/sch-grade/grades.store/grades.store';
import { IUserState, INIT_USERS_STATE, usersReducer } from '../../layout/app-pages/students/store/students.store';
import { teachersReducer } from '../../layout/app-pages/teachers/store/teachers.store';
import { employReducer } from '../../layout/app-pages/employee/store/employees.store';

export interface IAppState {
  grading: IGradeState;
  student: IUserState;
  employee: IUserState;
}

export const INIT_STATE: IAppState = {
  grading: INIT_GRADES_STATE,
  student: INIT_USERS_STATE,
  employee: INIT_USERS_STATE
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
  student: usersReducer,
  employee: employReducer
  // teachersStore: teachersReducer
})
