const HomeMenu = document.getElementsByClassName("HomeMenu")[0];
const SliderTag = document.getElementsByClassName("slider")[0];
const DestinationMenu = document.getElementsByClassName("DestinationMenu")[0];
const CrewMenu = document.getElementsByClassName("CrewMenu")[0];
const TechnologyMenu = document.getElementsByClassName("TechnologyMenu")[0];
const bodyContainer = document.getElementsByClassName("bodyContainer")[0];
const Mother = document.getElementsByClassName("Mother")[0];
const MobileMenu = document.getElementsByClassName("MobileMenu")[0];
const MobileMenuOverLay = document.getElementsByClassName("MobileMenuOverLay")[0];
const CloseTag = document.getElementsByClassName("CloseTag")[0];
const DestinationMobile = document.getElementsByClassName("DestinationMobile")[0];
const HomeMobile = document.getElementsByClassName("HomeMobile")[0];
const CrewMobile = document.getElementsByClassName("CrewMobile")[0];
const TechnologyMobile = document.getElementsByClassName("TechnologyMobile")[0];
const LeftContainerMother = document.getElementsByClassName("LeftContainerMother")[0];
const LeftContainer = document.getElementsByClassName("LeftContainer")[0];
 const SliderFunction = (Menu) => {
    const MenuTagoffsetWidth = Menu.offsetWidth;
    SliderTag.style.width = MenuTagoffsetWidth + "px";
    const MenuTagoffsetLeft = Menu.offsetLeft;
    SliderTag.style.transform = `translateX(${MenuTagoffsetLeft}px)`
}
MobileMenu.addEventListener("click",() => {
  MobileMenuOverLay.style.display = "block";
  MobileMenu.style.display = "none";
})
CloseTag.addEventListener("click",() => {
  MobileMenuOverLay.style.display = "none";
  MobileMenu.style.display = "block";
})

const MenuData = [
    {
        "destinations": [
          {
            "name": "Moon",
            "images": {
              "png": "./assets/destination/image-moon.png",
              "webp": "./assets/destination/image-moon.webp"
            },
            "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            "distance": "384,400 km",
            "travel": "3 days"
          },
          {
            "name": "Mars",
            "images": {
              "png": "./assets/destination/image-mars.png",
              "webp": "./assets/destination/image-mars.webp"
            },
            "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            "distance": "225 mil. km",
            "travel": "9 months"
          },
          {
            "name": "Europa",
            "images": {
              "png": "./assets/destination/image-europa.png",
              "webp": "./assets/destination/image-europa.webp"
            },
            "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            "distance": "628 mil. km",
            "travel": "3 years"
          },
          {
            "name": "Titan",
            "images": {
              "png": "./assets/destination/image-titan.png",
              "webp": "./assets/destination/image-titan.webp"
            },
            "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            "distance": "1.6 bil. km",
            "travel": "7 years"
          }
        ],
        "crew": [
          {
            "name": "Douglas Hurley",
            "images": {
              "png": "./assets/crew/image-douglas-hurley.png",
              "webp": "./assets/crew/image-douglas-hurley.webp"
            },
            "role": "Commander",
            "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
          },
          {
            "name": "Mark Shuttleworth",
            "images": {
              "png": "./assets/crew/image-mark-shuttleworth.png",
              "webp": "./assets/crew/image-mark-shuttleworth.webp"
            },
            "role": "Mission Specialist",
            "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
          },
          {
            "name": "Victor Glover",
            "images": {
              "png": "./assets/crew/image-victor-glover.png",
              "webp": "./assets/crew/image-victor-glover.webp"
            },
            "role": "Pilot",
            "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
          },
          {
            "name": "Anousheh Ansari",
            "images": {
              "png": "./assets/crew/image-anousheh-ansari.png",
              "webp": "./assets/crew/image-anousheh-ansari.webp"
            },
            "role": "Flight Engineer",
            "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
          }
        ],
        "technology": [
          {
            "name": "Launch vehicle",
            "images": {
              "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
              "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
            },
            "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
          },
          {
            "name": "Spaceport",
            "images": {
              "portrait": "./assets/technology/image-spaceport-portrait.jpg",
              "landscape": "./assets/technology/image-spaceport-landscape.jpg"
            },
            "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
          },
          {
            "name": "Space capsule",
            "images": {
              "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
              "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
            },
            "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
          }
        ]
      }
]

