import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import{Navbar,Nav} from 'react-bootstrap';
import logo from '../logo.svg';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    handleSubmit(e){
        window.localStorage.removeItem('info')
        localStorage.clear();
        window.location.href = '/';
    }
    render(){
        return(
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/dashboard">
                        <img className="logo_img_res" style={{width:'50px'}} alt="Company Logo" src={logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link href="/item-list">Item List</Nav.Link>
                        </Nav>
                        <Nav.Link href="/" onClick={this.handleSubmit.bind(this)}>Logout</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;