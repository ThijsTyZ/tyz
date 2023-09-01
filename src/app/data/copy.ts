import type { ValueOf } from 'next/constants';

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
};

export const skills: ReadonlyArray<Skill> = [
  {
    name: 'Frontend',
    href: 'https://en.wikipedia.org/wiki/Front-end_web_development',
    description: 'Frontend Web Development',
    alternatives: ['Front End', 'Front-end', 'Web Development'],
  },
  {
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    alternatives: ['TS'],
  },
  {
    name: 'JavaScript',
    href: 'https://en.wikipedia.org/wiki/JavaScript',
    alternatives: ['JS'],
  },
  {
    name: 'Architecture',
    href: 'https://en.wikipedia.org/wiki/Software_architecture',
    description: 'Software Architecture',
  },
  { name: 'React', href: 'https://react.dev/', alternatives: ['ReactJS'] },
  { name: 'NextJS', href: 'https://nextjs.org/', alternatives: ['Next.JS'] },
  { name: 'Redux', href: 'https://redux.js.org/' },
  {
    name: 'Angular',
    href: 'https://angular.io/',
    alternatives: ['AngularJS', 'AngularTS'],
  },
  { name: 'Vue', href: 'https://vuejs.org/', alternatives: ['VueJS', 'VueTS'] },
  {
    name: 'GSAP',
    href: 'https://greensock.com/gsap/',
    description: 'Green Sock Animation Platform',
    alternatives: ['TweenLite', 'TweenMax'],
  },
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
    name: 'JSON',
    description: 'JavaScript Object Notation',
    href: 'https://www.json.org/json-en.html',
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
    name: 'OOP',
    href: 'https://en.wikipedia.org/wiki/Object-oriented_programming',
    description: 'Object-Oriented Programming',
  },
  {
    name: 'FP',
    href: 'https://en.wikipedia.org/wiki/Functional_programming',
    description: 'Functional programming',
  },
  {
    name: 'PWA',
    href: 'https://en.wikipedia.org/wiki/Progressive_web_app',
    description: 'Progressive Web App',
  },
  {
    name: 'SPA',
    href: 'https://en.wikipedia.org/wiki/Single-page_application',
    description: 'Single Page Application',
  },
  {
    name: 'SSR',
    href: 'https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering',
    description: 'Server-Side Rendering',
  },
  {
    name: 'SSG',
    href: 'https://en.wikipedia.org/wiki/Static_site_generator',
    description: 'Static Site Generator',
  },
  {
    name: 'AWS',
    href: 'https://aws.amazon.com/',
    description: 'Amazon Web Services',
    alternatives: ['Cloud Computing Services'],
  },
  { name: 'UI' },
  { name: 'UX' },
  { name: 'GraphQL' },
  { name: 'Lottie' },
  { name: 'Canvas' },
  { name: 'WebGL' },
  { name: 'Linting' },
  { name: 'Git Flow' },
  { name: 'Rest API' },
  { name: 'Google Maps' },
  { name: 'Facebook API' },
  { name: 'Scrum' },
  { name: 'Agile' },
  { name: 'Debugging' },
  { name: 'Code Review' },
  { name: 'Coding Standards' },
  { name: 'Technical Director' },
  { name: 'English' },
  { name: 'Nederlands', alternatives: ['Dutch', 'NL'] },
  { name: 'Leadership' },
  { name: 'Mentorship' },
  { name: 'Commitment' },
  { name: 'Ownership', href: '#ownership' },
  { name: 'Motivator' },
  { name: 'Teacher' },
  { name: 'Communication' },
  { name: 'Passionated' },
] as const;

export const keywords: Array<string> = [
  'Thijs Broerse',
  'TyZ',
  'Freelance',
  'Interim Frontend Lead',
  'Interim Tech Lead',
  'Developer',
  'Development',
  'Website',
  ...skills.flatMap<string>(
    ({ name, description, alternatives = [] }) =>
      [name, description, ...alternatives].filter(Boolean) as Array<string>,
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
impressed by his skill and knowledge. H's an absolute legend
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
