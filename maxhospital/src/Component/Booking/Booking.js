import React,{Component} from 'react';
import './booking.css'
import axios from 'axios';
import {Link} from 'react-router-dom'

const docUrl="https://fswdsummernodeapi.herokuapp.com/doctor"
const locUrl="https://fswdsummernodeapi.herokuapp.com/location"
const filterUrl="https://fswdsummernodeapi.herokuapp.com/dept?location="
class Booking extends Component {
    constructor(props){
        super(props)
        this.state={
            doctor:'',
            pid:Math.floor(Math.random()*10000),
            pname:'',
            email:'',
            mobnum:'',
            reason:'',
            local:'',
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
    handleChange=(e)=>{
        console.log(e.target.value)
        if(e.target.name==='pname'){
            this.setState({pname:e.target.value})
        }else if(e.target.name==='email'){
            this.setState({email:e.target.value})
        }else if(e.target.name==='mobnum'){
            this.setState({mobnum:e.target.value})
        }else if(e.target.name==='reason'){
            this.setState({reason:e.target.value})
        }else{
            this.setState({local:e.target.value})
        }
    }
    handleSubmit=()=>{
        console.log(this.state.pname)
        sessionStorage.setItem('pid',this.state.pid);
        // sessionStorage.setItem('location',this.state.location[0]);
        // sessionStorage.setItem('local',this.state.local.Service);
        sessionStorage.setItem('pname',this.state.pname);
        sessionStorage.setItem('email',this.state.email);
        sessionStorage.setItem('mobnum',this.state.mobnum);
        sessionStorage.setItem('reason',this.state.reason);
        sessionStorage.setItem('doctor',this.state.doctor.doctor_name);
    }
    render(){
        let{doctor}=this.state
        return(
            <div id="booking">
                <div className="profile">
                    <h1>Profile</h1>
                    <div className="card">
                    <div className="card-image">
                        <img src={doctor.docimage} alt=""/>
                    </div>
                    <div className="card-body">
                        <center>
                            <div className="card-title">
                                <h2>{doctor.doctor_name}</h2>
                                <h3>{doctor.Specialty}</h3>
                                <h4>{doctor.Degree}</h4>
                            </div>
                        </center>
                    </div>
                    </div>
                </div>
                <div className="booking-info">
                <div className="panel panel-success">
                <div className="panel-heading">
                    <h2>Contact Us</h2>
                </div>
                <div className="panel-body">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Patient Id</label>
                                    <input type="text" className="form-control" name="pid" value={`MAX${this.state.pid}`} disabled/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Department</label>
                                    <select  className="form-control" onChange={this.handleChange} name="local">
                                        <option>-------Select Department-------</option>
                                        {this.renderDept(this.state.department)}
                                    </select>                                   
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Patient Name</label>
                                    <input type="text" className="form-control" name="pname" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Location / City</label>
                                    <select onChange={this.handleDept} className="form-control" name="location">
                                        <option>-----Selct City-----</option>
                                        {this.renderCity(this.state.location)}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Doctor</label>
                                    <input type="text" className="form-control" name="docname" value={doctor.doctor_name} disabled/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Reason of Appointment</label>
                                    <input className="form-control" type="text" name="reason" onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Email Id</label>
                                    <input type="email" className="form-control" name="email" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Contact No.</label>
                                    <input type="text" className="form-control" name="mobnum" onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <center>
                        <div className="col-lg-12" style={{marginTop:'3%'}}>
                            <Link to='/view'><button className="btn btn-danger" style={{width:'200px'}}
                            onClick={this.handleSubmit}>Book</button></Link>
                        </div>
                        </center>
                </div>
                </div>
                </div>
                
            </div>
            
        )
    }
    async componentDidMount(){
        const docid=this.props.match.params.id
        const response=await axios.get(`${docUrl}/${docid}`)
        const respLocation=await axios.get(`${locUrl}`)
        this.setState({doctor:response.data[0],location:respLocation.data})

    }
}
export default Booking