import { IGradeState, gradesReducer, INIT_GRADES_STATE } from '../../layout/app-pages/school/sch-grade/grades.store/grades.store';
import { GET_GRADES } from '../../layout/app-pages/school/sch-grade/grades.store/grades.actions';

export interface IAppState {
  grades: IGradeState;
}

export const INIT_STATE: IAppState = {
  grades: INIT_GRADES_STATE
}

export function rootReducer(state: IGradeState, action): IGradeState {

  // switch(action.type) {
  //   case GET_GRADES: return gradesReducer(state, action);

  //     return tassign(state, {
  //         grades: [...action.grades]
  //       });
  // }
  return state;
}
