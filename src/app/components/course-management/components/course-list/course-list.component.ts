import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../../models/course-management.model';
import { TekigentTable } from 'src/app/components/share/models/tekigent-table.model';
import { PagingInfo } from 'src/app/components/share/models/pagingInfo.model';

const coursesData: ICourse[] = [
  {
    id: 1,
    courseName: "Backend Fundamental",
    description: "Description for backend fundamental course",
    tutor: {
      id: 1,
      tutorName: "Võ Trọng Đạo",
      tutorImgSrc: "https://media.licdn.com/dms/image/D5603AQE0cITHvWKwbg/profile-displayphoto-shrink_200_200/0/1702603128143?e=1720656000&v=beta&t=h0H6Z_MO47RVtrGuTZEbmpIgTSx4CBIiBpuzQsiykQA",
    },
    publishAt: "5-11-2024",
    imgSrc: "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    like: 5,
    noOfMembers: 157
  },
  {
    id: 2,
    courseName: "Backend Advanced",
    description: "Description for backend advanced course",
    tutor: {
      id: 1,
      tutorName: "Võ Trọng Đạo",
      tutorImgSrc: "https://media.licdn.com/dms/image/D5603AQE0cITHvWKwbg/profile-displayphoto-shrink_200_200/0/1702603128143?e=1720656000&v=beta&t=h0H6Z_MO47RVtrGuTZEbmpIgTSx4CBIiBpuzQsiykQA",
    },
    publishAt: "5-11-2024",
    imgSrc: "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    like: 5,
    noOfMembers: 264
  },
  {
    id: 3,
    courseName: "Frontend Fundamental",
    description: "Description for frontend fundamental course",
    tutor: {
      id: 1,
      tutorName: "Võ Trọng Đạo",
      tutorImgSrc: "https://media.licdn.com/dms/image/D5603AQE0cITHvWKwbg/profile-displayphoto-shrink_200_200/0/1702603128143?e=1720656000&v=beta&t=h0H6Z_MO47RVtrGuTZEbmpIgTSx4CBIiBpuzQsiykQA",
    },
    publishAt: "5-11-2024",
    imgSrc: "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    like: 5,
    noOfMembers: 121
  },
  {
    id: 4,
    courseName: "Frontend Fundametal",
    description: "Description for frontend advanced course",
    tutor: {
      id: 1,
      tutorName: "Võ Trọng Đạo",
      tutorImgSrc: "https://media.licdn.com/dms/image/D5603AQE0cITHvWKwbg/profile-displayphoto-shrink_200_200/0/1702603128143?e=1720656000&v=beta&t=h0H6Z_MO47RVtrGuTZEbmpIgTSx4CBIiBpuzQsiykQA",
    },
    publishAt: "5-11-2024",
    imgSrc: "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    like: 5,
    noOfMembers: 153
  },
  {
    id: 5,
    courseName: "Business Analysis Fundamental",
    description: "Description for BA fundamental course",
    tutor: {
      id: 1,
      tutorName: "Võ Trọng Đạo",
      tutorImgSrc: "https://media.licdn.com/dms/image/D5603AQE0cITHvWKwbg/profile-displayphoto-shrink_200_200/0/1702603128143?e=1720656000&v=beta&t=h0H6Z_MO47RVtrGuTZEbmpIgTSx4CBIiBpuzQsiykQA",
    },
    publishAt: "5-11-2024",
    imgSrc: "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    like: 5,
    noOfMembers: 85
  },
  {
    id: 6,
    courseName: "Buisiness Analysis Advanced",
    description: "Description for BA advanced course",
    tutor: {
      id: 1,
      tutorName: "Võ Trọng Đạo",
      tutorImgSrc: "https://media.licdn.com/dms/image/D5603AQE0cITHvWKwbg/profile-displayphoto-shrink_200_200/0/1702603128143?e=1720656000&v=beta&t=h0H6Z_MO47RVtrGuTZEbmpIgTSx4CBIiBpuzQsiykQA",
    },
    publishAt: "5-11-2024",
    imgSrc: "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    like: 5,
    noOfMembers: 96
  },
];


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})

export class CourseListComponent {
  table: TekigentTable<unknown> = {
    page: 1,
    first: 0,
    rows: 6,
    pageCount: 6,
    totalRecord: coursesData.length,
    data: {
      header: [],
      body: [],
    },
  };

  @Output() pagingInfo = new EventEmitter();
  @Input() currentPagingInfo: PagingInfo = {
    page: this.table.page!,
    first: this.table.first!,
    rows: this.table.rows!,
    pageCount: this.table.pageCount!,
    totalRecord: this.table.totalRecord!,
  };
  
  onPageChange(event: unknown) {
    this.pagingInfo.emit(event);
  }


  courses = coursesData;
}
