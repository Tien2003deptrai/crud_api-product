import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers/index';
import { createRoot } from 'react-dom/client';
import thunk from 'redux-thunk';

const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
