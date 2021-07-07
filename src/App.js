
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
      isDisplayForm : false,
      taskEditting : null, 
      keyword : ""
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

  onShowForm = () => {
    this.setState({
      isDisplayForm : true
    });
  }

  onSubmit = (data) => {
    var {tasks} = this.state;
    if(data.id === "") {
      data.id = key.generate();
      tasks.push(data);
    }
    else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks : tasks,
      taskEditting : null 
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

  onUpdate = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);
    var taskEditting = tasks[index];
    this.setState({
      taskEditting : taskEditting
    });
    this.onShowForm();
  }
  onSearch = (keyword) => {
    this.setState({
      keyword : keyword
    });
    console.log(this.state);
  }

  render() {
    var {tasks, isDisplayForm, taskEditting} = this.state;
    var elemAddTask = isDisplayForm ? <AddTask visible = {this.state.isDisplayForm} 
                                              onSubmit={this.onSubmit} 
                                              onCloseForm={this.onCloseForm}
                                              task = {taskEditting}
                                      /> : "";
    return (
      <div className="container">
        <div className="text-center mt-3"><h1>QUẢN LÝ CÔNG VIỆC</h1></div>
        <hr/>
        {elemAddTask}
        <div className="row mt-5">  
          <div className="col">
              <div className="card border-light mb-3">
                  <div className="card-header text-white bg-light mb-3">
                    <button type="button" className="btn btn-success" onClick={this.onChangeDisplay}>Thêm Công Việc</button>&nbsp;
                    
                  </div>
                  <div className="card-body">
                      <form>
                        <Controler onSearch={this.onSearch}/>
                        <TableTask tasks = {tasks} 
                                    onUpdateStatus = {this.onUpdateStatus}
                                    onDelete = {this.onDelete}
                                    onUpdate = {this.onUpdate}/>
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
