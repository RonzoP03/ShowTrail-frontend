import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import { GlobalProvider } from "./context/GlobalState";
import { Watched } from "./screens/WatchedMovie/Watched";
import { Add } from "./screens/WatchedMovie/Component/AddMovie/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

function App() {
 // const [search, setSearch] = useState("");

  return (
    <GlobalProvider>
      <Router>
        <Header />
        <main className="App">
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/watched-movies" component={({ history }) => (
            <Watched history={history} />
          )}/>
          <Route path="/add">
            <Add />
          </Route>
        </main>
        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
