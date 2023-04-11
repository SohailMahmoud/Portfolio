// Import images
import Image1 from "../images/capstone-project-1.jpg";
import Image2 from "../images/capstone-project-2.jpg";
import Image3 from "../images/capstone-project-3.jpg";

// Import icons
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const singleProjectData = {
  ProjectHeader: {
    title: "Online Therapist Website ( Capstone project )",
    publishDate: "Feb 20, 2023",
    tags: "Frontend",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Kabul Project Management UI",
      img: Image1,
    },
    {
      id: 2,
      title: "Kabul Project Management UI",
      img: Image2,
    },
    {
      id: 3,
      title: "Kabul Project Management UI",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Client",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Company Ltd",
      },
      {
        id: 2,
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://company.com",
      },
      {
        id: 4,
        title: "Phone",
        details: "555 8888 888",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Create a full functional website based on React JS that contains 4 different user journeys, moreover, the project is connected to firebase as a backend services to be able to use database, API and its SDK ",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "HTML5",
          "CSS",
          "JavaScript",
          "React.js",
          "TailwindCSS",
          "Firebase",
          "Figma",
        ],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "First of all, the website should be a minimum of 5 pages. Also, we had to use dynamic and interactive user input. Secondly, we were required to use a CSS design library such as TailwindCSS or styled-components. In addtion to that, we had to use the React Framework or any other React based framework e.g. Gatsby, NextJS, Frontity, etc. Thridly, Users should be able to register or join a mailing list to receive more information. The user details should be saved in an online database.",
      },
      {
        id: 2,
        details: `Moreover, we were required to interact with an external API or backend platform (e.g. Firebase, Airtable, strapi, etc). The application should FETCH and POST from the API. Also the website should preferably support 2 languages. Lastly, unit testing should be utilized within the project e.g. Jest.`,
				url: "https://main--jocular-kitsune-979dd9.netlify.app/"
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        icon: <FiTwitter />,
        url: "https://twitter.com/realstoman",
      },
      {
        id: 2,
        name: "Instagram",
        icon: <FiInstagram />,
        url: "https://instagram.com/realstoman",
      },
      {
        id: 3,
        name: "Facebook",
        icon: <FiFacebook />,
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: <FiLinkedin />,
        url: "https://linkedin.com/",
      },
      {
        id: 5,
        name: "Youtube",
        icon: <FiYoutube />,
        url: "https://www.youtube.com/c/StomanStudio",
      },
    ],
  },
};
