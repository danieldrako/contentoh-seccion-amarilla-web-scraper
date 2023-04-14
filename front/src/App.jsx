import AppBusqueda from './components/AppBusqueda'
import { BusquedaProvider } from './context/BusquedaProvider'


function App() {


  return (
      <BusquedaProvider>
        <header>
          <h1>Buscador Sección Amarilla</h1>
        </header>
        <AppBusqueda/>
      </BusquedaProvider>
  )
}

export default App


//Clima=busquda