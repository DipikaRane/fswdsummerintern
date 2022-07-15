import React from 'react';
import './viewbooking.css';
import {Link} from 'react-router-dom';

const bookUrl="https://fswdsummernodeapi.herokuapp.com/postorder";
class ViewBooking extends React.Component{
    constructor(props){
        super(props)
        this.state={
            amount:1000,
            date:'',
        }
    }
    onChange=(event)=>{
        console.log(event.target.value)
        if(event.target.name==="date"){
            this.setState({date:event.target.value})
        }
        sessionStorage.setItem('date',this.state.date)
    }
    handleSubmit=()=>{
        var obj=this.state;
        console.log(obj)
        fetch(bookUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
         .then(this.props.history.push('/booking'))
// .then(console.log('Appointment Booked'))
    }
    render(){
        return(
            <div id="view-container">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <center><h2>Confirm Appointment</h2></center>
                            </div>
                        <div className="panel-body">
                            <form>
                            {/* <form action="http://localhost:4100/paynow" method="POST"> */}
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Patient Id</label>
                                        <input className="form-control" type="text" name="pid" value={`MAX${this.state.pid}`}/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Doctor</label>
                                        <input className="form-control" type="text" name="doctor" value={this.state.doctor}/>                                   
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Location / City</label>
                                        <input className="form-control" name="city" value={this.state.city}/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Department</label>
                                        <input className="form-control" name="dept"value={this.state.dept}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Patient Name</label>
                                        <input type="text" className="form-control" name="pname" value={this.state.pname} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Reason for Appointment</label>
                                        <input type="text" className="form-control" name="reason" value={this.state.reason}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Email Id</label>
                                        <input type="email" className="form-control" name="email" value={this.state.email}/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Contact No.</label>
                                        <input type="text" className="form-control" name="mobnum" value={this.state.mobnum}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Date of Appointment</label>
                                        <input type="date" className="form-control" name="date" onChange={this.onChange} required/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Fees / Charges</label>
                                        <input type="text" className="form-control" name="amount" value={this.state.amount}/>
                                    </div>
                                </div>
                            </div>
                            <center>
                                <div className="col-lg-12" style={{marginTop:'3%'}}>
                                 <Link to="/booking">   <button type="button" className="btn btn-info" style={{width:'150px',fontSize:'20px'}} 
                                   onClick={this.handleSubmit}>Book Appointment</button>
                                  </Link></div>
                                  {/* <div className="col-lg-12" style={{marginTop:'3%'}}>
                                  <button type="submit" className="btn btn-info" style={{width:'150px',fontSize:'20px'}} 
                                   onClick={this.handleSubmit}>Book Appointment</button>
                                  </div> */}
                            </center>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            pid:sessionStorage.getItem('pid'),
            pname:sessionStorage.getItem('pname'),
            doctor:sessionStorage.getItem('doctor'),
            email:sessionStorage.getItem('email'),
            mobnum:sessionStorage.getItem('mobnum'),
            reason:sessionStorage.getItem('reason'),
            city:sessionStorage.getItem('city'),
            dept:sessionStorage.getItem('dept')
        })
    }
}
export default ViewBooking