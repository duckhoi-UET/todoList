import React, { Component } from 'react';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            status : false
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
    }
    onClear = () => {
      this.setState({
        name : "",
        status: false
      })
    }
    render() {
        return (
            <div className="col-4">
              <div className="card border-warning mb-3">
                <div className="card-header text-white bg-warning mb-3"><b>Thêm Công Việc</b></div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <label htmlFor><b>Tên</b></label>
                        <input type="text" name="name" id className="form-control" value={this.state.name} onChange = {this.onChange}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor><b>Trạng thái</b></label>
                        <select className="custom-select" name="status" value={this.state.status} onChange = {this.onChange}>
                        
                          <option value={true}>Kích Hoạt</option>
                          <option value={false}>Ẩn</option>
                        </select>
                        <hr/>
                      </div>
                      <button className="btn btn-warning" type="submit"><i className="fa fa-plus" aria-hidden="true" /> Lưu Lại</button>&nbsp;
                      <button className="btn btn-danger" type="button" onClick={this.onClear}><i className="fa fa-ban" aria-hidden="true" ></i> Hủy Bỏ</button>
                    </form>
                </div>
              </div>
          </div>
        );
    }
}

export default AddTask;