import { ICourseResponse } from "../../course-management/models/course-management.model";

export interface IStudent {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    imgSrc?: string;
    phoneNo?: string;
    address?: string;
}

export interface IStudentListResponse {
    id: number;
    course: ICourseResponse;
    students: IStudent[];
}

export interface IStudentParams {
    name?: string;
    pageNo?: number;
    pageSize?: number;
  }