import React from 'react'

export default function ProductList(props) {
    return (
        <div className="card mt-4">
            <div className="card-header bg-primary text-white">
                <h4 className="card-titl ">Danh sách sản phẩm</h4>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th className="col-xs-1 col-md-1">STT</th>
                                <th className="col-xs-1 col-md-1">Mã</th>
                                <th className="col-xs-2 col-md-2">Tên</th>
                                <th className="col-xs-1 col-md-1">Giá</th>
                                <th className="col-xs-1 col-md-1">Trạng thái</th>
                                <th className="col-xs-3 col-md-3">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
