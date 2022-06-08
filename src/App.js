import './App.css';
import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return <div>
      <h1>My Todo</h1>
      <Todo text='Learn React'/>
      <Todo text='Learn NextJs'/>
      <Todo text='Learn Angular'/>

      <Modal />
      <Backdrop />
  </div>
}
export default App;
