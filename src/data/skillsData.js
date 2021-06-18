import UilBracketsCurly from "@iconscout/react-unicons/icons/uil-brackets-curly";
import UilServerNetwork from "@iconscout/react-unicons/icons/uil-server-network";
import UilSwatchbook from "@iconscout/react-unicons/icons/uil-swatchbook";

const skillsData = [
  {
    id: "1",
    title: "Frontend developer",
    subTitle: "More than 3 years",
    icon: <UilBracketsCurly />,
    skills: [
      {
        id: "1.1",
        name: "HTML",
        number: "90%",
        width: 90
      },
      {
        id: "1.2",
        name: "CSS",
        number: "80%",
        width: 80
      },
      {
        id: "1.3",
        name: "JavaScript",
        number: "70%",
        width: 70
      },
      {
        id: "1.4",
        name: "React",
        number: "85%",
        width: 85
      }
    ]
  },
  {
    id: "2",
    title: "Backend developer",
    subTitle: "More than 1 year",
    icon: <UilServerNetwork />,
    skills: [
      {
        id: "2.1",
        name: "NodeJS",
        number: "80%",
        width: 80
      },
      {
        id: "2.2",
        name: "MongoDB",
        number: "70%",
        width: 70
      },
      {
        id: "2.3",
        name: "Firebase",
        number: "75%",
        width: 75
      },
      {
        id: "2.4",
        name: "Heroku",
        number: "65%",
        width: 65
      }
    ]
  },
  {
    id: "3",
    title: "Designer",
    subTitle: "More than 4 years",
    icon: <UilSwatchbook />,
    skills: [
      {
        id: "3.1",
        name: "Figma",
        number: "90%",
        width: 90
      },
      {
        id: "3.2",
        name: "Sketch",
        number: "85%",
        width: 85
      },
      {
        id: "3.3",
        name: "Photoshop",
        number: "85%",
        width: 85
      }
    ]
  }
]

export default skillsData;