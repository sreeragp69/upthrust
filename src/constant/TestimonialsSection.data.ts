import type { Testimonial } from "../types/TestimonialsSection.type"
import testuser from '../assets/images/carosel/testuser.png'
import testimonial1 from '../assets/images/carosel/testimonial1.jpeg'
import testimonial2 from '../assets/images/carosel/testimonial2.jpeg'
import testimonial3 from '../assets/images/carosel/testimonial3.jpeg'
export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Divya Khandelwal",
    designation: "Digital Marketing",
    testimonial:
      "I studied Digital Marketing here and also completed my internship with the same team. My overall experience was very positive. The best part was getting to work on real projects, which gave me practical knowledge and confidence. Whenever I faced challenges, the team was always supportive and guided me in the right direction. After completing my training and internship, I also got job placement, which helped me start my career in digital marketing.",
    image: testimonial1,
  },
  {
    id: "2",
    name: "Kartavya Pavar",
    designation: "Game Devlopment [UNREAL]",
    testimonial:
      "I have recently completed my game development course, and my experience here has been excellent. The faculty taught me a lot about game development and significantly enhanced my skills.",
    image: testimonial2, 
  },
  {
    id: "3",
    name: "Rishi Mishra",
    designation: "Web Development",
    testimonial:
      "I enjoyed the practical examples and learned how to design with better user experience in mind.",
    image: testimonial3,
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    designation: "UI/UX Design",
    testimonial:
      "The design program exceeded my expectations. From wireframing to prototyping, every aspect was covered thoroughly. The feedback from instructors helped me build a portfolio that impressed employers.",
    image: testuser,
  },
  // {
  //   id: "5",
  //   name: "David Thompson",
  //   designation: "Cybersecurity",
  //   testimonial:
  //     "Excellent program with up-to-date content on cybersecurity threats and solutions. The hands-on labs and real-world scenarios prepared me well for industry challenges. Highly recommend to anyone looking to enter cybersecurity.",
  //   image: testuser,

  // },
]
