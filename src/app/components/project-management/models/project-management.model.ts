import { ITurtor } from "../../course-management/models/course-management.model";

export interface IProject {
    id: number;
    name: string;
    identifier: ITurtor;
    credentialsNo: number;
    unpublishedNo: number;
    status: number;
    lastUpdated: string;
    certificateImage: string;
    courseWebsite: string;
    description: string;
    skills: string;
    primary: string;
}