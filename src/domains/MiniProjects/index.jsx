/////// IMPORTATION DES RESSOURCES
//// REACT
import React from "react";

//// CSS
import style from "./style.less";

//// ASSETS
// Domains
import MiniProject from "../MiniProject";
// Images
import MiniBigForest from "../../../assets/projets/mbf/minibigforestMiniCover.png";
import Humanair from "../../../assets/projets/humanair/humanairMiniCover.png";
import Bordeaux from "../../../assets/projets/bordeaux/bordeauxMiniCoverLocked.png";
import Mint from "../../../assets/projets/mint/mintMiniCover.png";
import LightAndFree from "../../../assets/projets/lightandfree/lightandfreeMiniCover.png";


export default (props) => {
    const history = props.history;
    const setPointer = props.setPointer;
    
    return (
        <section className={style.miniProjects}>
            <h1 className={style.sectionTitle}>Projets</h1>
            <div className={style.wrapperCenter}>
                <div className={style.wrapper}>
                    <MiniProject setPointer={setPointer} onClick={() => {history.push("/project/minibigforest")}} title="MiniBigForest" img={MiniBigForest} date="2020" color="#8EB4E0" fill="#8EB4E0"/>
                    <MiniProject setPointer={setPointer} onClick={() => {history.push("/project/humanair")}} landscape title="Humanair" img={Humanair} date="2019" color="#8EB4E0" fill="#8EB4E0"/>
                    <MiniProject setPointer={setPointer} onClick={() => {history.push("/mdp")}} title="Bordeaux" img={Bordeaux} date="2019" color="#8EB4E0" fill="#8EB4E0"/>
                    <MiniProject setPointer={setPointer} onClick={() => {history.push("/project/mint")}} landscape title="Mint" img={Mint} date="2016" color="#8EB4E0" fill="#8EB4E0"/>
                    <MiniProject setPointer={setPointer} onClick={() => {history.push("/project/lightandfree")}} title="Light and Free" img={LightAndFree} date="2018" color="#8EB4E0" fill="#8EB4E0"/>
                </div>
            </div>
        </section>
    )
}