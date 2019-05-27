import { INCREMENT } from './actions';
import { tassign } from "tassign";
import { Map } from "immutable";

export interface IAppState {
  counter: number;
  // messaging?: {
  //   newMessages: number;
  // };
}

export const INIT_STATE: IAppState = {
  counter: 0,
  // messaging: {
  //   newMessages: 5
  // }
}

// export function rooReducer(state: IAppState, action): IAppState {
export function rooReducer(state: Map<string, any>, action): Map<string, any> {
  switch(action.type) {
    case INCREMENT:
      // return { counter: state.counter + 1 };
      // return Object.assign({}, state, {counter: state.counter + 1});//problem with this implementation that you can add any property that isnt declared in the store.
      // npm install tassign --save
      // return tassign(state, {counter: state.counter + 1});
      return state.set('counter', state.get('counter') + 1);
  }
  return state;
}
