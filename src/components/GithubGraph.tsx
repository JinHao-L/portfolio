import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import SubSectionHeader from './SubSectionHeader';

const GithubGraph: React.FC = () => {
  const colourTheme = {
    level4: '#ffffff',
    level3: '#d7dddf',
    level2: '#9baaae',
    level1: '#72888e',
    level0: 'transparent',
  };
  return (
    <div className="space-y-3">
      <SubSectionHeader>My coding frequency:</SubSectionHeader>
      <GitHubCalendar
        username="jinhao-l"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={18}
      />
    </div>
  );
};

export default GithubGraph;
