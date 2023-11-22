import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, Link, useParams } from 'react-router-dom';
import {
	action__AddProduct__Request,
	action__GetProduct__Request,
	action__UpdateProduct__Request
} from '../../actions/IndexAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductActionPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const itemEditing = useSelector((state) => state.itemEditing);

	const [productInfo, setProductInfo] = useState({
		id: '',
		txtName: '',
		txtPrice: '',
		chkbStatus: false,
	});

	useEffect(() => {
		if (id) {
			dispatch(action__GetProduct__Request(id));
		}
	}, [id, dispatch]);

	useEffect(() => {
		if (itemEditing) {
			setProductInfo({
				id: itemEditing.id,
				txtName: itemEditing.name,
				txtPrice: itemEditing.price,
				chkbStatus: itemEditing.status,
			});
		}
	}, [itemEditing]);

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		setProductInfo((prevInfo) => ({
			...prevInfo,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const onSave = (e) => {
		e.preventDefault();
		const { txtName, txtPrice, chkbStatus } = productInfo;
		const product = {
			id: id,
			name: txtName,
			price: txtPrice,
			status: chkbStatus,
		}
		if (id) {
			dispatch(action__UpdateProduct__Request(product));
		}
		else {
			dispatch(action__AddProduct__Request(product));
		}
		navigate('/product-list');

	};

	const { txtName, txtPrice, chkbStatus } = productInfo;

	return (
		<div className='col-xs-6 col-md-6 col-lg-6'>
			<form onSubmit={onSave}>
				<div className="mb-3">
					<label className="form-label">Tên sản phẩm</label>
					<input
						type="text"
						className="form-control"
						placeholder="Nhập tên sản phẩm"
						name='txtName'
						value={txtName}
						onChange={onChange}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Giá sản phẩm</label>
					<input
						type="number"
						className="form-control"
						placeholder="Nhập giá sản phẩm"
						name='txtPrice'
						value={txtPrice}
						onChange={onChange}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Trạng thái</label>
				</div>
				<div className="form-check">
					<label
						className="form-check-label"
						htmlFor="availabilityCheckbox"
					>
						<input
							className="form-check-input"
							type="checkbox"
							name='chkbStatus'
							checked={chkbStatus ? true : false}
							onChange={onChange}
						/>
						Còn Hàng
					</label>
				</div>
				<Link to='/product-list' className='btn btn-danger'>Trở lại</Link>

				<button type='submit' className='btn btn-primary m-3'>Lưu lại</button>
			</form>
			<Outlet />
		</div>
	);
};

export default ProductActionPage;
