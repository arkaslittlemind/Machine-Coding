import './App.css';
import Todo from './components/todo';

function App() {

  const todos = [
    {
      id: 1,
      title: 'Take out the trash',
      completed: false
    },
    {
      id: 2,
      title: 'Dinner with Shristi',
      completed: true
    },
    {
      id: 3,
      title: 'Meeting with boss',
      completed: false
    }
  ]

  return (
    <div className="App">
      {
        todos.map(todo => {
          return <Todo key={todo.id} todo={todo} />
        })
      }
    </div>
  );
}

export default App;
