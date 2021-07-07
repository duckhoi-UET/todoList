import React, { Component } from 'react';
import Task from './Task';

class TableTask extends Component {
    render() {
        var tasks = this.props.tasks;
        var elemTasks = tasks.map((task, index) => {
            return <Task key={task.id} index = {index + 1} task={task} 
                        onUpdateStatus = {this.props.onUpdateStatus}
                        onDelete={this.props.onDelete}
                        onUpdate = {this.props.onUpdate}/>
        });
        return (
            <div className="form-group text-center">
                <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Trạng Thái</th>
                    <th scope="col">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    { elemTasks }
                </tbody>
                </table>

            </div>
        );
    }
}

export default TableTask;