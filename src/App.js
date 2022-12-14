import './App.css';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from './firebase/firebase.init';

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    console.log('Google is coming!'); 
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Sing in With Google</button>
    </div>
  );
}

export default App;
