import logo from './logo.svg';
import './App.css';

import ProfilePhoto from "./Component/profil/ProfilePhoto"
import FullName from "./Component/profil/FullName"
import Address from "./Component/profil/Address"

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;


