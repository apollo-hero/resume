import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col,ListGroup, ListGroupItem} from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "react-image-lightbox/style.css"
import Lightbox from 'react-image-lightbox';  
import { SocialIcon } from 'react-social-icons';
import bg from '../assets/images/bg.png';
import '../assets/css/main.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { AiFillDownSquare } from 'react-icons/ai';
import { AiFillUpSquare } from 'react-icons/ai';


var nextStyle = {
    width: "10px",
    height: "10px",
    backgroundImage: "url(" + bg + ")"
};

var prevStyle = {
    width: "10px",
    height: "10px",
    backgroundImage: "url(" + bg + ")"
};

var style = {
    backgroundImage: "url(" + bg + ")",
    marginTop: "100px"
};

const images = [
    "//localhost:3000/assets/images/17.jpg",
    "//localhost:3000/assets/images/11.jpg",
    "//localhost:3000/assets/images/10.jpg",
    "//localhost:3000/assets/images/13.jpg",
    "//localhost:3000/assets/images/7.jpg",
    "//localhost:3000/assets/images/4.jpg",
    "//localhost:3000/assets/images/1.png",
    "//localhost:3000/assets/images/9.jpg",
    "//localhost:3000/assets/images/12.jpg",
    "//localhost:3000/assets/images/7.jpg",
    "//localhost:3000/assets/images/3.jpg",
    "//localhost:3000/assets/images/5.jpg",
    "//localhost:3000/assets/images/6.jpg",
    "//localhost:3000/assets/images/4.jpg",
    "//localhost:3000/assets/images/8.jpg",
    "//localhost:3000/assets/images/2.jpg",
]

