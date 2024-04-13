import React from 'react';
import { MdWork, MdSchool } from 'react-icons/md';
import { VerticalTimelineElementProps } from 'react-vertical-timeline-component';

import AFTERCLASS_LOGO from '~/assets/companies/afterclass.png';
import BOLT_LOGO from '~/assets/companies/bolt.png';
import SEA_LOGO from '~/assets/companies/sea.png';
import SEEDU_LOGO from '~/assets/companies/seedu.png';

import {
  AWS_ICON,
  BINANCE_ICON,
  CHROME_ICON,
  CSS_ICON,
  DOCKER_ICON,
  ETHEREUM_ICON,
  GRADLE_ICON,
  GRAPHQL_ICON,
  JAVA_ICON,
  JENKINS_ICON,
  JIRA_ICON,
  K8S_ICON,
  NEXT_JS_ICON,
  REACT_ICON,
  REACT_JS_ICON,
  REACT_QUERY_ICON,
  REDUX_ICON,
  RUBY_ICON,
  RXJS_ICON,
  STYLED_COMP_ICON,
  SWITCHEO_ICON,
  TAILWINDCSS_ICON,
  TechIconType,
  WEBPACK_ICON,
  ZILLIQA_ICON,
} from './techIcons';

interface ExperienceDataProps {
  logo?: string;
  props: VerticalTimelineElementProps;
  title: string;
  subtitle: string;
  content: string[];
  links?: { url: string; name: string }[];
  stack?: TechIconType[];
}

const AFTERCLASS: ExperienceDataProps = {
  logo: AFTERCLASS_LOGO,
  props: {
    date: 'Dec 2021 – Present',
    dateClassName: 'text-white',
    contentStyle: { background: '#003D7C', color: '#fff' },
    contentArrowStyle: { borderRight: '7px solid #003D7C' },
    iconStyle: { background: '#003D7C', color: '#fff' },
    icon: <MdWork />,
  },
  title: 'Chief Technology Officer',
  subtitle: 'AfterClass (Startup)',
  content: [
    "Led a team of 10 developers to support the company's tech capability and enhancements and successfully launched 3 major features in AfterClass (Nexus, Deals, Marketplace)",
    'Migrates deployment of full-stack app onto AWS platform, thereby reducing deployment cost and increased load capacity of the platform',
    'Support the expansion of AfterClass into NTU and NUS, thereby increasing the user base from 7k to 10k',
    'Organise weekly scrum meetings to plan and set weekly goals',
  ],
  links: [
    {
      name: 'AfterClass',
      url: 'https://afterclass.io/',
    },
  ],
  stack: [
    NEXT_JS_ICON,
    TAILWINDCSS_ICON,
    GRAPHQL_ICON,
    RUBY_ICON,
    DOCKER_ICON,
    K8S_ICON,
    AWS_ICON,
    JIRA_ICON,
  ],
};

const SEA_LABS: ExperienceDataProps = {
  logo: SEA_LOGO,
  props: {
    date: 'May 2022 – Jul 2022',
    dateClassName: 'text-white',
    contentStyle: { background: '#020284', color: '#fff' },
    contentArrowStyle: { borderRight: '7px solid #020284' },
    iconStyle: { background: '#020284', color: '#fff' },
    icon: <MdWork />,
  },
  title: 'Software Engineering Intern (Frontend)',
  subtitle: 'SealCloud Infra Team @ Sea Labs, Singapore',
  content: [
    'Collaborated with a team of 5 developers to help build up the team’s flagship cloud platform using ReactJS and MicroFrontend technology',
    'Developed new STARS platform for Sea internal stakeholders to manage server lifecycle workflow and using new tools such as Module Federation for MicroFrontend integration',
    'Led the project of building an internal CMS using GitLab API, by liaising and gathering requirements from the stakeholders, thereby building a working MVP in a month',
    "Supported the Frontend capabilities for Sea's internal hackathon by working closely with internal stakeholders, thereby leading to the successful hackathon, despite the tight timeline",
  ],
  links: [
    {
      name: 'SealCloud',
      url: 'https://sealcloud.com/',
    },
    {
      name: 'Sea Hackathon',
      url: 'https://hackathon.sea.com/',
    },
  ],
  stack: [
    REACT_JS_ICON,
    REDUX_ICON,
    REACT_QUERY_ICON,
    STYLED_COMP_ICON,
    { ...WEBPACK_ICON, name: 'Module Federation' },
    DOCKER_ICON,
    JENKINS_ICON,
  ],
};

