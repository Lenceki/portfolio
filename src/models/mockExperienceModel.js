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
const mockData = [
  new ExperienceModel(
    {
      position:"Mobile Application Engineer ",
      level: "Level 4(Senior)",
      company: "Manulife Business Processing Services",
      story: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus orci, aliquet viverra est ac, facilisis sollicitudin mauris. In tortor libero, interdum vel dolor et, volutpat pharetra velit. Phasellus sem mi, blandit ut mi at, condimentum pharetra est. Vivamus quis neque quis quam laoreet porta. Phasellus ut est at nulla vulputate maximus a et magna. Integer in accumsan dui. Vivamus semper libero non enim fermentum, consectetur porta lacus tristique. Etiam pretium mi erat, finibus eleifend quam tempor eget.

      Fusce eget posuere ante. Donec lectus dolor, porta vel euismod sit amet, tristique id sapien. Aenean sed erat rutrum, molestie ex id, accumsan nunc. Duis ultricies pharetra eros at porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras vel viverra arcu. Etiam dolor nisi, sollicitudin ut nisi eget, porta ultricies leo. Vestibulum vel molestie mauris.`,
      address: "U.P. Ayala Land TechnoHub Diliman, Quezon City, Philippines",

      logo: manulife,
      dateStart: "June 2019",
      dateEnd: "Present",
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
      ]
    }
  ),
  new ExperienceModel(
    {
      position:"Lead iOS Developer",
      company: "Mynt (Globe Fintech Innovation Inc.)",
      level: "Senior",
      story: "String",
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
      ]
    }
  ),
  new ExperienceModel(
    {
      position:"iOS Developer",
      level: "Junior",
      company: "Network Economic Service Venture",
      story: "String",
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
        })
      ]
    }
  ),
  new ExperienceModel(
    {
      position:"Software Developer",
      level: "Entry",
      company: "Smart and Sense Infotech Inc.",
      story: "String",
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
  )
]

export default mockData