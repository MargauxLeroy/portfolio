/////// IMPORTATION DES RESSOURCES
//// REACT
import React, { useState, useEffect } from "react";
//// CSS
import style from "./style.less";
//// ASSETS
// Icônes
import Locked from "./../../../assets/icones/locked.svg";


export default (props) => {
    const setPointer = props.setPointer;

    const [displayError, setDisplayError] = useState(false);

    useEffect(()=> {
        if(displayError) {
            setTimeout(()=> setDisplayError(false), 3000)
        }
    }, [displayError]);

    return (
        <section className={style.privateProject}>
                <div className={style.title}>
                    <Locked/>
                    <h3>L'accès à ce projet est privé</h3>
                    <span></span>
                </div>
                <div className={style.mdp}>
                    <input onClick={ () => setDisplayError(false) } placeholder="Mot de passe" type="password" minLength="8" required/>
                    <div>{displayError ? <span className={style.error}>Le mot de passe est incorrect</span>  : null}</div>
                </div>
                <div className={style.submit}>
                    <input onClick={ () => setDisplayError(true) } onMouseEnter={()=> setPointer({kind: "LINK"})} onMouseLeave={()=> setPointer({})} type="submit" value="Accéder au projet"/>
                </div>
        </section>            
    )
}