import React,{Component} from 'react'
import './App.css';
import TOC from './components/TOC'
import Content from './components/Content';
import Subject from './components/Subject';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      mode:'read',
      selectedContentId:2,
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome',desc:'Hello, React'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information.'},
        {id:2, title:'CSS', desc:'CSS is for design.'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive.'},
      ]
    }
  }

  render() {
    var _title,_desc=null;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    } else if(this.state.mode==='read'){
      for (let idx = 0; idx < this.state.contents.length; idx++) {
        if(this.state.contents[idx].id===this.state.selectedContentId){
          _title=this.state.contents[idx].title;
          _desc=this.state.contents[idx].desc;
        }
      }
    }

    const viewWelcome=()=>{
      this.setState({
        mode:'welcome'
      })
    }

    const onClickListContent=(id)=>{
      this.setState({
        mode:"read",
        selectedContentId:Number(id)
      })
    }

    return(
      <div className='App'>
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={viewWelcome}
        />
        <TOC 
          onChangePage={onClickListContent} 
          data={this.state.contents}
        />
        <Content title={_title} desc={_desc}/>
      </div>
    )
  }
}

export default App;
