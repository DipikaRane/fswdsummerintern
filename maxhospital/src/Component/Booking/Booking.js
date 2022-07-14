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
    handleCity=(event)=>{
        console.log(event.target.value)
        fetch(`${filterUrl}${event.target.value}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({department:data})
        })
        const Index=event.nativeEvent.target.selectedIndex;
        console.log(event.nativeEvent.target[Index].text)
        if(event.target.name==="city"){
            this.setState({city:event.nativeEvent.target[Index].text})
        }
    }
    onChange=(event)=>{
        const Index=event.nativeEvent.target.selectedIndex;
        console.log(event.nativeEvent.target[Index].text)
        if(event.target.name==="dept"){
            this.setState({dept:event.nativeEvent.target[Index].text})
        }
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
        sessionStorage.setItem('city',this.state.city);
        sessionStorage.setItem('pname',this.state.pname);
        sessionStorage.setItem('email',this.state.email);
        sessionStorage.setItem('mobnum',this.state.mobnum);
        sessionStorage.setItem('reason',this.state.reason);
        sessionStorage.setItem('doctor',this.state.doctor.doctor_name);
        sessionStorage.setItem('dept',this.state.dept);
    }
    render(){
        // console.log(this.state)
        let{doctor}=this.state;
        return(
            <div id="booking">
                <div className="profile">
                    {/* <center><h2>Profile</h2></center> */}
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
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <center><h2>Book Appointment</h2></center>
                        </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Patient Id</label>
                                    <input className="form-control" type="text" name="pid" value={`MAX${this.state.pid}`} disabled/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Doctor</label>
                                    <input className="form-control" type="text" name="docname" value={doctor.doctor_name} disabled/>                                   
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Location / City</label>
                                    <div id="dropdown">
                                        <select  onChange={this.handleCity} className="form-control" name="city">
                                            <option >-----Select City-----</option>
                                            {this.renderCity(this.state.location)}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Department</label>
                                    <select className="form-control" onChange={this.onChange} name="dept">
                                            <option>-----Select Department-----</option>
                                    {this.renderDept(this.state.department)} 
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Patient Name</label>
                                    <input type="text" className="form-control" name="pname" value={doctor.pname} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Reason for Appointment</label>
                                    <input type="text" className="form-control" name="reason" onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Email Id</label>
                                    <input type="email" className="form-control" name="email" onChange={this.handleChange}/>
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
                                <Link to='/view'><button type="submit" className="btn btn-danger" style={{width:'150px',fontSize:'20px'}} 
                                onClick={this.handleSubmit}>Proceed</button></Link>
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