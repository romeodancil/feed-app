import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'
import Header from "./common/header";
import Footer from "./common/footer";
import List from "./pages/list"

const Routing = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/list" element={<List/>} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Routing />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
