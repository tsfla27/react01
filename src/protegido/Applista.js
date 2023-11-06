import React from 'react'
import AppForm from './AppForm'

const Applista = (props) => {
  return (
    <div style={{background:"greenyellow", padding:"10px"}}>
        <h1>Applist.js</h1>
        <h3>Lista de Clientes</h3>
        <AppForm/>
        <p>No. 1. Juan Manuel Ticona Vega ..... x ..... A</p>
        <p>No. 2. Rosa Maria Luque Conde  ..... x ..... A</p>
        <p>No. 3. Joe Ricardo Lopez Moral ..... x ..... A</p>
        </div>
  )
}

export default Applista