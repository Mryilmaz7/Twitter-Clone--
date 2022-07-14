import React, {useState} from "react";
import axios from "axios";
import {Col, Container, Form, InputGroup, Row,Button} from "react-bootstrap";
import classes from "./SignUp.module.css"
import cn from "classnames"
import {useRouter} from "next/router";

const SignUpQuiz=()=>{
    const router =useRouter();
    const [number,setNumber]=useState(1);

    const Next=(event)=>{
        if(number===4){
            setSelected(0);
            router.push("./ass")
        }
        else if(event.target.value.length>0){
            setSelected(1);
            setNumber(number+1)
        }
        else{
            setSelected(0);
            setNumber(number+1)
        }
    }
    const Back=()=>{

            setSelected(1)
            setNumber(number - 1)
    }



    const [selected,setSelected]=useState(0);
    const [email,setEmail]=useState("");
    const [fullName,setFullName]=useState("");
    const [password,setPassword]=useState("");

    const onChange=(event)=>{
        if(event.target.name==="Email"){
            if(event.target.value.length===0){
                setEmail(event.target.value);
                console.log(event.target.value.length)
                setSelected(0);
                console.log(selected)
            }
            else{
                setEmail(event.target.value);
                console.log(event.target.value.length)
                setSelected(1);
                console.log(selected)
            }

        }
        else if(event.target.name==="fullName"){
            if(event.target.value.length===0){
                setFullName(event.target.value);
                console.log(event.target.value.length)
                setSelected(0);
                console.log(selected)
            }
            else{
                setFullName(event.target.value);
                console.log(event.target.value.length)
                setSelected(1);
                console.log(selected)
            }

        }
        else if(event.target.name==="password"){
            if(event.target.value.length===0){
               setPassword(event.target.value);
                console.log(event.target.value.length)
                setSelected(0);
                console.log(selected)
            }
            else{
               setPassword(event.target.value);
                console.log(event.target.value.length)
                setSelected(1);
                console.log(selected)
            }
        }
    }
    const submit=()=>{
        const jsonData={
            "fullName":fullName,
            "username":email,
            "password":password
        }
        axios.post("http://localhost:4000/app/signup",jsonData).then(response =>console.log(response.data),router.push("./login") );
    }
    return(
        <div className={classes.signUp}>
            <div>
            {number === 1 && (
                <Row className={classes.row} >
                <Col xl={5} lg={5}>
                    <Container className={classes.container}>
                        <InputGroup>
                            <InputGroup.Text >E-mail</InputGroup.Text> <Form.Control type={email} name="Email" defaultValue={email} onChange={onChange} placeholder="Please enter your email"  aria-label="" />
                        </InputGroup>

                    </Container>
                    <Container className={classes.container2}>
                        <Button onClick={Next} value={fullName}  className={cn(selected===0 && classes.nextButtonDisable, selected===1 && classes.nextButton)}>NEXT</Button>
                    </Container>
                </Col>
                </Row>
            )
            }
                {
                    number===2 &&(
                        <Row className={classes.row} >
                            <Col xl={5} lg={5}>
                                <Container className={classes.container}>
                                    <InputGroup>
                                        <InputGroup.Text >Full Name</InputGroup.Text> <Form.Control name="fullName" defaultValue={fullName}  placeholder="Please enter your fullname"  onChange={onChange}  aria-label="" />
                                    </InputGroup>

                                </Container>
                                <Container className={classes.container2}>
                                    <Button onClick={Back} value={fullName} className={classes.backButton}>BACK</Button>
                                    <Button onClick={Next} value={password} className={cn(selected===0 && classes.nextButtonDisable, selected===1 && classes.nextButton )}>NEXT</Button>
                                </Container>
                            </Col>
                        </Row>

                    )
                }
                {
                    number ===3 &&(
                        <Row className={classes.row} >
                            <Col xl={5} lg={5}>
                                <Container className={classes.container}>
                                    <InputGroup>
                                        <InputGroup.Text >Password</InputGroup.Text> <Form.Control aria-valuemin="8" defaultValue={password}  placeholder="Please enter your password" name="password" type="password" onChange={onChange}  aria-label="" />
                                    </InputGroup>

                                </Container>
                                <Container className={classes.container2}>
                                    <Button onClick={Back} className={classes.backButton}>BACK</Button>
                                    <Button onClick={submit} className={cn(selected===0 && classes.nextButtonDisable, selected===1 && classes.nextButton )}>REGISTER</Button>
                                </Container>
                            </Col>
                        </Row>
                    )
                }
            </div>
        </div>
    )
}
export default SignUpQuiz