import { IProject } from "../../project-management/models/project-management.model";

export interface ICourse {
    id: number;
    project: IProject;
    courseName: string;
    identifier: ITurtor;
    courseWebsite: string;
    description: string;
    skills: string;
    primary: string;
    bgImgSrc: string;
    certificateImage: string,
    badgeImage?: string;
    publishAt: string;
    like: number;
    noOfMembers: number;
    lastUpdated: string;
}

export interface ICourseResponse{
    id: number;
    courseName: string;
}

export interface ITurtor {
    id: number;
    tutorName: string;
    tutorImgSrc?: string;
}