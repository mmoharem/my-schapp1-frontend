
import { tassign } from 'tassign';
import { userStudData } from 'src/app/cpanel/shared/interfaces/app-interface';

export const GET_TEACHERS = 'GET_TEACHERS';
export const ADD_TEACHERS = 'GET_TEACHERS';
export const UPDATE_TEACHERS = 'GET_TEACHERS';
export const DELETE_TEACHERS = 'GET_TEACHERS';
export const GET_TECHERS_DATA = 'GET_TECHERS_DATA';

export interface ITeachersState {
  teachers: userStudData[];
  teachersData: {
    tableColumns: string[],
    type: string
  };
}

export const INIT_TECHERS_STATE: ITeachersState = {
  teachers: [],
  teachersData: {
    tableColumns: [],
    type: null
  }
}

function getTeachers(state = INIT_TECHERS_STATE, action): ITeachersState {
  return tassign(state, {
    teachers: [...action.teachers],
    teachersData: action.teachersData
  });
}

// function setUsersTable(state = INIT_USERS_STATE, action): ITeachersState {
//   return tassign(state, {

//   });
// }

export function teachersReducer(state: ITeachersState = INIT_TECHERS_STATE, action): ITeachersState {
  switch(action.type) {
    case GET_TEACHERS: return getTeachers(state, action);
  }

  return state;
}
