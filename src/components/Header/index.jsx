/////// IMPORTATION DES RESSOURCES
//// REACT
import React from "react";
import { motion } from "framer-motion";

/////// CSS
import style from "./style.less";

/////// ASSETS
// Icônes
import BurgerIcon from '../../../assets/icones/burgerMenu.svg';
import CircleIcon from '../../../assets/icones/cercleMenu.svg';
import HomeIcon from '../../../assets/icones/backHome.svg';
import ColorIcon from '../../../assets/icones/darkMode.svg';


//// COMPOSANT HEADER
export default (props) => {
    const history = props.history;

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

    /////// Animation des labels ("menu" & "light mode")
    const menuVariants = {
        active: {
            opacity: 1,
            width: 'auto'},

        inactive: {
            opacity: 1,
            width: 0,}
    };

    /////// Animation du zoom des cercles
    const zoomVariants = {
        active: {
            scale: 1.1,},

        inactive: {
            scale: 1,}
    };


    //// COMPOSANT HEADER
    return (
        <header className={style.header}>

            {/* Burger Menu  */ }
            <motion.div whileHover="active" className={style.burgerMenu}>
                <motion.div>
                    <motion.span className={style.burgerCircle} variants={zoomVariants} initial="inactive">
                        <CircleIcon/>
                    </motion.span>
                    <span className={style.burgerIcon}>
                        <BurgerIcon/>
                    </span>
                    <span className={style.burgerSpan}>
                        <motion.span 
                        transition={{ type: "spring", stiffness: 60, duration: 0.3, damping: 7, mass: 0.5 }} 
                        variants={menuVariants} 
                        initial="inactive">
                            Menu
                        </motion.span>
                    </span>
                </motion.div>
            </motion.div>


            {/* Gomarfolio : back to home  */ }
            <motion.div onClick={() => {history.push("/")}} whileHover="active" className={style.backHome}>
                <motion.div transition={{ease: "easeOut", type: "spring", stiffness: 100, duration: 0.3 }} initial="inactive" variants={variants}>
                    <HomeIcon/>
                </motion.div>
                <span>Hello World</span>
            </motion.div>


             {/* Color Mode  */ }
            <motion.div whileHover="active" className ={style.colorMode}>
                <motion.div>
                    <motion.span className={style.colorCircle} variants={zoomVariants} initial="inactive">
                        <CircleIcon/>
                    </motion.span>
                    <span className={style.colorIcon}>
                        <ColorIcon/>
                    </span>
                    <span className={style.colorSpan}>
                        <motion.span
                        transition={{ type: "spring", stiffness: 60, duration: 0.3, damping: 7, mass: 0.5 }} 
                        variants={menuVariants} 
                        initial="inactive">
                            Light Mode
                        </motion.span>
                    </span>
                </motion.div>
            </motion.div>
            
        </header>
    )
}