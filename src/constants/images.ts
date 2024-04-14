import helloWorldChat from '~/assets/helloworld/chat.png';
import helloWorldJoin from '~/assets/helloworld/joining.png';
import helloWorldZoom from '~/assets/helloworld/zoomOut.png';
import meetBallsCover from '~/assets/meetballs/cover.gif';
import meetBallsDashboard from '~/assets/meetballs/dashboard.png';
import meetBallsMeeting from '~/assets/meetballs/meeting.png';
import meetBallsPoster from '~/assets/meetballs/poster.png';
import catAdmin from '~/assets/nuscats/admin.png';
import catList from '~/assets/nuscats/cat_list.png';
import catFeeds from '~/assets/nuscats/feeds.png';
import catLanding from '~/assets/nuscats/landing.png';
import catMap from '~/assets/nuscats/map.png';
import catProfile from '~/assets/nuscats/profile.png';
import catUser from '~/assets/nuscats/user_profile.png';
import nuudleAdd from '~/assets/nuudle/add.png';
import nuudleAssign from '~/assets/nuudle/assign.png';
import nuudleFind from '~/assets/nuudle/find.png';
import nuudleRemark from '~/assets/nuudle/remark.png';
import nuudleUI from '~/assets/nuudle/ui.png';
import nuudleView from '~/assets/nuudle/view.png';
import peerprepCoding from '~/assets/peerprep/coding.png';
import peerprepConfirmation from '~/assets/peerprep/confirmation.png';
import peerprepDashboard from '~/assets/peerprep/dashboard.png';
import peerprepLanding from '~/assets/peerprep/landing.png';
import peerprepStatistics from '~/assets/peerprep/statistics.png';
import tembuAddModule from '~/assets/tembufriends/add_modules.png';
import tembuCover from '~/assets/tembufriends/cover.png';
import tembuExplore from '~/assets/tembufriends/explore.png';
import tembuHome from '~/assets/tembufriends/home.png';
import tembuMenu from '~/assets/tembufriends/menu.png';
import tembuNotify from '~/assets/tembufriends/notifications.png';
import tembuProfile from '~/assets/tembufriends/profile.png';
import tembuQR from '~/assets/tembufriends/qr.png';
import tembuReports from '~/assets/tembufriends/reports.png';
import tembuWritePost from '~/assets/tembufriends/write_post.png';

export interface ImageType {
  caption: string;
  src: string;
  thumbnail?: string | undefined;
}

export const IMG_MB_COVER: ImageType = {
  caption: 'MeetBalls, a Zoom Meeting Companion app',
  src: meetBallsCover,
  thumbnail: meetBallsCover,
};
export const IMG_MB_DASHBOARD: ImageType = {
  caption: 'MeetBalls Dashboard View',
  src: meetBallsDashboard,
  thumbnail: meetBallsDashboard,
};
export const IMG_MB_MEETING: ImageType = {
  caption: 'Ongoing Meeting View',
  src: meetBallsMeeting,
  thumbnail: meetBallsMeeting,
};
export const IMG_MB_POSTER: ImageType = {
  caption: 'Poster for MeetBalls',
  src: meetBallsPoster,
  thumbnail: meetBallsPoster,
};

export const IMG_PP_REGISTER: ImageType = {
  caption: 'Register for a PeerPrep account (or login as Guest)',
  src: peerprepLanding,
  thumbnail: peerprepLanding,
};
export const IMG_PP_DASHBOARD: ImageType = {
  caption: 'PeerPrep Dashboard View',
  src: peerprepDashboard,
  thumbnail: peerprepDashboard,
};
export const IMG_PP_COLLAB: ImageType = {
  caption: 'PeerPrep live collaborative platform',
  src: peerprepCoding,
  thumbnail: peerprepCoding,
};
export const IMG_PP_CONFIRM: ImageType = {
  caption: 'Awaiting submission confirmation from partner',
  src: peerprepConfirmation,
  thumbnail: peerprepConfirmation,
};
export const IMG_PP_STATS: ImageType = {
  caption: 'Some basic interview statistics',
  src: peerprepStatistics,
  thumbnail: peerprepStatistics,
};

