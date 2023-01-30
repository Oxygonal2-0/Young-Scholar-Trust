import Layout from './components/pages/Layout';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import About from './components/pages/About';
import URLNotFound from './components/pages/URLNotFound';
import WhatWeDo from './components/pages/WhatWeDo';
import FAQ from './components/pages/FAQ';
import Impact from './components/pages/Impact';
import Gallery from './components/pages/Gallery';
import JoinAsMember from './components/pages/JoinAsMember';
import JoinAsStudent from './components/pages/JoinAsStudent';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>
        <Route path='what-we-do' element={<WhatWeDo/>}/>
        <Route path='faq' element={<FAQ/>}/>
        <Route path='impact' element={<Impact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='join-student' element={<JoinAsStudent/>}/>
        <Route path='join-member' element={<JoinAsMember/>}/>
      </Route>
      <Route path="*" element={<URLNotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
