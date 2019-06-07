
import { grade } from 'src/app/cpanel/shared/interfaces/app-interface';
// import * as grActions from "./grades.actions";
import {GradeActions, GET_GRADES} from "./grades.actions";
import { tassign } from "tassign";

export interface IGradeState {
  grades: grade[];
}

export const INIT_GRADES_STATE: IGradeState = {
  grades: [
    // {id: 1, name: 'first'}
  ]
}

// export function getGrades(state = INIT_GRADES_STATE, action: GradeActions): any {
//   switch(action.type) {
//     case GET_GRADES:

    //   let gr = tassign(state, {
    //     grades: [...state.grades, ...action.payload]
    //   })
    // ;

    // let gr = {
    //   grades: [...action.payload]
    // };

    // let gr = {
    //   ...state,
    //   grade: action.payload
    // }
    // console.log(gr);
    // default:
    //   return state
    // ;
//   }
// }

function getGrades(state = INIT_GRADES_STATE, action): IGradeState {

  // let gr = {grades: [...state.grades, ...action.grades]}
  // console.log(gr)
  return tassign(state, {

    grades: [...action.grades]
  });

}

export function gradesReducer (state: IGradeState = INIT_GRADES_STATE, action): IGradeState {
  switch(action.type) {
    case GET_GRADES:
    return getGrades(state, action);
    // console.log(getGrades(state, action));
  }

  return state;
}
