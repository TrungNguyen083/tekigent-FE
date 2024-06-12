import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse, ITurtor } from '../../models/course-management.model';
import { TekigentTable } from 'src/app/components/share/models/tekigent-table.model';
import { PagingInfo } from 'src/app/components/share/models/pagingInfo.model';

export const tutorsData: ITurtor[] = [
  {
    id: 1,
    tutorName: "Dao Vo",
    tutorImgSrc: "https://media.licdn.com/dms/image/D5603AQE0cITHvWKwbg/profile-displayphoto-shrink_200_200/0/1702603128143?e=1720656000&v=beta&t=h0H6Z_MO47RVtrGuTZEbmpIgTSx4CBIiBpuzQsiykQA"
  },
  {
    id: 2,
    tutorName: "Khanh Le",
    tutorImgSrc: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/38241936_2255830291156929_2940062520368431104_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFSt86EbFYz5G_QvDr_Xm85Nztl5qgWEs83O2XmqBYSz_kTDZThANXCKHiCAAA-EO-nEgCns75KMntTYVgAVy0x&_nc_ohc=TpNwSSyFBvUQ7kNvgFJYTGG&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYDgfVVmNfBcwrTsZWN1tWMkxTEe706e0WM0rhxNMfALwA&oe=66822156"
  }
]

const coursesData: ICourse[] = [
  {
    id: 1,
    courseName: "Backend Fundamental",
    description: "Description for backend fundamental course",
    identifier: tutorsData[0],
    publishAt: "5-11-2024",
    bgImgSrc: "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    like: 5,
    noOfMembers: 157
  },
  {
    id: 2,
    courseName: "Backend Advanced",
    description: "Description for backend advanced course",
    identifier: tutorsData[1],
    publishAt: "5-11-2024",
    bgImgSrc: "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    like: 5,
    noOfMembers: 264
  },
  {
    id: 3,
    courseName: "Frontend Fundamental",
    description: "Description for frontend fundamental course",
    identifier: tutorsData[0],
    publishAt: "5-11-2024",
    bgImgSrc: "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    like: 5,
    noOfMembers: 121
  },
  {
    id: 4,
    courseName: "Frontend Fundametal",
    description: "Description for frontend advanced course",
    identifier: tutorsData[1],
    publishAt: "5-11-2024",
    bgImgSrc: "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    like: 5,
    noOfMembers: 153
  },
  {
    id: 5,
    courseName: "Business Analysis Fundamental",
    description: "Description for BA fundamental course",
    identifier: tutorsData[0],
    publishAt: "5-11-2024",
    bgImgSrc: "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    like: 5,
    noOfMembers: 85
  },
  {
    id: 6,
    courseName: "Buisiness Analysis Advanced",
    description: "Description for BA advanced course",
    identifier: tutorsData[1],
    publishAt: "5-11-2024",
    bgImgSrc: "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
