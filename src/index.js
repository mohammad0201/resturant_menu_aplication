import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { persistor, store } from './redux/store';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(

    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>

);