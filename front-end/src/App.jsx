import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import  TasksPage  from "./pages/TasksPage.jsx";
import TaskFormPage from "./pages/TaskFormPage.jsx";
import Navigation from './components/Navigation.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Navigate to="/tasks" />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/form' element={<TaskFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App