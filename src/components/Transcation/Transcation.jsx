import React, { Component } from 'react';
import transcationStyle from '../Transcation/Transcation.module.css';
class Transcation extends Component {

    delete=()=>{
        this.props.delete(this.props.d._id)
    }

    render() {
        const {d} =this.props
        const BALANCE = 500
        const amountClass  = d.amount >= BALANCE ? transcationStyle.positive :transcationStyle.negative 
        return (
            <div>

                <div className={transcationStyle.transcation}>
                    <p className={transcationStyle.transactionP + " "+ amountClass}>{d.amount}</p>
                    <p className={transcationStyle.transactionP}>{d.vendor}</p>
                    <p className={transcationStyle.transactionP}>{d.category}</p>
                    <button onClick={this.delete} className={transcationStyle.delete}><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
        );
    }
}

export default Transcation