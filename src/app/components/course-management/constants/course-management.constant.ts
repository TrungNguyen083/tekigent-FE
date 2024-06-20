import { projectsData } from "../../project-management/constants/project-management.constant";
import { ITurtor, ICourse } from "../models/course-management.model";

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
  
  export const coursesData: ICourse[] = [
    {
      id: 1,
      project: projectsData[0],
      courseName: "Fundamentals of Backend Engineering",
      identifier: tutorsData[0],
      courseWebsite: "https://www.udemy.com/course/fundamentals-of-backend-communications-and-protocols/?couponCode=2021PM25",
      description: "Understand backend communication design patterns, protocols, execution and proxying",
      skills: "Learn gRPC, WebRTC, WebSockets, Operating System fundamentals (Thread, Process, async IO in linux)",
      primary: "Certificate",
      bgImgSrc: "https://img-c.udemycdn.com/course/240x135/4953660_3133_3.jpg",
      certificateImage: "https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
      publishAt: "05-01-2024",
      like: 4233,
      noOfMembers: 5346,
      lastUpdated: "10-1-2024",
    },
    {
      id: 2,
      project: projectsData[0],
      courseName: "Build a Backend RESTAPI with Java & Spring Boot Framework - Beginer",
      identifier: tutorsData[0],
      courseWebsite: "https://www.udemy.com/course/django-python/?couponCode=2021PM25",
      description: "Finally create that App &amp; fully-functioning user database in this crash course to building a REST API",
      skills: "How to build your own browsable, self documenting REST API, How to confidently use some of the most in-demand full stack technologies today",
      primary: "Certificate",
      bgImgSrc: "https://blog.back4app.com/wp-content/uploads/2023/12/13.-What-are-some-popular-backend-APIs_-1.png",
      certificateImage: "https://marketplace.canva.com/EAFlVDzb7sA/1/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-bK_WEelNCjo.jpg",
      publishAt: "02-02-2024",
      like: 2352,
      noOfMembers: 3464,
      lastUpdated: "07-02-2024",
    },
    {
      id: 3,
      project: projectsData[1],
      courseName: "Backend Master Class [Golang + Postgres + Kubernetes + gRPC]",
      identifier: tutorsData[0],
      courseWebsite: "https://www.udemy.com/course/backend-master-class-golang-postgresql-kubernetes/?couponCode=2021PM25",
      description: "Learn everything about backend web development: Golang, Postgres, Redis, Gin, gRPC, Docker, Kubernetes, AWS, CI/CD",
      skills: "Build a minimal Docker image for deployment and use Docker-compose for development, Automatically generate Golang code to interact with the database",
      primary: "Certificate",
      bgImgSrc: "https://img-c.udemycdn.com/course/240x135/3959106_03de_6.jpg",
      certificateImage: "https://www.shutterstock.com/shutterstock/photos/1310317375/display_1500/stock-vector-certificate-template-diploma-of-modern-design-or-gift-certificate-vector-illustration-1310317375.jpg",
      publishAt: "28-03-2024",
      like: 6456,
      noOfMembers: 3422,
      lastUpdated: "08-04-2024",
    },
    {
      id: 4,
      project: projectsData[1],
      courseName: "Comple Backend Development 2024 Bundel - Java Roadmap",
      identifier: tutorsData[0],
      courseWebsite: "https://www.udemy.com/course/software-developer-masterclass/?couponCode=2021PM25",
      description: "Become Self-Taught Python Developer - Backend Development in 2024 with Python, Django, SQLite3, Railway, GIT &amp; More!",
      skills: "Learn To Write Clean And Proper Java Code With Concept, Learn About 4 Pillars Of Object Oriented Programming!",
      primary: "Certificate",
      bgImgSrc: "https://img-c.udemycdn.com/course/240x135/2625826_b507_5.jpg",
      certificateImage: "https://svg.template.creately.com/BVJzef5PKaw",
      publishAt: "25-01-2024",
      like: 2352,
      noOfMembers: 2532,
      lastUpdated: "25-02-2024",
    },
    {
      id: 5,
      project: projectsData[2],
      courseName: "Getting Started with Front-End and Web Development",
      identifier: tutorsData[1],
      courseWebsite: "https://www.coursera.org/learn/getting-started-with-front-end-and-web-development",
      description: "Gain insight into a topic and learn the fundamentals",
      skills: "Define front-end development, list roles and skills, outline web development steps, and explore UI/UX design, collaboration, and industry trends.",
      primary: "Certificate",
      bgImgSrc: "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      certificateImage: "https://marketplace.canva.com/EAFh7cFx9So/4/0/1600w/canva-white-and-gold-certificate-of-appreciation-phefkzBYa-A.jpg",
      publishAt: "01-01-2024",
      like: 2352,
      noOfMembers: 2345,
      lastUpdated: "02-01-2024",
    },
    {
      id: 6,
      project: projectsData[2],
      courseName: "HTML, CSS, and Javascript for Web Developers",
      identifier: tutorsData[1],
      courseWebsite: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
      description: "You can learn HTML, CSS, Javascript for beginer",
      skills: "HTML, CSS, JavaScript",
      primary: "Certificate",
      bgImgSrc: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
      certificateImage: "https://i.ytimg.com/vi/HbYJor7HDBc/maxresdefault.jpg",
      publishAt: "05-11-2023",
      like: 1241,
      noOfMembers: 2345,
      lastUpdated: "05-11-2023",
    },
    {
      id: 7,
      project: projectsData[3],
      courseName: "Developing Front-End Apps with React",
      identifier: tutorsData[1],
      courseWebsite: "https://www.coursera.org/learn/developing-frontend-apps-with-react",
      description: "Course make beginer get level up of Front-End Skills",
      skills: "React Framework, Web Development, Javascript",
      primary: "Certificate",
      bgImgSrc: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/5992673/cover_image/retina_1708x683/1005_Design-Patterns-in-React_Cover-44247834a5b31e8d08e5bbbdac4a6750.png",
      certificateImage: "https://piktochart.com/wp-content/uploads/2023/05/large-272.jpg",
      publishAt: "05-11-2023",
      like: 1345,
      noOfMembers: 1516,
      lastUpdated: "05-11-2023",
    },
    {
      id: 8,
      project: projectsData[3],
      courseName: "Developing Front-End Apps with Angular",
      identifier: tutorsData[1],
      courseWebsite: "https://www.coursera.org/learn/codio-angular-for-front-end-engineers",
      description: "Course make beginer get level up of Front-End Skills",
      skills: "Angular Framework, Web Development, Javascript",
      primary: "Certificate",
      bgImgSrc: "https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/images/ang16145638173866.jpg",
      certificateImage: "https://static.vecteezy.com/system/resources/previews/006/174/599/non_2x/red-gold-seminar-certificate-template-free-vector.jpg",
      publishAt: "05-11-2024",
      like: 2752,
      noOfMembers: 2757,
      lastUpdated: "05-11-2024",
    },
  ];