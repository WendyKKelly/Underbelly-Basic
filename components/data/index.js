
import Image from '../Image';
import news1 from '../../public/image/news/1.png';
import news2 from '../../public/image/news/2.png';
import news3 from '../../public/image/news/3.png';
import news4 from '../../public/image/news/4.png';
import support1 from '../../public/image/support1.png';
import support2 from '../../public/image/support2.png';
import serviceIcon1 from '../../public/image/services/1.png';
import serviceIcon2 from '../../public/image/services/2.png';
import serviceIcon3 from '../../public/image/services/3.png';
import serviceIcon4 from '../../public/image/services/4.png';
import serviceIcon5 from '../../public/image/services/5.png';
import serviceIcon6 from '../../public/image/services/6.png';
import BlogImage1 from '../../public/image/blog/blog-img1.png';
import BlogImage2 from '../../public/image/blog/blog-img2.png';
import BlogImage3 from '../../public/image/blog/blog-img3.png';


export const data = {
  navItems: [
    {
      label: 'Home',
      path: '#home',
      offset: '70',
    },
    {
      label: '',
      path: '#',
      offset: '70',
    },
    {
      label: '',
      path: '#',
      offset: '70',
    },
    {
      label: 'Grow',
      path: '#service',
      offset: '70',
    },
    {
      label: 'Media',
      path: '#blog',
      offset: '70',
    },
  ],
  newsFeed: [
    {
      id: 1,
      image: news1,
      title: '',
      desc:
        'Curious about your emotional wellness? Assessments are a great way to learn more about yourself, what makes you tick, and how you can best take good care of your beautiful self.',
      link: '#check-in',
    },
    {
      id: 2,
      image: news2,
      title: '',
      desc:
        'You can (and should) train your emotional self as much as you train your physcial body. If you take steps each day to get emotionally stronger and more flexible, when storms come, you will be ready',
      link: '#train',
    },
    {
      id: 3,
      image: news3,
      title: '',
      desc:
        'Are you feeling pretty good but want to learn more about how your emotional self ticks? Start here to read, listen, and learn about how to care for your wild and precious self.',
      link: '#learn',
    },
    {
      id: 4,
      image: news4,
      title: '',
      desc:
        'Everybody hurts sometimes. It happens to all of us. If you are suffering now, take needed next steps to care for yourself — Now.',
      link: '#sad',
    },
  ],
  services: [
    {
      id: 1,
      icon: serviceIcon1,
      title: '10 Wild and precious things',
      desc:
        'A free weekly newsletter every Monday morning to start your week off right.',
      link: '#',
    },
    {
      id: 2,
      icon: serviceIcon2,
      title: 'Stories from my underbelly',
      desc: 'An every so often blog hosted on Medium.',
      link: '#',
    },
    {
      id: 3,
      icon: serviceIcon3,
      title: 'Wild and precious conversations',
      desc:
        'A podcast every Thursday with guests who speak freely with me on topics related to your emotional health.',
      link: 'https://wildprecious.thinkific.com/',
    },
    {
      id: 4,
      icon: serviceIcon4,
      title: 'Journal',
      desc:
        'A 365 day journal to take you through a year of emotional growth. Pay-as-you-will',
      link: 'https://wildprecious.thinkific.com/',
    },
    {
      id: 5,
      icon: serviceIcon5,
      title: 'Life Rules',
      desc:
        'A guided template to take you through the process of writing your own life rules. Pay-as-you-will',
      link: 'https://wildprecious.thinkific.com/',
    },
    {
      id: 6,
      icon: serviceIcon6,
      title: 'Discover Yourself',
      desc:
        'Take a course to discover and gain compassion for your inner critic.',
      link: 'https://wildprecious.thinkific.com/',
    },
  ],
  blog: [
    {
      id: 1,
      title: 'Train for Joy',
      thumbnail_url: BlogImage1,
      date: 'March 13, 2020',
      postLink: '#1',
    },
    {
      id: 2,
      title: 'First Aid for Grief',
      thumbnail_url: BlogImage2,
      date: 'April 8, 2020',
      postLink: '#2',
    },
    {
      id: 3,
      title: 'Provocation: How to Use it for Good',
      thumbnail_url: BlogImage3,
      date: 'January 4, 2020',
      postLink: '#3',
    },
  ],
  features: [
    {
      id: 1,
      icon: 'flaticon-pencil-case',
      title: 'Journaling',
      description:
        'There are so many ways to do this exercise. Old school, audio, video, find your best way to a daily journaling practice.',
    },
    {
      id: 2,
      icon: 'flaticon-creative',
      title: 'Inquiry',
      description: 'Take some time each day to check in with yourself.',
    },
    {
      id: 3,
      icon: 'flaticon-magnifying-glass',
      title: 'Quests',
      description:
        'This is my preferred term for daily exercises to challenge yourself to continue your story: become a stronger, more flexible, more emotionally fit hero of your story.',
    },
    {
      id: 4,
      icon: 'flaticon-startup',
      title: 'Self Care',
      description:
        'This looks different for everyone. Take time, starting today, to build out your own self care kit, so when the time comes that you need a little self care first aid, you are ready.',
    },
    {
      id: 5,
      icon: 'flaticon-hourglass',
      title: 'Meditation and Prayer',
      description:
        'There are many ways to approach meditation and prayer. Take time to find your own practice.',
    },
    {
      id: 6,
      icon: 'flaticon-group',
      title: 'Therapy',
      description:
        'No one does this alone. Every hero needs a Guide. Find yours and begin your practice.',
    },
  ],

  helps: [
    {
      id: 1,
      icon: support1,
      title: 'Psychology Today <Find a Therapist>',
      desc:
        'A great list of therapists you can serach for by location and other preferences.',
    },
  ],
  footerNav: [
    {
      id: 1,
      title: 'Home',
      link: '/',
    },
    {
      id: 2,
      title: 'About',
      link: '/about/about',
    },
    {
      id: 3,
      title: '',
      link: '#',
    },
    {
      id: 4,
      title: 'Support Our Mission',
      link: 'https://www.patreon.com/underbellyproject',
    },
    {
      id: 5,
      title: '',
      link: '#',
    },
  ],

}
