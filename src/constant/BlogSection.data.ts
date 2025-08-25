import { Blog1,Blog2,Blog3,Blog4 } from "../assets/images";
import type { BlogPost } from "../types/BlogSection.type";


export const BLOG_SECTION_DATA = {
  title: "Latest from the Blog",
  subtitle:
    "With our experience of 11 years in Digital Marketing training and Game Development. With our experience of 11 years in Digital Marketing training.",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Digital Marketing Mastery: Advanced Strategies for 2024",
    description:
      "With our experience of 11 years in Digital Marketing training and Game Development, we've seen the industry evolve dramatically. Learn the latest techniques that are driving results for businesses worldwide. From AI-powered campaigns to personalized customer journeys, discover what's working now.",
    image: Blog1,

    imageAlt: "Conference speaker presenting to audience",
    size: "large",
  },
  {
    id: "2",
    title: "Top Education Events in India",
    description:
      "Discover the most impactful educational conferences and workshops happening across India. These events are shaping the future of learning.",
    image: Blog2,    
    imageAlt: "Top education events in India",
    size: "medium",
    featured: true,
  },
  {
    id: "3",
    title: "E-Learning Revolution",
    description:
      "The digital transformation of education has opened new possibilities for learners worldwide. Explore how technology is making quality education more accessible than ever before. From interactive platforms to AI tutors, the future of learning is here.",
    image: Blog3,
    imageAlt: "E-learning and digital education concept",
    size: "medium",
  },
  {
    id: "4",
    title: "Game Development Trends",
    description:
      "The gaming industry continues to push boundaries with innovative technologies and creative storytelling approaches.he gaming industry continues to push boundaries with innovative technologies and creative storytelling approaches. ies and creative storytelling approaches.",
    image: Blog4,
    imageAlt: "Conference attendees in seminar hall",
    size: "large",
  },
];
