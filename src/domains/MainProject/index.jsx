/////// IMPORTATION DES RESSOURCES
//// REACT
import React from "react";
import { motion } from "framer-motion";

//// CSS
import style from "./style.less";


export default (props) => {
    // Déclaration des variables
    const isReversed = props.reversed;
    const title = props.title;
    const tags = props.tags;
    const date = props.date;
    const img = props.img;
    const color = props.color;
    const onClick = props.onClick;
    const setPointer = props.setPointer;


    // Animations
    /////// Animation du positionnement du titre
    const titleShiftVariants = {
        active: {
            x: isReversed ? "2%" : "-2%"},

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

    /////// Animation de l'image
    const widthVariants = {
        active: {
            width: '0.5em',},

        inactive: {
            width: '0%',}
    }

    const heightVariants = {
        active: {
            height: '0.85em',},

        inactive: {
            height: '0%',}

    };

    // Déclaration de la transition 
    const transitionMainProject = {
        ease: "easeInOut",
        stiffness: 30, 
        duration: 0.5, 
        damping: 7, 
        mass: 0.5
    }


    return (
        <motion.div 
            className={style.root.concat(" ", isReversed ? style.reversed : "")}
            onMouseEnter={()=> setPointer({kind: "MAIN PROJECT", color: color})} 
            onMouseLeave={()=> setPointer({})} 
            whileHover="active"  
            onClick={onClick}
        >
            <motion.div className={style.titleProjectContainer} variants={titleShiftVariants} transition={transitionMainProject}>
                <motion.h1 className={style.titleProject} initial="inactive">{title}</motion.h1>
                <motion.h1 className={style.titleProject + " " + style.titleColor} style={{color}} variants={titleColorVariants} initial="inactive">{title}</motion.h1>
            </motion.div>
            
            <div onClick={onClick} className={style.imgContainer}>
                <motion.div variants={heightVariants} initial="inactive" transition={transitionMainProject}></motion.div>
                <motion.div variants={widthVariants} initial="inactive" transition={transitionMainProject}></motion.div>
                <motion.div variants={heightVariants} initial="inactive" transition={transitionMainProject}></motion.div>
                <motion.div variants={widthVariants} initial="inactive" transition={transitionMainProject}></motion.div>
                <img src={img} alt="imgAmbiance"/>
            </div>
            <ul>
                {
                    tags.map((str, i) => <li key={i}>{str}</li>)
                }
            </ul>
            <span className={style.date}>{date}</span>
            <span className={style.line}></span>
            <div>
            </div>        
        </motion.div>
        )
    }

