import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import StateLogin from "./components/StateLogin.jsx";
import Signup from "./components/Singup.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <h4>Uncontrolled Components(using Refs)</h4>
        <StateLogin />
        <h4>Controlled Components(using State and Custom Hook)</h4>
        <Login />
        <h4>Using FormData Object to hold the form data</h4>
        <Signup />
      </main>
    </>
  );
}

export default App;
