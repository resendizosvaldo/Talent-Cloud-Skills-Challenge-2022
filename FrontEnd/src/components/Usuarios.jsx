import { useEffect, useState } from 'react';
import Footer from './Footer'
import NavBarResponsive from './NavBarResponsive'
import balocraft from '/src/assets/BALOCRAFT.png'
import forums from '/src/assets/forums.png'
import store from "/src/assets/store.png"
import vote from "/src/assets/vote.png"
// import bg7 from './assets/report7.png'

const Usuarios = () => {
  const getInfo = () =>{
  
    const url = `https://balocraft.azurewebsites.net/customers`
    console.log(url, "desde url")
    fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )
  
             
  }

  const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {      
       body+=`<div class="flex-inline justify-center content-center bg-neutral-400 rounded-lg shadow-xl mx-3">
                  <div class='px-2 text-center font-bold text-xl text-white uppercase'>${data[i].username}</div>
                  <div class='px-2'>
                    <img src="https://mineskin.eu/armor/body/${data[i].username}/100.png" class='py-4 px-6 text-center'>
                    </img>
                  </div>
              </div>
              `
    }
    document.getElementById('data').innerHTML = body
    console.log(body, "desde moostrarData")
}
useEffect(() => {
  getInfo()

}, [])
  return (
    <>
      <NavBarResponsive />
      <div className='bg-neutral-700 h-screen'>

        <div className="pt-10">
          <div className='flex justify-center content-center mb-10'>
            <img src={balocraft} alt="" />
          </div>
          <div className="flex justify-around content-around mx-52">
            
            <a href="#" className="item forums">
            <div className=''>
              <img src={forums} alt="Minecraft forums icon" className="hover:-translate-y-3 transition-transform " />
              <p className="text-white">Chatea en nuestro</p>
              <p className="font-bold text-lg text-white">Foro</p>
            </div>
            </a>

            <a href="#" className="item store">
            <div>
              <img src={store} alt="Minecraft store icon" className="hover:-translate-y-3 transition-transform " />
              <p className="text-white">Rangos y accesorios en nuestra</p>
              <p className="font-bold text-lg text-white">Tienda</p>
            </div>
            </a>

            <a href="#" className="item vote">
            <div>
              <img src={vote} alt="Minecraft voting icon" className="hover:-translate-y-3 transition-transform "/>
              <p className="text-white">Apoyanos</p>
              <p className="font-bold text-lg text-white">Votando</p>
            </div>
            </a>
          </div>

          <div className='flex justify-center content-center mt-28'>
            <div className="text-neutral-700 inline-block p-2 bg-green-300 font-bold text-lg font-white rounded-lg">
              <p >Entra a mi servidor <span className="sip">
              </span> actualmente hay <span id='jugadores' className='px-4 py-1 rounded-lg bg-green-500'>10</span> jugadores <span className="ip">IP: 172.106.193.222:25582</span></p>
            </div>
          </div>
          <h1 className='flex justify-center content-center text-white font-bold text-lg my-5'>Jugadores Registrados</h1>
          <div id='data' className='flex justify-center content-center'>
              
          </div>
        </div>
      </div>

      {/* <input type="button" value="Obtener Información" onClick={getInfo} 
        className="bg-blue-500 p-3 rounded-md text-white font-bold hover:bg-blue-600 transition-all"
        ></input> */}
      <Footer />
    </>
  )
}

export default Usuarios