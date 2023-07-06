import './index.css';
import App from './App';
import React from 'react';
import {api} from 'state/api';
import ReactDOM from 'react-dom';
import globalReducer from 'state';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
const store = configureStore({
	reducer: {
		global: globalReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefault) => getDefault().contact(api.middleware),
});
setupListeners(store.dispatch);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>
);