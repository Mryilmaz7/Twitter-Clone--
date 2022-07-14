import React from "react";
import NavbarButton from "../NavbarButton/NavbarButton";
import classes from "./Navbar.module.css"
import {Col} from "react-bootstrap";
import * as Icon from "../icons"
import {useRouter} from "next/router";
import TweetButton from "../TweetButton/tweetButton";
import useWindowSize from "../../hooks/UseWindowSize";
import MyProfileButton from "../NavbarMyProfileButton";

const Buttons=[
    {
        id:8,
        name:"",
        path:"./",
        icons: <Icon.Twitter style={{ fontSize:30,color:'var(rgba(29,161,500,300))'}} />
    },
    {

        id:0,
        name:"Anasayfa",
        path:"/",
        icons: <Icon.Home/>,
        iconsFill:<Icon.HomeFill/>
    },
    {
        id:1,
        name:"Keşfet",
        path:"/explore",
        icons: <Icon.Explore/>,
        iconsFill:<Icon.ExplorerFill/>
    },
    {
        id:2,
        name:"Bildirimler",
        path:"/notification",
        icons: <Icon.Notification/>,
        iconsFill: <Icon.NotificationFill/>
    },
    {
        id:3,
        name:"Mesajlar",
        path:"/messages",
        icons:<Icon.Messages/>,
        iconsFill: <Icon.MessagesFill/>
    },
    {
        id:4,
        name:"Yer İşaretleri",
        path:"/placemarks",
        icons:<Icon.Bookmark/>,
        iconsFill: <Icon.BookmarkFill/>
    },
    {
        id:5,
        name:"Listeler",
        path:"/lists",
        icons:<Icon.Lists/>,
        iconsFill: <Icon.ListsFill/>
    },
    {
        id:6,
        name:"Profil",
        path:"/profile",
        icons:<Icon.Profile/>,
        iconsFill: <Icon.ProfileFill/>
    },
    {
        id:7,
        name:"More",
        path:"more",
        icons: <Icon.More/>,
        iconsFill: <Icon.More/>
    },

]
const MobileButtons=[
    {
        id:0,
        name:"Home",
        path:"/",
        icons:<Icon.Home/>,
        iconsFill:<Icon.HomeFill/>
    }              ,
    {
        id:1,
        name:"Messages",
        path:"/messages",
        icons:<Icon.Messages/>,
        iconsFill:<Icon.MessagesFill/>
    },
    {
        id:2,
        name:"Notification",
        path:"/notification",
        icons:<Icon.Notification/>,
        iconsFill:<Icon.NotificationFill/>
    },
    {
        id:3,
        name:"Search",
        path:"/search",
        icons:<Icon.Search/>,
        iconsFill:<Icon.Search/>
    }
]


const Navbar=()=>{
    const router=useRouter();
    const size=useWindowSize();

    const goPath=(event)=>{
        console.log(event.target.name)
       router.push(event.target.name)

    }
    if(size.width>767 ){
  return(

          <Col  md={{span:4 , offset:4}} lg={{ span: 4, offset: 8 }} xl={{ span: 4, offset: 6 }}>
              <div className={classes.body}>
                  {size.width>=767 && Buttons.map((index,key)=>{
                          const selected = index.path === router.pathname
                          return(
                              <NavbarButton selected={selected} name={index.path} icon= {index.icons}  className={classes.button} active={classes.active} key={index.id} onClick={goPath} >
                                  <label className={classes.icons}>{selected && index.iconsFill}{selected || index.icons}<label className={classes.label}>  {index.name}</label></label>
                              </NavbarButton>

                          )
                      }

                  ) }
                  <div className={classes.tweetDiv}>
                      <TweetButton className={classes.tweetButton}>
                          <Icon.Tweet className={classes.tweetIcons}/>  <label className={classes.tweetButtonLabel}>Tweet</label>
                      </TweetButton>
                  </div>
                  <div className={classes.myDiv}>
                    <MyProfileButton/>
                  </div>
              </div>
          </Col>
  )
    }
    else{
        return (
            <Col md={12} lg={12} >

                <div className={classes.buttonsDiv}>
                    {size.width<=767 &&
                        MobileButtons.map((index,key)=>{
                            const selected = index.path===router.pathname
                            return(
                                <NavbarButton selected={selected} onClick={goPath} icon= {index.icons} name={index.path} className={classes.button} active={classes.active} key={index.id}>
                                    <label className={classes.icons}>{selected && index.iconsFill}{selected || index.icons}</label>
                                </NavbarButton>
                            )
                        })
                    }

                </div>

            </Col>
        )
    }


}

export default Navbar