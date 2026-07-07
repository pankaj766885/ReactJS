import Banner from './components/Banner';
import CategoryItems from './components/CategoryItems';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { data } from "./data/products.js"

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner/>
      {/* <CategoryItems name="1 Sale" />
      <CategoryItems name="2 Sale" /> */}

      {Object.keys(data).map(v => <CategoryItems name={v} products={data[v]} />)}


      <Footer/>
    </div>
  );
}

export default App;
