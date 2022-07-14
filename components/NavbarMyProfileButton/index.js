import React from "react";
import {Button} from "react-bootstrap";
import classes from "./index.module.css"

const MyProfileButton =(props)=>{


    return(
        <Button className={classes.button}>
            <div className={classes.imgDiv}>
                {props.children}
            </div>
                <div className={classes.labelDiv}>
                    <label className={classes.label}>
                        Ömür Can Yılmaz
                    </label>
                    <label className={classes.nickLabel}>
                        @mryilmaz7
                    </label>
                </div>
        </Button>
    )
}
export default MyProfileButton