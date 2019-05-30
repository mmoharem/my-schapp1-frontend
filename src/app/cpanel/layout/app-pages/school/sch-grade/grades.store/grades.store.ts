// import { Action } from "ngrx/store";
// import { GET_GRADES } from "./grades.actions.ts";
import { tassign } from "tassign";

export interface IAppState {
  grades: any[];
}

export const INIT_STATE: IAppState = {
  grades: []
}
export const GET_GRADES = 'GET_GRADES';

export function gradesReducer(state = INIT_STATE, action) {
  switch(action.type) {
    case GET_GRADES:

      return tassign(state, {
        grades: [...action.grades]
      })
    ;
  }
  return state;
}
