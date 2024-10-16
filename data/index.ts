export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'Listening, adapting, creating: Crafting websites that speak your language',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[40vh]',
    imgClassName: 'w-[80vw] h-[80vh]',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "Global hours, fluent English",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'Adaptive and future-focused',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech-driven problem solver and creative coder',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a Pwnagotchi ',
    description: 'Deep Reinforcement Learning for WiFi pwning',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'ScriptLI',
    des: 'Generate ready-to-start project with essentials libraries, database setting,unit testing & pipeline already configured.',
    img: '/cli.svg',
    iconLists: ['/docker.svg', '/ts.svg', '/js.svg', ],
    link: 'https://github.com/Radiusof/ScriptLI',
  },
  {
    id: 2,
    title: 'Virtual Piano',
    des: 'Virtual Piano built with Javascript.',
    img: '/piano.svg',
    iconLists: ['/node.svg', '/ts.svg', '/js.svg',],
    link: 'https://github.com/Radiusof/Virtual-Piano',
  },
  
  {
    id: 3,
    title: 'Connect Four Game (Puissance 4)',
    des: 'A C++ implementation of the classic Connect Four strategy game.Signle or Two-player Mode',
    img: '/connect.svg',
    iconLists: ['/c++.svg'],
    link: 'https://github.com/Radiusof/Puissance4',
  },
  {
    id: 4,
    title: 'Beep Song',
    des: 'C++ application that allows users to generate music using the internal speaker of their computer',
    img: '/music.svg',
    iconLists: ['c++.svg'],
    link: 'https://github.com/Radiusof/BeepSong',
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Kevin was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Kevin's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Kevin is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },

];

export const companies = [
  {
    id: 1,
    name: 'Canon Medical',
    nameImg: '/canon.svg',
  },
  {
    id: 2,
    name: 'IdKids',
    nameImg: '/idkids.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Back End Dev - IDKids',
    desc: 'Development of a billing system through 4 distinct microservices + Development of a new product repository centralizing all the information systems of the company .',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 2,
    title: 'Full Stack Dev- Canon Medical',
    desc: 'Designed and developed a quote editing software using Power Platform, NodeJs & Typescript.',
    className: 'md:col-span-2', 
    thumbnail: '/exp1.svg',
  },
  {
    id: 3,
    title: 'Full Stack Dev- Datakhi',
    desc: 'Led the dev of several websites + Designed and maintained web scrawler and scrappers for internal projects.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
  },
  {
    id: 2,
    img: '/twit.svg',
  },
  {
    id: 3,
    img: '/link.svg',
  },
];
