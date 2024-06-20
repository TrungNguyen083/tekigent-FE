import { PaginatedData, TableHeader } from "src/app/models/global.model";
import { ICredential } from "../models/credential.model";
import { coursesData } from "../../course-management/constants/course-management.constant";

export const credentialTableCols: TableHeader[] = [
  { col: '', field: '' },
  { col: 'Credential ID', field: 'id' },
  { col: 'Status', field: 'status' },
  { col: 'Recepient', field: 'recepient' },
  { col: 'Course', field: 'course' },
  { col: 'Issue Date', field: 'issueDate' },
  { col: 'Expiry Date', field: 'expiryDate' },
  { col: '', field: 'action' },
];

export const status = [
  {
    label: 'All',
    value: 0,
  },
  {
    label: 'Published',
    value: 1,
  },
  {
    label: 'Unpublished',
    value: 2,
  },
];

export const engagement = [
  {
    label: 'Viewd',
    value: 0,
  },
  {
    label: 'Not viewd',
    value: 1,
  },
  {
    label: 'Engaged',
    value: 2,
  },{
    label: 'Not engaged',
    value: 3,
  },
  {
    label: 'Shared on LinkedIn',
    value: 4,
  },{
    label: 'Not shared on LinkedIn',
    value: 5,
  },
]

export const credentialData: ICredential[] = [
  {
    id: 567696,
    recipient: {
      id: 1,
      firstName: "Nguyen",
      lastName: "Nguyen",
      email: "nguyen@gmail.com",
    },
    course: coursesData[0],
    issueDate: "May 18, 2024",
    publishStatus: 2,
    linkedinStatus: 0,
    viewStatus: 0,
    engagedStatus: 0,
  },
  {
    id: 237984,
    recipient: {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@gmail.com",
    },
    course: coursesData[1],
    issueDate: "May 19, 2024",
    publishStatus: 0,
    linkedinStatus: 0,
    viewStatus: 1,
    engagedStatus: 0,
  },
  {
    id: 729834,
    recipient: {
      id: 3,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@gmail.com",
    },
    course: coursesData[2],
    issueDate: "May 20, 2024",
    publishStatus: 1,
    viewStatus: 0,
    engagedStatus: 1,
    linkedinStatus: 0,
  },
  {
    id: 873642,
    recipient: {
      id: 4,
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@gmail.com",
    },
    course: coursesData[3],
    issueDate: "May 21, 2024",
    publishStatus: 1,
    viewStatus: 1,
    engagedStatus: 0,
    linkedinStatus: 1,
  },
  {
    id: 198231,
    recipient: {
      id: 5,
      firstName: "Bob",
      lastName: "Brown",
      email: "bob.brown@gmail.com",
    },
    course: coursesData[4],
    issueDate: "May 22, 2024",
    publishStatus: 0,
    linkedinStatus: 0,
    viewStatus: 0,
    engagedStatus: 1,
  },
  {
    id: 283752,
    recipient: {
      id: 6,
      firstName: "Charlie",
      lastName: "Davis",
      email: "charlie.davis@gmail.com",
    },
    course: coursesData[5],
    issueDate: "May 23, 2024",
    publishStatus: 1,
    viewStatus: 1,
    engagedStatus: 0,
    linkedinStatus: 1,
  },
  {
    id: 873265,
    recipient: {
      id: 7,
      firstName: "Diana",
      lastName: "Evans",
      email: "diana.evans@gmail.com",
    },
    course: coursesData[6],
    issueDate: "May 24, 2024",
    publishStatus: 1,
    viewStatus: 0,
    engagedStatus: 1,
    linkedinStatus: 0,
  },
  {
    id: 298437,
    recipient: {
      id: 8,
      firstName: "Edward",
      lastName: "Foster",
      email: "edward.foster@gmail.com",
    },
    course: coursesData[7],
    issueDate: "May 25, 2024",
    publishStatus: 0,
    linkedinStatus: 1,
    viewStatus: 1,
    engagedStatus: 0,
  },
  {
    id: 238752,
    recipient: {
      id: 9,
      firstName: "Fiona",
      lastName: "Green",
      email: "fiona.green@gmail.com",
    },
    course: coursesData[0],
    issueDate: "May 26, 2024",
    publishStatus: 1,
    viewStatus: 0,
    engagedStatus: 1,
    linkedinStatus: 0,
  },
  {
    id: 235198,
    recipient: {
      id: 10,
      firstName: "George",
      lastName: "Hill",
      email: "george.hill@gmail.com",
    },
    course: coursesData[1],
    issueDate: "May 27, 2024",
    publishStatus: 1,
    viewStatus: 1,
    engagedStatus: 0,
    linkedinStatus: 1,
  }
];

export const credentialPagination: PaginatedData<ICredential> = {
  pagination: {
    pageNo: 1,
    pageSize: 15,
    totalPages: Math.ceil(credentialData.length / 10),
    totalItems: credentialData.length,
  },
  data: credentialData,
};

export const collections = [
  {
    label: 'Collection 1',
    value: 0,
  },
  {
    label: 'Collection 2',
    value: 1,
  },
  {
    label: 'Collection 3',
    value: 2,
  },
];

export const projects = [
  {
    label: 'Project 1',
    value: 0,
  },
  {
    label: 'Project 2',
    value: 1,
  },
  {
    label: 'Project 3',
    value: 2,
  },
  {
    label: 'Project 4',
    value: 3,
  },
  {
    label: 'Project 5',
    value: 4,
  },
]