import ApplicationModel from "./applicationModel.js"
import ToolsModel from "./toolsModel.js"
import LinkModel from "./linkModel.js"
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
import perahub from "../assets/perahub.png" 
import perahub1 from "../assets/perahub1.png" 
import perahub2 from "../assets/perahub2.png" 
import perahub3 from "../assets/perahub3.png" 

import clearme from "../assets/clearme_logo.png" 
import clearme1 from "../assets/clearme.png" 
import clearme2 from "../assets/clearme2.png" 
import clearme3 from "../assets/clearme3.png" 

import bnham from "../assets/bnham.png" 
import bnham1 from "../assets/bnham1.png" 
import bnham2 from "../assets/bnham2.png" 
import bnham3 from "../assets/bnham3.png" 


import appstore from "../assets/appstore.png" 
import appstore1 from "../assets/appstore1.png" 
import appstore2 from "../assets/appstore2.png" 

import tfscas from "../assets/tfscas.png" 
import tfscas1 from "../assets/tfscas1.jpg" 
import tfscas2 from "../assets/tfscas2.jpg" 
import tfscas3 from "../assets/tfscas3.jpg" 

import gcash from "../assets/gcash.png" 
import gcash1 from "../assets/gcash1.png" 
import gcash2 from "../assets/gcash2.png" 
import gcas3 from "../assets/gcash3.png" 

import landstar from "../assets/landstar.png" 
import landstar1 from "../assets/landstar1.png" 
import landstar2 from "../assets/landstar2.png" 
import landstar3 from "../assets/landstar3.png" 


import jujupig from "../assets/jujupig.jpeg" 
import jujupig1 from "../assets/jujupig1.jpeg" 
import jujupig2 from "../assets/jujupig2.jpeg" 
import jujupig3 from "../assets/jujupig3.jpeg" 

import bingo from "../assets/bingo.mp4" 

import iupaccount from "../assets/iupaccount.png" 
import iupaccount1 from "../assets/iupaccount1.png" 
import iupaccount2 from "../assets/iupaccount2.png" 
import iupaccount3 from "../assets/iupaccount3.png" 

import iupnote from "../assets/iupnote.png" 
import iupnote1 from "../assets/iupnote1.png" 
import iupnote2 from "../assets/iupnote2.png" 
import iupnote3 from "../assets/iupnote3.png" 

import fillit from "../assets/fillit.png" 
import fillit1 from "../assets/fillit1.png" 
import fillit2 from "../assets/fillit2.png" 
import fillit3 from "../assets/fillit3.png" 

