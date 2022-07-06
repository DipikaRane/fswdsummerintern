import React,{ Component} from 'react';
import Head from '../Head';
import Footer from '../Footer';
import './Home.css'
import JSON from '../data.json'
import Product from './ProductDisplay'
class Home extends Component {
    constructor(){
        super()
        this.state={
            product:JSON,
            filtered:JSON
        }
    }
        filterProduct=(userText)=>{
        const output=this.state.product.filter((data)=>{
            return data.product_name.toLowerCase().indexOf(userText.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }
    render(){
        return(
            <>
            <Head userInput={(data)=>{this.filterProduct(data)}}/>
            <Product prodData={this.state.filtered}/>
            <Footer year="2022" month="July"/>
            </>
        )
    }
}
export default Home