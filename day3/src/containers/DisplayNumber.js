/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'
import DisplayNumber from '../components/DisplayNumber'
import store from '../store'

export default class  extends Component {
    state={
        number:store.getState().number
    }

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({number: store.getState().number})
        })
    }

    render() {
        return (
        <DisplayNumber number={this.state.number}/>
        )
    }
}
