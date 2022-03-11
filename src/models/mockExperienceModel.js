import ExperienceModel from "./experienceModel.js"
import ToolsModel from "./toolsModel.js"
import snitLogo from "../assets/snit.png"
import android from "../assets/android.png"
import xcode from "../assets/xcode.png"
import h5 from "../assets/h5.png"
import unity3d from "../assets/unity3d.png"
import nesv from "../assets/nesv.png"
import angular from "../assets/angular.png"
import liferay from "../assets/liferay.png"
import mynt from "../assets/mynt.png"
import vue from "../assets/vue.png"
import manulife from "../assets/manulife.png"
import flutter from "../assets/flutter.png"
import petnet from "../assets/petnet.png"
import git from "../assets/git.png"
import magnific from "../assets/magnific.png"
import nodejs from "../assets/nodejs.png"
import linux from "../assets/linux.png"
import zipiskip from "../assets/zipiskip.jpg"
import purplet from "../assets/purplet.png"
import fistbump from "../assets/fistbump.png"
const mockData = [
  new ExperienceModel(
    {
      position:"Technical Lead/ Mobile App Developer ",
      level: "Senior",
      company: "Petnet Inc.",
      story: `• Develop new feature for iOS and android
      • Do code review
      • Give technical advice on stake holder if is doable or not
      • Help on other developer on fixing bugs
      • Do app deployment on different environtment
      • Manage code repository
      `,
      address: "East Offices Bldg., 114 Aguirre St., Legaspi Village, Makati City Philippines",

      logo: petnet,
      dateStart: "Aug 2021",
      dateEnd: "Present",
      type: "Fulltime",
      tools: [
      
        new ToolsModel({
          imgSrc: xcode,
          name: "XCode"
        }),
        new ToolsModel({
          imgSrc: android,
          name: "Android"
        }),
        new ToolsModel({
          imgSrc: flutter,
          name: "Flutter"
        }),
        new ToolsModel({
          imgSrc: git,
          name: "Git"
        }),
      ]
    }
  ),
  new ExperienceModel(
    {
      position:"Mobile Application Engineer ",
      level: "Level 4(Senior)",
      company: "Manulife Business Processing Services",
      story: `• Propose solution on company problem
      • Propose Flutter to lessen the development effort on mobile development
      • Do brownbags on mobile development and handling repository
      • Participate in tech activities like hackaton on the company
      • Make enterprise appstore to distribute enterprise application that make of the team
      • Do web development if needed
      `,
      address: "U.P. Ayala Land TechnoHub Diliman, Quezon City, Philippines",

      logo: manulife,
      dateStart: "June 2019",
      dateEnd: "Aug 2021",
      type: "Fulltime",
      tools: [
        new ToolsModel({
          imgSrc: flutter,
          name: "Flutter"
        }),
        new ToolsModel({
          imgSrc: xcode,
          name: "XCode"
        }),
        new ToolsModel({
          imgSrc: android,
          name: "Android"
        }),
        new ToolsModel({
          imgSrc: angular,
          name: "Angular"
        }),
        new ToolsModel({
          imgSrc: vue,
          name: "VueJS"
        }),
        new ToolsModel({
          imgSrc: git,
          name: "Git"
        }),
      ]
    }
  ),
  new ExperienceModel(
    {
      position:"Lead iOS Developer",
      company: "Mynt (Globe Fintech Innovation Inc.)",
      level: "Senior",
      story: `• Develop new feature for gcash iOS
      • Develop web page registration use in referral feature
      • Develop Progressive web app features and integrate it on GCash iOS
      • Do code review
      • Give technical advice on project designer if is doable or not
      • Help on other developer on fixing bugs
      • Develop external payment page that use in Lazada app
      • Do app deployment on different environment
      • Manage code repository
      • Implement security that use in api request
      `,
      address: "Bonifacio Global City, Taguig, Philippines",
      logo: mynt,
      dateStart: "Aug 2017",
      dateEnd: "May 2019",
      type: "Fulltime",
      tools: [
        new ToolsModel({
          imgSrc: xcode,
          name: "XCode"
        }),
        new ToolsModel({
          imgSrc: vue,
          name: "VueJS"
        }),
        new ToolsModel({
          imgSrc: git,
          name: "Git"
        }),
      ]
    }
  ),
  new ExperienceModel(
    {
      position:"iOS Developer",
      level: "Junior",
      company: "Network Economic Service Venture",
      story: `• Develop company client mobile application
      • Help on other developer on fixing bugs
      `,
      address: "San Miguel Ave., Ortigas 1552 Pasig, Philippines",
      logo: nesv,
      dateStart: "July 2016",
      dateEnd: "Feb 2017",
      type: "Fulltime",
      tools: [
       
        new ToolsModel({
          imgSrc: xcode,
          name: "XCode"
        }),
        new ToolsModel({
          imgSrc: angular,
          name: "Angular"
        }),
        new ToolsModel({
          imgSrc: liferay,
          name: "Liferay"
        }),
        new ToolsModel({
          imgSrc: git,
          name: "Git"
        }),
      ]
    }
  ),
  new ExperienceModel(
    {
      position:"Software Developer",
      level: "Junior",
      company: "Smart and Sense Infotech Inc.",
      story:  `• Develop company own mobile application
      • Help on other developer on fixing bugs
      • Propose a project
      `,
      address: "Pearl Dr., Ortigas Center, Pasig City, MM, Philippines",
      logo: snitLogo,
      dateStart: "June 2015",
      dateEnd: "July 2016",
      type: "Fulltime",
      tools: [
       new ToolsModel({
          imgSrc: android,
          name: "Android"
        }),
        new ToolsModel({
          imgSrc: xcode,
          name: "XCode"
        }),
        new ToolsModel({
          imgSrc: h5,
          name: "Web"
        }),
        new ToolsModel({
          imgSrc: unity3d,
          name: "Unity3D"
        })
      ]
    }
  ),
  new ExperienceModel(
    {
      position:"iOS Developer",
      level: "Senior",
      company: "Zipiskip Inc.",
      story: `• Guide the client on right way to implement some app feature
      • Develop new features
      • Bug fixing
      `,
      address: "Redondo Beach, CA",
      logo: zipiskip,
      dateStart: "Nov 2021 ",
      dateEnd: "Feb 2022",
      type: "Freelance",
      tools: [
        new ToolsModel({
          imgSrc: xcode,
          name: "Xcode"
        }),
        new ToolsModel({
          imgSrc: git,
          name: "Git"
        }),
      ]
    }
  ),
  new ExperienceModel(
    {
      position:"Mobile Application Developer",
      level: "Senior",
      company: "Magnific IT Solutions and Services, Inc.",
      story: `• Propose flutter to lessen the effort of mobile development
      • Develop their client mobile application
      • Manage repository
      • Guide other developer because that time flutter is new
      • Deploy on test enviroment
      `,
      address: "St Brgy, Dansalan, Mandaluyong City, Philippines",
      logo: magnific,
      dateStart: "December 2019",
      dateEnd: "January 2021",
      type: "Freelance",
      tools: [
       new ToolsModel({
          imgSrc: flutter,
          name: "Flutter"
        }),
        new ToolsModel({
          imgSrc: xcode,
          name: "Xcode"
        }),
        new ToolsModel({
          imgSrc: android,
          name: "Android"
        }),
        new ToolsModel({
          imgSrc: git,
          name: "Git"
        }),
      ]
    }
  ),
  new ExperienceModel(
    {
      position:"Software Consultant",
      level: "Senior",
      company: "E Purple T Holdings Corp",
      story: `• Do technical research
      • Develop a shared streaming website
      • Manage repository
      • Deploy on cloud service
      `,
      address: "Dao St. Marikina Heights, Marikina City, Philippines",
      logo: purplet,
      dateStart: "December 2018",
      dateEnd: "March 2020",
      type: "Freelance",
      tools: [
        new ToolsModel({
          imgSrc: vue,
          name: "VueJS"
        }),
        new ToolsModel({
          imgSrc: git,
          name: "Git"
        }),
        new ToolsModel({
          imgSrc: nodejs,
          name: "NodeJS"
        }),
        new ToolsModel({
          imgSrc: linux,
          name: "Linux"
        }),
      ]
    }
  ),
  new ExperienceModel(
    {
      position:"Game Developer",
      level: "Junior",
      company: "Fistbump Creation",
      story: `• Develop some company game
      • Develop their client game
      • Manage repository
      • Deploy their mobile app in appstore and play store
      • Ingerate ticketing hardware on one of their games
      `,
      address: "Sta. Rosa Laguna, Philippines",
      logo: fistbump,
      dateStart: "February 2016 ",
      dateEnd: "September 2018",
      type: "Freelance",
      tools: [
        new ToolsModel({
          imgSrc: android,
          name: "Android"
        }),
        new ToolsModel({
          imgSrc: xcode,
          name: "XCode"
        }),
        new ToolsModel({
          imgSrc: h5,
          name: "Web"
        }),
        new ToolsModel({
          imgSrc: git,
          name: "Git"
        }),
        new ToolsModel({
          imgSrc: unity3d,
          name: "Unity3D"
        })
      ]
    }
  )
]

export default mockData