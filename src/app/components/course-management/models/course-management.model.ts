export interface ICourse {
    id: number;
    courseName: string;
    description: string;
    tutor: ITurtor;
    publishAt: string;
    imgSrc: string;
    like: number;
    noOfMembers: number;
}

export interface ITurtor {
    id: number;
    tutorName: string;
    tutorImgSrc?: string;
}