import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shafiur Ibrahim', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Shafiur',
  subtitle: "I'm a Full Stack Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Web Developer with enthusiasm and focus on Full Stack Development.',
  // eslint-disable-next-line prettier/prettier
  paragraphTwo: "A Junior Full-Stack Web Developer with a background and education in Jurisprudence. Also, currently pursuing a bachelor's degree in computer science to better understand and assess my thoughts on the projects I look forward to work in the future. ",
  // eslint-disable-next-line prettier/prettier
  paragraphThree: 'Recently graduated from Le Wagon: Full Stack Web Development Coding Bootcamp in Bali, Indonesia. As seeking full-time to part-time employment/internship opportunities.',
  paragraphFour: 'Feel free to contact me via email at anytime - shafiuribrahim@gmail.com',
  resume: 'https://drive.google.com/file/d/138VcBELN55pVczh3AKeaJfBTIPKLwzSD/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'voiecover.jpg',
    title: 'voie',
    // eslint-disable-next-line prettier/prettier
    info:'Allows users to bypass the traditional process of selling a house. Users can select services from various options based on their needs, giving more control to the homeowner on the selling and buying process.',
    info2: '',
    url: '',
    repo: 'https://github.com/bfalt/voie-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mobikecover.jpg',
    title: 'moBike',
    // eslint-disable-next-line prettier/prettier
    info: 'Mobike is a motorbike sharing marketplace where guests can book any bike they want, wherever they want it, from a vibrant community of local hosts. Users can easily access the availability, location, and price of the motorbike from the homepage and share the link with others. ',
    // eslint-disable-next-line prettier/prettier
    info2: 'Designed and implemented Node server and created a database schema that was then integrated and used by the front end.',
    url: '',
    repo: 'https://github.com/bfalt/mobike', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hornyramcover.jpg',
    title: 'Mister Cocktail',
    // eslint-disable-next-line prettier/prettier
    info: 'A simple rails application for storing and viewing cocktail recipes. The aim of this project was an exercise in schema design and rails web development. The project also incorporates image hosting on Cloudinary image service.',
    info2: '',
    url: 'https://frozen-sierra-76224.herokuapp.com/',
    repo: 'https://github.com/shafiuribrahim/rails-mister-cocktail', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's talk!",
  email: 'shafiuribrahim@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/shafiur.img/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shafiuribrahim/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/shafiuribrahim',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
