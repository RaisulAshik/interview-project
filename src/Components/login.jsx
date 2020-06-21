import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from './footer'
import { login } from '../Action/login';
import logo from '../logo.svg';
import SimpleReactValidator from 'simple-react-validator';
import {Form,Button} from 'react-bootstrap';
class Login extends Component{
constructor(props){
    super(props);
    this.state={
        userName: '',
        password: '',
        errors: [],
    }
}
componentDidMount() {
    window.scrollTo(0, 0);
    window.localStorage.removeItem('info');
    localStorage.clear();
}
componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
        this.setState({ errors: nextProps.errors })
    }
}
updateField(type, e) {
    var obj = {};
    obj[type] = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState(obj);
}
handleSubmit(e) {
    e.preventDefault();
        let data = {
            userName: this.state.userName,
            password: this.state.password,
        }
        this.props.login(data, this.props.history);
}
render(){
    const { errors } = this.state.errors;
    return(
        <div>
            <div className="container-fluid">
                <div className="container">
                    <div className="col-md-12" >
                        <div className="text-center">
                            <img className="logo_img_res" style={{width:'100px'}} alt="Company Logo" src={logo} />
                        </div>
                    </div>
                    {/* <div className="col-md-12"> */}
                    <div className="row">
                        <div className="col-md-4"> </div>
                        <div className="col-md-4 mt-5">
                            <div className="text-center" style={{fontSize:'35px'}}><b>Login</b></div>
                            <div className="login_inputs form-group pl-5">
                                <Form onSubmit={this.handleSubmit.bind(this)}>
                                    <span className="mb-2" style={{ color: "red" }} >{errors}</span>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label><b>User Name</b></Form.Label>
                                        <Form.Control type="text" placeholder="username" value={this.state.userName} onChange={this.updateField.bind(this, "userName")} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label><b>Password</b></Form.Label>
                                        <Form.Control type="password" placeholder="password" value={this.state.password} onChange={this.updateField.bind(this, "password")} />
                                    </Form.Group>
                                    <div className="text-center">
                                    <Button type="submit"  variant="primary">Login</Button>{' '}
                                        {/* <div className="input_name">
                                            <button type="submit" className="btn  btn-lg button_size" style={{ backgroundColor: "#7ea9e6", borderColor: "#6290d1", color: '#fff', boxShadow: "#ffffff4d 0px 1px 0px 0px inset" }} >Login</button>
                                        </div> */}
                                    </div>
                                  </Form>
                            </div>
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
const mapStateToProps = (state) => ({
    login: state.login,
    errors: state.errors,
});
Login = connect(mapStateToProps, { login })(withRouter(Login));

export default Login