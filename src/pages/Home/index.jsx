/////// IMPORTATION DES RESSOURCES
//// REACT
import React, { useState } from "react";

// Lib : SwipeableViews
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';


//// CSS
import style from "./index.less";


//// ASSETS
// Domains
import MainProject from "../../domains/MainProject";
import MiniProjects from "../../domains/MiniProjects";
import Skill from "../../domains/Skill";
// Images
import Dfly from "../../../assets/projets/dfly/dflyCover.png";
import Bhangara from "../../../assets/projets/bhangara/bhangaraCover.jpg";
import Mobidys from "../../../assets/projets/mobidys/mobidysCoverLocked.png";
// Icônes
import AnalyseDeBesoin from "../../../assets/icones/analysis.svg";


/////// SETUP SLIDER MOBILE (Skills)
const VirtualizeSwipeableViews = virtualize(SwipeableViews);


/////// HOMEPAGE
export default (props) => {
    const history = props.history;
    const setPointer = props.setPointer;

    // Déclaration des skills
    const slides = [
        {
            icon: <AnalyseDeBesoin/>,
            title: "Analyse de besoin",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec nec mauris eget nibh ultricies.`,
        },
        {
            icon: <AnalyseDeBesoin/>,
            title: "Recherche & Conception",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec nec mauris eget nibh ultricies.`,
        },
        {
            icon: <AnalyseDeBesoin/>,
            title: "Wireframing",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec nec mauris eget nibh ultricies.`,
        },
        {
            icon: <AnalyseDeBesoin/>,
            title: "Maquettes",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec nec mauris eget nibh ultricies.`,
        },
        {
            icon: <AnalyseDeBesoin/>,
            title: "Prototypage",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec nec mauris eget nibh ultricies.`,
        },
        {
            icon: <AnalyseDeBesoin/>,
            title: "Interactions",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec nec mauris eget nibh ultricies.`
        },
    ];

    // Slider mobile (Skills dots)
    const [selectedSlide, setSelectedSlide] = useState(0);

    return (
        <div className={style.root}>
            <div className={style.page}>
                <section  className={style.mainProjects}>
                    <div className={style.mainProjectContainer}>
                        <MainProject setPointer={setPointer} onClick={() => {history.push("/project/dfly")}} color="#D9A4C5" fill="#D9A4C5" title="Dfly Paris" img={Dfly} tags={["site web", "ecommerce", "bijoux", "diamants de synthèse"]} date="2020"/>
                    </div>
                    <div className={style.mainProjectContainer}>
                        <MainProject setPointer={setPointer} onClick={() => {history.push("/project/bhangara")}} color="#BEEF39" fill="#BEEF39" reversed title="Bhangara" img={Bhangara} tags={["site web", "ecommerce", "nepal", "chanvre"]} date="2020"/>
                    </div>
                    <div className={style.mainProjectContainer}>
                        <MainProject setPointer={setPointer} onClick={() => {history.push("/mdp")}} color="#E57F20" fill="#E57F20" title="Mobidys" img={Mobidys} tags={["application", "back-office", "e-learning", "dyslexie"]} date="2020"/>
                    </div>
                </section>
                <MiniProjects setPointer={setPointer} history={history}/>
                {/* <section className={style.skills}>
                    <h1 className={style.sectionTitle}>Skills</h1>
                    <div className={style.wrapperMobile}>
                        <VirtualizeSwipeableViews slideRenderer={({key, index}) => {
                            const slide = slides[mod(index, slides.length)];
                            return (
                                <Skill key={key} icon={slide.icon} title={slide.title} description={slide.description}/>
                                )
                        }} enableMouseEvents={true} onChangeIndex={(index) => setSelectedSlide(mod(index, slides.length))} arrows={false} dots={true} />
                        <div className={style.dots}>
                            <span className={style.line}></span>
                            {slides.map((_, index) => <span key={index} className={style.dot + " " + (index === selectedSlide ? style.active : "")}></span>)}
                        </div>
                    </div>
                    <div className={style.wrapperDesktop}>
                        {slides.map((slide, index) => <Skill line key={index} icon={slide.icon} title={slide.title} description={slide.description}/>)}
                    </div>
                </section> */}
            </div>
        </div> 
    );
};
