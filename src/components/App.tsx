import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, StoreState } from '../interface'
import { fetchTodos } from '../actions/thunks'

interface AppProps {
  todos: Todo[]
  fetchTodos(): any
}

class _App extends Component<AppProps> {
  onBtnClick = (): void => {
    this.props.fetchTodos()    
  }

  renderList (): JSX.Element[] {
    const { todos } = this.props
    return todos.map((todo: Todo) => (
      <div key={todo.id}>
        {todo.title}
      </div>
    ))
  }

  render () {
    return (
      <div>
        <button onClick={this.onBtnClick}>Fetch</button>
        {this.renderList()}
      </div>
    )
  }
}

function selector (state: StoreState) {
  return {
    todos: state.todos
  }
}

const actions = {
  fetchTodos
}

export const App = connect(selector, actions)(_App)
