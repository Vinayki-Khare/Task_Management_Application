import './App.css';
import TaskList from './Component/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import ModalSection from './Component/ModalSection';
import DelModal from './Component/DelModal';
import Header from './Component/Header';
import SearchSection from './Component/SearchSection';

function App() {
  return (
    <>
      <Header />
      <div className='main-wrapper'>
        <SearchSection />
        <ModalSection />
        <TaskList />
        <DelModal />
      </div>
    </>
  );
}

export default App;
