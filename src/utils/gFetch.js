let productos = [{id:"1", nombre:"RTX-3060", tipo:"GPU", precio:"2000", foto: "/assets/gpu.webp"},
{id:"2", nombre:"GIGABYTE H410M H", tipo:"MBOARD", precio:"800", foto: "/assets/mboard.jpg"},
{id:"3", nombre:"Corsair RAM", tipo:"RAM", precio:"700", foto: "/assets/ram.webp"},
{id:"4", nombre:"AMD Ryzen 7", tipo:"CPU", precio:"1400", foto: "/assets/micro.jpg"}];

export const gFetch = () => {
    return new Promise(( res, rej )=>{    
      setTimeout(()=>{
        res( productos )
      }, 1000) 
   })
  
  } 
