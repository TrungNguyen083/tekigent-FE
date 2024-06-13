import { TableHeader } from "src/app/models/global.model";

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