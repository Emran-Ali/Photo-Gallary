import './App.css';
import ShowPhoto from './component/ShowPhoto';

function App() {
  return (

    <div className="w-full  overflow-x-hidden min-h-screen flex items-center justify-center bg-amber-50">
      <div className="max-w-7xl mx-auto py-10 ">
        <ShowPhoto />
      </div>
    </div>
  );
}

export default App;
