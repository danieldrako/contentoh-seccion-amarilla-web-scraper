import React from 'react'
import Formulario from './Formulario'
import Resultado from './Resultado'
import useBusqueda from '../hooks/useBusqueda'
import Loading from './Loading'

const AppBusqueda = () => {

    const {resultado, cargando, noResultado} = useBusqueda()

  return (
    <>
        <main className='dos-columnas'>
            <Formulario/>

            {cargando ? <Loading/>:
                resultado ? <Resultado/>:
                noResultado? <p>{noResultado}</p>:
                <span></span>
            }
        </main>
    </>
  )
}

export default AppBusqueda