import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    const { product, index } = props;
    const statusName = product.status ? 'Còn Hàng' : 'Hết hàng';
    const statusClass = product.status ? 'warning' : 'info';

    const onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xoá sản phẩm này ?')) { // eslint-disable-line
            props.onDelete(id);
        }
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <span className={`badge bg-${statusClass} text-dark`}>
                    {statusName}
                </span>
            </td>
            <td>
                <Link to={`/product/${product.id}/edit`}
                    className="btn btn-success mr-10

                ">
                    Sửa
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => onDelete(product.id)}
                >
                    Xoá
                </button>
            </td>
        </tr>
    );
};

export default ProductItem;
