import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu.component';
import routes from './router/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    const showRoutesMenus = (routes) => {
        return (
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        element={route.main()}
                        // element={<route.main />}
                    />
                ))}
            </Routes>
        );
    }

    return (
        <Router>
            <div>
                <Menu />
                <div className="container mt-3">
                    <div className="row">
                        {showRoutesMenus(routes)}
                    </div>
                </div>
            </div>
        </Router>
    );
}
