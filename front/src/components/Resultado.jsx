import useBusqueda from "../hooks/useBusqueda"

const Resultado = () => {

    const {resultado} = useBusqueda()

    console.log(resultado);
  return (
    <div className="Contenedor"> 
        <h2>Tu busqueda arroja estos mejores resultados: </h2>
        {resultado.map(r => (
        <li key={r.numero} className="lista" >
            <p className="nombre"> {r.nombre}</p>
            <p className="direccion"> Dirección: <span>{r.direccion}</span></p>
            <p className="telefono"> Telefono: <span>{r.telefono}</span></p>
        </li>
        ))}
    </div>
  )
}

export default Resultado