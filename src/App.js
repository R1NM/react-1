import React,{Component} from 'react'
import './App.css';
import TOC from './components/TOC'
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id=3
    this.state={
      mode:'welcome',
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

  viewWelcome=()=>{
    this.setState({
      mode:'welcome'
    })
  }
  
  onClickListContent=(id)=>{
    this.setState({
      mode:"read",
      selectedContentId:Number(id)
    })
  }

  onChangeMode=(_mode)=>{
    if(_mode==='delete'){
      if(window.confirm(`Delete?`)){
        var _contents=Array.from(this.state.contents);
        for (let idx = 0; idx < _contents.length; idx++) {
          if(_contents[idx].id===this.state.selectedContentId){
            _contents.splice(idx,1);
            break;
          }
        }
        this.setState({
          contents:_contents,
          mode:'welcome'
        })
        alert('deleted!')
      }
    } else {
      this.setState({
        mode:_mode
      })
    }
  }

  addNewContent=(_title,_desc)=>{
    console.log(_title,_desc);
    this.max_content_id=this.max_content_id+1;
    var _contents=this.state.contents.concat({id:this.max_content_id,title:_title,desc:_desc});
    this.setState({
      contents:_contents,
      mode:"read",
      selectedContentId: this.max_content_id
    })
  }

  updateContent=(_id,_title,_desc)=>{
    var _contents=Array.from(this.state.contents);
    for (let idx = 0; idx < _contents.length; idx++) {
      if(_contents[idx].id===_id){
        _contents[idx]={id:_id,title:_title,desc:_desc}
        console.log(_contents);
        break;
      }
    }
    this.setState({
      contents:_contents,
      mode:"read",
      selectedContentId: _id
    })
  }

  getReadContent(){
    for (let idx = 0; idx < this.state.contents.length; idx++) {
      var data=this.state.contents[idx];
      if(data.id===this.state.selectedContentId){
        return data;
      }
    }
  }

  getContent(){
    var _title,_desc,_article=null;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
      _article=<ReadContent title={_title} desc={_desc}/>
    } else if(this.state.mode==='read'){
      var _content=this.getReadContent();
      _article=<ReadContent title={_content.title} desc={_content.desc}/>
    } else if(this.state.mode==='create'){
      _article=<CreateContent onSubmit={this.addNewContent}/>
    } else if(this.state.mode==='update'){
      var _content=this.getReadContent();
      _article=<UpdateContent data={_content} onSubmit={this.updateContent}/>
    }

    return _article;
  }

  render() {
    return(
      <div className='App'>
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={this.viewWelcome}
        />
        <TOC 
          onChangePage={this.onClickListContent} 
          data={this.state.contents}
        />
        <Control onChangeMode={this.onChangeMode}/>
        {this.getContent()}
      </div>
    )
  }
}

export default App;
