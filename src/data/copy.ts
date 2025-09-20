import type { ValueOf } from 'next/constants';

export const slogan = 'Think. Yield. Zenith.';
export const name = 'Thijs Broerse';
export const role = 'Interim Tech Lead / Freelance Senior Frontend Developer';
export const title = `TYZ - ${name} - ${role}`;

export const description =
  'Hi, I&apos;m Thijs Broerse, a passionate and highly skilled frontend expert with over 20 years of experience in web development and leadership. I excel at setting up, developing, and maintaining complex frontend systems, as well as leading international development teams. I have contributed to numerous award-winning projects and specialize in TypeScript, React, NextJS, Leadership and architecture.';

type Link = {
  href: string;
  title: string;
  text: string;
};

export const email: Link = {
  href: 'mailto:thijs@tyz.nl',
  title: 'Contact me by email on thijs@tyz.nl',
  text: 'thijs@tyz.nl',
};

export const phonenumber: Link = {
  href: 'tel:+31689936821',
  title: 'call me on my phone-number +31 (0) 6 899 36 821',
  text: '+31 (0) 6 899 36 821',
};

export const paths = {
  home: '/',
  portfolio: '/portfolio',
  about: '/about',
} as const;

export type Path = ValueOf<typeof paths>;

type Page = {
  path: Path;
  title: string;
};

export const pages: ReadonlyArray<Page> = [
  {
    path: paths.home,
    title: 'Home',
  },
  {
    path: paths.portfolio,
    title: 'Portfolio',
  },
  {
    path: paths.about,
    title: 'About me',
  },
] as const;

export type Article = {
  title: string;
  subtitle: string;
  text: string;
};

export const articles: ReadonlyArray<Article> = [
  {
    title: 'Think.',
    subtitle: 'Elevate your software architecture',
    text: `In the world of web development, sound software architecture is the
            bedrock of every successful project. As an interim Tech Lead with a
            specialization in Frontend and web development, I make
            'Think' the cornerstone of my approach. It's about
            envisioning the structural framework of your digital masterpiece,
            meticulously planning every element to ensure scalability,
            efficiency, and sustainability. Together, we'll lay the
            foundation for a robust software architecture that stands the test
            of time, enabling your project to thrive and evolve.`,
  },
  {
    title: 'Yield.',
    subtitle: 'Leadership that produces results',
    text: `Effective leadership is the key to unlocking the full potential of
            your development team. As an interim Tech Lead, my focus on
            'Yield' centers on cultivating strong leadership skills. I
            empower your team to excel, guiding them towards peak performance
            and success. Through mentorship, collaboration, and clear
            communication, I ensure that your project not only meets but exceeds
            expectations. With me at the helm, you'll experience leadership
            that produces tangible results, driving your project forward
            with confidence.`,
  },
  {
    title: 'Zenith.',
    subtitle: 'Crafting web experiences at their peak',
    text: `Every website aspires to reach its 'Zenith', the pinnacle
            of its potential. My passion lies in crafting web experiences that
            are nothing short of extraordinary. With a keen eye for design and
            an unwavering commitment to detail, I transform your vision into
            reality. 'Zenith' is where amazing websites are born,
            where aesthetics meet functionality, and where user experience
            reigns supreme. Together, we'll ascend to the peak of web
            development, creating digital wonders that captivate your audience
            and leave a lasting impact.`,
  },
];

type Skill = {
  name: string;
  description?: string;
  href?: string;
  alternatives?: ReadonlyArray<string>;
  isHighlighted?: boolean;
};

