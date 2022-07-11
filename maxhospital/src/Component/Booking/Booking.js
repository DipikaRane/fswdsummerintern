import React,{Component} from 'react';
import './booking.css'
import axios from 'axios';

const docUrl="https://fswdsummernodeapi.herokuapp.com/doctor"
const locUrl="https://fswdsummernodeapi.herokuapp.com/location"
const filterUrl="https://fswdsummernodeapi.herokuapp.com/dept?location="
class Booking extends Component {
    constructor(props){
        super(props)
        this.state={
            doctor:'',
            pid:Math.floor(Math.random()*10000),
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
                    <form method="" action="">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Patient Id</label>
                                    <input type="text" className="form-control" id="pid" value={`MAX${this.state.pid}`} disabled/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Department</label>
                                    <select  className="form-control">
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
                                    <input type="text" className="form-control" id="pname" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Location / City</label>
                                    <select onChange={this.handleDept} className="form-control">
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
                                    <input type="text" className="form-control" id="pname" value={doctor.doctor_name} disabled/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Reason of Appointment</label>
                                    <input className="form-control" type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Email Id</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Contact No.</label>
                                    <input type="number" className="form-control" id="mobnum"/>
                                </div>
                            </div>
                        </div>
                        <center>
                        <div className="col-lg-12" style={{marginTop:'3%'}}>
                            <button className="btn btn-danger" style={{width:'200px'}}>Book</button>
                        </div>
                        </center>
                    </form>
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