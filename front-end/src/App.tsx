

import DarkModeToggle from './hooks/DarkModeToggle';
import { useDarkMode } from './hooks/useDarkMode';

import {ToastContainer} from "react-toastify";

import Router from './redux/Router/Router';
import LanguageToggle from './hooks/LanguageToggle';
import AllProductsNoPagination from './hooks/AllProductsNoPagination';


function App() {
  const isDarkMode = useDarkMode();
  return (
    <div
    className={` ${
      isDarkMode ? "bg-black text-white" : "bg-white text-black"
    }`}
  >
    <DarkModeToggle />
    <LanguageToggle />
    <Router />

    </div>
   
  )
}

export default App
