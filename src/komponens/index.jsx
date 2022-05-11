import React from 'react';
import Baris_kedua from './Latihan/baris_kedua';
import FunctionalComponent from './Latihan/functionalComponent';
import Komponen from './Latihan/komponen';



class Komponens extends React.Component{
    render(){
        return(
            <div>
                <Komponen nama ="WILLYHP"/>
                <Baris_kedua/>
                <FunctionalComponent nama ={23}/>
            </div>
        )
    }
}

export default Komponens;