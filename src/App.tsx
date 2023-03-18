import './App.css';
import Header from './components/Header'
import { useAppSelector } from './hooks/storeHook';

const App = () => {

  const { darkTheme } = useAppSelector( state => state)
  return (
    <div className={ darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen px-4 lg:px-12 pb-20">
        <Header />
      </div>
    </div>
  );
}

export default App;
