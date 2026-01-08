import { Route, Routes } from 'react-router-dom'
import SplashScreen from './screens/splashscreen';
import PosAuth from './screens/pos-auth';
import PosScreen from './screens/pos';
import DashboardAuthScreen from './screens/dash-auth';
import DashboardScreen from './screens/dashboard';
import ProductScreen from './screens/products';
import { Inventory } from './screens/inventory';
import { Categories } from './screens/categories';
import { Accounting } from './screens/accounting';
import { Transactions } from './screens/transactions';
import Orders from './screens/orders';
import Payment from './screens/payments';
import Users from './screens/users';




function App() {


  return (
   <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/pos/auth' element={<PosAuth />} />
        <Route path='/dashboard/auth' element={<DashboardAuthScreen />} />
        <Route path='/pos' element={<PosScreen />} />
        <Route path='/dashboard' element={<DashboardScreen />} />
        <Route path='/products' element={<ProductScreen />} />
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/accounting' element={<Accounting/>}/>
        <Route path='/Transactions' element={< Transactions/>}/>
        <Route path='/payments' element={<Payment/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/users' element={<Users/>}/>
    </Routes>
  );
}

export default App;
