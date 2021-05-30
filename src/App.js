import SignIn from 'features/Auth/SignIn';
import ToDo from 'features/Todo';
import firebase from 'firebase';
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);

function App() {
  //const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // // Listen to the Firebase Auth state and set the local state.
  // useEffect(() => {
  //   const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
  //     setIsSignedIn(!!user);
  //   });
  //   return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  // }, []);
  
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/sign-in" component={SignIn}/>
            <Route path="/photos" component={Photo} />
            <Route path="/todos" component={ToDo}/>

            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;