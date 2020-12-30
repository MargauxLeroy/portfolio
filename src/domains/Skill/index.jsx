/////// IMPORTATION DES RESSOURCES
//// REACT
import React from "react";


/////// CSS
import style from "./style.less";


export default (props) => {
    const title = props.title;
    const icon = props.icon;
    const description = props.description;
    const line = props.line;

    return (
        <div className={style.root}>
            <div className={style.icon} >{icon}</div>
            <h4 className={style.title}>{title}</h4>
            <p className={style.description}>{description}</p>
            {line && <span className={style.line}></span>}
        </div>
    )
}