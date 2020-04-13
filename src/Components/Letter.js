import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Col, Input, InputGroup, Button, Row, FormGroup, Form, Label } from "reactstrap";
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import axios from 'axios';

export default class Letter extends Component {

    constructor(props){
        super(props) 
        this.state = {
            email: "",
            blog_id:"",
            show: true,
            show_subscribe:false,
            subscribe_data:"",
            show_input: false,
            comment:"",
            name:"",
            commentemail:"",
            comments:[],
            errors:{},
            replay:0,
            replayname:""
        }
        this.onChange = this.onChange.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.showinput = this.showinput.bind(this);
        this.submit = this.submit.bind(this);
        this.hide = this.hide.bind(this);
        this.showinput1 = this.showinput1.bind(this);
    }

    onChange(e){

        this.setState({ [e.target.id]: e.target.value });

    }

    hide(e){
        this.setState({
            show_input:false,replayname: "", replay:0
        })
        var id = document.getElementById("comment");
        id.value="";
    }

    subscribe(e){
        e.preventDefault();

        const data = {
            email: this.state.email,
            blog_id: this.state.blog_id
        };

        axios.post('http://localhost:4000/subscribe', data,{})
        .then(res => {
            this.setState({ show_subscribe: true, subscribe_data:res.data.result});
            console.log(res.data)
        });
    }

    showinput(e,data){
        var name = "@"+data;
        this.setState({
            show_input: true, replayname: name, replay:1
        })
        console.log(name)
    }

    showinput1(){
        if(this.state.replay==0){
            this.setState({
            show_input:true, replayname:""
            })            
        };

    }

    submit(e){
        var data = this.state.comments;
        var replay = this.state.replay;
        console.log(this.state.replayname)
        var now = new Date();
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Oug', 'Sep', 'Oct', 'Nov', 'Dec']
        const date = month[now.getMonth()]+" "+now.getDate()+","+now.getFullYear()+","+now.getHours()+":"+now.getMinutes(); 
        var comment = {};
        comment.date = date;
        comment.comment = this.state.comment;
        if(replay==1){
            comment.name = this.state.name + this.state.replayname;
        } else{
          comment.name = this.state.name;  
        }
        
        comment.commentemail = this.state.commentemail;
        data.push(comment);
        this.setState({
            comments:data, show_input: false
        })
        var id = document.getElementById("comment");
        id.value="";

        axios.post('http://localhost:4000/comment', comment,{})
        .then(res => {
            this.setState({ show_subscribe: true, subscribe_data:res.data.result, replayname: "", replay:0});
            console.log(res.data)
        }).catch(err =>
            this.setState({
                errors: err.response.data,show_input:true
            })
        );
    }

    componentDidMount(){
        axios.get('http://localhost:4000/comment')
        .then(res =>{
            this.setState({
                comments:res.data
            })
        })
    }

