import axios from "axios";
import { useState, createContext } from "react";

const BusquedaContext = createContext()

const BusquedaProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState({
        termino: ''
    })
    const [resultado, setResultado] = useState([])
    const [cargando, setCargando] = useState(false)
    const [noResultado, setNoResultado] = useState(false)

    const datosBusqueda = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const consultarBusqueda = async datos => {
        setCargando(true)
        setNoResultado(false)
        try {
            const {termino} = datos; 

            const URL = `http://localhost:4000/scrape/${termino}`

            const {data} = await axios(URL)
            setResultado(data);

        } catch (error) {
            setNoResultado('No hay resultados, vulve a intentarlo')
        } finally {
            setCargando(false)
        }

    }

    return (
        <BusquedaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarBusqueda,
                resultado,
                cargando,
                noResultado
            }}
        >
            {children}
        </BusquedaContext.Provider>
    )
}

export {
    BusquedaProvider
}

export default BusquedaContext