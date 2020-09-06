import React from 'react';
import { HashRouter, Route  } from 'react-router-dom'
import About from './routes/About'
import Home from './routes/Home'
import Detail from "./routes/Detail";
import Navigation from './components/Navigation'

function App(){
  return (
    <HashRouter>
      <Navigation />
      {/*  Navigation 안에서 사용되는 Link 는 Router 밖에서는 사용될 수 없다.*/}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
      {/* :id 를 통해 변수가 있음을 알려준다. */}
    </HashRouter>
  );
} 

export default App;