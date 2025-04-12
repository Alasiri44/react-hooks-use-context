import React, { useContext} from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserContext} from "../context/user";


function App() {
    const {theme} = useContext(UserContext);
    console.log(theme);
    
  return (
    
      <main className={theme}>
      {/* Wrapping components that need access to the context data in the provider/ */}
     
      <Header />
      <Profile />
     
      </main>
     
    
  );
}

export default App;
