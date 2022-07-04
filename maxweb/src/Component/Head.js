import React,{ Component, Fragment} from 'react';
//import { Component, Fragment} from 'react';

class Head extends Component{
    constructor(props) {
        console.log(">>>Inside Constructor")
        super(props);
        this.state={
            title:'Techvanto Academy',
            text:'User Input Here'
        }
    }
    handleChange=(event)=>{
        // console.log(event.target.value)
        this.setState({text:event.target.value?event.target.value:"User Input Here"})
        this.props.userInput(event.target.value)
    }

    render(){
        console.log(">>>Inside render")
        const myStyle={
            logo:{
                fontSize:'40px',
                color:'white',
                textAlign:'center'
            },
            header:{
                backgroundColor:'#007a80'
            }
        }
        return(
            <Fragment>
                <header style={myStyle.header} >
                <div style={myStyle.logo}>{this.state.title}</div>
                <center>
                    <input onChange={this.handleChange}/>
                    <div style={{color:'purple',fontSize:'20px'}}>
                        {this.state.text}
                    </div>
                </center>
                </header>
            </Fragment>
        )
    }
}
export default Head


// const Header =()=>{
//     return(
//         <>
//         <h1>Techvanto Academy</h1>
//         </>
//     )
// }

// class Header extends React.Component{
//     render(){
//         return(
//             <React.Fragment>
//             <h1>Techvanto Academy</h1>
//             </React.Fragment>
//         )
//     }
// }