import { TableHeader } from "src/app/models/global.model";
import { coursesData } from "../../course-management/constants/course-management.constant";
import { IStudentListResponse } from "../models/student-management.model";

export const studentTableCols: TableHeader[] = [
  { col: '', field: '' },
  { col: 'Name', field: 'firstName' },
  { col: 'Email', field: 'email' },
  { col: 'Phone Number', field: 'phoneNo' },
  { col: 'Address', field: 'address' },
  { col: '', field: '' },
];

export const listCourseStudent: IStudentListResponse[] = [
  {
    id: 1,
    course: coursesData[0],
    students: [
      {
        id: 1,
        firstName: "Nguyen",
        lastName: "Nguyen",
        email: "nguyennguyen@gmail.com",
        imgSrc: "https://avatars.design/wp-content/uploads/2022/09/male-bald-team-avatars-photo-to-illustration.png"
      },
      {
        id: 2,
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com"
      },
      {
        id: 3,
        firstName: "Alice",
        lastName: "Smith",
        email: "alicesmith@example.com"
      },
      {
        id: 4,
        firstName: "Emma",
        lastName: "Johnson",
        email: "emmajohnson@example.com"
      },
      {
        id: 5,
        firstName: "Michael",
        lastName: "Williams",
        email: "michaelwilliams@example.com"
      },
      {
        id: 6,
        firstName: "Sophia",
        lastName: "Brown",
        email: "sophiabrown@example.com"
      },
      {
        id: 7,
        firstName: "James",
        lastName: "Jones",
        email: "jamesjones@example.com"
      },
      {
        id: 8,
        firstName: "Olivia",
        lastName: "Garcia",
        email: "oliviagarcia@example.com"
      },
      {
        id: 9,
        firstName: "William",
        lastName: "Martinez",
        email: "williammartinez@example.com"
      },
      {
        id: 10,
        firstName: "Isabella",
        lastName: "Lopez",
        email: "isabellalopez@example.com"
      }
    ]
  },
  {
    id: 2,
    course: coursesData[1],
    students: [
      {
        id: 11,
        firstName: "David",
        lastName: "Lee",
        email: "davidlee@example.com"
      },
      {
        id: 12,
        firstName: "Emily",
        lastName: "Thompson",
        email: "emilythompson@example.com"
      },
      {
        id: 13,
        firstName: "Daniel",
        lastName: "Harris",
        email: "danielharris@example.com"
      },
      {
        id: 14,
        firstName: "Sophie",
        lastName: "Clark",
        email: "sophieclark@example.com"
      },
      {
        id: 15,
        firstName: "Matthew",
        lastName: "Lewis",
        email: "matthewlewis@example.com"
      },
      {
        id: 16,
        firstName: "Chloe",
        lastName: "Roberts",
        email: "chloeroberts@example.com"
      },
      {
        id: 17,
        firstName: "Andrew",
        lastName: "Hill",
        email: "andrewhill@example.com"
      },
      {
        id: 18,
        firstName: "Emma",
        lastName: "Walker",
        email: "emmawalker@example.com"
      },
      {
        id: 19,
        firstName: "Benjamin",
        lastName: "Young",
        email: "benjaminyoung@example.com"
      },
      {
        id: 20,
        firstName: "Lily",
        lastName: "Evans",
        email: "lilyevans@example.com"
      }
    ]
  },
  {
    id: 3,
    course: coursesData[2],
    students: [
      {
        id: 21,
        firstName: "Alexander",
        lastName: "Scott",
        email: "alexanderscott@example.com"
      },
      {
        id: 22,
        firstName: "Mia",
        lastName: "Baker",
        email: "miabaker@example.com"
      },
      {
        id: 23,
        firstName: "Ethan",
        lastName: "Adams",
        email: "ethanadams@example.com"
      },
      {
        id: 24,
        firstName: "Charlotte",
        lastName: "Nelson",
        email: "charlottenelson@example.com"
      },
      {
        id: 25,
        firstName: "William",
        lastName: "Carter",
        email: "williamcarter@example.com"
      },
      {
        id: 26,
        firstName: "Abigail",
        lastName: "Turner",
        email: "abigailturner@example.com"
      },
      {
        id: 27,
        firstName: "Lucas",
        lastName: "Parker",
        email: "lucasparker@example.com"
      },
      {
        id: 28,
        firstName: "Ava",
        lastName: "Wright",
        email: "avawright@example.com"
      },
      {
        id: 29,
        firstName: "Henry",
        lastName: "Mitchell",
        email: "henrymitchell@example.com"
      },
      {
        id: 30,
        firstName: "Grace",
        lastName: "Campbell",
        email: "gracecampbell@example.com"
      }
    ]
  },
];