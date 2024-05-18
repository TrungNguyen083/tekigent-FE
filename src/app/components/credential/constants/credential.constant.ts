import { TableHeader } from "src/app/models/global.model";

export const credentialTableCols: TableHeader[] = [
  { col: '', field: '' },
  { col: 'Credential ID', field: 'id' },
  { col: 'Status', field: 'status' },
  { col: 'Recepient', field: 'recepient' },
  { col: 'Project', field: 'project' },
  { col: 'Issue Date', field: 'issueDate' },
  { col: 'Expiry Date', field: 'expiryDate' },
  { col: '', field: 'openButton' },
  { col: '', field: 'actionButton' },
];