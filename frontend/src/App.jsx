import { Link , Route , Routes} from "react-router-dom"
import { SignupPage } from "./pages/signup"
import { LoginPage } from "./pages/login"
function App() {
 

  return (
    <div>
      <Routes>
        <Route path="/" element={<landingPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
