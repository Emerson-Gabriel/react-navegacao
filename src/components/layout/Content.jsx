import './Content.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos

import Home from "../../views/examples/Home";
import About from "../../views/examples/About";
import Param from '../../views/examples/Param';
import NotFound from "../../views/examples/NotFound";

const Content = props => (
    <main className='content'>
        {/* Toda essa parte está diferente da do professor, analisem as diferenças */}
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/param/:id" element={<Param />} />
            <Route path="*" element={<NotFound />} />
        </Routes>  
    </main>
)

export default Content