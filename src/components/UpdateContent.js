import React,{Component} from 'react'

class UpdateContent extends Component{

    constructor(props){
        super(props)
        this.state={
            id: this.props.data.id,
            title:this.props.data.title,
            desc:this.props.data.desc
        }
    }
    onChangeContent=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
    return(
        <article>
            <h2>Update</h2>
            <form onSubmit={(e)=>{
                e.preventDefault();
                this.props.onSubmit(this.state.id,this.state.title, this.state.desc);
            }}>
                <input type="hidden" name='id' value={this.state.id}/>
                <p>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.onChangeContent}
                    />
                </p>
                <p>
                    <textarea 
                        name="desc" 
                        placeholder="description"
                        value={this.state.desc}
                        onChange={this.onChangeContent}
                    />
                </p>
                <p>
                    <input type="submit"/>
                </p>
            </form>
        </article>
    )
    }
}

export default UpdateContent;