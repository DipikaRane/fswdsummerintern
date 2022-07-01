import React from 'react';
import './Hospital.css';

const Hospital =()=>{
    return(
        <>
        <section id="hospitals">
            <table className="table table-borderless">
                <thead>
                <tr>
                    <th><h3><u>Delhi NCR</u></h3></th>
                    <th><h3><u>Maharashtra</u></h3></th>
                    <th><h3><u>Punjab</u></h3></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Max Super Speciality Hospital, Saket</td>
                    <td>Nanawati-Max Super Speciality Hospital,Mumbai</td>
                    <td>Max Super Speciality Hospital, Mohali</td>
                </tr>
                <tr>
                    <td>Max Super Speciality Hospital,Noida</td>
                    <td></td>
                    <td>Max Super Speciality Hospital,Bathinda</td>
                </tr>
                <tr>
                    <td>Max Super Speciality Hospital,South Delhi</td>
                    <td></td>
                    <td>Max Super Speciality Hospital, Mohali</td>
                </tr>
                </tbody>
            </table>
            </section>
        </>
    )
}
export default Hospital