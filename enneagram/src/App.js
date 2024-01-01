import logo from './logo.svg';
import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StartPage from './components/StartPage';
import TestPage from './components/TestPage';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter basename="/enneagram">
                <Routes>
                    <Route exact path="" element={<StartPage/>}/>
                    <Route path="/test" element={<TestPage/>}/>
                    <Route path="/result/*" element={<ResultPage/>}/>
                </Routes>
            </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
