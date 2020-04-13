import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link as Go } from 'react-router-dom';
import { Container, Row, Col,Button, Form as Form1, FormGroup, Input, InputGroup } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import "react-image-lightbox/style.css";
import '../assets/css/main.css';
import axios from 'axios';
import { Link, animateScroll as scroll } from 'react-scroll';
import { AiFillDownSquare } from 'react-icons/ai';
import { AiFillUpSquare } from 'react-icons/ai';
export default class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            id: 1,
            show: true,
            invalid:""
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange(e){

        this.setState({ [e.target.id]: e.target.value });

    }

    onSubmit(e){
        e.preventDefault();

        const data = {
            email: this.state.email,
            name: this.state.name
        };

        axios.post('http://localhost:4000/email', data,{})
        .then(res => {
            if(res.data.result == "OK"){
               this.setState({ show: false});  
            }else{
                this.setState({invalid:res.data.result})
            }
        });
    };

    componentDidMount(){

    }


    render() {


        const id = this.state.id;

        const show = this.state.show;
        

        return (<div style={{ backgroundColor: "#eee" }}>
            <Row>
                <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark" style={{ zIndex: "1", height:"80px", fontSize:"20px", paddingLeft:"0px"}}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginLeft:"10px"}} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className = "mr-auto" style={{ width: "-webkit-fill-available", justifyContent:"center" }}>
                            <Nav.Item className="bg-dark" style={{paddingLeft:"10px"}} >
                                <Nav.Link style = {{marginRight:"50px"}} href="/">HOME</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="bg-dark" style={{paddingLeft:"10px"}} >
                                <Nav.Link style = {{marginRight:"50px"}} href="/blog">BLOG</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        
                    </Navbar.Collapse>


                </Navbar>
            </Row>
            <Row id = "1" style={{ backgroundColor: "#eee", paddingTop: "100px" }}>
                <Col xs="12" md="12" style={{ textAlign: "center", justifyContent:"center" }}>
                    <h2 className="title-body"><p className="pre-body"><strong>The Out of the Box Blog</strong></p> </h2>
                    <p className="">
                        Field notes from the edge of tech, education, democracy, and culture.
                        </p>
                </Col>
            </Row>
            <Container style={{minHeight:"250px"}}>
                <Container>
                    <Row style={{ marginTop: "40px", }}>
                        <Col xs="4" sm="2" md="2" style={{textAlign:"center"}}>

                            <Image className = "img-circle" roundedCircle  src={require('../assets/images/Ashraf.JPEG')} />

                        </Col>

                        <Col>
                            <p>
                                <Go to="/letter" >Karaz, Sex 101 for the Middle East-Breaking the Taboo</Go>
                            </p>
                            <em>Apr 8, 2015</em>
                        </Col>
                    </Row>

                    {/* <Row style={{ marginTop: "40px" }}>
                        <Col xs="4" sm="2" md="2" style={{textAlign:"center"}}>

                            <Image roundedCircle className = "img-circle" src={require('../assets/images/7.jpg')} />

                        </Col>

                        <Col>
                            <p>
                                <Go to="/" >My Letter to Dr. King</Go>
                            </p>
                            <em>January 20, 2020 · 11</em>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: "40px" }}>
                        <Col xs="4" sm="2" md="2" style={{textAlign:"center"}}>

                            <Image roundedCircle className = "img-circle" src={require('../assets/images/7.jpg')} />

                        </Col>

                        <Col>
                            <p>
                                <Go to="/" >My Letter to Dr. King</Go>
                            </p>
                            <em>January 20, 2020 · 11</em>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: "40px", marginBottom: "50px" }}>
                        <Col xs="4" sm="2" md="2" style={{textAlign:"center"}}>

                            <Image roundedCircle className = "img-circle" src={require('../assets/images/7.jpg')} />

                        </Col>

                        <Col>
                            <p>
                                <Go to="/" >My Letter to Dr. King</Go>  
                            </p>
                            <em>January 20, 2020 · 11</em>
                        </Col>
                    </Row> */}

                </Container>



            </Container>

            <Row id = "2" style={{ backgroundColor: "#50555c", paddingTop: "100px" }}>
                <Col xs="12" md="12" style={{ textAlign: "center" }}>
                    <h2 className="title"><p className="pre"><strong>Contact me</strong></p> </h2>
                    <p className="" style={{ color: "white" }}>
                        Get observations, stories, advice, and ideas that I'm not sharing anywhere else on the internet.
                        </p>
                </Col>

            </Row>
            <Row style={{ backgroundColor: "#50555c", paddingBottom: "100px", paddingTop:"20px" }}>
                <Col xs="12" md="12" sm="12" style={{ textAlign: "center", justifyContent:"center" }}>
                    <Row style={{justifyContent:"center"}}>
                        <Col xs="12" sm="8" md="6" style={{justifyContent:"center"}}>
                            {show?
                                <Container>
                                    <Form1 onSubmit={this.onSubmit} method="post">
                                    <Row>
                                        <Col xs="12" sm="4" md="4" lg="4">
                                            <FormGroup >
                                                <InputGroup> 
                                                    <Input type="text" id="name" name="name" placeholder="Name" autoComplete="username" value = {this.state.name} onChange = {this.onChange} />
                                                </InputGroup>
                                            </FormGroup>                                            
                                        </Col>
                                        <Col xs="12" sm="4" md="4" lg="4">
                                            <FormGroup>
                                                <InputGroup>
                                                    <Input type="text" id="email" name="email" placeholder="email" autoComplete="email" value = {this.state.email} onChange = {this.onChange} />
                                                </InputGroup>
                                                <p className="notification">{this.state.invalid}</p>
                                            </FormGroup>                                            
                                        </Col>
                                        <Col xs="12" sm="4" md="4" lg="4">
                                            <FormGroup className="form-actions">
                                                <Button type="submit" size="sm" color="primary">Sign Up</Button>
                                            </FormGroup>                                            
                                        </Col>

                                        </Row>
                                    </Form1>                                    
                                </Container>:
                                <p className="notification">You signed up!</p>
                                }

                                


                        </Col>
                    </Row>
                </Col>


            </Row>
            <div className=" back-to-top" style={{ right: "10px", bottom: "20px", position: "fixed" }}>
                <Row><Link className="prev" activeClass="active" to={1} spy={true} onClick={this.prev} offset={-100} duration={700}><AiFillUpSquare id="9" style={{width:"50px", height:"50px"}}></AiFillUpSquare></Link></Row>
                <Row><Link className="next" activeClass="active" to={2} spy={true} onClick={this.next} offset={-100} duration={700}><AiFillDownSquare style={{width:"50px", height:"50px"}}></AiFillDownSquare></Link></Row>
            </div>
        </div>


        )


    }

}