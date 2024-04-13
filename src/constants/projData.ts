import {
  ImageType,
  IMG_CAT_MAP,
  IMG_CAT_PROFILE,
  IMG_MB_COVER,
  IMG_MB_DASHBOARD,
  IMG_MB_MEETING,
  IMG_MB_POSTER,
  IMG_PP_COLLAB,
  IMG_PP_CONFIRM,
  IMG_PP_DASHBOARD,
  IMG_PP_REGISTER,
  IMG_PP_STATS,
  IMG_CAT_ADMIN,
  IMG_CAT_USER,
  IMG_CAT_FEEDS,
  IMG_CAT_LANDING,
  IMG_CAT_LIST,
  IMG_HW_CHAT,
  IMG_HW_JOIN,
  IMG_HW_ZOOM,
  IMG_NDL_ADD,
  IMG_NDL_ASSIGN,
  IMG_NDL_FIND,
  IMG_NDL_REMARK,
  IMG_NDL_VIEW,
  IMG_TEMBU_COVER,
  IMG_NDL_UI,
  IMG_TEMBU_EXPLORE,
  IMG_TEMBU_HOME,
  IMG_TEMBU_MENU,
  IMG_TEMBU_MODS,
  IMG_TEMBU_NOTIFY,
  IMG_TEMBU_POST,
  IMG_TEMBU_PROFILE,
  IMG_TEMBU_QR,
  IMG_TEMBU_REPORT,
} from './images';
import {
  TechIconType,
  NEST_ICON,
  REACT_JS_ICON,
  SOCKET_ICON,
  PASSPORT_JS_ICON,
  ZOOM_ICON,
  SWAGGER_ICON,
  CODEMIRROR_ICON,
  LEETCODE_ICON,
  AWS_ICON,
  DOCKER_ICON,
  K8S_ICON,
  TAILWINDCSS_ICON,
  MAPBOX_ICON,
  WEBPACK_ICON,
  FIREBASE_ICON,
  IONIC_ICON,
  GRADLE_ICON,
  JAVA_ICON,
  JUNIT5_ICON,
  JAVAFX_ICON,
  REACT_NATIVE_ICON,
  EXPO_ICON,
  REDUX_ICON,
  ADOBE_XD_ICON,
  GOOGLE_MAPS_ICON,
  NODE_ICON,
  MONGO_ICON,
  EXPRESS_ICON,
} from './techIcons';

export interface ProjectData {
  title: string;
  description: string[];
  links: {
    title: string;
    url: string;
    disabled?: boolean;
    disabledHint?: string;
  }[];
  stack: TechIconType[];
  images: ImageType[];
}

const MEETBALLS: ProjectData = {
  title: 'MeetBalls',
  description: [
    'MeetBalls is a powerful companion app to Zoom that aims to help meeting secretaries streamline the entire meeting workflow from pre-meeting preparations to post-meeting duties.',
    'From the meeting creation interface, agenda planner and meeting link dissemination service, to automated timekeeping and attendance taking, down to the post-mortem report, MeetBalls has you covered along every step of the process!',
  ],
  links: [
    { title: 'Try MeetBalls here!', url: 'https://meetballsapp.com', disabled: true },
    { title: 'Demo video', url: 'https://www.youtube.com/watch?v=Ru1LYvjYynk' },
    {
      title: 'STePs Showcase',
      url: 'https://uvents.nus.edu.sg/event/19th-steps/module/CS3216/project/10',
    },
    { title: 'Source code', url: 'https://github.com/JinHao-L/MeetBalls' },
  ],
  stack: [
    NEST_ICON,
    REACT_JS_ICON,
    SOCKET_ICON,
    PASSPORT_JS_ICON,
    ZOOM_ICON,
    SWAGGER_ICON,
    DOCKER_ICON,
  ],
  images: [IMG_MB_COVER, IMG_MB_DASHBOARD, IMG_MB_MEETING, IMG_MB_POSTER],
};

const PEERPREP: ProjectData = {
  title: 'PeerPrep',
  description: [
    'PeerPrep is a live collaborative coding platform where students can match with a partner and practise for their coding interviews by solving Leetcode questions.',
    'The purpose of the web application is to help students better prepare themselves for technical whiteboard interviews through a peer-learning system so students can learn from each other and break the monotony of revising alone.',
    'To support live collaboration, the app implements Operational Transformation (OT) using CodeMirror. The web app uses a microservice architecture and was deployed on AWS with high availability and scalability.',
  ],
  links: [
    {
      title: 'Try PeerPrep here!',
      url: 'http://peer-prep.live',
      disabled: true,
    },
    { title: 'Source code', url: 'https://github.com/JinHao-L/peerprep' },
    {
      title: 'Technical design document',
      url: 'https://github.com/JinHao-L/peerprep/blob/main/38-FinalReport-2.pdf',
    },
  ],
  stack: [
    NEST_ICON,
    REACT_JS_ICON,
    SOCKET_ICON,
    PASSPORT_JS_ICON,
    LEETCODE_ICON,
    CODEMIRROR_ICON,
    DOCKER_ICON,
    K8S_ICON,
    AWS_ICON,
  ],
  images: [IMG_PP_REGISTER, IMG_PP_DASHBOARD, IMG_PP_COLLAB, IMG_PP_CONFIRM, IMG_PP_STATS],
};

