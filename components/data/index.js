//import Image from 'next/image';
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
import BlogImage6 from '../../public/image/blog/blog-img6.png';
import BlogImage2 from '../../public/image/blog/blog-img2.png';
import BlogImage3 from '../../public/image/blog/blog-img3.png';
import Joy1 from '../../public/image/blog1/joy1.png';
import Joy2 from '../../public/image/blog1/joy2.png';
import Joy3 from '../../public/image/blog1/joy3.png';
import Joy4 from '../../public/image/blog1/joy4.png';
import Joy5 from '../../public/image/blog1/joy5.png';
import Joy6 from '../../public/image/blog1/joy6.png';

export const data = {
  navItems: [
    {
      label: 'Underbelly',
      path: '#',
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
      link: '#',
    },
    {
      id: 2,
      image: news2,
      title: '',
      desc:
        'You can (and should) train your emotional self as much as you train your physcial body. If you take steps each day to get emotionally stronger and more flexible, when storms come, you will be ready',
      link: '#',
    },
    {
      id: 3,
      image: news3,
      title: '',
      desc:
        'Are you feeling pretty good but want to learn more about how your emotional self ticks? Start here to read, listen, and learn about how to care for your wild and precious self.',
      link: '/stories',
    },
    {
      id: 4,
      image: news4,
      title: '',
      desc:
        'Everybody hurts sometimes. It happens to all of us. If you are suffering now, take needed next steps to care for yourself — Now.',
      link: '#',
    },
  ],
  services: [
    {
      id: 1,
      icon: serviceIcon1,
      title: 'Newsletter',
      desc:
        ' Wild + Precious: 10 Things — a sweet + juicy Monday morning newsletter. "Always inspring" "Delicious" "delighted me in so many ways" ',
      link: '/stories',
    },
    {
      id: 2,
      icon: serviceIcon2,
      title: 'Bookshop',
      desc:
        'A curation of wild and precious books. This service is currently only available in the UK and USA but it is a lovely company I want to support. Amazon for Indies, basically. If it works for you, consider buying your books from them:',
      link: 'https://bookshop.org/shop/underbelli',
    },
    {
      id: 3,
      icon: serviceIcon3,
      title: 'Podcast',
      desc:
        'Wild + Precious Conversations every Thursday with guests who meander and muse with me on the current weekly theme.',
      link: '/wild-and-precious-conversations',
    },
    {
      id: 4,
      icon: serviceIcon4,
      title: 'Course: Journal',
      desc:
        '52 weeks of quotes inspired from literature across time and space paired with a question to take you deep. Book + course with videos. $20',
      link: 'https://wildprecious.thinkific.com/courses/journal-to-your-heart',
    },
    {
      id: 5,
      icon: serviceIcon5,
      title: 'Self Care Kit',
      desc:
        'Short course based in the latest research around burnout and self care. You will learn your special care and feed to create your own self care kit, so you will be ready the next time life gets gnarly. $14.99',
      link: 'https://wildprecious.thinkific.com/courses/self-care-kit',
    },
    {
      id: 6,
      icon: serviceIcon6,
      title: 'Course: Discover Yourself',
      desc:
        'Take a course to discover and gain compassion for your inner critic. $10 Coming Soon',
      link: '#',
    },
  ],
  blog: [
    {
      id: 1,
      title: 'Bloom Where You Are Planted',
      thumbnail_url: BlogImage6,
      date: 'September 9, 2020',
      postLink: '/posts/blog6',
    },
    {
      id: 2,
      title: 'First Aid for Grief',
      thumbnail_url: BlogImage2,
      date: 'April 8, 2020',
      postLink: '/posts/blog2',
    },
    {
      id: 3,
      title: 'Authenic Vulnerability',
      thumbnail_url: BlogImage3,
      date: 'January 4, 2020',
      postLink: '/posts/blog3',
    },
  ],
  blog1: [
    {
      id: 1,
      title: 'Train for Joy',
      thumbnail_url: Joy1,
      date: 'March 13, 2020',
      postLink: '#',
    },
    {
      id: 2,
      title: 'First Aid for Grief',
      thumbnail_url: Joy2,
      date: 'April 8, 2020',
      postLink: '#',
    },
    {
      id: 3,
      title: 'Provocation: How to Use it for Good',
      thumbnail_url: Joy3,
      date: 'January 4, 2020',
      postLink: '#',
    },
    {
      id: 4,
      title: 'Train for Joy',
      thumbnail_url: Joy4,
      date: 'March 13, 2020',
      postLink: '#',
    },
    {
      id: 5,
      title: 'First Aid for Grief',
      thumbnail_url: Joy5,
      date: 'April 8, 2020',
      postLink: '#',
    },
    {
      id: 6,
      title: 'Provocation: How to Use it for Good',
      thumbnail_url: Joy6,
      date: 'January 4, 2020',
      postLink: '#',
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
      title: 'bibliotherapy',
      description:
        'In other words, reading good books. Check out a few good books to start and see where it takes you.',
      link: 'https://bookshop.org/shop/underbelli',
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
      title: '',
      link: '/',
    },
    {
      id: 2,
      title: '',
      link: '',
    },
    {
      id: 3,
      title: '',
      link: '',
    },
    {
      id: 4,
      title: '',
      link: '',
    },
  ],
  footer: [
    {
      id: 1,
      title: 'Underbelly',
      list: [
        {
          id: 1,
          title: 'About',
          link: '/about',
        },
        {
          id: 2,
          title: 'Breathe Manifesto',
          link: '/breathe',
        },
        {
          id: 3,
          title: 'Client Work',
          link: '/client-work',
        },
        {
          id: 4,
          title: 'Acumen Moral Leadership Group',
          link: '#',
        },
        {
          id: 5,
          title: 'Blog',
          link: '/stories',
        },
      ],
    },
    {
      id: 2,
      title: 'Wild + Precious',
      list: [
        {
          id: 1,
          title: 'Newsletter',
          link: 'https://newsletter.underbel.li',
        },
        {
          id: 2,
          title: 'Podcast',
          link: '/tags/podcast',
        },
        {
          id: 3,
          title: 'Courses',
          link: '/courses',
        },
        {
          id: 4,
          title: 'Shop',
          link: '#',
        },
        {
          id: 5,
          title: 'Blog',
          link: '/tags/precious',
        },
      ],
    },

    {
      id: 4,
      title: 'Connect',
      list: [
        {
          id: 1,
          title: 'Say Hello',
          link: '/contact',
        },
        {
          id: 2,
          title: 'Instagram',
          link: 'https://instagram.com/undrblly',
        },
        {
          id: 3,
          title: 'Bookshop',
          link: 'https://bookshop.org/shop/underbelli',
        },
        {
          id: 4,
          title: 'Wendy Kelly',
          link: 'https://www.wendykianakelly.com',
        },
        {
          id: 5,
          title: '',
          link: '#',
        },
      ],
    },
    {
      id: 3,
      title: 'Support',
      list: [
        {
          id: 1,
          title: 'Share',
          link: '/how-to-share',
        },
        {
          id: 2,
          title: 'Connect',
          link: '/contact',
        },
        {
          id: 3,
          title: 'Patreon',
          link: 'https://www.patreon.com/wildandprecious',
        },
        {
          id: 4,
          title: 'Rate/Review/Subscribe',
          link: '/rate-review-subscribe',
        },
        {
          id: 5,
          title: '',
          link: '/membership',
        },
      ],
    },
    {
      id: 5,
      title: 'Policy',
      list: [
        {
          id: 1,
          title: 'Privacy',
          link: '/privacy',
        },
      ],
    },
  ],
};
