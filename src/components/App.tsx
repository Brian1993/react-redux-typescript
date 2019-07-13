import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, StoreState } from '../interface'
import { fetchTodos } from '../actions/thunks'
import { deleteTodo } from '../actions'

interface AppProps {
  todos: Todo[]
  fetchTodos: Function,
  deleteTodo: typeof deleteTodo
}

interface AppState {
  isLoadingTodo: boolean
}

class _App extends Component<AppProps, AppState> {
  constructor (props: AppProps) {
    super(props)
    this.state = { isLoadingTodo: false }
  }

  componentDidUpdate (prevProps: AppProps): void {
    const previousTodo = prevProps.todos
    if (!previousTodo.length && this.props.todos.length) {
      this.setState({ isLoadingTodo: false })
    }
  }
  onBtnClick = (): void => {
    this.props.fetchTodos()
    this.setState({ isLoadingTodo: true })
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
        {this.state.isLoadingTodo ? 'LOADING...' : null}
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
  fetchTodos,
  deleteTodo
}

export const App = connect(selector, actions)(_App)