SliderFunction(HomeMenu);
bodyContainer.style.bottom = `-${LeftContainer.offsetHeight}px`;
setTimeout(() => {
  bodyContainer.style.bottom = `0px`;
},500);

const HomeMenuDisplayFunction = () => {
  Mother.style.backgroundImage = "url(./assets/home/background-home-desktop.jpg)";
    bodyContainer.innerHTML = "";

    const LeftContainer = document.createElement("div");
    LeftContainer.classList.add("LeftContainer");

    const LeftInner = document.createElement("div");
    LeftInner.classList.add("LeftInner");

    const LeftHeadText =document.createElement("div");
    LeftHeadText.classList.add("LeftHeadText");
    LeftHeadText.append("So, you want to travel to");
    
    const BodyLeft = document.createElement("div")
    BodyLeft.classList.add("BodyLeft");
    BodyLeft.append("SPACE");

    const BottomLeft =document.createElement("div");
    BottomLeft.classList.add("BottomLeft");
    BottomLeft.append(`Let’s face it; if you want to go to space, you might as well genuinely go to 
    outer space and not hover kind of on the edge of it. Well sit back, and relax 
    because we’ll give you a truly out of this world experience!`);

    const RightContainer = document.createElement("div")
    RightContainer.classList.add("RightContainer");

    const Right = document.createElement("div")
    Right.classList.add("Right");
    Right.append("EXPLORE");

    LeftContainer.append(LeftInner);
    LeftInner.append(LeftHeadText,BodyLeft,BottomLeft);
    RightContainer.append(Right);

    bodyContainer.append(LeftContainer,RightContainer);
    bodyContainer.append(LeftContainer,RightContainer);
  bodyContainer.style.left = `-${bodyContainer.offsetWidth}px`;
  setTimeout(() => {
  bodyContainer.style.left = `0px`;
  },500);
}
HomeMenu.addEventListener("click",() => {
    SliderFunction(HomeMenu);
    HomeMenuDisplayFunction();
});
HomeMobile.addEventListener("click",() => {
  HomeMenuDisplayFunction();
  Mother.style.backgroundImage = "url(./assets/home/background-home-mobile.jpg)";
})
const DestinationDisplayFunction = () => {
  Mother.style.backgroundImage = "url(./assets/destination/background-destination-desktop.jpg)"
  bodyContainer.innerHTML="";
  const LeftContainerMother = document.createElement("div");
  LeftContainerMother.classList.add("LeftContainerMother");

  const SmallMenuContainer = document.createElement("div");
  SmallMenuContainer.classList.add("SmallMenuContainer");

  const DestinationSmallMenu = document.createElement("div");
  DestinationSmallMenu.classList.add("DestinationSmallMenu");

  const SmallMenuSliderDiv = document.createElement("div");
  SmallMenuSliderDiv.classList.add("SmallMenuSliderDiv");

  const SmallMenuSliderMove = (event) => {
    const clickTagId = event.target.id;
    const clickTag = document.getElementById(clickTagId);
    const clickTagWidth = clickTag.offsetWidth;
    SmallMenuSliderDiv.style.width = clickTagWidth + "px";
    const clickTagleft = clickTag.offsetLeft ;
    SmallMenuSliderDiv.style.transform = `translateX(${clickTagleft}px)`
  }
 
  for (let i = 0; i < MenuData[0].destinations.length; i++) {
  MenuData[0].destinations.map((data) => {
    const SmallMenuText = document.createElement("div");
    SmallMenuText.classList.add("SmallMenuText");
    SmallMenuText.append(data.name);
    SmallMenuText.addEventListener("click",SmallMenuSliderMove)
    SmallMenuText.id = (i+=1);
    SmallMenuText.addEventListener("click",(event) => {
      const SmallMenuTextId = event.target.id;
      // console.log(SmallMenuTextId,typeof SmallMenuTextId)
      if (SmallMenuTextId === "1") {
        SmallMenuDisplay(SmallMenuTextId);
      }
      if (SmallMenuTextId === "2") {
        SmallMenuDisplay(SmallMenuTextId);
      }
      if (SmallMenuTextId === "3") {
        SmallMenuDisplay(SmallMenuTextId);
      }
      if (SmallMenuTextId === "4") {
        SmallMenuDisplay(SmallMenuTextId);
      }
    })
    DestinationSmallMenu.append(SmallMenuText);
  });
  const LeftHeadText = document.createElement("div");
  LeftHeadText.append(MenuData[0].destinations[0].name.toUpperCase());
  LeftHeadText.classList.add("LeftHeadTextDestination");

  const BodyLeft = document.createElement("div");
  BodyLeft.append(MenuData[0].destinations[0].description);
  BodyLeft.classList.add("BodyLeftDestination");

  const bodyEmtyDiv = document.createElement("div");
  bodyEmtyDiv.classList.add("bodyEmtyDiv");

  const fooder = document.createElement("div");
  fooder.classList.add("fooder");
  
  const fooderleft = document.createElement("div");
  fooderleft.append("Est. travel time"+MenuData[0].destinations[0].travel);
  fooderleft.classList.add("fooderleft")

  const fooderRight = document.createElement("div");
  fooderRight.append("Avg. distance"+MenuData[0].destinations[0].distance);
  fooderRight.classList.add("fooderright");

  fooder.append(fooderleft,fooderRight)
  SmallMenuContainer.append(DestinationSmallMenu,SmallMenuSliderDiv);
  LeftContainerMother.append(SmallMenuContainer,LeftHeadText,BodyLeft,bodyEmtyDiv,fooder);

  const RightContainer = document.createElement("div");
  RightContainer.classList.add("RightContainerMother")
  
  const RightHeadText = document.createElement("div");
  RightHeadText.classList.add("RightHeadText");
  RightHeadText.append(" 01 Pick your destination")

  const RightImg = document.createElement("img");
  RightImg.src= "./assets/destination/image-moon.webp";
  RightImg.classList.add("RightImg")
  const SmallMenuDisplay = (index) =>{
    LeftHeadText.innerHTML="";
        BodyLeft.innerHTML = "";
        fooderleft.innerHTML = "";
        fooderRight.innerHTML = "";
        LeftHeadText.append(MenuData[0].destinations[index-1].name.toUpperCase());
        BodyLeft.append(MenuData[0].destinations[index-1].description);
        fooderleft.append("Est. travel time "+MenuData[0].destinations[index-1].travel);
        fooderRight.append("Avg. distance "+MenuData[0].destinations[index-1].distance);
        RightImg.src= (MenuData[0].destinations[index-1].images.png);
  }

  RightContainer.append(RightHeadText,RightImg)
  bodyContainer.append(LeftContainerMother,RightContainer);
  bodyContainer.style.left = `-${bodyContainer.offsetWidth}px`;
  setTimeout(() => {
  bodyContainer.style.left = `0px`;
},500)
};
}
DestinationMenu.addEventListener("click",() => {
    SliderFunction(DestinationMenu);
    DestinationDisplayFunction();
});
DestinationMobile.addEventListener("click",() => {
  DestinationDisplayFunction();
  Mother.style.backgroundImage = "url(./assets/destination/background-destination-mobile.jpg))"
})