    render(){
        const comments = this.state.comments;
        return (
            <div>
                <Col xs="12" sm = "12" md="12" className = "letter-top" >
                    <h4 style={{padding:"20px"}}><a href="/"><Button  size="sm"><span><FiChevronLeft></FiChevronLeft>Previous</span>return site</Button></a> </h4>
                    <Col xs="10" sm="10" md="10" lg="7" style={{margin:"auto"}}>
                        <Col className="blog_title">
                            <h1>
                                <p style={{color: 'black' }}>
                                    <strong >Karaz, Sex 101 for the Middle East</strong>
                                </p>
                            </h1>
                            <p style={{color: 'white' }}>Breaking the Taboo</p>                              
                        </Col>
                      
                    </Col>

                </Col>
                <Col>
                    <Col xs="12" sm="10" md="10" lg="7" style={{margin:"auto"}}>
                        <p className="bottom">Apr 8, 2015</p>

                        <p className="blog blog_content">I remember sitting down with friends from different NGOs who were working on education programs in villages across Palestine while they told hilarious, yet truly horrifying stories about the ignorance they encountered during their work. Some women they were encountering were having child after child with no notion of how children were conceived except that it involved intercourse, but the details were a mystery. The existence of different contraceptives came as a shock to many and even after extensive counseling on how to use said contraceptives, these women were becoming pregnant because of this same ignorance.</p>

                        <p className="blog blog_content">At first I was amused, but then I got to really thinking how sad it was. These women were miserable because they kept having children they couldn’t afford, yet they didn’t know any other way. They had no access to education, and they had nobody to talk to because the subject involved sex, and everybody knows that in the Middle East and North Africa, sex is a taboo subject.</p>
                    
                        <p className="blog blog_content"> That’s when the idea for Karaz took root. I wanted to create a site for engaged or married men and women to turn to whenever they had any questions regarding relationships, including sexual relationships, from the safety and anonymity of their own homes. I wanted a person to be able to go to this one site and find everything they needed to know about sex from a medical and psychological standpoint, without any profanity, nudity, or sexualization, just facts.</p>
                    
                        {/* <ReactPlayer url="https://www.youtube.com/watch?v=Wult5UT7i2M&t=32s"/> */}
                        
                        <p className="blog blog_subtitle">I knew from the start that I would encounter resistance and criticism, but I also knew that there was a legitimate need for something like this and was prepared to brave the storm.</p>
                   
                        <p className="blog blog_content">Sex is a three-letter word that some view as a natural part of life. Others see it as a manifestation of the love a husband and wife have for one another. While others view it as something to be ashamed of. But the reality is that sex is an important component of marriage. Islamic law gives either partner the right to divorce in the absence of sexual satisfaction. There are countless Hadiths (Sayings of the Prophet Muhammad) that discuss the importance of sexual relations to a marriage. In terms of religion, there was nothing preventing me from addressing these issues in a respectful manner. When I began looking into relationships in general and how they were faring, I was pretty shocked. We have this view that divorce exists only in the US and Europe, but the more I dug, the more I uncovered.</p>
                    
                        <p className="blog blog_subtitle">Divorce rates in the MENA region are sky high and continue to grow. A lot of women who ask for divorce during their first year cite sexual incompatibility as a reason.</p>
                    
                        <p className="blog blog_content">Now, more than ever I believe in the importance of Karaz. Every day we receive messages from people with questions that they want answers to. People that NEED answers to questions that they are too ashamed to ask. Our company is continuing to grow and is regularly visited by people in 48 countries around the world. Even our critics have become reluctant fans because they found nothing to criticize and sometimes found themselves in need of our support and advice.</p>
                    
                        <p className="blog blog_content">We needed to have a forum where the sexual relationship between couples is treated as a necessary part of a healthy marriage and that addresses all aspects of this relationship without shame. And now there is one: Karaz. In order for anything in life to work, you have to put in time and effort. This includes all aspects of marriage: communication, partnership and physical intimacy. At Karaz, you can find articles that address all sorts of issues regarding the marriage bed and relationships in general. There’s a message board where you can post questions and get answers by other members, as well as Karaz’s doctors or psychologists, depending on which is appropriate.</p>
                    
                        <p className="blog blog_content">Although this is just the beginning of our journey, we will continue to grow, to add more articles and information and help more people overcome whatever issues they’re struggling with in their personal lives. We also hope to shift the view of what sex is and what it isn’t. It isn’t something dirty, but it is as Allah meant it to be: a beautiful way to forge a bond between husband and wife.</p>
                    </Col>                        
                </Col>

                <Col>
                    <Col xs="12" sm="10" md="10" lg="7" style={{margin:"auto"}}>
                      <Col className="subscribe">
                          <Row>
                              <Col xs="12" sm="8" md="9" lg="9">
                                  <FormGroup inline>
                                        <InputGroup>
                                            <Input type="email" id="email" name="email" placeholder="email" autoComplete="email" value = {this.state.email} onChange = {this.onChange}/>
                                        </InputGroup>
                                  </FormGroup>
                              </Col>
                              <Col xs="12" sm="4" md = "3" lg="3">
                                  <FormGroup>
                                        <InputGroup>
                                            <Button type="submit" size="sm" color="primary" style ={{width:"100%"}} onClick={this.subscribe}>SUBSCRIBE</Button>
                                        </InputGroup>                                         
                                  </FormGroup>
                              </Col>
                              {this.state.show_subscribe?<p style={{margin:"auto"}}>{this.state.subscribe_data}</p>:null}
                             
                          </Row>

                        </Col>
                    </Col>                        
                </Col>
                <Col>
                    <Col xs="12" sm="10" md="10" lg="7" style={{margin:"auto"}} className="footer_title">
                        <Row>
                            <Col xs="12" sm="6" md = "6" lg="6">
                                <a href="" className="a_tag"><span><FiChevronLeft></FiChevronLeft>Previous</span></a>
                                <p>My advice to college kids looking to make their tuition...</p> 
                            </Col>
                            <Col xs="12" sm="6" md = "6" lg="6">
                                <a href="" className="a_tag"><span>Next<FiChevronRight></FiChevronRight></span></a>
                                <p>My advice to college kids looking to make their tuition...</p> 
                            </Col>                            
                        </Row>

                    </Col>
                </Col>

                <Col >
                    <Col xs="12" sm="10" md="10" lg="7" style={{margin:"auto"}} className="footer_title">
                        <Row>
                            <Col xs="6" sm="6" md = "6" lg="6">
                                <a href="/" className="a_tag"><span><FiChevronLeft></FiChevronLeft>Return to site</span></a>
                            </Col>
                            <Col xs="6" sm="6" md = "6" lg="6" style={{marginLeft:"auto"}}>
                                <span><AiFillFacebook className="social_icon facebook"></AiFillFacebook></span>
                                <span><AiFillTwitterSquare className="social_icon twitter"></AiFillTwitterSquare></span>
                                <span><AiFillLinkedin className="social_icon facebook"></AiFillLinkedin></span>
                                <span><AiFillMail className="social_icon mail"></AiFillMail></span>
                            </Col>                            
                        </Row>

                    </Col>
                </Col>

                <Col className ="comment">
                    <Col xs="12" sm="10" md="10" lg="7" style={{margin:"auto"}}>
                        <ul className="comments">
                        {comments.map((item, index) =>
                            <li key={index} className="comment_unit">
                                <img className="comment_avatar" src={require('../assets/images/avarta.png')}></img>
                                <span className="comment_name">
                                    <span className="comment_content">{item.name}{" "}{" "}</span><span>{item.comment}</span>
                                    <div className="comment_status">
                                        <span style={{color:"#999", fontSize:"14px"}}>{item.date}</span>
                                        <span>{" "}·{" "}</span>
                                        <span onClick={((e)=>this.showinput(e,item.name))} id={item.name}><a herf="#">reply</a></span>
                                    </div>
                                </span>
                            </li>
                        )}
                        </ul>
                        <Form className="comment_form">
                            <img className="comment_avatar form_avatar" src={require('../assets/images/avarta.png')}></img>
                            <Col xs="12" sm="12" className="comment_line">
                                <FormGroup>
                                    <InputGroup>
                                        <Input type="text" id="comment" size="sm" style={{ width: "100%" }} placeholder="write comment" onClick={this.showinput1} onChange = {this.onChange}></Input>
                                    </InputGroup>
                                </FormGroup>  
                                <p style={{margin:"auto"}}>{this.state.errors.comment}</p>
                                {this.state.show_input? <>
                                <Row className="show_input">
                                    <Col xs="12" sm="6">
                                        <FormGroup>
                                            <InputGroup>
                                                <Input type="text" id="name" size="sm" color="primary" placeholder="name" style={{ width: "100%" }} value = {this.state.name} onChange = {this.onChange}></Input>
                                            </InputGroup>
                                        </FormGroup>
                                        <p style={{margin:"auto"}}>{this.state.errors.name}</p>
                                    </Col>
                                    <Col xs="12" sm="6">
                                        <FormGroup>
                                            <InputGroup>
                                                <Input type="text" id="commentemail" size="sm" placeholder="email" color="primary" style={{ width: "100%" }} value = {this.state.commentemail} onChange = {this.onChange}></Input>
                                            </InputGroup>
                                        </FormGroup>
                                        <p style={{margin:"auto"}}>{this.state.errors.email}</p>
                                    </Col>
                                </Row>

                                <Row className="show_input">
                                    <Col  xs="6" sm="3">
                                        <FormGroup>
                                            <InputGroup>
                                                <Button  size="sm" style={{ width: "100%",height:"30px", color: "white", backgroundColor:"#007bff" }} onClick={this.submit}>submit</Button>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6" sm="6">
                                        <FormGroup>
                                            <InputGroup>
                                                <Label  size="sm" style={{ width: "100%", height:"30px", color: "grey", backgroundColor:"white", border:"0px" }} onClick={this.hide}>Cancel</Label>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row></> :null} 

                            </Col>
                        </Form>
                    </Col>
                </Col>
            </div>
        )
    }
}