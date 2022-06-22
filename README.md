# React & Redux

# Day1: Component & CRUD
## 1. class 형식의 컴포넌트 선언

```jsx
import React,{Component} from 'react';

//Component 이름의 첫글자는 항상 대문자로
class Name extends Component{
	//생성자
	constructor(props){
		super(props); //생성자 내부에서 this를 사용하기 위해
		this.state={
		//state 선언 및 초기화
		}
	}

	//랜더링 함수
	render(){
		//페이지 랜더

		return(
		//반환될 페이지 > 가장 큰 태그 하나만 가능
		)
	}
}

export default Name; //파일 외부에서 컴포넌트 접근
```

- VSC 컴포넌트 class 생성 단축어 rcc
- class 메서드, 멤버변수 등은 정의시  var, function 등을 붙이지 않는다
- 외부에서 컴포넌트 사용시 다음과 같이 사용

```jsx
import Name from 'Name.js'
...
<Name props1={props1_value} />
```

## 2. State와 Props

### 1) State

- 컴포넌트 내부에서만 사용될 변수들
- 생성자 안에서 선언 및 초기화
- this.state.state_name을 통해 값 접근
- this.setState를 통해서만 값 변경

```jsx
this.setState({
	state_name: state_value,
})
```

### 2) Props

- 외부에서 컴포넌트로 전달된 인자값들
- 태그 안에서 값을 받는다

```jsx
<Component props1={props1_value} props2={props2_value} />
```

- 컴포넌트 내부에서는 this.props.props_name으로 접근
- 외부에서 지정되는 값이므로 내부에서 변경 불가

### 3) shouldComponentUpdate

- true를 반환시에만 render함수 작동
- 불필요한 랜더링을 막는 역할
- 인자 newProps와 newState를 통해 새로 바뀐 props와 state에 접근 가능

# Day2: Redux


## 1. Redux

### 1) 복잡성 완화 → 예측가능

- Single Source of Truth: 데이터 중앙집중 관리
- dispatcher와 reducer로만 state 변경
- getstate를 통하여 값 접근
- state 변경시 자동으로 전파
- Undo, Redo, module reload

## 2. 구조

- Store: State가 저장될 저장소``
- State: 저장될 데이터(변수)
- Reducer: state 작성 함수
- 함수들
    1. dispatch: 전달받은 action을 실행 ⇒ reducer를 호출하여 state 값 변경 → subscribe 호출
    2. subscribe: state값이 변화할 때마다 랜더링
    3. getState: state값 가져오기
- action: type 지정 + 변경할 state 값

```jsx
//reducer 작성
function reducer(oldState, action){
	//생성하기
	if(action.type==='create'){ 
		var newContents=oldState.contents.concat();
		var newMaxId=oldState.maxId+1;
		newContents.push({id: newMaxId, title: action.payload.tittle, desc: action.payload.desc})
		
		//새로운 state 값 리턴
		return Object.assign({},state,{
			contents: newContents,
			maxId:newMaxId,
			mode:'read',
			selectedId: newMaxId
		});
	}
...
}

//store 생성
var store = Redux.createStore(reducer)

function render(){
	//state 값 가져오기
	var state = store.getState()
	
	//web rendering...
}

//subscribe에 render함수 등록
store.subscribe(render);

//state 값을 새로 생성할 때
function onSubmit(){
	...
	var action = {
		type: 'create',
		payload:{title: title, desc: desc}
	}
	store.dispatch(action)
}

```

