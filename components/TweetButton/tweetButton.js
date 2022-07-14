import React from "react";
import {Button} from "react-bootstrap";


const TweetButton=( props)=>{
return(
    <Button className={props.className} >
        {props.children}
    </Button>
)
}

export default TweetButton