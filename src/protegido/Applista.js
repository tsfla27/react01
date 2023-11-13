import React, { useEffect, useState } from 'react'
import AppForm from './AppForm'
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../conexion/firebase';
const Applista = (props) => {
  
  //////// lectura fnRead
  const [docBD, setDocDB] = useState([]);
  const fnRead = () => {
    const xColeccionConQuery = query(collection(db, 'persona'));
    const unsubcribe = onSnapshot(xColeccionConQuery,(xDatosDB)=> {
      const xDoc = [];
      xDatosDB.forEach((doc) => {
        xDoc.push({id:doc.id, ...doc.data()});
      });
      setDocDB(xDoc);
    })
  }
  //fnRead();
  useEffect(()=>{fnRead();}, [props.idActual]);
//console.log (docBD)
  /////// delete
  const [idActual, setIdActual] = useState("");
  const fnDelete = async (xId) => {
    if (window.confirm("Confirme para eliminar")){
      await deleteDoc(doc(db,"persona", xId));
    }
    alert("Se elimino con exito...");
  }
  return (
    <div style={{background:"greenyellow", padding:"10px"}}>
        <h1>Applist.js</h1>
        <AppForm {...{idActual, setIdActual}}/>
        <h3>Lista de Clientes</h3>
        {
          docBD.map((row, index) =>
          <p key={row.id}>
            No. {index + 1}. {row.nombre}
            .....
            <span onClick={()=> fnDelete(row.id)}>x</span>
            .....
            <span onClick={()=> setIdActual(row.id)}>A</span>
          </p> )
        }
        
        
        </div>
  )
}

export default Applista