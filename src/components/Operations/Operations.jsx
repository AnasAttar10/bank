import React, { Component } from 'react';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
import OperationStyle from "../Operations/Operations.module.css"
class Operations extends Component {
    constructor(){
        super()
        this.state ={
            isDeposit:false,
            path : "http://localhost:3000/"
        }
    }
    handelSubmit = (e)=>{
        this.props.handelSubmit(e)
    }

    Deposit = () => {
        this.props.Deposit()
        window.location.href=this.state.path;
    };

    Withdraw = () => {
        this.props.Withdraw()
        window.location.href=this.state.path;
    };

    render() {
        return (
            <div>
                {/* <Button onClick={handleClick}>Open simple snackbar</Button>
                <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                action={action}
                /> */}
                <h2>Add New Transaction</h2>
                <form id={OperationStyle.addNewTranscation} onSubmit={this.handelSubmit}>
                    <div>
                        <label>Amount : </label>
                        <input id='amount' type="number"/>
                    </div>
                    <div>
                        <label>Vendor :</label>
                        <input id='vendor'/>
                    </div>
                    <div>
                        <label>Category :</label>
                        <input id='categort'/>
                    </div>
                    <div className={OperationStyle.btnsContainer}>
                    <input className={OperationStyle.deposit} id="deposit" onClick={this.Deposit} type="submit" value="Deposit" />
                    <input className={OperationStyle.withdraw} id="withdraw" onClick={this.Withdraw} type="submit" value="Withdraw" />
                    </div>
                </form>
            </div>
        );
    }
}
export default Operations