import zipiskip2 from "../assets/zipiskip2.png" 
const mockData = [
  new ApplicationModel(
    {
        name:"Perahub",
        logo: perahub,
        company: "Petnet Inc.",
        desc: `Introducing the new and updated PERA HUB Mobile App available for download on the AppStore. Enjoy safe and secure remittance* on mobile when you use the PERA HUB Visa Prepaid Card and link it to the app. Monitor your card balance, locate the nearest PERA HUB branch and check out your PERA HUB Rewards points through the app. If you don't have a card, you can still enjoy faster transactions when you use the Branch Transaction (Stage and Pay) feature.`,
        tasks: `• Develop new app features
        • Develop api security of the app
        • Whitehat hacking of the app
        `,
        images: [perahub1, perahub2, perahub3],
        videos: null,
        status: "Production",
        links: [
            new LinkModel({
                name: 'Android',
                url: "https://play.google.com/store/apps/details?id=com.yondu.cbcs.perahub&hl=en_US&gl=US"
            }),
            new LinkModel({
                name: 'iOS',
                url: "https://apps.apple.com/ph/app/pera-hub/id1192964798?platform=iphone"
            })
        ],
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
          imgSrc: git,
          name: "Git"
        }),
      ]
    }
  ),
  new ApplicationModel(
    {
        name:"Clearme",
        logo: clearme,
        company: "Manulife Business Processing Services",
        desc: `Employees will have to complete on a daily basis in order to determine if they are safe to report to the office. The health declaration form is digitally generated in compliance with DTI / DOLE memo on infection control.`,
        tasks: `• Do code architecture.
        • Create API request framework with security.
        • Help Junior developer if needed.
        `,
        images: [clearme1, clearme2, clearme3],
        videos: null,
        status: "Minimum viable product (MVP)",
       
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
          imgSrc: git,
          name: "Git"
        }),
      ]
    }
  ),
  new ApplicationModel(
    {
        name:"Basket and Ham",
        logo: bnham,
        company: "Manulife Business Processing Services",
        desc: `Registration of receiving Christmas basket on Manulife Business Processing Services`,
        tasks: `• Refractoring event information
        • Update Local database
        `,
        images: [bnham1, bnham2, bnham3],
        videos: null,
        status: "Enterprise Production",
       
      tools: [
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
  new ApplicationModel(
    {
        name:"MBPS Appstore",
        logo: appstore,
        company: "Manulife Business Processing Services",
        desc: `Mobile Application Store for Manulife Business Processing Services`,
        tasks: `• Propose this project
        • Overall backend development
        • Overall frontend development
        `,
        images: [appstore1, appstore2],
        videos: null,
        status: "Enterprise Production",
       
      tools: [
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
  new ApplicationModel(
    {
        name:"TFC Cas",
        logo: tfscas,
        company: "Magnific IT Solutions and Services, Inc.",
        desc: `Customer Application System for auto loan and financing by Toyota Financial Services (TFS) Phil.`,
        tasks: `• Do code architecture.
        • Create API request framework with security.
        • Do caching on api response  with expirtation
        • Do deployment on test environtment
        `,
        images: [tfscas1, tfscas2, tfscas3],
        videos: null,
        status: "Minimum viable product (MVP)",
       
      tools: [
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
  new ApplicationModel(
    {
        name:"GCash",
        logo: gcash,
        company: "Mynt (Globe Fintech Innovation Inc.)",
        desc: `A mobile wallet app that lets you instantly pay bills, buy load, send money, shop, and more – all in the safety of your own home!.`,
        tasks: `• Do security on API request
        • Develop feature Gcash payment on LAZADA
        • Develop new features
        • Optimize framework and cache
        • Implement deeplink
        • Implement pulseid(Geofence for ads) framework
        • Develop Gcash web registration
        • Develop PWA feature
        `,
        images: [gcash1, gcash2, gcas3],
        videos: null,
        status: "Production",
        links: [
            new LinkModel({
                name: 'iOS',
                url: "https://apps.apple.com/ph/app/gcash/id520020791"
            })
        ],
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
  new ApplicationModel(
    {
        name:"Landstar",
        logo: landstar,
        company: "Network Economic Service Venture",
        desc: `Landstar’s mobile app provides several important features for all capacity providers. These features include the ability to review pertinent load details, provide shipment status updates and capture and submit documentation via their smart phone. Use this app to reduce the time spent making or taking phone calls for status updates and minimize the need to use a desktop or laptop computer.`,
        tasks: `• Optimize Battery consumption
        • Develop new feature
        • Bug Fixing
        `,
        images: [landstar1, landstar2, landstar3],
        videos: null,
        status: "Production",
        links: [
            new LinkModel({
                name: 'iOS',
                url: "https://apps.apple.com/us/app/landstar-connect/id903235326"
            })
        ],
      tools: [
        new ToolsModel({
          imgSrc: xcode,
          name: "XCode"
        }),
        new ToolsModel({
          imgSrc: git,
          name: "Git"
        }),
      ]
    }
  ),
  new ApplicationModel(
    {
        name:"Jujupig",
        logo: jujupig,
        company: "Fistbump Creation",
        desc: `The most fascinating and cutest Pigs on the planet that flies away your stress and boredom!`,
        tasks: `• Overall game development
        • Implement 3d assets
        • Implement in app purchase
        `,
        images: [jujupig1, jujupig2, jujupig3],
        videos: null,
        status: "App already Expired",
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
            imgSrc: unity3d,
            name: "Unity3d"
          }),
        new ToolsModel({
          imgSrc: git,
          name: "Git"
        }),
      ]
    }
  ),
  new ApplicationModel(
    {
        name:"Slot Machine",
        logo: fistbump,
        company: "Fistbump Creation",
        desc: `Bingo slot machine`,
        tasks: `• Overall game development
        • Implement 3d assets
        • Implement ticketing hardware
        • Deployment in appstore
        `,
        images: null,
        video: bingo,
        status: "Minimum viable product (MVP)",
      tools: [
        
          new ToolsModel({
            imgSrc: unity3d,
            name: "Unity3d"
          }),
        new ToolsModel({
          imgSrc: git,
          name: "Git"
        }),
      ]
    }
  ),
  new ApplicationModel(
    {
        name:"iUp Account",
        logo: iupaccount,
        company: "Smart and Sense Infotech Inc.",
        desc: `Managing expenses? Planning a vacation?..Or a picnic with group of friends? Inventory? No worries! iUp Account has Multiple-Accounts that you can use! Lots of Receipts? Want to keep them, and yet so messy? Scan it and manage it with your transactions! And with easy search, no need to ransack all your records! Use iUp Account!`,
        tasks: `• Overall Coding
        • Implement in app purchase
        • Implement Camera filter and edge cropping
        • Deployment in appstore
        `,
        links: [
            new LinkModel({
                name: 'iOS',
                url: "https://apps.apple.com/us/app/iup-account-manage-receipt/id1117269568"
            }),
        ],
        images: [iupaccount1,iupaccount2, iupaccount3],
        video: null,
        status: "Production",
      tools: [
       
          new ToolsModel({
            imgSrc: xcode,
            name: "Xcode"
          }),
       
      ]
    }
  ),
  new ApplicationModel(
    {
        name:"iUp Note",
        logo: iupnote,
        company: "Smart and Sense Infotech Inc.",
        desc: `iUp Note is a useful application that provides the user with a different note-taking capabilities like Smart Forms,Auto Text/Image and Hyperlink, etc. It lets you create your own notebook, diary, scrapbook, to-do list, memo, planner and arrange it based on your own style and preferences.`,
        tasks: `• Implement camera filter
        • Add painting features
        • Add in app purchase
        • Bug fixing
        `,
        links: [
            new LinkModel({
                name: 'iOS',
                url: "https://apps.apple.com/us/app/iup-note-notetaking-document-scan-drawing-photo-album/id818183940"
            }),
        ],
        images: [iupnote1,iupnote2, iupnote3],
        video: null,
        status: "Production",
      tools: [
       
          new ToolsModel({
            imgSrc: xcode,
            name: "Xcode"
          }),
       
      ]
    }
  ),
  new ApplicationModel(
    {
        name:"iUp Note",
        logo: fillit,
        company: "Smart and Sense Infotech Inc.",
        desc: `Fill It! is a unique fast-paced color word game that will get you addicted for hours. Test your skills and TAP AS MANY CORRECT COLOR WORDS UNTIL THE WATER RUNS OUT!`,
        tasks: `• Implement camera filter
        • Add painting features
        • Add in app purchase
        • Bug fixing
        `,
        links: [
            new LinkModel({
                name: 'iOS',
                url: "https://apps.apple.com/us/app/id1033156635"
            }),
        ],
        images: [fillit1,fillit2, fillit3],
        video: null,
        status: "Production",
      tools: [
       
          new ToolsModel({
            imgSrc: xcode,
            name: "Xcode"
          }),
       
      ]
    }
  ),
  new ApplicationModel(
    {
        name:"Zipiskip",
        logo: zipiskip,
        company: "Zipiskip Inc.",
        desc: `Zipiskip is a socially conscious mobile ordering platform created to help small businesses while providing customers with the best on-demand ordering experience.`,
        tasks: `• Implement printer receipt
        • Bug fixing
        • Implement alerts and notifcation
        • Optimize dirty codes
        `,
        images: [zipiskip2],
        video: null,
        status: "Minimum viable product (MVP)",
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
]

export default mockData