const SEEDU: ExperienceDataProps = {
  logo: SEEDU_LOGO,
  props: {
    date: 'Jan 2021 – May 2022',
    dateClassName: 'text-white',
    contentStyle: { background: '#003D7C', color: '#fff' },
    contentArrowStyle: { borderRight: '7px solid #003D7C' },
    iconStyle: { background: '#003D7C', color: '#fff' },
    icon: <MdSchool />,
  },
  title: 'SE-EDU Tech Team (Contributor)',
  subtitle: 'National University of Singapore',
  content: [
    'Collaborated with a team of 8 developers to maintain and improve open-source software which is used to coordinate and teach students Software Engineering Principle in CS2103',
    'Conducted and coordinated code and design documentation reviews for features developed and bugs fixed',
  ],
  links: [
    {
      name: 'SE-EDU Team',
      url: 'https://se-education.org/docs/team.html',
    },
  ],
  stack: [JAVA_ICON, GRADLE_ICON, CSS_ICON],
};

const BOLT: ExperienceDataProps = {
  logo: BOLT_LOGO,
  props: {
    date: 'May 2021 – Jul 2021',
    dateClassName: 'text-white',
    contentStyle: { background: '#2F27AA', color: '#fff' },
    contentArrowStyle: { borderRight: '7px solid #2F27AA' },
    iconStyle: { background: '#2F27AA', color: '#fff' },
    icon: <MdWork />,
  },
  title: 'Software Engineering Intern',
  subtitle: 'BOLT Global, Singapore',
  content: [
    'Collaborated with a team of 5 developers to maintain and improve 2 mobile applications built using React Native',
    'Led the project of building BOLT-X Chrome Extension, a cryptocurrency wallet with over 300+ active users, and successfully implemented a working MVP within 2 months',
    'Actively communicated with external organisations, Switcheo co-founder and tech team, to discuss integration of Switcheo network and Zilswap webapp with BOLT-X Extension',
  ],
  links: [
    {
      name: 'BOLT Global',
      url: 'https://bolt.global/',
    },
    {
      name: 'BOLT-X Extension',
      url: 'https://chrome.google.com/webstore/detail/bolt-x/aodkkagnadcbobfpggfnjeongemjbjca',
    },
    {
      name: 'Switcheo X Bolt Wallet Integration',
      url: 'https://zilswap.io/',
    },
  ],
  stack: [
    REACT_ICON,
    CHROME_ICON,
    RXJS_ICON,
    ZILLIQA_ICON,
    BINANCE_ICON,
    SWITCHEO_ICON,
    ETHEREUM_ICON,
  ],
};

const CS1101S_TA: ExperienceDataProps = {
  props: {
    date: 'Aug 2020 – Nov 2020',
    dateClassName: 'text-white',
    contentStyle: { background: '#003D7C', color: '#fff' },
    contentArrowStyle: { borderRight: '7px solid #003D7C' },
    iconStyle: { background: '#003D7C', color: '#fff' },
    icon: <MdSchool />,
  },
  title: 'CS1101S Teaching Assistant',
  subtitle: 'National University of Singapore',
  content: [
    'Facilitated weekly Studio sessions for a class of 8 Year 1 students to guide them on the basics of programming and good programming practices, thereby providing them with a smooth transition into the field of programming',
    'Followed up and keep track of the overall performance of the students and provided consultation sessions when necessary, to ensure that no students are falling behind in the module',
  ],
};

// const ARMY: ExperienceDataProps = {
//   props: {
//     date: 'Feb 2017 – Feb 2019',
//     dateClassName: 'text-white text-lg',
//     contentStyle: { background: '#4b5320', color: '#fff' },
//     contentArrowStyle: { borderRight: '7px solid #4b5320' },
//     iconStyle: { background: '#4b5320', color: '#fff' },
//     icon: <MdRadio />,
//   },
//   title: 'Signal Operator, Corporal First Class',
//   subtitle: 'Singapore Armed Forces',
//   content: [
//     'Developed the Standard Operating Procedure for our newly formed Motorcycle Unit, by experimenting and refining on existing protocols, thereby coming up with a comprehensive framework which increased our performance efficiency by at least 50%',
//     'Supported an overseas training exercise in Taiwan by providing extensive communication network coverage for the whole brigade and was acknowledged by the Commanding Officer for our efficiency and professionalism',
//   ],
// };

export const EXPERIENCES: ExperienceDataProps[] = [
  AFTERCLASS,
  SEA_LABS,
  SEEDU,
  BOLT,
  CS1101S_TA,
];
