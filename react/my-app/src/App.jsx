import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Intro from './components/intro'
import Product from './components/product'
import Home from './components/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from './components/About'
import Donate from './components/Donate'
import News from './components/News'



function App() {


  return (
    <>

    {/* <h1>hello Arun </h1>
<Intro/> */}
 {/* <Product pno="1" pname="Trimmer" price="RS. 999/-"/>
 <Product pno="2" pname="Dryer" price="RS. 1499/-"/> */}

<BrowserRouter>

<Routes>
  <Route path={'/'} element={<Home/>} />
  <Route path={'/About'} element={<About/>} />
  <Route path={'/Donate'} element={<Donate/>} />
  <Route path={'/News'} element={<News/>} />
  {/* <Route path={'/Contact'} element={<Contact/>} /> */}
  {/* <Route path={'/Mission'} element={<Mission/>} /> */}
  
</Routes>


</BrowserRouter>




 </>
  )
}

export default App
