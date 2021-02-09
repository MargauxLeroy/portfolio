/////// IMPORTATION DES RESSOURCES
//// REACT
import React, { useRef } from "react";
import { motion, useElementScroll, useTransform } from "framer-motion";
//// CSS
import style from "./style.less";
//// ASSETS
// Images
import Dfly from "../../../assets/projets/dfly/dflyCover.png";
import Bhangara from "../../../assets/projets/bhangara/bhangaraCover.jpg";
import Mobidys from "../../../assets/projets/mobidys/mobidysCover.png";
import MiniBigForest from "../../../assets/projets/mbf/minibigforestMiniCover.png";
import Humanair from "../../../assets/projets/humanair/humanairMiniCover.png";
import Bordeaux from "../../../assets/projets/bordeaux/bordeauxMiniCoverLocked.png";
import Mint from "../../../assets/projets/mint/mintMiniCover.png";
import LightAndFree from "../../../assets/projets/lightandfree/lightandfreeMiniCover.png";

//// ANIMATIONS
// Projets suivants
const imgLeftVariants = {
    active: {
        opacity: 0.7,
        rotate: "-8deg"},

    inactive: {
        opacity: 0,
        rotate: "0deg"}
}

const imgRightVariants = {
    active: {
        opacity: 0.7,
        rotate: "+8deg"},

    inactive: {
        opacity: 0,
        rotate: "0deg"}
}

const titleVariants = {
    active: {
        color: "#3F97FD",
        opacity: 1},

    inactive: {
        color: "#B1BEC0",
        opacity: 0.2},

    disabled: {
        color: "#B1BEC0",
        textDecoration:"line-through",
        opacity: 0.2}
}

const transitionNextProject = {
    ease: "easeInOut",
    stiffness: 30, 
    duration: 0.5, 
    damping: 7, 
    mass: 0.5
}
    
//colorChannelA and colorChannelB are ints ranging from 0 to 255
function colorChannelMixer(colorChannelA, colorChannelB, amountToMix){
    var channelA = colorChannelA*amountToMix;
    var channelB = colorChannelB*(1-amountToMix);
    return parseInt(channelA+channelB);
}
//rgbA and rgbB are arrays, amountToMix ranges from 0.0 to 1.0
//example (red): rgbA = [255,0,0]
function colorMixer(rgbA, rgbB, amountToMix){
    var r = colorChannelMixer(rgbA[0],rgbB[0],amountToMix);
    var g = colorChannelMixer(rgbA[1],rgbB[1],amountToMix);
    var b = colorChannelMixer(rgbA[2],rgbB[2],amountToMix);
    return "rgb("+r+","+g+","+b+")";
}

/////// CRÉATION DES COMPOSANTS CUSTOM
const ThreeImgs = (props) => {
    return <section className={style.threeImgs}>
        <img src={props.img1} alt=""/>
        <img src={props.img2} alt=""/>
        <img src={props.img3} alt=""/>
    </section>
}

const RegularImg = (props) => {
    return <section className={style.imgRegular}>
        <div className={style.wrapper}>
            <img src={props.img} alt="imgRegular"/>
        </div>
    </section>
}

const FullImg = (props) => {
    return <section className={style.imgFull}>
        <div className={style.wrapper}>
            <img src={props.img} alt="imgFull"/>
        </div>
    </section>
}

const RegularVideo = (props) => {
    return <section className={style.videoRegular}>
        <div className={style.wrapper}>
            <video preload="auto" controls autoPlay={true} loop type="video/mp4" src={props.video} width="100%"></video>
        </div>
    </section>
}

const Description = (props) => {
    return <section className={style.description}>
        <div className={style.wrapper}>
            <h3>{props.title}</h3>
            <div>{props.text}</div>
            <div className={style.trait}></div>
            {props.info}
        </div>
    </section>
}

const SiteLink = (props) => {
    return <section 
                className={style.siteLink}             
                onMouseEnter={()=> props.setPointer({kind: "MAIN PROJECT", color: "#EBEBEA"})} 
                onMouseLeave={()=> props.setPointer({})} 
                onClick={ () => {window.open(props.link, '_blank');}}
            >
            <h4>Découvrir le site</h4>
            <h3>{props.title}</h3>
    </section>
}

const NextProject = (props) => {
    const title = props.title;
    const img = props.img;

    const titleVariants = props.titleVariants;
    const imgVariants = props.imgVariants;

    const isLandscape = props.isLandscape || false;
    const isLeft = props.isLeft || false;
    const isDisabled = props.isDisabled || false;
    
    const projectId = props.projectId;
    const history = props.history;
    const setPointer = props.setPointer;
    return <motion.div
                className={isDisabled ? style.disabled : ""}
                initial={isDisabled ? "disabled" : "inactive"}
                transition={transitionNextProject}
                whileHover={isDisabled ? "disabled" : "active"}
                onMouseEnter={()=> setPointer({kind: (isDisabled ? "DISABLED" : "LINK")})} onMouseLeave={()=> setPointer({})} 
                onClick={
                    () => history.push(projectId)
                }
            >
                <motion.h2 variants={titleVariants} >{title}</motion.h2>
                <motion.div className={isLeft ? style.left : style.right} initial="inactive" variants={imgVariants} transition={transitionNextProject}>
                    <img src={img} className={isLandscape ? style.landscape : style.portrait} alt="test"/>
                </motion.div>
            </motion.div>
    }
    
