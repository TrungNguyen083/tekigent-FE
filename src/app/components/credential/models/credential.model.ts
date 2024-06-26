import { ICourse } from "../../course-management/models/course-management.model";
import { IStudent } from "../../student-management/models/student-management.model";

export interface ICredential {
    id: number;
    recipient: IStudent;
    course: ICourse;
    issueDate?: string;
    expiryDate?: string;
    publishStatus: number;
    viewStatus: number;
    engagedStatus: number;
    linkedinStatus: number;
}

export interface ICredentialParams {
    id?: number;
    name?: string;
    pageNo?: number;
    pageSize?: number;
  }