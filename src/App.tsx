import Card, {CardVariant} from './components/Card';
import EventsExample from './components/EventsExample';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import {Link} from 'react-router-dom';
import UserItemPage from './components/UserItemPage';

function App() {
  return (
    <BrowserRouter>
      <Link to='/users' style={{marginRight: 10}}>
        Users
      </Link>
      <Link to='/todos'>Todos</Link>
      <Routes>
        <Route path='/users/' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserItemPage />} />
        <Route path='/todos' element={<TodosPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
