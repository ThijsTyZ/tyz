type Skill = {
  name: string;
  description?: string;
  href?: string;
  alternatives?: Array<string>;
};

export const skills: Array<Skill> = [
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
  },
  { name: 'React' },
  { name: 'NextJS' },
  { name: 'Redux' },
  { name: 'Angular' },
  { name: 'Vue' },
  {
    name: 'GSAP',
    href: 'https://greensock.com/gsap/',
    description: 'Green Sock Animation Platform',
  },
  { name: 'Lottie' },
  { name: 'Canvas' },
  { name: 'WebGL' },
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
  { name: 'UX' },
  {
    name: 'A11Y',
    href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility',
    description: 'Accessibility',
  },
  { name: 'A18N' },
  { name: 'Scrum' },
  { name: 'Agile' },
  { name: 'OOP' },
  { name: 'FP' },
  { name: 'English' },
  { name: 'Nederlands', alternatives: ['Dutch', 'NL'] },
  { name: 'Debugging' },
  { name: 'PWA' },
  { name: 'SPA' },
  { name: 'SSR' },
  { name: 'SSG' },
  { name: 'Code Review' },
  { name: 'Coding Standards' },
  { name: 'ESLinting' },
  { name: 'Git Flow' },
  { name: 'Rest API' },
  { name: 'Google Maps' },
  { name: 'Facebook API' },
  { name: 'CSS transitions' },
  { name: 'JSON' },
  { name: 'Leadership' },
  { name: 'Recruitment' },
  { name: 'Mentorship' },
  { name: 'Technical Director' },
  { name: 'Commitment' },
  { name: 'Ownership', href: '#ownership' },
  { name: 'Motivator' },
  { name: 'Teacher' },
  { name: 'Communication' },
  { name: 'Complex UI' },
  { name: 'Passionated' },
];

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

export const recommendations: Array<Recommendation> = [
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
impressed by his skill and knowledge. He&apos;s an absolute legend
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
];
