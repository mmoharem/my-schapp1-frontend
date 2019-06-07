
import { tassign } from 'tassign';
import { userStudData } from 'src/app/cpanel/shared/interfaces/app-interface';

export const GET_STUDENTS = 'GET_STUDENTS';

export interface IStudentsState {
  students: userStudData[];
}

export const INIT_STUDENTS_STATE: IStudentsState = {
  students: [],
}

function getStudents(state = INIT_STUDENTS_STATE, action): IStudentsState {
  return tassign(state, {
    students: [...action.students]
  });
}

// function setUsersTable(state = INIT_STUDENTS_STATE, action): IStudentsState {
//   return tassign(state, {

//   });
// }

export function studentsReducer(state: IStudentsState = INIT_STUDENTS_STATE, action): IStudentsState {
  switch(action.type) {
    case GET_STUDENTS: return getStudents(state, action);
  }

  return state;
}
