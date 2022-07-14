import React from "react";
import classes from "./IndexTweet.module.css";
import {Form} from "react-bootstrap";
import classNames from "classnames";

const IndexTweet =()=>{

    function auto(event){
        event.target.style.height="70px";
        let scrollHeight=event.target.scrollHeight;
       event.target.style.height=`${scrollHeight}px`;
    }

    return(
            <div>
            <p className={classes.pagePath}>
                Home Page
            </p>

            <Form.Group  className={classNames(classes.formDiv)}  controlId="formBasicEmail">
                    <img src="./favicon.ico" className={classes.img}/>
                    <textarea onKeyDown={auto} className={classes.Input} type="text" placeholder="Enter tweet" />
            </Form.Group>
            </div>
    )

}
export default IndexTweet