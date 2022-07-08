import React,{Component} from 'react';
import './booking.css'
import axios from 'axios';

const docUrl="https://fswdsummernodeapi.herokuapp.com/doctor"
class Booking extends Component {
    constructor(props){
        super(props)
        this.state={
            doctor:''
        }
    }
    render(){
        // let{doctor}=this.state
        return(
            <div id="booking">
                <div className="profile">
                    <h1>Profile</h1>
                    <div className="card">
                    <div className="card-image">
                        <img src="https://i.ibb.co/GvVLdkt/doctor6.jpg" alt=""/>
                    </div>
                    <div className="card-body">
                        <center>
                            <div className="card-title">
                                <h2>Dr. Ashish Mittal</h2>
                                <h3>Orthopedics</h3>
                                <h4>M.B.B.S. M.S.(Ortho)</h4>
                            </div>
                            {/* <Link to={`/book`}>
                            <button className="btn btn-info">Book Appointment</button>
                            </Link> */}
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
                                    <input type="text" className="form-control" id="pid" value="MAX1234" disabled/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Department</label>
                                    <input className="form-control" type="text"/>                                   
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
                                    <input className="form-control" type="text"/>
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
        const response= await axios.get(`${docUrl}/${docid}`)
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({doctor:response.data[0]})
        })
    }
}
export default Booking