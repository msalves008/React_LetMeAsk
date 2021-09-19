import {BrowserRouter,Route, Switch} from "react-router-dom"
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/adminRom";



function App() {
  return (
   <BrowserRouter>
   {/* AuthContextProvider Cria um contexto e repassa para todas as Rotas que estão dentro dele*/}   
    <AuthContextProvider>
      <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/rooms/new" exact={true} component={NewRoom} />
      <Route path="/rooms/:id" component={Room} />
      <Route path="/admin/rooms/:id" component={AdminRoom} />

      </Switch>

    </AuthContextProvider>
    
      
   </BrowserRouter>
  );
}

export default App;
