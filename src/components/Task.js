import React, { Component } from 'react';

class Task extends Component {
    onUpdateStatus = () => {
        console.log(this.props.task.id )
    }
    render() {
        var {task} = this.props;
        return (
            <tr>
                <th scope="row">{this.props.index}</th>
                <td>{task.name}</td> 
                <td><span className={task.status === true ? "btn btn-success" : "btn btn-secondary"}
                                    onClick = {this.onUpdateStatus}
                                    >{task.status === true ? "Kích Hoạt" : "Ẩn"}</span></td>
                <td>
                    <button className="btn btn-warning" type="button"><i className="fa fa-pencil-square-o" aria-hidden="true" /> Sửa</button>&nbsp;
                    <button className="btn btn-danger" type="button"><i className="fa fa-trash-o" aria-hidden="true" /> Xóa</button>
                </td>
            </tr>
        );
    }
}

export default Task;