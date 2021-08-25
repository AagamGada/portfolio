import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Aagam Gada",
  title: "Hi all, I'm Aagam",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / ReactJS / NodeJS / ExpressJS / MongoDB some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1MKh3H3gdNnWTeZoTCFfRQS3rQi56PUdj/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AagamGada",
  linkedin: "https://www.linkedin.com/in/aagam-gada-7612a616b/",
  gmail: "aagamgada1999@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100009398754889",
  instagram: "https://www.instagram.com/aagam_27/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Making Progressive MERN Stack Web Applications from Start till the Deployment"),
    emoji("⚡ Develop interactive Front end / User Interfaces for your web applications"),
    emoji("⚡ Currently Learning React Native for Mobile App development")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The Hacking School",
      logo: require("./assets/images/theHackingSchool.png"),
      subHeader: "Full Stack Development",
      duration: "March 2021 - August 2021",
      desc: "Build many real world projects and got the first hand experience",
    },
    {
      schoolName: "Mithibai College",
      logo: require("./assets/images/mithibai.png"),
      subHeader: "Bachelor of Commerce",
      duration: "July 2017 - October 2020",
    }
  ]
};

const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "80%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Javascript",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

// const workExperiences = {
//   display: true, //Set it to true to show workExperiences Section
//   experience: [
//     // {
//     //   role: "Data Entry",
//     //   company: "Welcome SuperMarket",
//     //   companylogo: require("./assets/images/facebookLogo.png"),
//     //   date: "June 2020 – March 2021",
//     //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     //   descBullets: [
//     //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//     //   ]
//     // },
//   ]
// };

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Project",
  projects: [
    {
      image: require("./assets/images/social.jpg"),
      projectName: "Socail-Hunt",
      projectDesc: "Its a social media application made with MERN Stack for posting content which includes all the crud operations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://iaagam.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9029904475",
  email_address: "aagamgada1999@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  // workExperiences,
  openSource,
  bigProjects,
  contactInfo,
};
