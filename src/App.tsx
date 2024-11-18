import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactListCont from './containers/ContactListCont.tsx';
import AddEditContactCont from './containers/AddEditContactCont.tsx';


const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true}}>
      <div className="App">
        <Routes>
          <Route path="/" element={<ContactListCont/>}/>
          <Route path="/add-contact" element={<AddEditContactCont/>}/>
          <Route path="/edit-contact/:id" element={<AddEditContactCont/>}/>
        </Routes>
      </div>
    </Router>
  )
};

export default App
