import './App.css';
import Sidebar from './component/Sidebar';
import Feed from './component/Feed';
import Widget from './component/Widget';



function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Feed/>
      <Widget/>
    </div>
  );
}

export default App;
