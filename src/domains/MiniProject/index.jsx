/////// IMPORTATION DES RESSOURCES
//// REACT
import React from "react";
import { motion } from "framer-motion";

//// CSS
import style from "./style.less";


export default (props) => {
    // Déclaration des variables
    const isLandscape = props.landscape;
    const title = props.title;
    const date = props.date;
    const img = props.img;
    const color = props.color;
    const fill = props.fill;
    const onClick = props.onClick;
    const setPointer = props.setPointer;


    // Animations
    /////// Animation de l'image
    const widthVariants = {
    active: {
        width: '0.25em',},

    inactive: {
        width: '0%',}
    }

    const heightVariants = {
    active: {
        height: '0.25em',},

    inactive: {
        height: '0%',}
    }

    /////// Animation du positionnement du titre
    const titleShiftVariants = {
        active: {
            x: "2%"},

        inactive: {
            x: 0}

    };

    /////// Animation de la couleur du titre
    const titleColorVariants = {
        active: {
            width: 'auto'
        },

        inactive: {
            width: 0
        }

    };

    // Déclaration de la transition 
    const transitionMainProject = {
    ease: "easeInOut",
    type: "spring", 
    stiffness: 30, 
    duration: 0.4, 
    damping: 7, 
    mass: "0.5"
    }


    return (
        <motion.div 
            className={style.root.concat(" ", isLandscape ? style.landscape : "")}
            whileHover="active" 
            onClick={onClick} 
        >
            <div>
                <div
                    onMouseEnter={()=> setPointer({kind: "MINI PROJECT", color: fill})} 
                    onMouseLeave={()=> setPointer({})} 
                >
                    <span className={style.date}>{date}</span>
                    <span className={style.line}></span>
                    <div className={style.imgContainer}>
                        <motion.div variants={heightVariants} initial="inactive" transition={transitionMainProject}></motion.div>
                        <motion.div variants={widthVariants} initial="inactive" transition={transitionMainProject}></motion.div>
                        <motion.div variants={heightVariants} initial="inactive" transition={transitionMainProject}></motion.div>
                        <motion.div variants={widthVariants} initial="inactive" transition={transitionMainProject}></motion.div>
                        <img src={img} alt="imgAmbiance"/>
                    </div>
                    <motion.div onClick={onClick} className={style.titleProjectContainer} variants={titleShiftVariants} transition={transitionMainProject}>
                        <motion.h3 className={style.titleProject} initial="inactive">{title}</motion.h3>
                        <motion.h3 className={style.titleProject + " " + style.titleColor} style={{color}} variants={titleColorVariants} initial="inactive">{title}</motion.h3>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
} 