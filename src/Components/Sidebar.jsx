import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                <div>
                    <Link to={'/dashboard'} >Sales</Link>
                </div>
                <div>
                    <Link to={'/dashboard/customer'} >Customer</Link>
                </div>
            </div>
        )
    }

}
export default Sidebar