export const skills: ReadonlyArray<{
  group: string;
  skills: ReadonlyArray<Skill>;
}> = [
  {
    group: 'Coding & programming',
    skills: [
      {
        name: 'Frontend Web Development',
        href: 'https://en.wikipedia.org/wiki/Front-end_web_development',
        alternatives: ['Front End', 'Front-end', 'Web Development'],
        isHighlighted: true,
      },
      {
        name: 'Full-stack Web Development',
        alternatives: ['Full-stack'],
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        alternatives: ['TS'],
        isHighlighted: true,
      },
      {
        name: 'JavaScript',
        href: 'https://en.wikipedia.org/wiki/JavaScript',
        alternatives: ['JS'],
      },
      {
        name: 'NodeJS',
        href: 'https://nodejs.org/',
        description:
          'Node.js® is an open-source, cross-platform JavaScript runtime environment.',
        alternatives: ['Node', 'Node.JS'],
      },
      {
        name: 'PHP',
        href: 'https://www.php.net/',
        description: 'PHP: Hypertext Preprocessor',
      },
      {
        name: '.NET',
        href: 'https://dotnet.microsoft.com/',
        description:
          '.NET is the free, open-source, cross-platform framework for building modern apps and powerful cloud services.',
      },
      {
        name: 'MySQL',
        href: 'https://www.mysql.com/',
        description:
          'MySQL is an open-source relational database management system.',
      },
      {
        name: 'FP',
        href: 'https://en.wikipedia.org/wiki/Functional_programming',
        description: 'Functional programming',
      },
      {
        name: 'OOP',
        href: 'https://en.wikipedia.org/wiki/Object-oriented_programming',
        description: 'Object-Oriented Programming',
      },
      {
        name: 'REST',
        href: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
        description: 'Representational state transfer',
      },
      {
        name: 'JSON',
        description: 'JavaScript Object Notation',
        href: 'https://www.json.org/json-en.html',
      },
      { name: 'GraphQL', href: 'https://en.wikipedia.org/wiki/GraphQL' },
      { name: 'Linting', href: 'https://github.com/mediamonks/eslint-config' },
      {
        name: 'Coding Standards',
        href: 'https://github.com/mediamonks/frontend-coding-standards',
      },

      { name: 'Debugging' },
      { name: 'Code Review' },
    ],
  },
  {
    group: 'Frameworks & Libraries',
    skills: [
      {
        name: 'React',
        href: 'https://react.dev/',
        alternatives: ['ReactJS'],
        isHighlighted: true,
      },
      {
        name: 'NextJS',
        href: 'https://nextjs.org/',
        alternatives: ['Next.JS'],
        isHighlighted: true,
      },
      {
        name: 'Angular',
        href: 'https://angular.io/',
        alternatives: ['AngularJS', 'AngularTS'],
      },
      {
        name: 'Vue',
        href: 'https://vuejs.org/',
        alternatives: ['VueJS', 'VueTS'],
      },
      {
        name: 'Zustand',
        href: 'https://github.com/pmndrs/zustand',
        description:
          'A small, fast and scalable bearbones state-management solution using simplified flux principles.',
      },
      { name: 'Redux', href: 'https://redux.js.org/' },
      {
        name: 'MobX',
        href: 'https://mobx.js.org/',
        description: 'Simple, scalable state management.',
      },
      {
        name: 'Prisma',
        href: 'https://www.prisma.io/',
        description: 'Database Tools for Modern Application Development',
      },
      {
        name: 'Formik',
        href: 'https://formik.org/',
        description: 'Form library for React',
      },
      {
        name: 'Zod',
        href: 'https://zod.dev/',
        description:
          'TypeScript-first schema validation with static type inference',
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        description: 'Amazon Web Services',
        alternatives: [
          'Cloud Computing Services',
          'AppSync',
          'S3',
          'Lambda',
          'AWS Amplify',
        ],
      },
      {
        name: 'Matrix',
        href: 'https://matrix.org/',
        description: 'An open network for secure, decentralised communication',
        alternatives: ['Chat SDK', 'Unified Communication System'],
        isHighlighted: true,
      },
      {
        name: 'MQTT',
        href: 'https://mqtt.org/',
        description:
          'MQTT is an OASIS standard messaging protocol for the Internet of Things (IoT).',
      },
      {
        name: 'Avaya',
        href: 'https://www.avaya.com/',
        description:
          'Communication solutions for businesses, including unified communications, (video) calls, conference calls, meetings, etc.',
        alternatives: [
          'Avaya Client SDK',
          'Avaya Meeting Management SDK',
          'Unified Communication System',
          'Telephony',
          'VoIP',
          'Conference Calls',
          'Video Calls',
          'DevConnect',
        ],
      },
      {
        name: 'Google Maps API',
        href: 'https://developers.google.com/maps',
        alternatives: [
          'Maps Embed API',
          'Maps JavaScript API',
          'Places Library',
          'Street View Static API',
          'Directions API',
          'Distance Matrix API',
          'Elevation API',
          'Geocoding API',
          'Geolocation API',
          'Places API',
          'Roads API',
          'Time Zone API',
        ],
      },
      {
        name: 'Facebook API',
        href: 'https://developers.facebook.com/docs/',
        alternatives: ['Meta App Development', 'Graph API'],
      },
    ],
  },
  {
    group: 'UI & Animation',
    skills: [
      {
        name: 'HTML',
        description: 'HyperText Markup Language',
        href: 'https://en.wikipedia.org/wiki/HTML',
      },
      {
        name: 'CSS',
        description: 'Cascading Style Sheets',
        href: 'https://en.wikipedia.org/wiki/CSS',
      },
      {
        name: 'SVG',
        description: 'Scalable Vector Graphics',
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG',
      },

      {
        name: 'a11y',
        href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility',
        description: 'Accessibility',
      },
      {
        name: 'i18n',
        href: 'https://en.wikipedia.org/wiki/Internationalization_and_localization',
        description: 'Internationalization and localization',
      },
      {
        name: 'UI',
        href: 'https://en.wikipedia.org/wiki/User_interface',
        description: 'User Interface',
      },
      {
        name: 'UX',
        href: 'https://en.wikipedia.org/wiki/User_experience',
        description: 'User Experience',
      },
      {
        name: 'React MUI',
        href: 'https://mui.com/',
        description: 'React Material UI',
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        alternatives: ['Tailwind'],
        description:
          'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
      },
      {
        name: 'Vanilla Extract CSS',
        href: 'https://vanilla-extract.style/',
        description: 'Zero-runtime Stylesheets in TypeScript.',
      },
      {
        name: 'GSAP',
        href: 'https://greensock.com/gsap/',
        description: 'Green Sock Animation Platform',
        alternatives: ['TweenLite', 'TweenMax'],
      },
      { name: 'Lottie', href: 'https://airbnb.design/lottie/' },
      {
        name: 'Canvas',
        href: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
        description: 'Canvas API',
      },
      {
        name: 'WebGL',
        href: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API',
        description: 'WebGL: 2D and 3D graphics for the web',
      },
      {
        name: 'Framer Motion',
        href: 'https://motion.dev/',
        description: 'A modern animation library for JavaScript and React',
      },
    ],
  },
  {
    group: 'Roles',
    skills: [
      {
        name: 'Tech Lead',
        alternatives: ['Lead Developer', 'Lead Frontend Developer'],
        isHighlighted: true,
      },
      {
        name: 'Frontend Director',
        alternatives: ['Frontend Lead', 'Team Lead Frontend'],
        isHighlighted: true,
      },
      {
        name: 'Technical Director',
        href: 'https://en.wikipedia.org/wiki/Technical_director',
        alternatives: ['TD'],
        isHighlighted: true,
      },

      {
        name: 'Software Architect',
        href: 'https://en.wikipedia.org/wiki/Software_architecture',
        isHighlighted: true,
      },
      {
        name: 'Senior Frontend Developer',
        alternatives: ['Principal Frontend Developer'],
        isHighlighted: true,
      },
      {
        name: 'Certified Scrum Master',
        alternatives: ['Scrum Master'],
        isHighlighted: true,
      },
    ],
  },
  {
    group: 'Management & processes',
    skills: [
      {
        name: 'Scrum',
        href: 'https://en.wikipedia.org/wiki/Scrum_(software_development)',
        description: 'Scrum Software Development',
      },
      {
        name: 'Agile',
        href: 'https://en.wikipedia.org/wiki/Agile_management',
        description: 'Agile manegement',
      },
      {
        name: 'Gitflow',
        href: 'https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow',
        description: 'Gitflow Workflow',
      },
      {
        name: 'Monorepo',
        href: 'https://en.wikipedia.org/wiki/Monorepo',
        description:
          'In version-control systems, a software-development strategy in which the code for a number of projects is stored in the same repository.',
      },
      {
        name: 'CI/CD',
        href: 'https://en.wikipedia.org/wiki/CI/CD',
        description: 'Continuous integration (CI) and continuous delivery (CD)',
        alternatives: [
          'Continuous Integration',
          'Continuous Delivery',
          'Continuous Deployment',
        ],
      },
      {
        name: 'Jira',
        href: 'https://www.atlassian.com/software/jira',
      },
      {
        name: 'Confluence',
        href: 'https://www.atlassian.com/software/confluence',
      },
      {
        name: 'Swagger',
        href: 'https://swagger.io/',
      },
    ],
  },
  {
    group: 'Testing',
    skills: [
      {
        name: 'Jest',
        href: 'https://jestjs.io/',
        description:
          'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.',
      },
      {
        name: 'React Testing Library',
        href: 'https://testing-library.com/',
        description:
          'Simple and complete testing utilities that encourage good testing practices',
      },
      {
        name: 'Storybook',
        href: 'https://storybook.js.org/',
        description:
          'Storybook is a frontend workshop for building UI components and pages in isolation.',
      },
      {
        name: 'Playwright',
        href: 'https://playwright.dev/',
        description:
          'Playwright is a Node.js library to automate Chromium, Firefox and WebKit with a single API.',
      },
      {
        name: 'Jasmine',
        href: 'https://jasmine.github.io/',
        description:
          'Jasmine is a behavior-driven development framework for testing JavaScript code.',
      },
      {
        name: 'Mocha',
        href: 'https://mochajs.org/',
        description:
          'Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser',
      },
      { name: 'Karma', href: 'https://karma-runner.github.io/' },
      { name: 'Cypress', href: 'https://www.cypress.io/' },
    ],
  },
  {
    group: 'Personal characteristics',
    skills: [
      { name: 'Leadership', isHighlighted: true },
      { name: 'Mentorship' },
      { name: 'Commitment' },
      { name: 'Ownership' },
      { name: 'Motivator' },
      { name: 'Teacher' },
    ],
  },

  {
    group: 'Core values',
    skills: [
      { name: 'Passion', description: 'deep enthusiasm and dedication.' },
      {
        name: 'Reliability',
        description: 'consistent dependability and trustworthiness.\n',
      },
      {
        name: 'Sociability',
        description: 'valuing meaningful connections with others',
      },
      {
        name: 'Authenticity',
        description: 'embracing and expressing true self\n',
      },
    ],
  },
  {
    group: 'Languages',
    skills: [
      { name: 'English', alternatives: ['EN', 'Engels'] },
      { name: 'Nederlands', alternatives: ['Dutch', 'NL'] },
    ],
  },
] as const;

