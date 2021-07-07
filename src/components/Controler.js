import React, { Component } from 'react';


class Controler extends Component {
    render() {
        return (
            <div className="form-group">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button"><i className="fa fa-search" aria-hidden="true"/> Tìm</button>
                    </div>
                    
                    <div className="dropdown col-3">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sắp xếp
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item"><i className="fa fa-sort-alpha-asc" aria-hidden="true"></i> Tên A-Z</a>
                            <a className="dropdown-item"><i className="fa fa-sort-alpha-desc" aria-hidden="true"></i> Tên Z-A</a>
                            <hr/>
                            <a className="dropdown-item">Trạng thái Kích Hoạt</a>
                            <a className="dropdown-item">Trạng thái Ẩn</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Controler;