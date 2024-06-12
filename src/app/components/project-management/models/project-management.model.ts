import { ICollection } from "../components/collection-management/models/collection-management.model";

export interface IProject {
    id: number;
    name: string;
    description: string;
    projectBgImage: string;
    collection?: ICollection;
    lastUpdated: string;
    status: number;
    credentialsNo: number;
    unpublishedNo: number;
}