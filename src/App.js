import './App.css';
import Welcome, { Greeting } from './components/welcome';
import NavBar from './components/navbar';
import TodoList from './components/todolist';


const App = () => {
  return (<>
    <Welcome name="Suzuka"/>
    <Greeting name="Sue"/>
    <NavBar />
    <TodoList />
  </>
  );
}

export default App;

// <Welcome/>, <NavBar/>, <TodoList/> are from jsx files in the components folder
//App will render from the index.js