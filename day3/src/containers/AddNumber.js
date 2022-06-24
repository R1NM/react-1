import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";



const mapDispatchToProps=(dispatch)=>{
    const onPlusClick=(_size)=>{
        dispatch({type:"INCREMENT", size: _size})
    }
    return {
        onClick:onPlusClick
    }
}


export default connect(null,mapDispatchToProps)(AddNumber);
// import React, { Component } from 'react'
// import store from '../store'

// export default class  extends Component {
    
//     onPlusClick=(_size)=>{
//         store.dispatch({type:"INCREMENT", size: _size})
//     }

//     render() {
//         return (
//             <AddNumber onClick={this.onPlusClick}/>
//         )
//     }
// }
