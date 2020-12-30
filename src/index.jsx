/////// IMPORTATION DES RESSOURCES
//// REACT
import React, { useState, useEffect,useMemo, Fragment } from "react";
import ReactDom from "react-dom";
import { motion, useSpring, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
// Router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    Redirect,
} from "react-router-dom";
//// CSS
import style from "./index.less";
//// ASSETS
// Composants
import Header from "./components/Header1";
import Footer from "./components/Footer";
import Mdp from "./components/Mdp";
import E404 from "./components/404";
// Pages
import Home from "./pages/Home";
import Project from "./pages/Project";
import Credits from "./domains/Credits"
// Icônes
import Polygon from "../assets/icones/polygon.svg";
import Arrow from "/../assets/icones/arrow.svg";

const domContainer = document.getElementById('app');


// La page  (au chargement)
function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
            document.body.scrollTo(0, 0);
    }, [location]);

    return (null);
}

/////// ANIMATIONS
//// Transitions entre pages
const variants = {
    enter:{ opacity: 0, y:"0.3%" },
    animate:{ opacity: 1, y:"0%" },
    exit:{ opacity: 0, y:"0.3%" },
}

const animate = (component,key) => {
    return <Fragment>
        <ScrollToTop></ScrollToTop>
        <motion.div
            key={key}     
            transition={{ease: "easeInOut", type: "spring", stiffness: 30, duration: 0.2 }} 
            variants={variants}
            initial="enter"
            animate="animate"
            exit="exit"
        > 
        {component}
    </motion.div>
    </Fragment>;
}


/////// ROUTES MAIN CONTENT
const MainContent = (props) => {
    const setPointer = props.setPointer;
    const location = useLocation();

    // Réinitialiser le curseur au chargement d'une nouvelle page
    useEffect(() => {
        setPointer({})
    }, [location] );

    return <AnimatePresence exitBeforeEnter>
        <Switch>
            <Route exact path="/">
                {(props) => animate(<Home setPointer={setPointer} {...props}/>, "home-" + location.pathname)}
            </Route>
            <Route exact path="/project/:projectId">
                {(props) => animate(<Project setPointer={setPointer} {...props}/>, "project-" + location.pathname)}
            </Route>
            <Route exact path="/mdp">
                {(props) => animate(<Mdp setPointer={setPointer} {...props}/>, "mdp-" + location.pathname)}
            </Route>
            <Route exact path="/credits">
                {(props) => animate(<Credits setPointer={setPointer} {...props}/>, "credits-" + location.pathname)}
            </Route>
            <Route exact>
                {(props) => animate(<E404 setPointer={setPointer} {...props}/>, "404-" + location.pathname)}
            </Route>
        </Switch>   
    </AnimatePresence>;
}

// Taille et style du pointer en fonction du contenu
const pointerVariants = {
    mainProject: {
        fontSize: "13em"
    },
    miniProject: {
        fontSize: "6.5em"
    },
    link: {
        fontSize: "2.2em",
        opacity: 0.5
    },
    disabled: {
        fontSize: "1em",
        opacity: 1,
    },
    default: {
        fontSize: "1em",
        opacity: 1
    },
}

// Déclaration de la transition 
const transitionMainProject = {
    ease: "easeInOut",
    type: "spring", 
    stiffness: 30, 
    duration: 0.8, 
    damping: 7, 
    mass: "0.5"
    }

const DEFAULT_COLOR = "#B1BEC0";

/////// ROUTES HEADER & FOOTER
const App = () => {
    // Gestion du Pointer
    const [isVisible, setIsVisible] = useState(false);
    const [pointer, setPointer] = useState({});
    const [pointerColor, setPointerColor] = useState(DEFAULT_COLOR);

    const rotation = useMotionValue(0);
    const springRotation = useSpring(rotation, { damping: 10, duration: 600 });
    const cssRotation = useTransform(springRotation, rotation => rotation + "deg");

    // Style du pointer en fonction du contenu
    const selectedPointerVariant = useMemo(() => {
        if (pointer.color) {
            setPointerColor(pointer.color)
        } else {
            setPointerColor(DEFAULT_COLOR)
        }

        if(pointer.kind === "MAIN PROJECT") {
            return "mainProject";
        }
        if(pointer.kind === "MINI PROJECT") {
            return "miniProject";
        }
        if(pointer.kind === "LINK") {
            return "link";
        }
        if(pointer.kind === "DISABLED") {
            return "disabled";
        }
        return "default";
    }, [pointer]);

    // Opacité de la flèche en fonction du contenu
    const arrowOpacity = useMemo(() => {
        if(selectedPointerVariant === "mainProject") {
            return (1);
        }
        if(selectedPointerVariant === "miniProject") {
            return (1);
        }
        if(selectedPointerVariant === "link") {
            return (0);
        }
        return (0)
    }, [selectedPointerVariant]);

    // Rotation de la pastille en fonction du contenu
    useEffect(() => {
        rotation.set(0);
        if(selectedPointerVariant === "mainProject") {
            rotation.set(-35);
        }
        if(selectedPointerVariant === "miniProject") {
            rotation.set(-35);
        }
        if(selectedPointerVariant === "link") {
            rotation.set(0);
        }
    }, [selectedPointerVariant]);

    // Gestion de la position de la souris
    const x = useSpring((1) * window.innerWidth / 2, {
        stiffness: 150,
        damping: 30,
    });
    const y = useSpring(0, {
        stiffness: 150,
        damping: 30,
    });
    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const {scrollTop} = document.body;
        x.set(event.clientX - (rect.left));
        y.set(event.clientY - (rect.top + scrollTop));
    }



    return (
        <div style={{height: "100%", width: "100%", overflow: "visible"}}            
        onMouseMove={handleMouse}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        >
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        // onClick={onClick}
                        variants={pointerVariants}
                        animate={selectedPointerVariant}
                        transition={transitionMainProject}
                        className={style.wrapperChip}
                        key="chip"
                        style={{
                            x: x,
                            y: y,
                        }}
                        >
                       <div className={style.chip}>
                            <motion.div style={{rotate: cssRotation}} >
                                <Polygon  className={style.polygon} style={{fill: pointerColor}}/>
                                <Arrow className={style.arrow} style={{opacity: arrowOpacity}}/>
                            </motion.div >
                       </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <Router>
                <Route path="/">
                    {(props) =>  <Header setPointer={setPointer} {...props}/>}
                </Route>
                <MainContent setPointer={setPointer}/>
                <Route path="/">
                    <Footer setPointer={setPointer}/>
                </Route>
            </Router>
        </div>
    )
}


ReactDom.render(<App/>, domContainer);