CrewMenu.addEventListener("click", () => {
  SliderFunction(CrewMenu);
  Mother.style.backgroundImage = "url(./assets/crew/background-crew-desktop.jpg)";
  bodyContainer.innerHTML = "";

  const LeftContainerCrew = document.createElement("div");
  LeftContainerCrew.classList.add("LeftContainerCrew");

  const leftImageDiv = document.createElement("div");
  leftImageDiv.classList.add("leftImageDiv");

  const leftImage = document.createElement("img");
  leftImage.classList.add("leftImage");
  leftImage.src = (MenuData[0].crew[0].images.png);
  
  const RightContainerCrew = document.createElement("div");
  RightContainerCrew.classList.add("RightContainerCrew");
  
  const RightHeadText  =document.createElement("div");
  RightHeadText.classList.add("RightHeadText");
  RightHeadText.append("02 Meet your crew");

  const RightRole = document.createElement("div");
  RightRole.classList.add("RightRole");
  RightRole.append(MenuData[0].crew[0].role);

  const RightTitle = document.createElement("div");
  RightTitle.classList.add("RightTitle")
  RightTitle.append(MenuData[0].crew[0].name);

  const RightBody = document.createElement("div");
  RightBody.classList.add("RightBody");
  RightBody.append(MenuData[0].crew[0].bio);

  const PointMenuTag = document.createElement("div");
  PointMenuTag.classList.add("PointMenuTag");

  const PointMenuMove = (event) => {
    const clickTagId = event.target.id;
    const clickTag = document.getElementById(clickTagId);
    if (clickTag.classList.contains("DivLightandDack")) {
    clickTag.classList.remove("DivLightandDack");
    RightRole.innerHTML = "";
    RightTitle.innerHTML = "";
    RightBody.innerHTML = "";
    RightRole.append(MenuData[0].crew[clickTagId].role);
    RightTitle.append(MenuData[0].crew[clickTagId].name);
    RightBody.append(MenuData[0].crew[clickTagId].bio);
    leftImage.src= (MenuData[0].crew[clickTagId].images.png);
    }else{
    clickTag.classList.add("DivLightandDack");
    RightRole.innerHTML = "";
    RightTitle.innerHTML = "";
    RightBody.innerHTML = "";
    RightRole.append(MenuData[0].crew[clickTagId].role);
    RightTitle.append(MenuData[0].crew[clickTagId].name);
    RightBody.append(MenuData[0].crew[clickTagId].bio);
    leftImage.src= (MenuData[0].crew[clickTagId].images.png);
    }
  }

  for (let i = 0;i < MenuData[0].crew.length;i++){
    const DivTag = document.createElement("div");
    DivTag.classList.add("DivTag");
    DivTag.addEventListener("click",PointMenuMove)
    DivTag.id = i;
    PointMenuTag.append(DivTag);
  }


  RightContainerCrew.append(RightHeadText,RightRole,RightTitle,RightBody,PointMenuTag);

  leftImageDiv.append(leftImage);
  LeftContainerCrew.append(leftImageDiv);
  bodyContainer.append(LeftContainerCrew,RightContainerCrew);
  bodyContainer.style.top = `+${bodyContainer.offsetHeight}px`;
  setTimeout(() => {
  bodyContainer.style.top = `0px`;
},500)
    
})
CrewMobile.addEventListener("click",() => {
  Mother.style.backgroundImage = "url(./assets/crew/background-crew-mobile.jpg)";
  bodyContainer.innerHTML = "";

  const LeftContainerCrew = document.createElement("div");
  LeftContainerCrew.classList.add("LeftContainerCrew");

  const leftImageDiv = document.createElement("div");
  leftImageDiv.classList.add("leftImageDiv");

  const leftImage = document.createElement("img");
  leftImage.classList.add("leftImage");
  leftImage.src = (MenuData[0].crew[0].images.png);
  
  const RightContainerCrew = document.createElement("div");
  RightContainerCrew.classList.add("RightContainerCrew");
  
  const RightHeadText  =document.createElement("div");
  RightHeadText.classList.add("RightHeadText");
  RightHeadText.append("02 Meet your crew");

  const RightRole = document.createElement("div");
  RightRole.classList.add("RightRole");
  RightRole.append(MenuData[0].crew[0].role);

  const RightTitle = document.createElement("div");
  RightTitle.classList.add("RightTitle")
  RightTitle.append(MenuData[0].crew[0].name);

  const RightBody = document.createElement("div");
  RightBody.classList.add("RightBody");
  RightBody.append(MenuData[0].crew[0].bio);

  const PointMenuTag = document.createElement("div");
  PointMenuTag.classList.add("PointMenuTag");

  const PointMenuMove = (event) => {
    const clickTagId = event.target.id;
    const clickTag = document.getElementById(clickTagId);
    if (clickTag.classList.contains("DivLightandDack")) {
    clickTag.classList.remove("DivLightandDack");
    RightRole.innerHTML = "";
    RightTitle.innerHTML = "";
    RightBody.innerHTML = "";
    RightRole.append(MenuData[0].crew[clickTagId].role);
    RightTitle.append(MenuData[0].crew[clickTagId].name);
    RightBody.append(MenuData[0].crew[clickTagId].bio);
    leftImage.src= (MenuData[0].crew[clickTagId].images.png);
    }else{
    clickTag.classList.add("DivLightandDack");
    RightRole.innerHTML = "";
    RightTitle.innerHTML = "";
    RightBody.innerHTML = "";
    RightRole.append(MenuData[0].crew[clickTagId].role);
    RightTitle.append(MenuData[0].crew[clickTagId].name);
    RightBody.append(MenuData[0].crew[clickTagId].bio);
    leftImage.src= (MenuData[0].crew[clickTagId].images.png);
    }
  }

  for (let i = 0;i < MenuData[0].crew.length;i++){
    const DivTag = document.createElement("div");
    DivTag.classList.add("DivTag");
    DivTag.addEventListener("click",PointMenuMove)
    DivTag.id = i;
    PointMenuTag.append(DivTag);
  }


  RightContainerCrew.append(RightHeadText,RightRole,RightTitle,RightBody,PointMenuTag);

  leftImageDiv.append(leftImage);
  LeftContainerCrew.append(leftImageDiv);
  bodyContainer.append(RightContainerCrew,LeftContainerCrew);
  bodyContainer.style.top = `+${bodyContainer.offsetHeight}px`;
  setTimeout(() => {
  bodyContainer.style.top = `0px`;
},500)
})
const TechnologyDisplayFunction = () => {
  bodyContainer.innerHTML = "";

  const LeftContainerTechnology = document.createElement("div");
  LeftContainerTechnology.classList.add("LeftContainerTechnology");

  const LeftHeadTextTechnology = document.createElement("div");
  LeftHeadTextTechnology.classList.add("LeftHeadTextTechnology");
  LeftHeadTextTechnology.append("03 SPACE LAUNCH 101");
  
  const Technology = document.createElement("div");
  Technology.classList.add("Technology");
  Technology.append("THE TECHNOLOGY ...");

  const LeftInnerTechnology = document.createElement("div");
  LeftInnerTechnology.classList.add("LeftInnerTechnology");

  const LeftInnerLeft = document.createElement("div");
  LeftInnerLeft.classList.add("LeftInnerLeft");

  const DataChangeFunction = (event) => {
    const clickTagId = event.target.id;
    LeftInnerRightTitle.innerHTML = "";
    LeftInnerRightBody.innerHTML = "";
    RightImage.innerHTML = "";
    console.log(clickTagId);
    LeftInnerRightTitle.append(MenuData[0].technology[clickTagId].name.toUpperCase());
    LeftInnerRightBody.append(MenuData[0].technology[clickTagId].description);
    RightImage.src= (MenuData[0].technology[clickTagId].images.portrait);
  }

  for (let i = 0; i < MenuData[0].technology.length; i++) {
    const LeftInnerLeftNumber = document.createElement("div");
    LeftInnerLeftNumber.classList.add("LeftInnerLeftNumber")
    LeftInnerLeftNumber.id = i;
    LeftInnerLeftNumber.append(i+1);
    LeftInnerLeftNumber.addEventListener("click",DataChangeFunction);
    LeftInnerLeft.append(LeftInnerLeftNumber);
  };

  const LeftInnerRight = document.createElement("div");
  LeftInnerRight.classList.add("LeftInnerRight");
  
  const LeftInnerRightTitle = document.createElement("div");
  LeftInnerRightTitle.classList.add("LeftInnerRightTitle");
  LeftInnerRightTitle.append(MenuData[0].technology[0].name.toUpperCase());

  const LeftInnerRightBody = document.createElement("div");
  LeftInnerRightBody.classList.add("LeftInnerRightBody");
  LeftInnerRightBody.append(MenuData[0].technology[0].description);


  LeftInnerRight.append(LeftInnerRightTitle,LeftInnerRightBody)
  LeftInnerTechnology.append(LeftInnerLeft,LeftInnerRight);
  LeftContainerTechnology.append(LeftHeadTextTechnology,Technology,LeftInnerTechnology);

  const  RightContainerTechnology = document.createElement("div");
  RightContainerTechnology.classList.add("RightContainerTechnology");

  const RightImage = document.createElement("img");
  RightImage.src= (MenuData[0].technology[0].images.portrait);
  RightImage.classList.add("RightImage");
  RightContainerTechnology.append(RightImage);

  bodyContainer.append(LeftContainerTechnology,RightContainerTechnology);
  setTimeout(() => {
    bodyContainer.style.left = `-${bodyContainer.offsetWidth}px`;
},1)
setTimeout(() => {
  bodyContainer.style.left = `0px`;
},500)
}
TechnologyMenu.addEventListener("click", () => {
  SliderFunction(TechnologyMenu);
  Mother.style.backgroundImage = " url(./assets/technology/background-technology-desktop.jpg)";
  bodyContainer.innerHTML = "";

  const LeftContainerTechnology = document.createElement("div");
  LeftContainerTechnology.classList.add("LeftContainerTechnology");

  const LeftHeadTextTechnology = document.createElement("div");
  LeftHeadTextTechnology.classList.add("LeftHeadTextTechnology");
  LeftHeadTextTechnology.append("03 SPACE LAUNCH 101");
  
  const Technology = document.createElement("div");
  Technology.classList.add("Technology");
  Technology.append("THE TECHNOLOGY ...");

  const LeftInnerTechnology = document.createElement("div");
  LeftInnerTechnology.classList.add("LeftInnerTechnology");

  const LeftInnerLeft = document.createElement("div");
  LeftInnerLeft.classList.add("LeftInnerLeft");

  const DataChangeFunction = (event) => {
    const clickTagId = event.target.id;
    LeftInnerRightTitle.innerHTML = "";
    LeftInnerRightBody.innerHTML = "";
    RightImage.innerHTML = "";
    console.log(clickTagId);
    LeftInnerRightTitle.append(MenuData[0].technology[clickTagId].name.toUpperCase());
    LeftInnerRightBody.append(MenuData[0].technology[clickTagId].description);
    RightImage.src= (MenuData[0].technology[clickTagId].images.portrait);
  }

  for (let i = 0; i < MenuData[0].technology.length; i++) {
    const LeftInnerLeftNumber = document.createElement("div");
    LeftInnerLeftNumber.classList.add("LeftInnerLeftNumber")
    LeftInnerLeftNumber.id = i;
    LeftInnerLeftNumber.append(i+1);
    LeftInnerLeftNumber.addEventListener("click",DataChangeFunction);
    LeftInnerLeft.append(LeftInnerLeftNumber);
  };

  const LeftInnerRight = document.createElement("div");
  LeftInnerRight.classList.add("LeftInnerRight");
  
  const LeftInnerRightTitle = document.createElement("div");
  LeftInnerRightTitle.classList.add("LeftInnerRightTitle");
  LeftInnerRightTitle.append(MenuData[0].technology[0].name.toUpperCase());

  const LeftInnerRightBody = document.createElement("div");
  LeftInnerRightBody.classList.add("LeftInnerRightBody");
  LeftInnerRightBody.append(MenuData[0].technology[0].description);


  LeftInnerRight.append(LeftInnerRightTitle,LeftInnerRightBody)
  LeftInnerTechnology.append(LeftInnerLeft,LeftInnerRight);
  LeftContainerTechnology.append(LeftHeadTextTechnology,Technology,LeftInnerTechnology);

  const  RightContainerTechnology = document.createElement("div");
  RightContainerTechnology.classList.add("RightContainerTechnology");

  const RightImage = document.createElement("img");
  RightImage.src= (MenuData[0].technology[0].images.portrait);
  RightImage.classList.add("RightImage");
  RightContainerTechnology.append(RightImage);

  bodyContainer.append(LeftContainerTechnology,RightContainerTechnology);
  setTimeout(() => {
    bodyContainer.style.left = `-${bodyContainer.offsetWidth}px`;
},1)
setTimeout(() => {
  bodyContainer.style.left = `0px`;
},500)

})
TechnologyMobile.addEventListener("click",() => {
  TechnologyDisplayFunction();
  Mother.style.backgroundImage = " url(./assets/technology/background-technology-mobile.jpg)"

})

