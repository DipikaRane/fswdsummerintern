import React,{Component} from 'react';
import './Contact.css'
// import {withRouter} from 'react-router-dom'

//const servUrl="https://fswdsummernodeapi.herokuapp.com/dept?city="
const locUrl="https://fswdsummernodeapi.herokuapp.com/location"
const filterUrl="https://fswdsummernodeapi.herokuapp.com/dept?location="

class Contact extends Component{
    constructor(props){
        super(props)
        this.state={
            department:'',
            location:''
        }
    }
    renderCity=(data)=>{
        // console.log(data.target.value)
        if(data){
            return data.map((item)=>{
                return(
                    <option key={item.location_id} value={item.location_id}>
                        {item.location_name}
                    </option>
                )
            })
        }
    }
    handleDept=(event)=>{
        console.log(event.target.value)
        fetch(`${filterUrl}${event.target.value}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({department:data})
        })
    }
    renderDept=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option key={item.id} value={item.id}>
                        {item.Service}
                    </option>
                )
            })
        }
    }
    render(){
        return(
            <>
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h2>Contact Us</h2>
                </div>
                <div className="panel-body">
                    <form method="" action="">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Patient Id</label>
                                    <input type="text" className="form-control" id="pid" value="MAX1234" disabled/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Department</label>
                                    <div id="dropdown">
                                        <select className="form-control">
                                            <option>-----Select Department-----</option>
                                            {this.renderDept(this.state.department)}
                                        </select>
                                    </div>                                   
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Patient Name</label>
                                    <input type="text" className="form-control" id="pname" value="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Location / City</label>
                                    <div id="dropdown">
                                        <select onChange={this.handleDept}className="form-control">
                                            <option>-----Select City-----</option>
                                            {this.renderCity(this.state.location)}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Email Id</label>
                                    <input type="email" className="form-control" id="email" value=""/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Contact No.</label>
                                    <input type="number" className="form-control" id="mobnum" value=""/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </>
        )
    }
    componentDidMount(){
        fetch(locUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({location:data})
        })
    }
}
export default Contact