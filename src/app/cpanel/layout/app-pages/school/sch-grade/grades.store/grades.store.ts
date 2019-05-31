
import { grade } from 'src/app/cpanel/shared/interfaces/app-interface';
// import * as grActions from "./grades.actions";
import {GradeActions, GET_GRADES} from "./grades.actions";
import { tassign } from "tassign";

export interface IGradeState {
  grades: grade[];
}

export const INIT_GRADES_STATE: IGradeState = {
  grades: []
}

export function getGrades(state = INIT_GRADES_STATE, action: GradeActions): any {
  switch(action.type) {
    case GET_GRADES:

    //   let gr = tassign(state, {
    //     grades: [...state.grades, ...action.payload]
    //   })
    // ;

    // let gr = {
    //   grades: [...action.payload]
    // };

    let gr = {
      ...state,
      grade: action.payload
    }
    console.log(gr);
    // default:
    //   return state
    // ;
  }
}

export function gradesReducer (state: IGradeState, action): IGradeState {
  switch(action.type) {
    case GET_GRADES: return getGrades(state, action);
  }

  return state;

}
