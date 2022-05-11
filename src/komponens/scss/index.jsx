import React from 'react';
import './index.scss';
import Title from './title';

class Styling extends React.Component{
    render(){
        return(
            <div>
                <Title/>
                <button className=' btn btn-info'>Infoh</button>
            </div>
        )
    }
}
export default Styling;