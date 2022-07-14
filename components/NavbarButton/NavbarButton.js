import React from "react";
import {Button} from "react-bootstrap";
import cn from 'classnames'
import {useRouter} from "next/router";


const NavbarButton=(props)=>{
        const router=useRouter();

    return(
        <Button icon={props.icon} name={props.name} onClick={props.onClick} className={cn(props.className,props.selected && props.active)}>
           {props.children}
        </Button>
    )
}
export default NavbarButton