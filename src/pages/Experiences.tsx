import React from 'react';
import { MdStar } from 'react-icons/md';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import IconList from '~/components/IconList';
import Section, { SectionProps } from '~/components/Section';
import SectionHeader from '~/components/SectionHeader';
import { EXPERIENCES } from '~/constants/expData';
import 'react-vertical-timeline-component/style.min.css';

const Experiences: React.FC<SectionProps> = ({
  id,
  style,
  className,
  nextId,
}) => {
  return (
    <Section id={id} style={style} className={className} nextId={nextId}>
      <SectionHeader>My Experiences</SectionHeader>
      <VerticalTimeline animate>
        {EXPERIENCES.map((item, idx) => (
          <VerticalTimelineElement {...item.props} key={`exp-${idx}`}>
            {item.logo && (
              <img
                src={item.logo}
                className="absolute right-0 hidden h-12 mr-5 sm:block"
                alt={`${item.subtitle} logo`}
              />
            )}
            <h3 className="font-semibold text-md">{item.title}</h3>
            <h4 className="pb-3 italic">{item.subtitle}</h4>
            <ul className="pl-4 space-y-2 font-normal text-justify list-disc">
              {item.content?.map((item, pt) => (
                <li key={`exp-${idx}-${pt}`}>{item}</li>
              ))}
            </ul>

            {item.links && (
              <div className="pt-4">
                {item.links?.map((link, j) => (
                  <a key={j} target="_blank" href={link.url} rel="noreferrer">
                    <button className="px-4 py-2 mx-3 font-normal text-white bg-transparent border border-white rounded hover:bg-titan-white-500 hover:text-gray-800 hover:border-transparent">
                      {link.name}
                    </button>
                  </a>
                ))}
              </div>
            )}

            {item.stack && (
              <div className="my-2">
                <IconList icons={item.stack} iconClassName={'w-14 h-14'} />
              </div>
            )}
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