export const IMG_CAT_MAP: ImageType = {
  caption: 'Map view of crowdsourced cat sightings',
  src: catMap,
  thumbnail: catMap,
};
export const IMG_CAT_FEEDS: ImageType = {
  caption: 'Feed view of crowdsourced cat sightings',
  src: catFeeds,
  thumbnail: catFeeds,
};
export const IMG_CAT_LANDING: ImageType = {
  caption: 'Landing page of NUS Cat',
  src: catLanding,
  thumbnail: catLanding,
};
export const IMG_CAT_PROFILE: ImageType = {
  caption: "Profile of NUS's Ashy",
  src: catProfile,
  thumbnail: catProfile,
};
export const IMG_CAT_LIST: ImageType = {
  caption: 'List of cats found in NUS',
  src: catList,
  thumbnail: catList,
};
export const IMG_CAT_ADMIN: ImageType = {
  caption: 'Admin functionalities',
  src: catAdmin,
  thumbnail: catAdmin,
};
export const IMG_CAT_USER: ImageType = {
  caption: "Profile of NUS Cat's user",
  src: catUser,
  thumbnail: catUser,
};

export const IMG_HW_JOIN: ImageType = {
  caption: 'Joining in the fun!',
  src: helloWorldJoin,
  thumbnail: helloWorldJoin,
};
export const IMG_HW_CHAT: ImageType = {
  caption: 'Chat with people around you!',
  src: helloWorldChat,
  thumbnail: helloWorldChat,
};
export const IMG_HW_ZOOM: ImageType = {
  caption: 'See people around the world!',
  src: helloWorldZoom,
  thumbnail: helloWorldZoom,
};

export const IMG_NDL_UI: ImageType = {
  caption: 'A clinic management desktop app to manage patient records and clinical appointments',
  src: nuudleUI,
  thumbnail: nuudleUI,
};
export const IMG_NDL_ADD: ImageType = {
  caption: 'Add new patient to Nuudle',
  src: nuudleAdd,
  thumbnail: nuudleAdd,
};
export const IMG_NDL_ASSIGN: ImageType = {
  caption: 'Assign patient to an empty appointment slot',
  src: nuudleAssign,
  thumbnail: nuudleAssign,
};
export const IMG_NDL_FIND: ImageType = {
  caption: 'Find a patient and his upcoming appointments',
  src: nuudleFind,
  thumbnail: nuudleFind,
};
export const IMG_NDL_VIEW: ImageType = {
  caption: 'View appointments by date',
  src: nuudleView,
  thumbnail: nuudleView,
};
export const IMG_NDL_REMARK: ImageType = {
  caption: 'Add doctor notes to patient',
  src: nuudleRemark,
  thumbnail: nuudleRemark,
};

export const IMG_TEMBU_COVER: ImageType = {
  caption: 'TembuFriends, a social networking app specially for Tembusians',
  src: tembuCover,
  thumbnail: tembuCover,
};
export const IMG_TEMBU_HOME: ImageType = {
  caption: 'Look up the latest Tembusu news in the home page',
  src: tembuHome,
  thumbnail: tembuHome,
};
export const IMG_TEMBU_EXPLORE: ImageType = {
  caption: 'Explore and find students based on interests or past modules',
  src: tembuExplore,
  thumbnail: tembuExplore,
};
export const IMG_TEMBU_NOTIFY: ImageType = {
  caption: 'View your friend requests and latest activities',
  src: tembuNotify,
  thumbnail: tembuNotify,
};
export const IMG_TEMBU_MENU: ImageType = {
  caption: 'Menu page to view other details',
  src: tembuMenu,
  thumbnail: tembuMenu,
};
export const IMG_TEMBU_PROFILE: ImageType = {
  caption: 'The profile of a typical Tembusian',
  src: tembuProfile,
  thumbnail: tembuProfile,
};
export const IMG_TEMBU_POST: ImageType = {
  caption: "Write private or public posts on a Tembusian's wall",
  src: tembuWritePost,
  thumbnail: tembuWritePost,
};
export const IMG_TEMBU_MODS: ImageType = {
  caption: 'Update your profile with latest module information from NUSMods',
  src: tembuAddModule,
  thumbnail: tembuAddModule,
};
export const IMG_TEMBU_QR: ImageType = {
  caption: 'Share your TembuFriends QR Code to your friends',
  src: tembuQR,
  thumbnail: tembuQR,
};
export const IMG_TEMBU_REPORT: ImageType = {
  caption: 'Admin can manage reports and even ban user within the application',
  src: tembuReports,
  thumbnail: tembuReports,
};
