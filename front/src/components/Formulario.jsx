import { useState } from "react"
import useBusqueda from "../hooks/useBusqueda"


const Formulario = () => {

    const [alerta, setAlerta] = useState('')
    const {busqueda, datosBusqueda, consultarBusqueda} = useBusqueda()

    const {termino} = busqueda

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Tu busqueda no debe incluir espacios vacios')
            return
        }
        consultarBusqueda(busqueda)
    }

  return (
    <div className="contenedor">
        {alerta && <p>{alerta}</p> }
        <form action=""
            onSubmit={handleSubmit}
        >
            <div className="campo">
                <label htmlFor="termino">Busqueda</label>
                <input 
                    type="text"
                    id="termino" 
                    name="termino"
                    onChange={datosBusqueda}
                    value={termino}
                />
            </div>

            <input 
                type="submit" name="" id=""
                value='Consultar' 
            />
        </form>

    </div>
  )
}

export default Formulario