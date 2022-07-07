import React,{Component} from 'react';
import Service from './Service';

const servUrl="https://fswdsummernodeapi.herokuapp.com/services"

class Services extends Component {
    constructor(props) {
        super(props)
        this.state={
            service:''
        }
    }
    render(){
        return(
            <div className="container-fluid" style={{marginLeft:'3%'}}>
                <Service servData={this.state.service}/>
            </div>
        )
    }
    componentDidMount(){
        fetch(servUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({service:data})
        })
    }
}
export default Services