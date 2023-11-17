import React, { useEffect, useState } from 'react'
import AppForm from './AppForm';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../conexion/firebase';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

 
const AppLista = (props) => {

  ////// Lectura fnRead ///////////
  const [docBD, setDocBD] = useState([]);
  const fnRead = () => {
    const xColeccionConQuery = query(collection(db, 'persona'));        // Dato de BD
    const unsubcribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
      const xDoc = [];                            // Variable para organizar datos
      xDatosBD.forEach((doc) => {                 // Recorriendo datos fon bucle
        xDoc.push({id:doc.id, ...doc.data()});    // Juntando id y coleccion
      });
      setDocBD(xDoc);                             // Pasando datos a "docBD"
    });
  }
  //fnRead();                                     // Prueba sin useEffect
  useEffect(()=>{ fnRead(); }, [props.idActual]);
  //console.log(docBD); 

  ////// Delete ////////////////////
  const [idActual, setIdActual] = useState("");   // Variable para id de c/coleccion
  const fnDelete = async (xId) => {               // 
    if(window.confirm("Confirme para eliminar")){ // Ventana para confirmar
      await deleteDoc(doc(db, "persona", xId));   // Elimina en BD
    }
    //alert("Se ELIMINO con éxito...");
    toast("Se elimino con exito" , {
      type:"error",
      autoClose:2000
    });
  }
  
  return (
    <div className='container text-center'>
      <div className="card bs-secondary p-3 mt-3">

        <div className="col-md-12 p-2">
          <div className="card mb-1">
            <h1>Sitio copia (App.js)</h1>
          </div>
        </div>

        <div className='col-md-12 p-2'>
        <AppForm {...{idActual, setIdActual}} />
        </div>

        <div className='col-md-12 p-2'>
          {
            docBD.map( (p) =>
            <div className='card mb-1' key={p.id}>
              <div className='card body'>
                <div className='d-flex justify-content-between'>
                  <h4>N.- {p.nombre}</h4>
                  <div>
                    <i className='material-icons text-danger'
                    onClick={() => fnDelete(p.id)}>close</i>
                    ...
                    <i className='material-icons text-danger'
                    onClick={() => setIdActual(p.id)}>create</i>
                  </div>
                </div> 
                <div className='d-flex justify-content'>
                  <span>Edad: {p.edad}</span> ...
                  <a href='#'> Genero: {p.genero}</a>
                </div>
              </div>
            </div>
            )
          }
        </div>


      </div>

    </div>
  );
    
  
}

export default AppLista;
//<div style={{background:"greenyellow", padding:"10px"}}>
     // <h1>AppList.js</h1>
    //  <ToastContainer/>
    //  <AppForm {...{idActual, setIdActual}} />  {/* Envios de variables */}
    //  <h3>Lista de clientes</h3>
     // {
     //   docBD.map((row, index) =>               // Extraer registro e index
      //    <p key={row.id}>                      {/* Asignar key a <p> */}
        //    No. {index + 1}. {row.nombre}       {/* Imprimir Numero y nombre */}
         //   ..... 
         //   <span onClick={() => fnDelete(row.id)}>x</span>
         //   ..... 
         //   <span onClick={() => setIdActual(row.id)}>A</span>
     //     </p> 
    //    )
   //   }
  //  </div>