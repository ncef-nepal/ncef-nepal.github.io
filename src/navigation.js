import {
  getPermalink,
  getBlogPermalink,
  // getAsset,
} from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
      links: [
        {
          text: 'About',
          href: getPermalink('/#about'),
        },
        {
          text: 'Mission',
          href: getPermalink('/#mission'),
        },
        {
          text: 'Vision',
          href: getPermalink('/#vision'),
        },
        {
          text: 'Statement of Faith',
          href: getPermalink('/#statement_of_faith'),
        },
        {
          text: 'Activities',
          href: getPermalink('/#activities'),
        },
        {
          text: 'Events',
          href: getPermalink('/#events'),
        },
        {
          text: 'Board',
          href: getPermalink('/#board'),
        },
        {
          text: 'FAQs',
          href: getPermalink('/#faqs'),
        },
      ],
    },

    {
      text: 'About us',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'Vacancy',
      href: getPermalink('/vacancy'),
    },
    {
      text: 'Publishing',
      href: getBlogPermalink(),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'About',
      links: [
        { text: 'History', href: '#' },
        { text: 'Mission', href: '#' },
        { text: 'Vision', href: '#' },
        { text: 'Statement of Faith', href: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Code of Conduct', href: '#' },
        { text: 'Events', href: '#' },
        { text: 'Participating', href: '#' },
        { text: 'Contributing', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Mentoring', href: '#' },
        { text: 'Training', href: '#' },
        { text: 'Networking', href: '#' },
        { text: 'Skill Development', href: '#' },
        { text: 'Professional Development', href: '#' },
      ],
    },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    //   { text: 'Terms', href: getPermalink('/terms') },
    //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `Nepal Christian Engineers Fellowship Moto`,
};
