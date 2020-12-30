/////// IMPORTATION DES RESSOURCES
//// REACT
import React from "react";
import { motion } from "framer-motion";

/////// CSS
import style from "./style.less";

/////// ASSETS
// Icônes
import HomeIcon from '../../../assets/icones/backHome.svg';


//// COMPOSANT HEADER
export default (props) => {
    const history = props.history;
    const setPointer = props.setPointer;


    // Animations
    /////// Animation du retour à la page d'accueil ("gomarfolio & icon")
    const variants = {
        active: {
            opacity: 1,
            height: 'auto'},

        inactive: {
            opacity: 0,
            height: 0}
    };


    //// COMPOSANT HEADER
    return (
        <header className={style.header}>
            <div>
                {/* Gomarfolio : back to home  */ }
                <motion.div 
                    onClick={() => {history.push("/")}} 
                    whileHover="active" 
                    className={style.backHome}
                    onMouseEnter={()=> setPointer({kind: "LINK"})} 
                    onMouseLeave={()=> setPointer({})} 
                >
                    <motion.div transition={{ease: "easeOut", type: "spring", stiffness: 100, duration: 0.4 }} initial="inactive" variants={variants}>
                        <HomeIcon/>
                    </motion.div>
                    <span>Hello World</span>
                </motion.div>
            </div>
        </header>
    )
}