const NUSCATS: ProjectData = {
  title: 'NUSCats',
  description: [
    "NUSCats is a progressive web app that helps NUS CatCafe members crowd-source for locations of cats in NUS. The aim of the app is to make feeding more efficient, by providing the cats' last-seen locations.",
    'The app allows users to take a photo of the cat and upload the sighting on the app. The app detects the current location of the user and updates the location of the sighted cat on a map. From such sightings, NUS Cat Cafe members can then narrow down the current location of the cats, which would make locating the cats for feeding a lot easier.',
  ],
  links: [
    {
      title: 'Try NUSCats here!',
      url: 'http://nuscats.herokuapp.com',
      disabled: true,
    },
    { title: 'Source code', url: 'https://github.com/JinHao-L/nuscats' },
    {
      title: 'Technical design document',
      url: 'https://github.com/JinHao-L/nuscats/blob/main/group-11-milestones.pdf',
    },
  ],
  stack: [
    NEST_ICON,
    REACT_JS_ICON,
    IONIC_ICON,
    FIREBASE_ICON,
    PASSPORT_JS_ICON,
    TAILWINDCSS_ICON,
    WEBPACK_ICON,
    MAPBOX_ICON,
    SWAGGER_ICON,
  ],
  images: [
    IMG_CAT_MAP,
    IMG_CAT_FEEDS,
    IMG_CAT_LANDING,
    IMG_CAT_PROFILE,
    IMG_CAT_LIST,
    IMG_CAT_ADMIN,
    IMG_CAT_USER,
  ],
};

const HELLOWORLD: ProjectData = {
  title: 'HelloWorld',
  description: [
    'HelloWorld is a real-time chat based application built for connecting users around the globe. This project was inspired due to the frustration and ongoing boredom peopleface during the COVID-19 pandemic. The application comes with an interactive map display for users to view and connect with users via a real-time chat interface.',
    "This app was designed and developed for a Hack&Roll 2021, NUS Hackers' annual 24-hour hackathon, and the largest student-run hackathon in Singapore.",
  ],
  links: [
    {
      title: 'Try HelloWorld here!',
      url: 'https://helloworld-hnr.netlify.app',
    },
    { title: 'Source code', url: 'https://github.com/jinhao-l/HelloWorld' },
    { title: 'Hack&Roll 2021', url: 'https://devpost.com/software/hello-world-t3znpj' },
  ],
  stack: [REACT_JS_ICON, NODE_ICON, SOCKET_ICON, EXPRESS_ICON, MONGO_ICON, GOOGLE_MAPS_ICON],
  images: [IMG_HW_JOIN, IMG_HW_CHAT, IMG_HW_ZOOM],
};

const NUUDLE: ProjectData = {
  title: 'Nuudle',
  description: [
    'Nuudle is a desktop application that empowers clinic nurses, allowing them to handle patients’ appointments quickly and efficiently. While it has a GUI, most of the user interactions happen using a CLI (Command Line Interface).',
  ],
  links: [
    {
      title: 'Download Nuudle here!',
      url: 'https://github.com/ay2021s1-cs2103t-t12-4/tp/releases',
    },
    { title: 'Documentation', url: 'https://ay2021s1-cs2103t-t12-4.github.io/tp' },
    { title: 'Source code', url: 'https://github.com/JinHao-L/nuudle' },
  ],
  stack: [JAVA_ICON, GRADLE_ICON, JUNIT5_ICON, JAVAFX_ICON],
  images: [IMG_NDL_UI, IMG_NDL_ADD, IMG_NDL_ASSIGN, IMG_NDL_FIND, IMG_NDL_VIEW, IMG_NDL_REMARK],
};

const TEMBUFRIENDS: ProjectData = {
  title: 'TembuFriends',
  description: [
    'TembuFriends is a social networking mobile application for Tembusu residents. It provides a platform for students to connect and share their knowledge. This app is built using React Native framework on Expo and Firebase as our backend server and database.',
    'This was a project done under NUS Orbital - Apollo 11. And it is also my first project that I undertook after learning the basics of coding',
  ],
  links: [
    {
      title: 'Try TembuFriends here!',
      url: 'https://expo.dev/@tembufriends/TembuFriends',
    },
    { title: 'Demo video', url: 'https://www.youtube.com/watch?v=vYg_Eed1BIs' },
    {
      title: 'Documentation',
      url: 'https://docs.google.com/document/d/1QqdZvL2rQxd9YPI_1KxZBTe_RL20MkOKKq330yiCV4c/edit?usp=sharing',
    },
    { title: 'Source code (Frontend)', url: 'https://github.com/JinHao-L/tembu-friends' },
    { title: 'Source code (Functions)', url: 'https://github.com/JinHao-L/tembufriends-functions' },
  ],
  stack: [REACT_NATIVE_ICON, REDUX_ICON, ADOBE_XD_ICON, FIREBASE_ICON, EXPO_ICON],
  images: [
    IMG_TEMBU_COVER,
    IMG_TEMBU_HOME,
    IMG_TEMBU_EXPLORE,
    IMG_TEMBU_NOTIFY,
    IMG_TEMBU_MENU,
    IMG_TEMBU_PROFILE,
    IMG_TEMBU_POST,
    IMG_TEMBU_MODS,
    IMG_TEMBU_QR,
    IMG_TEMBU_REPORT,
  ],
};

export const PROJECTS: ProjectData[] = [
  MEETBALLS,
  PEERPREP,
  NUSCATS,
  HELLOWORLD,
  NUUDLE,
  TEMBUFRIENDS,
];
