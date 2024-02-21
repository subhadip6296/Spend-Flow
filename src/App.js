import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncExp } from './components/IncExp';
import { TransList } from './components/TransList';
import { AddTrans } from './components/AddTrans';

import { GlobalProvider } from './context/GlobalState';

import DarkMode from './components/DarkMode/DarkMode';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <DarkMode/>
      <div className='container'></div>
      <Balance/>
      <IncExp/>
      <TransList/>
      <AddTrans/>
    </GlobalProvider>
  );
}

export default App;
