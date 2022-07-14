import React from 'react';

const Appointment=(props)=>{
    const renderTable = ({bookData}) => {
        if(bookData){
            return bookData.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.doctor_name}</td>
                        <td>{item.pname}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs. {item.price}/-</td>
                        <td>{item.date}</td>
                        <td>{item.bank_status}</td>
                        <td>{item.Bank}</td>
                    </tr>
                )
            })
        }

    }
    
        return(
            <div id="appoint-container">
                <center><h2>Orders List</h2></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Doctor Name</th>
                        <th>Patient Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Bank</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
            </div>
        )
}
export default Appointment;