import React, { Component } from "react";
import TodoItems from "./ToDoItems";
import * as moment from "moment";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems
    });
  }
  render() {
    return (
      <div className="container">
        <div className="todoListMain">
          <div className="header">
            <h1>{moment().format("MMM Do YY")}</h1>
            <h2>Grant's ToDo List</h2>
            <form onSubmit={this.addItem}>
              <input
                ref={a => (this._inputElement = a)}
                placeholder="Please Enter A Task"
              />
              <button type="submit">Add Item</button>
            </form>
          </div>
          <TodoItems entries={this.state.items} delete={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default TodoList;
