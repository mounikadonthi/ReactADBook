import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import  Header from './components/Header';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';

class App extends React.Component {
  render() {
     return (
        <div>
          <Header></Header>
          <Navbar></Navbar>
          <PageContent></PageContent>
        </div>
     );
  }
}
export default App;
