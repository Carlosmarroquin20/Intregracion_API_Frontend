export const DibujarTabla = ({cabeceras, datos})=>{

    return(
        <table>
            <thead>
                <tr>
                    {cabeceras.map(cabecera=>(
                        <th>{cabecera}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {datos.map(dato=>(
                    <tr>
                        {dato.map(celda=>(
                            <td>{celda}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}