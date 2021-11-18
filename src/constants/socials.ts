import { IconType } from 'react-icons';
import { SiGithub, SiLinkedin, SiInstagram, SiGmail } from 'react-icons/si';

export interface SocialType {
  type: string;
  Icon: IconType;
  link: string;
}

export const GITHUB_SOCIAL: SocialType = {
  type: 'github',
  Icon: SiGithub,
  link: 'https://github.com/JinHao-L',
};

export const LINKEDIN_SOCIAL: SocialType = {
  type: 'linkedin',
  Icon: SiLinkedin,
  link: 'https://www.linkedin.com/in/jin-hao-l',
};

export const INSTA_SOCIAL: SocialType = {
  type: 'instagram',
  Icon: SiInstagram,
  link: 'https://www.instagram.com/jin_haooo',
};

export const MAIL_SOCIAL: SocialType = {
  type: 'mail',
  Icon: SiGmail,
  link: 'mailto:limjinhao@gmail.com',
};

const SOCIALS: SocialType[] = [GITHUB_SOCIAL, LINKEDIN_SOCIAL, INSTA_SOCIAL, MAIL_SOCIAL];
export default SOCIALS;
