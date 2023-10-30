import indexgenerator from '../../public/Automated Index Calculator.png'
import corpcal from '../../public/segmentation test.gif'
import eventseeker from '../../public/party.jpeg'
import laneguard from '../../public/Lane Detection.jpg'

export const projectsData = [
  {
    key: 1,
    src: indexgenerator,
    alt: "Raster Index Generator",
    title: "Automated Index Generator",
    description: "A tool created to simplify and automate generation of normalized difference index raster images over multi-tiled regions.",
    href: [
      {
        label: "Learn More",
        url: "https://github.com/nooodle-soup/Automated-Index-Generator"
      }
    ]
  },
  {
    key: 2,
    src: corpcal,
    alt: "CorpCal Tool",
    title: "CorpCal Tool",
    description: "A project on segmenting and analysing the Corpus Callosum for relating features and identifying biomarkers.",
    href: [
      {
        label: "Learn More",
        url: "https://corpcalusc.github.io/"
      }
    ]
  },
  {
    key: 3,
    src: eventseeker,
    alt: "Event Seeker",
    title: "Event Seeker",
    description: "Discover local events and activities near you with this dynamic event search app, tailored to your interests and location.",
    href: [
      {
        label: "Learn More",
        url: "https://github.com/nooodle-soup/EventSeeker"
      },
      { 
        label: "Demo",
        url: "https://eventseeker-webapp.web.app/search"
      }
    ]
  },
  {
    key: 4,
    src: laneguard,
    alt: "Lane Guaard",
    title: "LaneGuard",
    description: "A lane detection software to accurately identify and track lane boundaries using image processing techniques and video feeds.",
    href: [
      {
        label: "Learn More",
        url: "https://github.com/nooodle-soup/lane-detector"
      },
      { 
        label: "Video",
        url: "https://github.com/nooodle-soup/lane-detector/raw/master/project.avi"
      }
    ]
  },
];

