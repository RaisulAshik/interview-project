import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import logo from '../logo.svg';
import Sidebar from './Sidebar';
import SalesData from './SalesData';
class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        return(
            <div className="App">
                <Header/>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3" style={{borderLeft:'1px solid #ccc'}}>
                            <Sidebar/>
                        </div>
                        <div className="col-md-9">
                            <SalesData/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage;