import { UpthrustAchievementProps } from '../types/UpthrustAchievement.type';
import achievement from '../assets/images/cards/achievement-card.jpeg'
import { achievement1, achievement2, achievement3, achievement4 } from '../assets/images';
export const upthrustAchievementData: UpthrustAchievementProps = {
  title: 'The Upthrust',
  subtitle: 'Achievement',
  description: 'Over the years, The Upthrust has signed several MoUs with leading colleges & universities, conducted industrial visits and interactive seminars and participated in job fairs to create real career opportunities for the students. ',
  buttonText: 'Contact Now',
  achievements: [
    {
      id: '1',
      title: 'Centre of Innovation at Sage University',
      description: 'The integrative approach fosters connections across subjects. We are starting a Centre of Innovation with Sage University at Indore to help students  develop practical skills and transform creative ideas into reality.',
      imageSrc: achievement4
    },
    {
      id: '2',
      title: 'Centre of Innovation at Prashanti Group of Institutions',
      description: 'We are partnering with Prashanti Group of Institutions to provide students with industry-based training, real project work, and better career opportunities.',
      imageSrc: achievement3
    },
    {
      id: '3',
      title: 'Recognition at Yuva Sangam Job Fair',
      description: 'Honored by State Minister Smt. Krishna Gaur and Shradha Suhane (CEO, Vidhyapeeth Group) for our contribution to student training and career development in gaming and technology.',
      imageSrc: achievement2
    },
    {
      id: '4',
      title: 'Indore’s Biggest Game Development Workshop',
      description: 'Successfully organized a large-scale workshop with 120+ students participating, creating hands-on learning experiences and sparking new career opportunities in game development.',
      imageSrc: achievement1
    }
  ]
};