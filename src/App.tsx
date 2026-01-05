import { Route, Routes } from 'react-router-dom'
import SplashScreen from './screens/splashscreen';
import PosAuth from './screens/pos-auth';
import PosScreen from './screens/pos';



function App() {


  return (
   <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/pos/auth' element={<PosAuth />} />
        <Route path='/pos' element={<PosScreen />} />
    </Routes>
  );
}

export default App;
