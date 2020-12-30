/////// IMPORTATION DES RESSOURCES
//// REACT
import React from "react";
//// CSS
import style from "./style.less";

export default () => {
    // const setPointer = props.setPointer;

    return (
         <section className={style.errorSection}>
             <h1>404</h1>
             <div>
                <h2>La page que vous recherchez n’existe pas</h2>
                <span></span>
             </div>
         </section>
    )
}