import { Ar, dev3d, digitalMarketing, flutter, Gaming, graphics, metaverse, wedev } from "../assets/images";


const AppHeaderData = [
  {
    id: 1,
    name: "Home",
    path: "#home",
  },
  {
    id: 2,
    name: "About us",
    path: "#about-us",
  },
  {
    id: 3,
    name: "Courses",
    path: "#courses",
    isDropdown: true,
    dropdownList:[
      {
        courseImg:Gaming,
        courseName:"Game Developement & Design",
        description:"Learn to create engaging stories, levels and mechanics that make games fun and addictive."
      },
      {
        courseImg:metaverse,
        courseName:"Metaverse [AR & VR]",
        description:"Step into AR/VR technologies and build interactive metaverse experiences."
      },
       {
        courseImg:digitalMarketing,
        courseName:"Digital Marketing",
        description:"Learn SEO, SMM, GEO, Google Ads, Meta Ads and Google Analytics to grow a business in the digital space."
      },
      {
        courseImg:wedev,
        courseName:"Web & App Development",
        description:"Master front-end and full-stack skills to design and develop modern and responsive websites"
      },
      {
        courseImg:graphics,
        courseName:"UI/UX & Graphics Design",
        description:"Design intuitive and user-friendly interfaces that deliver a smooth digital experience."
      },
     
     
    ]
    
  },
  {
    id: 4,
    name: "Batches",
    path: "#batches",
  },
  {
    id: 5,
    name: "Blog",
    path: "#blog",
  },
  {
    id: 6,
    name: "Contact us",
    path: "#contact-us",
  },
];

export default AppHeaderData;
