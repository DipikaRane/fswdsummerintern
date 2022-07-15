import React,{Component} from 'react';
import axios from 'axios';
import Order from './Order'

const orderUrl="https://fswdsummernodeapi.herokuapp.com/appointment"
class Appointment extends Component {
    constructor(props){
        super(props)
        this.state={
            order:''
        }
    }
    render(){
        return(
            <Order bookdata={this.state.order}/>
        )
    }
    componentDidMount(){
        axios.get(orderUrl)
        .then((res)=>{
            this.setState({order:res.data})
        })
    }
}
export default Appointment