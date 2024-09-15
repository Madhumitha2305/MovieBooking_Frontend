import React from "react";
import { createBrowserRouter, RouterProvider,Router,Switch,Route} from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserDashboard from "./components/UserDashboard";
import ProviderDashboard from "./components/ProviderDashboard";
import MainPage from "./components/MainPage";

const router = createBrowserRouter([
  {

    path: '/',
    element: <MainPage></MainPage>
  },
  {
    path : '/Signup',
    element : <Signup></Signup>
  },
  {
    path: '/Login',
    element : <Login></Login>,
  },
  {
    path: '/UserDashboard',
    element : <UserDashboard></UserDashboard>
  },
  {
    path : '/ProviderDashboard',
    element : <ProviderDashboard></ProviderDashboard>
  }
])

function App() {
  return (
    // <Router>
    //   <div className="app">
    //     <Switch>
    //     <Route exact path="/" component={Login} />
    //       <Route path="/signup" component={Signup} />
    //       <Route path="/user-dashboard" component={UserDashboard} />
    //       <Route path="/provider-dashboard" component={ProviderDashboard} />
    //     </Switch>
    //   </div>
    // </Router>
    <>
      <RouterProvider router={router}/>
    </>
  );
}
// function App() {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path="/" component={Login} />
//           <Route path="/signup" component={Signup} />
//           <Route path="/user-dashboard" component={UserDashboard} />
//           <Route path="/provider-dashboard" component={ProviderDashboard} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;
