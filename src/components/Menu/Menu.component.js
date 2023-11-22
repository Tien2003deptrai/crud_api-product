import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import './Menu.css';

const Menus = [
	{
		name: 'Trang chủ',
		to: '/',
		exact: true,
	},
	{
		name: 'Danh sách sản phẩm',
		to: '/product-list',
		exact: false,
	},
];

const MenuLink = ({ label, to }) => {
	const match = useMatch(to);
	const active = match ? 'active' : '';

	return (
		<li className={active}>
			<Link to={to}>{label}</Link>
		</li >
	);
};


const showMenus = (menus) => {
	return menus.map((menu, index) => {
		return (
			<MenuLink
				key={index}
				label={menu.name}
				to={menu.to}
			/>
		);
	});
};

export default function Menu() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link to='/' className="navbar-brand">Call API</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							{showMenus(Menus)}
						</ul>
					</div>
				</div>
			</nav>

			{/* {element} */}
		</div>
	);
}