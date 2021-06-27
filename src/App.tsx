import { Route, BrowserRouter, Switch } from 'react-router-dom'

import { NewRoom } from './pages/NewRoom'
import { Home } from './pages/Home'
import { Room } from './pages/Room'

import { AuthContextProvider } from './contexts/AuthContext'

function App() {

  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" exact component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
