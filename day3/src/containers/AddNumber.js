/* eslint-disable import/no-anonymous-default-export */
import AddNumber from "../components/AddNumber";
import React, { Component } from 'react'
import store from '../store'

export default class  extends Component {
    
    onPlusClick=(_size)=>{
        store.dispatch({type:"INCREMENT", size: _size})
    }

    render() {
        return (
            <AddNumber onClick={this.onPlusClick}/>
        )
    }
}
