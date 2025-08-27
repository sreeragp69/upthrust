import type { WhyUsData } from "../types/WhyUs.type"
import Student from '../assets/images/home/student.png'
export const whyUsData: WhyUsData = {
  mainTitle: "Why Study with Us ?",
  subtitle:
    "At The Upthrust, learning goes beyond the classroom. We combine industry experience with personalized guidance to make sure you gain skills that truly matter. After training, the students are also exposed to lucrative internship opportunities at various IT companies! ",
  features: [
    {
      id: "world-class-teachers",
      title: "World Class Trainers",
      description:
        "Learn from the expert mentors who are not just teachers but tech professionals with 10+ years of experience who bring the real-world insights directly to the classroom. ",
    },
    {
      id: "training-internship",
      title: "Training & Internship",
      description:
        "Hands-on training and internship programs at The Upthrust prepare you with real-world tech skills, industry exposure, and career-ready expertise.",
    },
    {
      id: "top-notch-courses",
      title: "Top Notch Courses",
      description:
        "Our online & offline courses are designed to be practical and up-to-date with the tech. The Game engine courses, like Unreal Engine course & Unity game development course, are based on the latest versions, ",
        // whereas the content for the rest courses are built to match today’s industry needs. 
    },
  ],
  statistics: [
    {
      id: "instructors",
      value: "15",
      suffix: "+",
      label: "Qualified Instructors",
    },
    {
      id: "years",
      value: "04",
      suffix: "+",
      label: "Years in Market",
    },
    {
      id: "students",
      value: "150",
      suffix: "+",
      label: "Students",
    },
    {
      id: "placement",
      value: "100",
      suffix: "+",
      label: "Placements",
    },
  ],
  illustration: {
    src: Student,
    alt: "Student with laptop illustration",
  },
}
