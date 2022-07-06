import React,{Component} from 'react';

const locUrl="https://fswdsummernodeapi.herokuapp.com/location";
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            location:''
        }
    }
    // componentDidMount(){
    //     alert("This is home")
    // }
    // componentDidUpdate(){
    //     alert("This is update")
    // }
    renderCity=(data)=>{      
        if(data){
            return data.map((item)=>{
                return(
                    <option key={item.location_id}>
                        {item.location_name}
                    </option>
                )
            })
        }
    }
    render(){
        return(
            <>
            <div className="panel panel-warning" style={{width:'70%',marginLeft:'15%'}}>
            <div className="panel-heading">
                <h2>Home</h2>
            </div>
            <div className="panel-body">
                <select className="form-control">
                    <option>----Select City----</option>
                    {this.renderCity(this.state.location)}
                </select>
            </div>        
        </div>
        </> 
        )
    }
    componentDidMount(){
        console.log(">>Inside CompoentDidMount")
        fetch(locUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({location:data})
        })
    }
}
export default Home