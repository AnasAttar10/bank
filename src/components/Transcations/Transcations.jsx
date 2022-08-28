import React, { Component } from 'react';
import Transcation from '../Transcation/Transcation';
import transcationsStyle from "./Transcations.module.css"
class Transcations extends Component {
    render() {
        const {data}=this.props
        return (
            <div>
                <h2>Transcations :</h2>
                <div className={transcationsStyle.transcationshead}>
                    <p className={transcationsStyle.phead}>Amount </p>
                    <p className={transcationsStyle.phead}>vendor </p>
                    <p className={transcationsStyle.phead}>category </p>
                    <button disabled>Delete</button>
                </div>
                <div className={transcationsStyle.transcations}>
                    {data.map(d =>(
                        <Transcation d={d} key={Math.random()} delete={this.props.delete}/>
                    ))}
                </div>
            </div>

        );
    }
}

export default Transcations