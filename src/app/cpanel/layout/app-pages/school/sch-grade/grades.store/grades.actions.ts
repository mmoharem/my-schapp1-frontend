import { Action } from "redux";
import { grade } from 'src/app/cpanel/shared/interfaces/app-interface';

export const GET_GRADES = 'GET_GRADES';
export const GET_STUDENTS = 'GET_STUDENTS';
export const ADD_STUDENT = 'ADD_STUDENT';

export class GetGrades implements Action {
  readonly type = GET_GRADES;
  payload: grade[];
}

export type GradeActions = GetGrades;
