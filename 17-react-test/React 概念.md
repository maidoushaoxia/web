## React 概念

### 1. JSX

```jsx
const name = 'Josh Perez'
const element = <h1>hello, {name}</h1>

ReactDOM.render(
	element,
  document.getElementById('root')
)
```

### 2. 元素渲染

- 要想将一个React元素渲染到根DOM节点中，只需将其传入ReactDOM.render( )中
- React元素是不可变对象，一旦被创建就无法更改子元素或者属性，唯一更新UI的方式是创建一个全新的元素，再将其传入ReactDOM.render( )中，React DOM 只会更新实际改变了的内容

### 3. 组件

- 函数组件：接收唯一的带有数据的props对象，并返回一个React元素

  ```jsx
  function Welcome(props) {
  	return <h1>hello, {props.name}</h1>
  }
  ```

-  class组件：

  ```jsx
  class welcome extends React.Component {
  	render() {
    	return (
      	<h1>hello, world</h1>
      )
    }
  ```

- 自定义组件：必须以大写字母开头，否则会被视为原生DOM标签

### 4. props

- props不能被更改

### 5. state

- state是私有的，受控于当前组件

- 向class组件添加局部的state

  ```jsx
  class Clock extends React.component { 
  	constructor(props) {
    	super(props)
      this.state = {date: new Date()}
    }
  	render() {
    	return (
      	<h2>It is {this.state.date.toLocateTimeString()}</h2>
      )
    }
  }
  ```

- 只能在构造函数内给this.state赋值，应该使用this.setState( )

- this.props和this.state可能会异步更新，可以让setState( )接收一个函数，该函数用上一个state作为第一个参数，将此次更新被应用的的props作为第二个参数

  ```jsx
  this.setState((state, props) => {
  	counter: state.counter + props.increment
  })
  ```

- **单项数据流**：组件将其state作为props向下传递给子组件中

### 6. 生命周期

- componentDidMount( )：在组件被渲染到DOM中后运行
- componentWillUnmount( )：组件从DOM中移除时运行

### 7. 事件处理

- 命名：采用驼峰式，JSX语法传入函数作为事件处理函数

- 使用preventDefault( )阻止默认事件

  ```jsx
  function ActionLink() {
  	function handleClick(e) {
    	e.preventDefault()
    }
  }
  
  return(
    <a onClick={handleClick}>
  	</a>
  )
  ```

- this绑定：由于class方法默认不会绑定this，需要手动绑定this

  - 在构造函数中用bind绑定

    ```jsx
    this.handleClick = this.handleClick.bind(this)
    ```

  - 在回调中使用箭头函数

    ```jsx
    <a onClick={(e) => this.handleClick(e)}></a>
    ```

- 向事件处理程序传递参数

  ```jsx
  <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
  <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
  ```

### 8. 条件渲染

- 使用if、&&以及三目运算符等表现当前的元素状态
- 阻止渲染：可以让render直接返回null，此时并不会影响组件的生命周期，组件仍会被调用，只是只是不再渲染

### 9. 列表

- key：帮助React识别哪些元素改变了，因此应该给数组中的每一个元素富裕一个确定的标识，通常使用数据中的id作为元素的key

  - 元素的key应该放在就近的数组上下文中（map方法中的元素需要设置key）
  - key在兄弟节点之间应该是独一无二的，并不需要全局唯一

- JSX中嵌入map( )

  ```jsx
  function ListItem(props) {
  	return <li>{props.value}</li>
  }
  
  function NumberList(props) {
  	const numbers = props.numbers // 对应调用时的numbers参数
    return (
    	<ul>
        {numbers.map((number) =>
         	<ListItem key={number.toString()} 
            				value={number} />
        )}
      </ul>
    )
  }
  
  // 调用
  const numbers = [1, 2, 3, 4, 5] // 对应花括号里的numbers
  ReactDOM.render(
  	<NumberList numbers={numbers} />,
    document.getElementById('root')
  )
  ```

### 10. 状态提升

- 如果多个组件需要反映相同的变化数据，则可以将共享状态提升到最近的共同父组件中

  点击展开内容

  ```jsx
  import React from 'react'
  import ReactDOM from 'react-dom'
  
  const scaleNames = {
  	c: 'Celsius',
  	f: 'Fahrenheit'
  }
  
  function toCelsius(fahrenheit) {
  	return (fahrenheit - 32) * 5 / 9
  }
  
  function toFahrenheit(celsius) {
  	return (celsius * 9 / 5) + 32
  }
  
  function tryConvert(temperature, convert) {
  	const input = parseFloat(temperature);
  	if (Number.isNaN(input)) {
  		return '';
  	}
  	const output = convert(input);
  	const rounded = Math.round(output * 1000) / 1000;
  	return rounded.toString();
  }
  
  function BoilingVerdict(props) {
  	if (props.celsius >= 100) {
  		return <p>The water would boil</p>
  	}
  	return <p>The water would not boil</p>
  }
  
  class TemperatureInput extends React.Component {
  	constructor(props) {
  		super(props)
  		this.handleChange = this.handleChange.bind(this)
  	}
  
  	handleChange(e) {
  		this.props.onTemperatureChange(e.target.value)
  	}
  
  	render() {
  		const temperature = this.props.temperature
  		const scale = this.props.scale
  		return (
  			<fieldset>
  				<legend>Enter temperature in {scaleNames[scale]}</legend>
  				<input value={temperature} onChange={this.handleChange}></input>
  			</fieldset>
  		)
  	}
  }
  
  class Calculator extends React.Component {
  	constructor(props) {
  		super(props)
  		this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
  		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  		this.state = { temperature: '', scale: 'c' }
  	}
  
  	handleCelsiusChange(temperature) {
  		this.setState({ scale: 'c', temperature })
  	}
  
  	handleFahrenheitChange(temperature) {
  		this.setState({ scale: 'f', temperature })
  	}
  
  	render() {
  		const scale = this.state.scale
  		const temperature = this.state.temperature
  		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
  		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
  
  		return (
  			<div>
  				<TemperatureInput
  					scale="c"
  					temperature={celsius}
  					onTemperatureChange={this.handleCelsiusChange}
  				/>
  				<TemperatureInput
  					scale="f"
  					temperature={fahrenheit}
  					onTemperatureChange={this.handleFahrenheitChange}
  				/>
  				<BoilingVerdict celsius={parseFloat(celsius)} />
  			</div >
  		)
  	}
  }
  
  ReactDOM.render(
  	<Calculator />,
  	document.getElementById('root')
  )
  ```

### 11. 组合

- 用一个特殊的children prop将子组件传递到渲染结果中

- 类似Vue插槽，可以自定义渲染的内容

  ```jsx
  function SplitPane(props) {
    return (
    	<div className="SplitPane">
      	<div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    )
  }
  
  function App() {
    return (
    	<SplitPane
        left={
          <Contacts />
       	}
        right={
          <Chat />
       	} />
    )
  }
  ```

  

