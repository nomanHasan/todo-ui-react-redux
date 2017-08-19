import React from 'react'
import {connect} from 'react-redux'
import * as todoActions from '../../actions/todo.actions'

class TodoComponent extends React.Component{
    constructor(props){
      super(props);
    }
  
    submitTodo(input){
      this.props.createTodo(input)
    }
  
    render(){
      window.todos = this.props.todos
      let titleInput;
      return(
        <div>
          <h3>Todos</h3>
          <ul>
            
            {this.props.todos && this.props.todos.map((b, i) => <li key={i}>{b.title}</li> )}
          </ul>
          <div>
            <h3>Todos Form</h3>
            <form onSubmit={e => {
              // Prevent request
              e.preventDefault();
              // Assemble inputs
              var input = {title: titleInput.value};
              // Call handler
              this.submitTodo(input);
              // Reset form
              e.target.reset();
            }}>
              <input type="text" name="title" ref={node => titleInput = node}/>
              <input type="submit" />
            </form>
          </div>
        </div>
      )
    }
  }

  const maptStateToProps = (state, ownProps) => {
    return {
      todos: state.todos
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      createTodo: todo => {
        console.log(todo)
        dispatch(todoActions.createTodo(todo))
      }
    }
  }
  
  export default connect(maptStateToProps, mapDispatchToProps)(TodoComponent);