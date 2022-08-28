import React, { Component } from 'react';
import categorystyle from "./Category.module.css"
class category extends Component {

    render() {
        const categories = this.props.categories
        return (
            <div>
                <h2>Categories : </h2>
                <div className={categorystyle.categoriesContainer}>
                 {
                 !categories? "" :categories.map(c =>(
                    <div key={Math.random()} className={categorystyle.categorys}>
                        <p className={categorystyle.categoryP}>{c._id}</p>
                        <p className={categorystyle.categoryP}>{c.amount}</p>
                    </div>
                )
                )
                 }
             </div>
            </div>


        );
    }
}

export default category;