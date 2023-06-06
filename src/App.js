import store from './store/store';
import {Provider}from 'react-redux'
import Counter from './components/Counter';
import './App.css';
import Todos from './components/Todos';
import Countries from './components/Countries';

function App() {
  return (
    <Provider  store={store}>
      <div className="App">
      <Counter/>
      <Todos/>
      <Countries />
      </div>
    </Provider>
    
  );
}

export default App;
