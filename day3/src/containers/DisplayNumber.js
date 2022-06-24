import DisplayNumber from '../components/DisplayNumber'
import {connect} from 'react-redux';

const mapStateToProps=(state)=>{
    return{
        number: state.number
    }
}

export default connect(mapStateToProps)(DisplayNumber);

// import store from '../store'

// export default class  extends Component {
//     state={
//         number:store.getState().number
//     }

//     componentDidMount(){
//         store.subscribe(()=>{
//             this.setState({number: store.getState().number})
//         })
//     }

//     render() {
//         return (
//         <DisplayNumber number={this.state.number}/>
//         )
//     }
// }
