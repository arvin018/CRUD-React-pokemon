
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Provider } from 'react-redux';
import store from './store';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </div>
  );
}

export default App;
