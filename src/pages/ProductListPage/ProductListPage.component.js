/* Sử dụng useDispatch và useSelector từ react-redux để dispatch action
   và lấy dữ liệu từ store Redux.
   Sử dụng dữ liệu từ Redux store thay vì state local để giữ cho dữ 
   liệu đồng bộ giữa các component.*/
import React, { useEffect } from 'react';
import ProductList from './../../components/ProductList/ProductList.component';
import ProductItem from './../../components/ProductItem/ProductItem.component';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { action__DeleteProduct__Request, action__FetchProduct__Request } from '../../actions/IndexAction';

function ProductListPage() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);

	// Sử dụng useEffect - [] đảm bảo useEffect chỉ chạy một lần sau khi component được mount
	useEffect(() => {
		dispatch(action__FetchProduct__Request());
	}, [dispatch]);

	const onDelete = (id) => {
		dispatch(action__DeleteProduct__Request(id));
	};

	const showProducts = (products) => {
		return products.map((product, index) => (
			<ProductItem key={index} product={product} index={index} onDelete={onDelete} />
		));
	};

	return (
		<div className='col-xs-12 col-md-12 col-lg-12'>
			<Link to='/product/add' className='btn btn-info mb-10'>
				Thêm Sản Phẩm
			</Link>
			<ProductList>{showProducts(products)}</ProductList>
		</div>
	);
}

export default ProductListPage;
