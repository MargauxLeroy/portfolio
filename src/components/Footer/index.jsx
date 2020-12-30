/////// IMPORTATION DES RESSOURCES
//// REACT
import React from "react";
import { notify } from "../../utils";
//// CSS
import style from "./style.less";
//// ASSETS
import BonjourIcon from "../../../assets/icones/bonjour.svg";


export default (props) => {
    const setPointer = props.setPointer;

    return (
        <footer className={style.footer}>
            <div className={style.surFooter}>
                <div className={style.description}>
                    <div className={style.icon}>
                        <BonjourIcon/>
                    </div>
                    <p>  
                        Bonjour ! <br/>
                        Je m’appelle Margaux, je suis designer produit dans le secteur numérique. 
                        Je conçois des services, sites web, applications, etc.
                        <br/>
                        Si vous souhaitez collaborer avec moi, n’hésitez pas 
                        à  
                        <a 
                            download href="../../../assets/cvMargauxLeroy2020.pdf"                 
                            onMouseEnter={()=> setPointer({kind: "LINK"})} 
                            onMouseLeave={()=> setPointer({})} 
                        > télécharger mon cv 
                        </a> ou à me contacter à l’adresse 
                        <span 
                            onMouseEnter={()=> setPointer({kind: "LINK"})} 
                            onMouseLeave={()=> setPointer({})} 
                            className={style.mail} onClick={(e) => {navigator.clipboard.writeText("margauxleroy@pm.me"); notify("L'adresse email a été copiée")}}
                        > margauxleroy@pm.me
                        </span>.   
                    </p>
                </div>
                <ul className={style.rss}>
                    <div>
                        <a href="https://dribbble.com/MargauxLeroy" onMouseEnter={()=> setPointer({kind: "LINK"})} onMouseLeave={()=> setPointer({})}> <li>Dribbble</li> </a> 
                        <a href="https://www.pinterest.fr/margauxl94/" onMouseEnter={()=> setPointer({kind: "LINK"})} onMouseLeave={()=> setPointer({})}> <li>Pinterest</li> </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/margauxleroy/?originalSubdomain=fr" onMouseEnter={()=> setPointer({kind: "LINK"})} onMouseLeave={()=> setPointer({})}> <li>Linkedin</li> </a>                
                        <a href="https://twitter.com/_MargauxL" onMouseEnter={()=> setPointer({kind: "LINK"})} onMouseLeave={()=> setPointer({})}> <li>Twitter</li> </a>
                    </div>
                </ul>
            </div>
            <span className={style.line}></span>
            <div className={style.sousFooter}>
                <span className={style.madeBy}>© Margaux Leroy, 2021</span>
                {/* <a href="/credits" onMouseEnter={()=> setPointer({kind: "LINK"})} onMouseLeave={()=> setPointer({})}><span className={style.credits}>Crédits</span></a> */}
            </div>
        </footer>
    )
}