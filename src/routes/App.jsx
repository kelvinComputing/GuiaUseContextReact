import { Navigate, Route, Routes } from "react-router-dom"
import { NavBars } from "./components/NavBars"
import {HomeScreen} from "./HomeScreen"
import {AboutScreen} from "./AboutScreen"
import {ContactScreen} from "./ContactScreen"
import { UsuarioProvider } from "./context/UsuarioProvider"
import { LoginScreen } from "./LoginScreen"

export const App = () => {
  return (
    <UsuarioProvider>
      <NavBars></NavBars>

      <Routes>
        <Route path='/' element={ <HomeScreen></HomeScreen> }></Route>
        <Route path='/login' element={ <LoginScreen> </LoginScreen>}></Route>
        <Route path='/about' element={ <AboutScreen></AboutScreen> } ></Route>
        <Route path='/contact' element={ <ContactScreen></ContactScreen> } ></Route>
        <Route path="/*" element={ <Navigate to='/' />}></Route>
      </Routes>
    </UsuarioProvider>
  )
}
