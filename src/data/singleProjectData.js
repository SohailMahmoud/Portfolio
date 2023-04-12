// Import images
import Image1 from "../images/capstone-project-1.jpg";
import Image2 from "../images/capstone-project-2.jpg";
import Image3 from "../images/capstone-project-3.jpg";
import reactQuiz1 from "../images/react-quiz-1.jpg";
import reactQuiz2 from "../images/react-quiz-2.jpg";
import reactQuiz3 from "../images/react-quiz-3.jpg";

export const singleProjectData = {
  capstoneProject: {
    ProjectHeader: {
      title: "Online Therapist Website ( Capstone project )",
      publishDate: "Feb 20, 2023",
      tags: "Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Home page",
        img: Image1,
      },
      {
        id: 2,
        title: "Login page",
        img: Image2,
      },
      {
        id: 3,
        title: "About page",
        img: Image3,
      },
    ],
    ProjectInfo: {
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
          url: "https://main--jocular-kitsune-979dd9.netlify.app/",
        },
      ],
    },
  },
  reactQuiz: {
    ProjectHeader: {
      title: "React Quiz with TypeScript",
      publishDate: "Mar 25, 2023",
      tags: "Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Home page",
        img: reactQuiz1,
      },
      {
        id: 2,
        title: "First quiz page",
        img: reactQuiz2,
      },
      {
        id: 3,
        title: "Displaying the right and wrong answer",
        img: reactQuiz3,
      },
    ],
    ProjectInfo: {
      ObjectivesHeading: "Objective",
      ObjectivesDetails: "A simple quiz created by React.js and TypeScript",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["HTML5", "CSS", "TypeScript", "React.js", "Matrial UI"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Instead of using Vanilla JavaScript, I used TypeScript which is better than JavaScript in terms of language features, reference validation, project scalability, collaboration within and between teams, developer experience, and code maintainability. The quiz is counting your score and also telling the user whether his/her answer is right or wrong. In addition to that, I used Material UI, which is a famous react component library",
          url: "https://react-quiz-ts.netlify.app/",
        },
      ],
    },
  },
};
