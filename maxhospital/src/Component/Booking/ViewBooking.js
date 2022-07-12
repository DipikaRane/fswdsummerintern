import React from 'react';
import './viewbooking.css'

class ViewBooking extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    handleSubmit=()=>{}
    render(){
        return(
            <div id="view-container">
                <h1>View Booking</h1>
                <h3>{this.state.pid}</h3>
                <h3>{this.state.pname}</h3>
                <h3>{this.state.doctor}</h3>
                <h3>{this.state.mobnum}</h3>
                <h3>{this.state.email}</h3>
                <button className="btn btn-warning" onSubmit={this.handleSubmit}>Submit</button>
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
            reason:sessionStorage.getItem('reason')
        })
    }
}
export default ViewBooking