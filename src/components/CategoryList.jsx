import React, { Component } from 'react'
import { DataServices } from '../services'
import Category from './Category';

export default class CategoryList extends Component {
    constructor(){
        super ();
        this.state ={
           catagories: [],
        }
       
    }
    async componentDidMount(){
        let a=await DataServices()
        console.log(a)
        this.setState({catagories:a && a.data && a.data.category})
    }
    render() {
        return (
           <>
            <div className="columns">
            {
                this.state.catagories.map((elem,key)=>{
                return ( 
                    <div className="column">
                    <Category category={elem} key={key}/>
                    </div>
                    )   
                })
            }
            </div>
            </>
        )
    }
}