export const keywords: Array<string> = [
  'Thijs Broerse',
  'TyZ',
  'Freelance',
  'Interim Frontend Lead',
  'Interim Tech Lead',
  'Frontend expert',
  'Developer',
  'Frontend Developer',
  'Senior Frontend Developer',
  'Principal Frontend Developer',
  'Senior Full-stack Developer',
  'Development',
  'Website',
  // eslint-disable-next-line @typescript-eslint/no-shadow
  ...skills.flatMap<string>(({ skills }) =>
    skills.flatMap(
      // eslint-disable-next-line @typescript-eslint/no-shadow
      ({ name, description, alternatives = [] }) =>
        [name, description, ...alternatives].filter(Boolean) as Array<string>,
    ),
  ),
];

type Recommendation = {
  text: string;
  author: string;
  position: string;
};

export const recommendations: ReadonlyArray<Recommendation> = [
  {
    text: `During Thijs his 15 years at the Media.Monks he has shown to be a
specialist within his role and able to maneuver in a dynamic high
paced environment and skilled in communicating with stakeholders
  across different teams. Next to this he has also invested in
improving the company culture and wellbeing through his efforts
within the Culture Club. Some traits that add to the above and
Thijs has shown throughout his time with Media.Monks are: critical
thinking, connectivity, empathy and mentorship.`,
    author: `Anne van Zessen`,
    position: `HR Business Partner at MediaMonks`,
  },
  {
    text: `I've worked with Thijs for 12,5 years and have always been
impressed by his skill and knowledge. He's an absolute legend
and one of the best I've ever worked with. Would absolutely
recommend!`,
    author: `Dennis de Rooij`,
    position: `Project Director at MediaMonks`,
  },
  {
    text: `Thijs is a machine. Not only is he a very skilled developer but
he's someone who likes to strive for top quality and transfer
his knowledge to everyone in his team. During my years working
with him, I not only learned from his technical skills but also
from his vast experience leading other developers (which included
many highly skilled, experienced programmers).`,
    author: `Ronald Méndez`,
    position: 'Operations Director at MediaMonks & FWA Jury Member',
  },
  {
    text: `I highly recommend Thijs for his great technical skills and
ability to deliver high quality work. He possess a friendly and
approachable nature, fostering a collaborative work environment.
    With his attention to detail and commitment to meeting deadlines,
    he is a valuable asset to any development team.`,
    author: `Robert Slootjes`,
    position: `Technical Director at MediaMonks`,
  },
  {
    text: `Having worked with Thijs over a period of more than 15 years, I
can honestly say that Thijs is one of the people I have enjoyed
most working with. Thijs is a hard worker, with great dedication
and focus, who will always go the extra mile to reach the best
result possible. As a developer he has vast knowledge of the field
he is active in, always strives for improvements, and puts quality
first. He has a broad perspective, always trying to view things
from multiple sides, and is always willing to learn new things. As
a team lead Thijs takes great care of his team members, putting
their interests in favour of his own, while using a personal
approach to each and every one to make sure they have an optimal
environment to work, thrive and develop in. Besides that, Thijs is
generally a really nice guy with a great sense of humour, easy
going and flexible, with a strong focus on principles without
being dogmatic. Any company should feel proud and blessed to have
Thijs in their team.`,
    author: `Stephan Bezoen`,
    position: 'Lead Android Developer at MediaMonks',
  },
] as const;
