
import React, { Component } from 'react';
import AddTask from './components/AddTask';
import Controler from './components/Controler';
import TableTask from './components/TableTask';
var key = require("random-key");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks : [],
      isDisplayForm : false
    }
  }
  componentWillMount() {
    if(localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks : tasks
      });
    }
  }

  onChangeDisplay = () => {
    this.setState({
      isDisplayForm : !this.state.isDisplayForm
    });
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm : false
    });
  }

  onSubmit = (data) => {
    var {tasks} = this.state;
    data.id = key.generate();
    tasks.push(data);
    this.setState({
      tasks : tasks
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  onUpdateStatus = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);
    if(index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks : tasks
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  findIndex = (id) => {
    var {tasks} = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if(task.id === id) {
        result =  index;
      }
    });
    return result;
  }
  onDelete = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);
    if(index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        
        tasks : tasks
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    this.onCloseForm();
  }

  render() {
    var {tasks, isDisplayForm} = this.state;
    var elemAddTask = isDisplayForm ? <AddTask onSubmit={this.onSubmit} onCloseForm={this.onCloseForm}/> : "";
    return (
      <div class="container">
        <div className="text-center mt-3"><h1>QUẢN LÝ CÔNG VIỆC</h1></div>
        <hr/>
        <div class="row mt-5">
          {elemAddTask}
          <div className="col">
              <div className="card border-light mb-3">
                  <div className="card-header text-white bg-light mb-3">
                    <button type="button" class={isDisplayForm ? "btn btn-danger" : "btn btn-success"} onClick={this.onChangeDisplay}>{isDisplayForm ? "Hủy Thêm" : "Thêm Công Việc"}</button>&nbsp;
                    
                  </div>
                  <div className="card-body">
                      <form>
                        <Controler/>
                        <TableTask tasks = {tasks} 
                                    onUpdateStatus = {this.onUpdateStatus}
                                    onDelete = {this.onDelete}/>
                      </form>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
