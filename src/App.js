import React, { Component } from 'react';
import './App.css';
import tickImg from './img/tick.svg';
import TodoItem from './components/TodoItems';

class App extends Component {

  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [{ title: 'hello', isComplete: true },
      { title: 'this is ', isComplete: true },
      { title: 'test' }
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClick(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      console.log(index)
      // state mutate
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })

    }
  }
  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text = event.target.value;
      if (!text) { return; }
      text = text.trim()
      if (!text) { return; }
      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      })
    }
  }
  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }
  render() {
    const { todoItems, newItem } = this.state;
    return (
      <div className="App">
        <div className='Header'>
          <img src={tickImg} alt='' width={32} height={32} />
          <input type='text'
            placeholder='what you need to be done'
            onKeyUp={this.onKeyUp}
            value={newItem}
            onChange={this.onChange}
          />
        </div>
        {todoItems.length > 0 && todoItems.map((item, index) => <TodoItem item={item} key={index} onClick={this.onItemClick(item)} />)}
        {todoItems.length === 0 && 'nothing here'}
      </div>
    );
  }
}



export default App;
