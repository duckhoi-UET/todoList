import React, { Component } from 'react';


class Controler extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.keyword = "";
    }
    onChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value
        });
    }
    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    }
    render() {
        const {keyword} = this.props;
        return (
            
            <div className="form-group">
                <div className="input-group mb-3">
                    <input type="text" name="keyword" className="form-control" placeholder="Nhập từ khóa..."
                            value={keyword}
                            onChange={this.onChange}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button"><i className="fa fa-search" aria-hidden="true" onClick={this.onSearch}/> Tìm</button>
                    </div>
                    
                    <div className="dropdown col-3">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sắp xếp
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item"><i className="fa fa-sort-alpha-asc" aria-hidden="true"></i> Tên A-Z</a>
                            <a className="dropdown-item"><i className="fa fa-sort-alpha-desc" aria-hidden="true"></i> Tên Z-A</a>
                            <hr/>
                            <a className="dropdown-item">Đã Hoàn Thành</a>
                            <a className="dropdown-item">Chưa Hoàn Thành</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Controler;