import AppRouter from "./Router/Router";
import AuthContext from "./context/AuthContext";


function App() {
  return (
    <AuthContext>
      <AppRouter />
    </AuthContext>
  );
}

export default App;
