import React,{Component} from 'react';
import Feature from "./Feature";
import './Features.css';

const featUrl="https://fswdsummernodeapi.herokuapp.com/features"

class Features extends Component{
    constructor(props){
        super(props)
        this.state={
            feature:''
        }
    }
    render(){
        return(
            <section id="container-fluid">
                <Feature featData={this.state.feature}/>
            </section>
        )
    }
    componentDidMount(){
        fetch(featUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({feature:data})
        })
    }
}
export default Features