/////// IMPORTATION DES DONNÉES PROJET
import PROJECTS from "../../data/projects";


export default (props) => {
    // Création d'ID par projet
    const projectId = props.match.params.projectId;
    const project = PROJECTS[projectId];
    // Récupération de l'history pour gérer les liens des projets
    const history = props.history;
    // Gérer les différents styles de hover
    const setPointer = props.setPointer;
    // Définir la couleur du titre par projet
    const titleStyle = {color: project.color};
    // Mise en place du changement de background au scroll
    const ref = useRef(document.body)
    const { scrollYProgress } = useElementScroll(ref);
    const bgColor = useTransform(scrollYProgress, scroll => colorMixer([235,235,234], [84,91,101], scroll < 0.88 ? Math.min(1, scroll * 30) : scroll/100));

    return (
        <motion.div style={{backgroundColor: bgColor}} className={style.root}>        
            <section className={style.headerProject + " " + style.reversed}>
                <div className={style.titleProjectContainer}>
                    <h1 className={style.titleProject} style={titleStyle}>{project.title}</h1>
                </div>
                <div className={style.imgContainer}>
                    <img src={project.imgCover} alt="imgAmbiance"/>
                </div>
                <ul>
                    {project.tags.map((tag, i) => <li key={i}>{tag}</li>) }
                </ul>
                <span className={style.date}>{project.date}</span>
                <span className={style.line}></span> 
                <svg xmlns="http://www.w3.org/2000/svg" className={style.discover} id="discover"  width="1em" height="1em" viewBox="0 0 133.39 133.63">
                <motion.g  animate={{rotate: 360}} transition={{repeat: Infinity, duration: 25, ease: "linear"}} id="discover-circle">
                    <path id="Tracé_4" data-name="Tracé 4" d="M6.89,37l1.8-3.08a11.2,11.2,0,0,1,.79-1.23c1.66-2.15,4.43-2.13,7-.64s3.93,3.89,2.88,6.39a9.4,9.4,0,0,1-.67,1.3l-1.8,3.08ZM17.5,39a6.91,6.91,0,0,0,.6-1.22c.67-1.81-.54-3.4-2.39-4.48s-3.86-1.32-5.09.12a8.52,8.52,0,0,0-.75,1.13l-1.06,1.8,7.64,4.45Z" />
                    <path id="Tracé_5" data-name="Tracé 5" d="M16.15,26.13l-1.07-.38,1.35-3.94,1.08.39Zm7.74,4.2a2.61,2.61,0,0,0,.45-2.89l1.26-.74A4,4,0,0,1,25,31.17c-1.66,1.95-4.14,2-6.2.29S16.32,27.2,18,25.28s4.14-1.93,6.39.18L20,30.52c1.45,1.08,2.82,1,3.85-.19m-4.72-.59,3.34-3.91c-1.42-1-2.59-.88-3.55.25a2.52,2.52,0,0,0,.09,3.56l.12.1" />
                    <path id="Tracé_6" data-name="Tracé 6" d="M25.17,24.09c-1.73-2.09-1.79-4.49.21-6.19a3.62,3.62,0,0,1,4.45-.47L29,18.66a2.4,2.4,0,0,0-2.78.28c-1.36,1.15-1.11,2.71.1,4.16s2.76,1.87,4.08.75a2.26,2.26,0,0,0,.75-2.62l1.34-.65A3.72,3.72,0,0,1,31.3,24.9c-2,1.71-4.39,1.19-6.13-.81" />
                    <path id="Tracé_7" data-name="Tracé 7" d="M32.1,18.29c-1.42-2.32-1-4.75,1.2-6.08s4.56-.57,6,1.72,1,4.77-1.2,6.12-4.55.55-6-1.76m5.85-3.56c-1-1.66-2.42-2.29-3.95-1.36s-1.58,2.5-.6,4.12,2.45,2.3,4,1.39,1.59-2.52.6-4.15" />
                    <path id="Tracé_8" data-name="Tracé 8" d="M46.45,6.27l3.21,8.06-1.19.48-.41-1a3.48,3.48,0,0,1-2.2,2.31c-2.6,1-4.12-1-4.73-2.54L39.35,9.1l1.35-.54,1.61,4c.6,1.53,1.67,2.78,3.38,2.1,1.32-.53,1.85-1.77,1.1-3.64L45.1,6.81Z" />
                    <path id="Tracé_9" data-name="Tracé 9" d="M48.72,5.55l1.41-.32L54,11.37l.85-7.22,1.41-.32L55.14,13l-1.43.33Z" />
                    <path id="Tracé_10" data-name="Tracé 10" d="M62.93,3.16l.13,1.33a2.41,2.41,0,0,0-2,.53,3.1,3.1,0,0,0-.78,2.74l.43,4.34-1.44.14L58.47,3.6l1.28-.12.13,1.36a2.67,2.67,0,0,1,.65-.9,3,3,0,0,1,2.4-.78" />
                    <path id="Tracé_11" data-name="Tracé 11" d="M65.1,0l1.43,0,0,1.48-1.43,0Zm0,3.1,1.43,0,.1,8.68-1.43,0Z" />
                    <path id="Tracé_12" data-name="Tracé 12" d="M74,3.48l-.1,1.33a2.44,2.44,0,0,0-2,.19,3,3,0,0,0-1.24,2.56l-.33,4.35-1.44-.11.65-8.65,1.28.1-.1,1.36a2.7,2.7,0,0,1,.8-.78A3,3,0,0,1,74,3.49" />
                    <path id="Tracé_13" data-name="Tracé 13" d="M81,8.45a2,2,0,0,1,2.46-1.39l.07,0A2,2,0,1,1,81,8.49V8.44" />
                    <path id="Tracé_14" data-name="Tracé 14" d="M95.86,6.85,99,8.62a14.36,14.36,0,0,1,1.24.78c2.16,1.64,2.16,4.42.7,7s-3.85,4-6.36,2.94a10.7,10.7,0,0,1-1.31-.66l-3.1-1.77Zm-2,10.64a8,8,0,0,0,1.22.58c1.82.65,3.4-.58,4.46-2.43s1.29-3.88-.16-5.09a8.55,8.55,0,0,0-1.14-.74l-1.81-1-4.38,7.68Z" />
                    <path id="Tracé_15" data-name="Tracé 15" d="M102.66,23.78a2.61,2.61,0,0,0,2.89.43l.75,1.26a4.07,4.07,0,0,1-4.47-.59c-2-1.64-2.09-4.12-.35-6.21s4.24-2.49,6.18-.87,2,4.11-.12,6.39l-5.1-4.25c-1.07,1.45-1,2.82.22,3.84m.54-4.71,4,3.3c.94-1.43.85-2.6-.28-3.55a2.52,2.52,0,0,0-3.56.13l-.11.12M106.78,16l.38-1.07,4,1.31-.38,1.08Z" />
                    <path id="Tracé_16" data-name="Tracé 16" d="M108.92,25c2.07-1.75,4.47-1.83,6.19.15a3.64,3.64,0,0,1,.51,4.45l-1.24-.8a2.38,2.38,0,0,0-.3-2.78c-1.17-1.35-2.73-1.09-4.16.13s-1.85,2.77-.72,4.09a2.26,2.26,0,0,0,2.63.72l.67,1.34a3.73,3.73,0,0,1-4.33-1.17c-1.73-2-1.23-4.37.75-6.13" />
                    <path id="Tracé_17" data-name="Tracé 17" d="M114.79,31.89c2.31-1.43,4.74-1,6.09,1.14s.61,4.56-1.67,6-4.75,1.06-6.12-1.14-.59-4.55,1.7-6m3.61,5.82c1.66-1,2.27-2.45,1.33-4s-2.52-1.56-4.13-.56-2.27,2.47-1.35,4,2.53,1.57,4.15.56" />
                    <path id="Tracé_18" data-name="Tracé 18" d="M126.94,46.12l-8,3.29-.49-1.19,1-.42a3.46,3.46,0,0,1-2.34-2.17c-1.06-2.59,1-4.13,2.5-4.76l4.44-1.82.55,1.34-4,1.65c-1.52.62-2.76,1.7-2.07,3.4.55,1.32,1.8,1.83,3.66,1.07l4.22-1.73Z" />
                    <path id="Tracé_19" data-name="Tracé 19" d="M127.67,48.39l.34,1.4-6.1,4,7.22.78.33,1.41-9.17-1.06L120,53.46Z" />
                    <path id="Tracé_20" data-name="Tracé 20" d="M130.2,62.58l-1.32.15a2.5,2.5,0,0,0-.55-1.95,3.08,3.08,0,0,0-2.75-.75l-4.34.47-.15-1.44,8.63-.94.14,1.28-1.36.15a2.67,2.67,0,0,1,.91.65,3,3,0,0,1,.79,2.38" />
                    <path id="Tracé_21" data-name="Tracé 21" d="M130.26,64.78l0,1.43-8.68.19,0-1.43Zm3.1-.06,0,1.43-1.47,0,0-1.43Z" />
                    <path id="Tracé_22" data-name="Tracé 22" d="M130,73.62l-1.33-.09a2.44,2.44,0,0,0-.21-2,3.07,3.07,0,0,0-2.58-1.22L121.52,70l.1-1.45,8.67.57-.09,1.29-1.36-.09a2.56,2.56,0,0,1,.78.79,3,3,0,0,1,.37,2.49" />
                    <path id="Tracé_23" data-name="Tracé 23" d="M125.08,80.73a2,2,0,0,1,1.41,2.45s0,0,0,.06A2,2,0,1,1,125,80.72h0" />
                    <path id="Tracé_24" data-name="Tracé 24" d="M126.82,95.54l-1.74,3.12a14.27,14.27,0,0,1-.77,1.24c-1.62,2.17-4.4,2.2-7,.76s-4-3.81-3-6.33A13.36,13.36,0,0,1,115,93l1.74-3.11Zm-10.66-1.86a7.64,7.64,0,0,0-.57,1.23c-.63,1.82.61,3.4,2.47,4.43s3.89,1.25,5.1-.21a8.42,8.42,0,0,0,.72-1.14l1-1.83-7.72-4.31Z" />
                    <path id="Tracé_25" data-name="Tracé 25" d="M110,102.5a2.59,2.59,0,0,0-.4,2.9l-1.25.77a4.06,4.06,0,0,1,.55-4.48c1.62-2,4.09-2.13,6.2-.41s2.53,4.22.93,6.17-4.1,2-6.39-.06l4.21-5.14c-1.47-1-2.84-1-3.85.26m4.72.5-3.26,4c1.44.94,2.61.83,3.55-.31a2.53,2.53,0,0,0-.17-3.56l-.12-.1m3.1,3.55,1.07.36-1.27,4-1.09-.38Z" />
                    <path id="Tracé_26" data-name="Tracé 26" d="M108.78,108.76c1.78,2.06,1.88,4.46-.09,6.19a3.63,3.63,0,0,1-4.44.56l.79-1.25a2.37,2.37,0,0,0,2.77-.33c1.34-1.18,1.06-2.73-.17-4.16s-2.79-1.82-4.09-.67a2.25,2.25,0,0,0-.7,2.63l-1.33.68a3.71,3.71,0,0,1,1.12-4.34c2-1.75,4.37-1.27,6.14.69" />
                    <path id="Tracé_27" data-name="Tracé 27" d="M102,114.7c1.45,2.29,1.06,4.73-1.08,6.09s-4.56.66-6-1.61-1.1-4.74,1.08-6.13,4.54-.63,6,1.65m-5.78,3.67c1,1.64,2.46,2.24,4,1.28s1.54-2.53.52-4.13-2.49-2.25-4-1.31-1.55,2.54-.52,4.16" />
                    <path id="Tracé_28" data-name="Tracé 28" d="M87.84,127l-3.37-8,1.19-.5.43,1a3.44,3.44,0,0,1,2.15-2.35c2.58-1.09,4.14.93,4.78,2.45L94.88,124l-1.34.56-1.68-4c-.64-1.51-1.73-2.74-3.42-2-1.32.55-1.82,1.81-1,3.66l1.77,4.21Z" />
                    <path id="Tracé_29" data-name="Tracé 29" d="M85.58,127.74l-1.4.35-4-6.06-.72,7.23-1.4.35,1-9.19,1.42-.35Z" />
                    <path id="Tracé_30" data-name="Tracé 30" d="M71.41,130.4l-.15-1.33a2.41,2.41,0,0,0,1.94-.57,3,3,0,0,0,.72-2.75l-.51-4.33,1.44-.17,1,8.62-1.28.15-.16-1.35a2.51,2.51,0,0,1-.64.91,3,3,0,0,1-2.38.82" />
                    <path id="Tracé_31" data-name="Tracé 31" d="M69.21,130.48l-1.43.05-.27-8.68,1.43,0Zm.1,3.1-1.43,0,0-1.48,1.43-.05Z" />
                    <path id="Tracé_32" data-name="Tracé 32" d="M60.38,130.29l.07-1.34a2.45,2.45,0,0,0,2-.22,3.06,3.06,0,0,0,1.19-2.59l.25-4.35,1.44.08-.49,8.67-1.28-.07.08-1.37a2.74,2.74,0,0,1-.79.8,3.06,3.06,0,0,1-2.48.39" />
                    <path id="Tracé_33" data-name="Tracé 33" d="M53.22,125.45a2,2,0,0,1-2.44,1.43l-.06,0a2,2,0,1,1,2.52-1.46l0,0" />
                    <path id="Tracé_34" data-name="Tracé 34" d="M41.76,128.79l-3.21-1.55a13.43,13.43,0,0,1-1.29-.7c-2.26-1.48-2.46-4.26-1.17-6.92s3.57-4.22,6.14-3.37a10.84,10.84,0,0,1,1.36.57l3.21,1.55ZM43,118.05a8,8,0,0,0-1.25-.5c-1.86-.52-3.36.81-4.29,2.73s-1,4,.51,5.07a9.22,9.22,0,0,0,1.19.66l1.88.91,3.85-8Z" />
                    <path id="Tracé_35" data-name="Tracé 35" d="M30.25,120.47l-.29,1.1-4-1,.3-1.11Zm3.54-8.06a2.62,2.62,0,0,0-2.92-.21L30,111a4.06,4.06,0,0,1,4.5.26c2.08,1.48,2.39,3.94.81,6.15s-4,2.8-6.09,1.34-2.27-4-.36-6.39l5.4,3.87c1-1.53.79-2.9-.5-3.82m-.2,4.74-4.18-3c-.84,1.5-.66,2.65.55,3.51a2.51,2.51,0,0,0,3.54-.39l.09-.13" />
                    <path id="Tracé_36" data-name="Tracé 36" d="M27.46,111.66c-1.94,1.9-4.32,2.16-6.18.31a3.64,3.64,0,0,1-.84-4.4l1.3.7a2.38,2.38,0,0,0,.51,2.75c1.26,1.26,2.8.88,4.13-.44s1.64-2.9.41-4.13a2.26,2.26,0,0,0-2.67-.53l-.77-1.28a3.72,3.72,0,0,1,4.4.84c1.88,1.87,1.56,4.27-.28,6.17" />
                    <path id="Tracé_37" data-name="Tracé 37" d="M21.1,105.24c-2.2,1.6-4.66,1.36-6.15-.69s-1-4.5,1.21-6.08,4.66-1.41,6.19.68.93,4.5-1.25,6.09m-4-5.53c-1.57,1.14-2.07,2.6-1,4.05s2.62,1.36,4.16.24,2.08-2.63,1.05-4-2.64-1.38-4.19-.25" />
                    <path id="Tracé_38" data-name="Tracé 38" d="M7.92,91.94l7.77-3.88.57,1.16-1,.5a3.47,3.47,0,0,1,2.49,2c1.24,2.5-.66,4.19-2.14,4.93l-4.29,2.14-.65-1.3,3.89-1.94c1.46-.73,2.62-1.9,1.81-3.54-.64-1.28-1.93-1.7-3.73-.8l-4.08,2Z" />
                    <path id="Tracé_39" data-name="Tracé 39" d="M7,89.73l-.43-1.38L12.37,84l-7.26-.24-.44-1.39,9.23.39.44,1.39Z" />
                    <path id="Tracé_40" data-name="Tracé 40" d="M3.45,75.77l1.31-.25a2.46,2.46,0,0,0,.69,1.9,3,3,0,0,0,2.8.55l4.29-.79.26,1.42L4.26,80.18,4,78.91l1.34-.24a2.73,2.73,0,0,1-1-.58,3,3,0,0,1-1-2.32" />
                    <path id="Tracé_41" data-name="Tracé 41" d="M.14,73.88,0,72.45l1.47-.14.14,1.43Zm3.09-.3-.14-1.43,8.64-.83.14,1.43Z" />
                    <path id="Tracé_42" data-name="Tracé 42" d="M2.85,64.75H4.18a2.38,2.38,0,0,0,.36,2,3,3,0,0,0,2.66,1l4.35,0,0,1.45-8.68.08V68H4.24a2.67,2.67,0,0,1-.84-.73,3,3,0,0,1-.55-2.46" />
                    <path id="Tracé_43" data-name="Tracé 43" d="M7.21,57.3A2,2,0,0,1,5.62,55s0,0,0-.07a2,2,0,1,1,1.62,2.42h0" />
                </motion.g>
                <path id="arrow-to-down"  d="M67.27,77.68V50.21H66.12V77.68H61l5.73,6.87,5.72-6.87Z" />
            </svg>
            </section>
            {
                (project.customContent || []).map((content, i) => {
                    let Component;
                    if(content.kind === 'description') {
                        Component = Description;
                    }
                    if(content.kind === 'threeImgs') {
                        Component = ThreeImgs;
                    }
                    if(content.kind === 'imgRegular') {
                        
                        Component = RegularImg;
                    }
                    if(content.kind === 'imgFull') {
                        Component = FullImg;
                    }
                    if(content.kind === 'videoRegular') {
                        Component = RegularVideo;
                    }
                    if(content.kind === 'siteLink') {
                        Component = SiteLink;
                    }
                    return <Component key={i} setPointer={props.setPointer} {...content.props}/>
                })
            }

        <section className={style.otherProjects} history={history}>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" className={style.discover} id="discover"  width="1em" height="1em" viewBox="0 0 133.39 133.63">
                <motion.g  animate={{rotate: 360}} transition={{repeat: Infinity, duration: 25, ease: "linear"}} id="discover-circle">
                    <path id="Tracé_4" data-name="Tracé 4" d="M6.89,37l1.8-3.08a11.2,11.2,0,0,1,.79-1.23c1.66-2.15,4.43-2.13,7-.64s3.93,3.89,2.88,6.39a9.4,9.4,0,0,1-.67,1.3l-1.8,3.08ZM17.5,39a6.91,6.91,0,0,0,.6-1.22c.67-1.81-.54-3.4-2.39-4.48s-3.86-1.32-5.09.12a8.52,8.52,0,0,0-.75,1.13l-1.06,1.8,7.64,4.45Z" />
                    <path id="Tracé_5" data-name="Tracé 5" d="M16.15,26.13l-1.07-.38,1.35-3.94,1.08.39Zm7.74,4.2a2.61,2.61,0,0,0,.45-2.89l1.26-.74A4,4,0,0,1,25,31.17c-1.66,1.95-4.14,2-6.2.29S16.32,27.2,18,25.28s4.14-1.93,6.39.18L20,30.52c1.45,1.08,2.82,1,3.85-.19m-4.72-.59,3.34-3.91c-1.42-1-2.59-.88-3.55.25a2.52,2.52,0,0,0,.09,3.56l.12.1" />
                    <path id="Tracé_6" data-name="Tracé 6" d="M25.17,24.09c-1.73-2.09-1.79-4.49.21-6.19a3.62,3.62,0,0,1,4.45-.47L29,18.66a2.4,2.4,0,0,0-2.78.28c-1.36,1.15-1.11,2.71.1,4.16s2.76,1.87,4.08.75a2.26,2.26,0,0,0,.75-2.62l1.34-.65A3.72,3.72,0,0,1,31.3,24.9c-2,1.71-4.39,1.19-6.13-.81" />
                    <path id="Tracé_7" data-name="Tracé 7" d="M32.1,18.29c-1.42-2.32-1-4.75,1.2-6.08s4.56-.57,6,1.72,1,4.77-1.2,6.12-4.55.55-6-1.76m5.85-3.56c-1-1.66-2.42-2.29-3.95-1.36s-1.58,2.5-.6,4.12,2.45,2.3,4,1.39,1.59-2.52.6-4.15" />
                    <path id="Tracé_8" data-name="Tracé 8" d="M46.45,6.27l3.21,8.06-1.19.48-.41-1a3.48,3.48,0,0,1-2.2,2.31c-2.6,1-4.12-1-4.73-2.54L39.35,9.1l1.35-.54,1.61,4c.6,1.53,1.67,2.78,3.38,2.1,1.32-.53,1.85-1.77,1.1-3.64L45.1,6.81Z" />
                    <path id="Tracé_9" data-name="Tracé 9" d="M48.72,5.55l1.41-.32L54,11.37l.85-7.22,1.41-.32L55.14,13l-1.43.33Z" />
                    <path id="Tracé_10" data-name="Tracé 10" d="M62.93,3.16l.13,1.33a2.41,2.41,0,0,0-2,.53,3.1,3.1,0,0,0-.78,2.74l.43,4.34-1.44.14L58.47,3.6l1.28-.12.13,1.36a2.67,2.67,0,0,1,.65-.9,3,3,0,0,1,2.4-.78" />
                    <path id="Tracé_11" data-name="Tracé 11" d="M65.1,0l1.43,0,0,1.48-1.43,0Zm0,3.1,1.43,0,.1,8.68-1.43,0Z" />
                    <path id="Tracé_12" data-name="Tracé 12" d="M74,3.48l-.1,1.33a2.44,2.44,0,0,0-2,.19,3,3,0,0,0-1.24,2.56l-.33,4.35-1.44-.11.65-8.65,1.28.1-.1,1.36a2.7,2.7,0,0,1,.8-.78A3,3,0,0,1,74,3.49" />
                    <path id="Tracé_13" data-name="Tracé 13" d="M81,8.45a2,2,0,0,1,2.46-1.39l.07,0A2,2,0,1,1,81,8.49V8.44" />
                    <path id="Tracé_14" data-name="Tracé 14" d="M95.86,6.85,99,8.62a14.36,14.36,0,0,1,1.24.78c2.16,1.64,2.16,4.42.7,7s-3.85,4-6.36,2.94a10.7,10.7,0,0,1-1.31-.66l-3.1-1.77Zm-2,10.64a8,8,0,0,0,1.22.58c1.82.65,3.4-.58,4.46-2.43s1.29-3.88-.16-5.09a8.55,8.55,0,0,0-1.14-.74l-1.81-1-4.38,7.68Z" />
                    <path id="Tracé_15" data-name="Tracé 15" d="M102.66,23.78a2.61,2.61,0,0,0,2.89.43l.75,1.26a4.07,4.07,0,0,1-4.47-.59c-2-1.64-2.09-4.12-.35-6.21s4.24-2.49,6.18-.87,2,4.11-.12,6.39l-5.1-4.25c-1.07,1.45-1,2.82.22,3.84m.54-4.71,4,3.3c.94-1.43.85-2.6-.28-3.55a2.52,2.52,0,0,0-3.56.13l-.11.12M106.78,16l.38-1.07,4,1.31-.38,1.08Z" />
                    <path id="Tracé_16" data-name="Tracé 16" d="M108.92,25c2.07-1.75,4.47-1.83,6.19.15a3.64,3.64,0,0,1,.51,4.45l-1.24-.8a2.38,2.38,0,0,0-.3-2.78c-1.17-1.35-2.73-1.09-4.16.13s-1.85,2.77-.72,4.09a2.26,2.26,0,0,0,2.63.72l.67,1.34a3.73,3.73,0,0,1-4.33-1.17c-1.73-2-1.23-4.37.75-6.13" />
                    <path id="Tracé_17" data-name="Tracé 17" d="M114.79,31.89c2.31-1.43,4.74-1,6.09,1.14s.61,4.56-1.67,6-4.75,1.06-6.12-1.14-.59-4.55,1.7-6m3.61,5.82c1.66-1,2.27-2.45,1.33-4s-2.52-1.56-4.13-.56-2.27,2.47-1.35,4,2.53,1.57,4.15.56" />
                    <path id="Tracé_18" data-name="Tracé 18" d="M126.94,46.12l-8,3.29-.49-1.19,1-.42a3.46,3.46,0,0,1-2.34-2.17c-1.06-2.59,1-4.13,2.5-4.76l4.44-1.82.55,1.34-4,1.65c-1.52.62-2.76,1.7-2.07,3.4.55,1.32,1.8,1.83,3.66,1.07l4.22-1.73Z" />
                    <path id="Tracé_19" data-name="Tracé 19" d="M127.67,48.39l.34,1.4-6.1,4,7.22.78.33,1.41-9.17-1.06L120,53.46Z" />
                    <path id="Tracé_20" data-name="Tracé 20" d="M130.2,62.58l-1.32.15a2.5,2.5,0,0,0-.55-1.95,3.08,3.08,0,0,0-2.75-.75l-4.34.47-.15-1.44,8.63-.94.14,1.28-1.36.15a2.67,2.67,0,0,1,.91.65,3,3,0,0,1,.79,2.38" />
                    <path id="Tracé_21" data-name="Tracé 21" d="M130.26,64.78l0,1.43-8.68.19,0-1.43Zm3.1-.06,0,1.43-1.47,0,0-1.43Z" />
                    <path id="Tracé_22" data-name="Tracé 22" d="M130,73.62l-1.33-.09a2.44,2.44,0,0,0-.21-2,3.07,3.07,0,0,0-2.58-1.22L121.52,70l.1-1.45,8.67.57-.09,1.29-1.36-.09a2.56,2.56,0,0,1,.78.79,3,3,0,0,1,.37,2.49" />
                    <path id="Tracé_23" data-name="Tracé 23" d="M125.08,80.73a2,2,0,0,1,1.41,2.45s0,0,0,.06A2,2,0,1,1,125,80.72h0" />
                    <path id="Tracé_24" data-name="Tracé 24" d="M126.82,95.54l-1.74,3.12a14.27,14.27,0,0,1-.77,1.24c-1.62,2.17-4.4,2.2-7,.76s-4-3.81-3-6.33A13.36,13.36,0,0,1,115,93l1.74-3.11Zm-10.66-1.86a7.64,7.64,0,0,0-.57,1.23c-.63,1.82.61,3.4,2.47,4.43s3.89,1.25,5.1-.21a8.42,8.42,0,0,0,.72-1.14l1-1.83-7.72-4.31Z" />
                    <path id="Tracé_25" data-name="Tracé 25" d="M110,102.5a2.59,2.59,0,0,0-.4,2.9l-1.25.77a4.06,4.06,0,0,1,.55-4.48c1.62-2,4.09-2.13,6.2-.41s2.53,4.22.93,6.17-4.1,2-6.39-.06l4.21-5.14c-1.47-1-2.84-1-3.85.26m4.72.5-3.26,4c1.44.94,2.61.83,3.55-.31a2.53,2.53,0,0,0-.17-3.56l-.12-.1m3.1,3.55,1.07.36-1.27,4-1.09-.38Z" />
                    <path id="Tracé_26" data-name="Tracé 26" d="M108.78,108.76c1.78,2.06,1.88,4.46-.09,6.19a3.63,3.63,0,0,1-4.44.56l.79-1.25a2.37,2.37,0,0,0,2.77-.33c1.34-1.18,1.06-2.73-.17-4.16s-2.79-1.82-4.09-.67a2.25,2.25,0,0,0-.7,2.63l-1.33.68a3.71,3.71,0,0,1,1.12-4.34c2-1.75,4.37-1.27,6.14.69" />
                    <path id="Tracé_27" data-name="Tracé 27" d="M102,114.7c1.45,2.29,1.06,4.73-1.08,6.09s-4.56.66-6-1.61-1.1-4.74,1.08-6.13,4.54-.63,6,1.65m-5.78,3.67c1,1.64,2.46,2.24,4,1.28s1.54-2.53.52-4.13-2.49-2.25-4-1.31-1.55,2.54-.52,4.16" />
                    <path id="Tracé_28" data-name="Tracé 28" d="M87.84,127l-3.37-8,1.19-.5.43,1a3.44,3.44,0,0,1,2.15-2.35c2.58-1.09,4.14.93,4.78,2.45L94.88,124l-1.34.56-1.68-4c-.64-1.51-1.73-2.74-3.42-2-1.32.55-1.82,1.81-1,3.66l1.77,4.21Z" />
                    <path id="Tracé_29" data-name="Tracé 29" d="M85.58,127.74l-1.4.35-4-6.06-.72,7.23-1.4.35,1-9.19,1.42-.35Z" />
                    <path id="Tracé_30" data-name="Tracé 30" d="M71.41,130.4l-.15-1.33a2.41,2.41,0,0,0,1.94-.57,3,3,0,0,0,.72-2.75l-.51-4.33,1.44-.17,1,8.62-1.28.15-.16-1.35a2.51,2.51,0,0,1-.64.91,3,3,0,0,1-2.38.82" />
                    <path id="Tracé_31" data-name="Tracé 31" d="M69.21,130.48l-1.43.05-.27-8.68,1.43,0Zm.1,3.1-1.43,0,0-1.48,1.43-.05Z" />
                    <path id="Tracé_32" data-name="Tracé 32" d="M60.38,130.29l.07-1.34a2.45,2.45,0,0,0,2-.22,3.06,3.06,0,0,0,1.19-2.59l.25-4.35,1.44.08-.49,8.67-1.28-.07.08-1.37a2.74,2.74,0,0,1-.79.8,3.06,3.06,0,0,1-2.48.39" />
                    <path id="Tracé_33" data-name="Tracé 33" d="M53.22,125.45a2,2,0,0,1-2.44,1.43l-.06,0a2,2,0,1,1,2.52-1.46l0,0" />
                    <path id="Tracé_34" data-name="Tracé 34" d="M41.76,128.79l-3.21-1.55a13.43,13.43,0,0,1-1.29-.7c-2.26-1.48-2.46-4.26-1.17-6.92s3.57-4.22,6.14-3.37a10.84,10.84,0,0,1,1.36.57l3.21,1.55ZM43,118.05a8,8,0,0,0-1.25-.5c-1.86-.52-3.36.81-4.29,2.73s-1,4,.51,5.07a9.22,9.22,0,0,0,1.19.66l1.88.91,3.85-8Z" />
                    <path id="Tracé_35" data-name="Tracé 35" d="M30.25,120.47l-.29,1.1-4-1,.3-1.11Zm3.54-8.06a2.62,2.62,0,0,0-2.92-.21L30,111a4.06,4.06,0,0,1,4.5.26c2.08,1.48,2.39,3.94.81,6.15s-4,2.8-6.09,1.34-2.27-4-.36-6.39l5.4,3.87c1-1.53.79-2.9-.5-3.82m-.2,4.74-4.18-3c-.84,1.5-.66,2.65.55,3.51a2.51,2.51,0,0,0,3.54-.39l.09-.13" />
                    <path id="Tracé_36" data-name="Tracé 36" d="M27.46,111.66c-1.94,1.9-4.32,2.16-6.18.31a3.64,3.64,0,0,1-.84-4.4l1.3.7a2.38,2.38,0,0,0,.51,2.75c1.26,1.26,2.8.88,4.13-.44s1.64-2.9.41-4.13a2.26,2.26,0,0,0-2.67-.53l-.77-1.28a3.72,3.72,0,0,1,4.4.84c1.88,1.87,1.56,4.27-.28,6.17" />
                    <path id="Tracé_37" data-name="Tracé 37" d="M21.1,105.24c-2.2,1.6-4.66,1.36-6.15-.69s-1-4.5,1.21-6.08,4.66-1.41,6.19.68.93,4.5-1.25,6.09m-4-5.53c-1.57,1.14-2.07,2.6-1,4.05s2.62,1.36,4.16.24,2.08-2.63,1.05-4-2.64-1.38-4.19-.25" />
                    <path id="Tracé_38" data-name="Tracé 38" d="M7.92,91.94l7.77-3.88.57,1.16-1,.5a3.47,3.47,0,0,1,2.49,2c1.24,2.5-.66,4.19-2.14,4.93l-4.29,2.14-.65-1.3,3.89-1.94c1.46-.73,2.62-1.9,1.81-3.54-.64-1.28-1.93-1.7-3.73-.8l-4.08,2Z" />
                    <path id="Tracé_39" data-name="Tracé 39" d="M7,89.73l-.43-1.38L12.37,84l-7.26-.24-.44-1.39,9.23.39.44,1.39Z" />
                    <path id="Tracé_40" data-name="Tracé 40" d="M3.45,75.77l1.31-.25a2.46,2.46,0,0,0,.69,1.9,3,3,0,0,0,2.8.55l4.29-.79.26,1.42L4.26,80.18,4,78.91l1.34-.24a2.73,2.73,0,0,1-1-.58,3,3,0,0,1-1-2.32" />
                    <path id="Tracé_41" data-name="Tracé 41" d="M.14,73.88,0,72.45l1.47-.14.14,1.43Zm3.09-.3-.14-1.43,8.64-.83.14,1.43Z" />
                    <path id="Tracé_42" data-name="Tracé 42" d="M2.85,64.75H4.18a2.38,2.38,0,0,0,.36,2,3,3,0,0,0,2.66,1l4.35,0,0,1.45-8.68.08V68H4.24a2.67,2.67,0,0,1-.84-.73,3,3,0,0,1-.55-2.46" />
                    <path id="Tracé_43" data-name="Tracé 43" d="M7.21,57.3A2,2,0,0,1,5.62,55s0,0,0-.07a2,2,0,1,1,1.62,2.42h0" />
                </motion.g>
                <path id="arrow-to-down"  d="M67.27,77.68V50.21H66.12V77.68H61l5.73,6.87,5.72-6.87Z" />
            </svg>
            </div>
            <div>
                <NextProject 
                    history={history} 
                    setPointer={setPointer} 
                    projectId="dfly"
                    title="Dfly Paris" 
                    img={Dfly} 
                    titleVariants={titleVariants} 
                    imgVariants={imgLeftVariants} 
                    isLandscape
                    isLeft
                    isDisabled={projectId === "dfly"}
                />
                <span>•</span>
                <NextProject 
                    history={history}
                    setPointer={setPointer} 
                    projectId="bhangara"
                    title="Bhangara" 
                    img={Bhangara} 
                    titleVariants={titleVariants} 
                    imgVariants={imgRightVariants} 
                    isDisabled={projectId === "bhangara"}
                />
            </div>
            <div>
                <NextProject 
                    history={history} 
                    setPointer={setPointer} 
                    projectId="minibigforest"
                    title="MiniBigForest" 
                    img={MiniBigForest} 
                    titleVariants={titleVariants} 
                    imgVariants={imgLeftVariants} 
                    isLeft
                    isDisabled={projectId === "minibigforest"}
                />
                <span>•</span>
                <NextProject 
                    history={history}
                    setPointer={setPointer} 
                    projectId="mobidys"
                    title="Mobidys" 
                    img={Mobidys} 
                    titleVariants={titleVariants} 
                    imgVariants={imgRightVariants} 
                    isLandscape 
                    isDisabled={projectId === "mobidys"}
                />
            </div>
            <div>
                <NextProject 
                    history={history} 
                    setPointer={setPointer} 
                    projectId="humanair"
                    title="Humanair" 
                    img={Humanair} 
                    titleVariants={titleVariants} 
                    imgVariants={imgLeftVariants} 
                    isLandscape
                    isLeft
                    isDisabled={projectId === "humanair"}
                />
                <span>•</span>
                <NextProject 
                    history={history}
                    setPointer={setPointer} 
                    projectId="/mdp"
                    title="Bordeaux" 
                    img={Bordeaux} 
                    titleVariants={titleVariants} 
                    imgVariants={imgRightVariants} 
                    isDisabled={projectId === "bordeaux"}
                />
            </div>
            <div>
                <NextProject 
                    history={history} 
                    setPointer={setPointer} 
                    projectId="lightandfree"
                    title="Light &amp; Free" 
                    img={LightAndFree} 
                    titleVariants={titleVariants} 
                    imgVariants={imgLeftVariants} 
                    isLeft
                    isDisabled={projectId === "lightandfree"}
                />
                <span>•</span>
                <NextProject 
                    history={history}
                    setPointer={setPointer} 
                    projectId="mint"
                    title="Mint" 
                    img={Mint} 
                    titleVariants={titleVariants} 
                    imgVariants={imgRightVariants} 
                    isLandscape
                    isDisabled={projectId === "mint"}
                />
            </div>
        </section>
        </motion.div>
    );
};
