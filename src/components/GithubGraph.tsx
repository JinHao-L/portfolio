import React from 'react';
import GitHubCalendar, { type ColorScale } from 'react-github-calendar';

import SubSectionHeader from './SubSectionHeader';
import './index.css';

const GithubGraph: React.FC = () => {
  const colourTheme: ColorScale = ['rgba(0,0,0,0)', '#72888e', '#9baaae', '#d7dddf', '#ffffff'];
  return (
    <div className="space-y-3 flex flex-col overflow-hidden githubGraph">
      <SubSectionHeader>My GitHub coding frequency:</SubSectionHeader>
      <GitHubCalendar
        username="jinhao-l"
        blockSize={15}
        blockMargin={5}
        colorScheme="dark"
        theme={{ dark: colourTheme }}
        fontSize={18}
        throwOnError={false}
        style={{ width: 'fit-content' }}
      />
    </div>
  );
};

export default GithubGraph;
