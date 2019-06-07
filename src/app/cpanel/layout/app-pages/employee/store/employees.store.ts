
import { tassign } from 'tassign';
import { userStudData } from 'src/app/cpanel/shared/interfaces/app-interface';

export const GET_EMPLOY = 'GET_EMPLOY';


export interface IEmployeeState {
  employee: userStudData[];
}

export const INIT_EMPLOYEE_STATE: IEmployeeState = {
  employee: [],
}

function getEmployee(state = INIT_EMPLOYEE_STATE, action): IEmployeeState {
  return tassign(state, {
    employee: [...action.employee]
  });
}

// function setUsersTable(state = INIT_EMPLOYEE_STATE, action): IEmployeeState {
//   return tassign(state, {

//   });
// }

export function employeeReducer(state: IEmployeeState = INIT_EMPLOYEE_STATE, action): IEmployeeState {
  switch(action.type) {
    case GET_EMPLOY: return getEmployee(state, action);
  }

  return state;
}
