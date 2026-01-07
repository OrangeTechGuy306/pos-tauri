import { Route, Routes } from 'react-router-dom'
import SplashScreen from './screens/splashscreen';
import PosAuth from './screens/pos-auth';
import PosScreen from './screens/pos';
import DashboardAuthScreen from './screens/dash-auth';
import DashboardScreen from './screens/dashboard';
import ProductScreen from './screens/products';



function App() {


  return (
   <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/pos/auth' element={<PosAuth />} />
        <Route path='/dashboard/auth' element={<DashboardAuthScreen />} />
        <Route path='/pos' element={<PosScreen />} />
        <Route path='/dashboard' element={<DashboardScreen />} />
        <Route path='/products' element={<ProductScreen />} />
    </Routes>
  );
}

export default App;
