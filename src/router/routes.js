import React from 'react';
import { useParams } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage.component';
import NotFound404 from '../pages/NotFoundPage/NotFound404.component';
import ProductListPage from '../pages/ProductListPage/ProductListPage.component';
import ProductActionPage from '../pages/ProductActionPage/ProductActionPage.component';

const EditProductPage = () => {
    const { id } = useParams();
    return <ProductActionPage productId={id} />;
};


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />,
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />,
    },
    {
        path: '/product/add',
        exact: false,
        main: () => <ProductActionPage />,
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: EditProductPage,
    },
    {
        path: '/*',
        exact: false,
        main: () => <NotFound404 />,
    },
];

export default routes;
