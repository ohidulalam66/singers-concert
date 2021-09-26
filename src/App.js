
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Singers from './components/Singers/Singers';

function App() {
  return (
    <div>
      {/* header access */}
      <Header/>

      {/* singers access */}
      <Singers/>

      {/* footer access */}
      <Footer/>
    </div>
  );
}

export default App;
