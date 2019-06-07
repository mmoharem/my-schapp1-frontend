
import { tassign } from 'tassign';
import { userStudData } from 'src/app/cpanel/shared/interfaces/app-interface';

export const GET_EMPLOY = 'GET_EMPLOY';
export const GET_EMPLOY_DATA = 'GET_EMPLOY_DATA';

export interface IUserState {
  users: userStudData[];
  usersData: {
    tableColumns: string[],
    type: string
  };
}

export const INIT_USERS_STATE: IUserState = {
  users: [],
  usersData: {
    tableColumns: [],
    type: null
  }
}

function getUsers(state = INIT_USERS_STATE, action): IUserState {
  return tassign(state, {
    users: [...action.users],
    usersData: action.usersData
  });
}

// function setUsersTable(state = INIT_USERS_STATE, action): IUserState {
//   return tassign(state, {

//   });
// }

export function employReducer(state: IUserState = INIT_USERS_STATE, action): IUserState {
  switch(action.type) {
    case GET_EMPLOY: return getUsers(state, action);
  }

  return state;
}
