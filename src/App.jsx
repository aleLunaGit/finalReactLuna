import { BrowserRouter, Navigate, Route, Routes  } from 'react-router-dom';
import React from "react";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {CartContainer} from './components/CartContainer/CartContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() { 
   
    return (
        <BrowserRouter>
                <NavBar />
                    <div>
                        <Routes>
                            <Route  path='/' element={ <ItemListContainer/> } />
                            <Route  path='/categoria/:idTipo' element={ <ItemListContainer/> } />
                            <Route  path='/detalle/:idProducto' element={ <ItemDetailContainer/> } />
                            <Route  path='/cart' element={ <CartContainer />  } />               
                            <Route path='*' element={ <Navigate to='/' /> } />
                        </Routes>
                    </div>
            </BrowserRouter>      
    )
}

export default App