// function ImageRow(props) {
//     const image = props.image
//     return (
//         <Col xs="12" sm="4" md="2" className="p-0">
//             <img className="img-rounded img-responsive" style={{ width: "100%", height: "300px" }} src={require({ image })} />
//         </Col>
//     )
// }

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
            users: [],
            id: 0,
            data: [],
            field:[]
        }

    }
    componentDidMount() {
        axios.get('http://localhost:4000/')
            .then(res => {
                this.setState({
                    users: res.data,
                    field: res.data[0].field
                })

                console.log(this.state.users)
                console.log(this.state.field)

            })

    }

    render() {
        const data = this.state.users;

        const field = this.state.field;

        const { photoIndex, isOpen } = this.state;

        const id = this.state.id;

        return (<div className="main">
            <Row id="7">
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
            <Col id="0"  className = "top-image">
                <h4>
                    <p style={{textAlign: "center", color: 'white' }}>
                        <em>Hey, I'm</em>
                    </p>
                </h4>

                <h1 className=" title " style = {{paddingBottom:"15%"}}>
                    <p className="pre">
                        <strong >Ashraf Alkiswani</strong>
                    </p>
                </h1>
            </Col>
            <Container id="1">
                <Col style={{ textAlign: "center", paddingTop: "50px", justifyContent:"center" }}>
                    <h1 className="title-body">
                        <p className="pre-body">
                            <strong>
                                Here's what I've done so far
                        </strong>
                        </p>
                    </h1>
                </Col>
            {data.map((item, index) =>
                <Row style={{ marginTop: 100 }}>
                    <Col xs="12" sm="12" md="4">
                        
                        <img className="img-rounded img-responsive" style={{ width: "100%",borderRadius: "10%" }} src={item.photo} />

                    </Col>

                    <Col xs="12" sm="12" md="8">
                        <Row>
                        <Col xs="12">
                            <h3>
                                <p className="companyname"><a href={item.URL}>{item.NAME}</a></p>
                            </h3>
                        </Col>
                        <Col xs="12">
                            <strong className="role">
                                <strong>{item.ROLE}</strong>
                                <em>,{item.year}</em>
                            </strong>                            
                        </Col>
                        <Col xs="12" className="description">
                            <br></br>
                            <p>{item.DESCRIPTION}</p>                             
                        </Col>

                        </Row>
                        
                    </Col>
                </Row>
                 )}
            </Container>
            
            <Row id="2" style={{ backgroundColor: "#eee", marginTop: "50px" }}>
                <Col style={{ textAlign: "center", paddingTop: "50px", justifyContent:"center" }}>
                    <h1 className="title-body">
                        <p className="pre-body">
                            <strong>
                                Get into my brain
                        </strong>
                        </p>
                    </h1>
                    <p className="title-body">
                        I write about tech, education, democracy, and culture.
                        <br />Here are three of my most recent posts:
                        </p>
                </Col>
            </Row>
            <Row style={{ backgroundColor: "#eee" }}>
                <Container>
                    <Row>
                        <Col xs="12" sm="4" md="4" className="brain-col">
                            <img className="brain-image" src={require('../assets/images/single.png')} />
                        </Col>
                        <Col xs="12" sm="4" md="4" className="brain-col">
                            <img className="brain-image" src={require('../assets/images/do gooders.png')} />
                        </Col>
                        <Col xs="12" sm="4" md="4" className="brain-col">
                            <img className="brain-image" src={require('../assets/images/rules.png')} />
                        </Col>
                    </Row>

                </Container>

            </Row>
            <Container id="3">
                <Row style={{ marginTop: "100px" }}>
                    <Col xs="12" style={{ textAlign: "center" }}>
                        <h2 className="title-body">
                            <p className="art-body">
                                <strong>
                                    Art means the world to me
                                </strong>
                            </p>
                        </h2>
                        <p className="">
                            Let's run the dance floor, talk stage design, draft an idea on Figma, and belt 90s R&B jams. Here are a few snaps I took before <br />graduating college:
                        </p>
                    </Col>
                </Row>

            </Container>
            <div >

                <Row className="grallary">
                    {images.map((image, index) =>
                        <Col xs="6" sm="4" md="2" className="p-0">
                            <button style={{ borderWidth: "0px" }} className="p-0" type="button" onClick={() => this.setState({ isOpen: true, photoIndex: index })}>
                                <div className="s-ratio-box">

                                    <div style={{ margin: "0px", padding: "0px", overflow: "hidden" }}>
                                        <img className="p-0" className="garrary" style={{ width: "100%", height: "300px" }} src={image} />
                                    </div>
                                </div>


                            </button>
                        </Col>

                    )}
                </Row>



                {isOpen && (
                    <Lightbox zIndex='5'
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </div>
            <Row id="4" style={style}>
                <Col xs="12" style={{ textAlign: "center", paddingBottom: "50px" }}>
                    <h3 className="title-body" style={{ paddingTop: "50px", color: "white" }} >
                        <p className="pre">
                            <strong>
                                This is my system
                            </strong>
                        </p>  </h3>
                    <ListGroup>
                        <ListGroupItem tag="li" action><a>"If it is important to you, you will find a way. If not, you'll find an excuse."</a></ListGroupItem>
                        {/* <ListGroupItem tag="li" action><a>Dapibus ac facilisis in</a></ListGroupItem>
                        <ListGroupItem tag="li" action><a>Morbi leo risus</a></ListGroupItem>
                        <ListGroupItem tag="li" action><a>Porta ac consectetur ac</a></ListGroupItem>
                        <ListGroupItem tag="li" action><a>Vestibulum at eros</a></ListGroupItem> */}
                    </ListGroup>
                </Col>
            </Row>
            <Row id="5" style={{ marginTop: "100px" }}>
                <Col style={{ textAlign: "center" }}>
                    <h2 className="title-body">
                        <p className="">
                            <strong >I'm Chicago-bred,<br />wander from coast to coast,<br />and welcome bribes in the form of Korean BBQ.</strong>
                        </p>
                    </h2>
                    <p className="">
                        Let's run the dance floor, talk stage design, draft an idea on Figma, and belt 90s R&B jams. Here are a few snaps I took before graduating college:
                        </p>
                </Col>
            </Row>
            <Container id="6">
                <Row style={{ marginBottom: "100px" }}>

                    <Col xs="12" md={{ size: 6, offset: 3 }}>
                        <Col xs="4" sm="4" md="4" style={{ display: "inline-block", textAlign: "center" }}>
                            <a href = "http://twitter.com/garysheng"><SocialIcon network="twitter" /></a>
                        </Col>
                        <Col xs="4" sm="4" md="4" style={{ display: "inline-block", textAlign: "center" }}>
                            <a href = "https://www.linkedin.com/in/garysheng"><SocialIcon url="http://linkedin.com/in/jaketrent" /></a>                        </Col>
                        <Col xs="4" sm="4" md="4" style={{ display: "inline-block", textAlign: "center" }}>
                            <a href="http://fb.com/garysheng"><SocialIcon network="facebook" /></a> 
                        </Col>
                    </Col>
                </Row>
            </Container>

            <div className=" back-to-top" style={{ right: "10px", bottom: "20px", position: "fixed" }}>
                <Row><Link className="prev" activeClass="active" to={7} spy={true} onClick={this.prev} offset={-100} duration={700}><AiFillUpSquare style={{width:"50px", height:"50px"}}></AiFillUpSquare></Link></Row>
                <Row><Link className="next" activeClass="active" to={5} spy={true} onClick={this.next} offset={-100} duration={700}><AiFillDownSquare style={{width:"50px", height:"50px"}}></AiFillDownSquare></Link></Row>
            </div>


        </div>


        )


    }

}