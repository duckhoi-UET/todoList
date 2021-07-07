import React, { Component } from 'react';
import { Modal} from 'antd';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : "",
            name : "",
            status : false
        }
    }
    
    componentWillMount() {
      if(this.props.task){
        this.setState({
          id : this.props.task.id,
          name : this.props.task.name,
          status : this.props.task.status
        });
      }
    }
    
    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === "status") {
            value = target.value === "true" ? true : false;
        }
        this.setState({
            [name] : value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
        this.onCloseForm();
    }
    onClear = () => {
      this.setState({
        name : "",
        status: false
      })
    }
    render() {
        var {id} = this.state;
        return (
          <Modal title={id !== "" ? "Cập Nhật" : "Thêm Công Việc"} visible={this.props.visible} onOk={this.onSubmit} onCancel={this.onCloseForm}>

                      <div className="form-group">
                        <label htmlFor><b>Tên</b></label>
                        <input type="text" name="name" id className="form-control" value={this.state.name} onChange = {this.onChange}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor><b>Trạng thái</b></label>
                        <select className="custom-select" name="status" value={this.state.status} onChange = {this.onChange}>
                        
                          <option value={true}>Đã Hoàn Thành</option>
                          <option value={false}>Chưa Hoàn Thành</option>
                        </select>
                        <hr/>
                      </div>
          </Modal>
        );
    }
}

export default AddTask;