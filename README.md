# React-1

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