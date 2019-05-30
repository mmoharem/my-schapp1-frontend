import { GET_GRADES } from './actions';
import { tassign } from "tassign";

export interface IAppState {
  grades: any[];
}

export const INIT_STATE: IAppState = {
  grades: []
}

export function rootReducer(state: IAppState, action): IAppState {
  switch(action.type) {
    case GET_GRADES:

      return tassign(state, {
          grades: [...action.grades]
        });
  }
  return state;
}
