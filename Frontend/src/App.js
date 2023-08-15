import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from '../src/components/content/content.jsx';
import Footer from '../src/components/footer/footer'
import './bootstrap-5.3.1-dist/css/bootstrap.css'
import './bootstrap-5.3.1-dist/js/bootstrap.js'


function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Content/>
    <Footer/>
    </div>
  );
}

export default App;