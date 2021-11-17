import SectionHeader from 'components/SectionHeader';
import React from 'react';
import Section, { SectionProps } from '../components/Section';
import { MdWork, MdSchool, MdStar, MdRadio } from 'react-icons/md';

import {
  VerticalTimeline,
  VerticalTimelineElement,
  VerticalTimelineElementProps,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface ExperienceDataProps {
  props: VerticalTimelineElementProps;
  title: string;
  subtitle: string;
  content: string[];
  links?: { url: string; name: string }[];
}

const experiencesData: ExperienceDataProps[] = [
  {
    props: {
      date: 'Jan 2021 – Current',
      dateClassName: 'text-white',
      className: 'vertical-timeline-element--education',
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
  },
  {
    props: {
      date: 'May 2021 – Jul 2021',
      dateClassName: 'text-white',
      className: 'vertical-timeline-element--work',
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
    ],
  },
  {
    props: {
      date: 'Aug 2020 – Nov 2020',
      dateClassName: 'text-white',
      className: 'vertical-timeline-element--education',
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
  },
  {
    props: {
      date: 'Feb 2017 – Feb 2019',
      dateClassName: 'text-white',
      className: 'vertical-timeline-element--education',
      contentStyle: { background: '#4b5320', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid #4b5320' },
      iconStyle: { background: '#4b5320', color: '#fff' },
      icon: <MdRadio />,
    },
    title: 'Signal Operator, Corporal First Class',
    subtitle: 'Singapore Armed Forces',
    content: [
      'Developed the Standard Operating Procedure for our newly formed Motorcycle Unit, by experimenting and refining on existing protocols, thereby coming up with a comprehensive framework which increased our performance efficiency by at least 50%.',
      'Supported an overseas training exercise in Taiwan by providing extensive communication network coverage for the whole brigade and was acknowledged by the Commanding Officer for our efficiency and professionalism',
    ],
  },
];

const Experiences: React.FC<SectionProps> = ({ id, style, className, nextId }) => {
  return (
    <Section id={id} style={style} className={className} nextId={nextId}>
      <SectionHeader>My Experiences</SectionHeader>
      <VerticalTimeline animate>
        {experiencesData.map((item, idx) => (
          <VerticalTimelineElement {...item.props} key={`exp-${idx}`}>
            <h3 className="font-semibold text-md vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
            <ul className="pl-4 space-y-2 font-normal text-justify list-disc">
              {item.content?.map((item, pt) => (
                <li key={`exp-${idx}-${pt}`}>{item}</li>
              ))}
            </ul>

            <div className="pt-4">
              {item.links?.map((link, j) => (
                <a key={j} target="_blank" href={link.url} rel="noreferrer">
                  <button className="px-4 py-2 mx-3 font-normal text-white bg-transparent border border-white rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
                    {link.name}
                  </button>
                </a>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: '#489c65', color: '#fff' }}
          icon={<MdStar />}
        />
      </VerticalTimeline>
    </Section>
  );
};

export default Experiences;
