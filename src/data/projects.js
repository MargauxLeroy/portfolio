/////// IMPORTATION DES RESSOURCES
    //// REACT
    import React, { useState } from "react";

    //// ASSETS
    // Images
    import BhangaraCover from "../../assets/projets/bhangara/bhangaraCover.jpg";
    import Bhangara1 from "../../assets/projets/bhangara/1.png";
    import Bhangara2 from "../../assets/projets/bhangara/2.png";
    import Bhangara3 from "../../assets/projets/bhangara/3.png";
    import BhangaraMobile1 from "../../assets/projets/bhangara/Mobile1.png";
    import BhangaraMobile2 from "../../assets/projets/bhangara/Mobile2.png";
    import BhangaraMobile3 from "../../assets/projets/bhangara/Mobile3.png";
    import BhangaraDesktop1 from "../../assets/projets/bhangara/Desktop1.png";
    import BhangaraImg1 from "../../assets/projets/bhangara/Img1.png";
    import BhangaraLogo from "../../assets/projets/bhangara/Logo.png";
    import BhangaraFinal from "../../assets/projets/bhangara/Final.png";

    import DflyCover from "../../assets/projets/dfly/dflyCover.png";
    import Dfly1 from "../../assets/projets/dfly/1.png";
    import Dfly2 from "../../assets/projets/dfly/2.png";
    import Dfly3 from "../../assets/projets/dfly/3.png";
    import DflyVideo from "../../assets/projets/dfly/video1.mp4";
    import DflyDesktop1 from "../../assets/projets/dfly/Desktop1.png";
    import DflyDesktop2 from "../../assets/projets/dfly/Desktop2.png";
    import DflyDesktop3 from "../../assets/projets/dfly/Desktop3.png";
    import DflyDesktop4 from "../../assets/projets/dfly/Desktop4.png";
    import DflyMobile1 from "../../assets/projets/dfly/Mobile1.png";
    import DflyImg1 from "../../assets/projets/dfly/Img1.png";
    import DflyImg2 from "../../assets/projets/dfly/Img2.png";
    import DflyLogo from "../../assets/projets/dfly/Logo.png";
    import DflyFinal from "../../assets/projets/dfly/Final.png";

    import MiniBigForestCover from "../../assets/projets/mbf/minibigforestCover.png";
    import MiniBigForest1 from "../../assets/projets/mbf/1.png";
    import MiniBigForest2 from "../../assets/projets/mbf/2.png";
    import MiniBigForest3 from "../../assets/projets/mbf/3.png";
    import MiniBigForestVideo1 from "../../assets/projets/mbf/video1.mp4";
    import MiniBigForestVideo2 from "../../assets/projets/mbf/video2.mp4";
    import MiniBigForestDesktop1 from "../../assets/projets/mbf/Desktop1.png";
    import MiniBigForestDesktop2 from "../../assets/projets/mbf/Desktop2.png";
    import MiniBigForestImg1 from "../../assets/projets/mbf/Img1.png";
    import MiniBigForestLogo from "../../assets/projets/mbf/Logo.png";
    import MiniBigForestFinal from "../../assets/projets/mbf/Final.png";

    import HumanairCover from "../../assets/projets/humanair/humanairCover.png";
    import Humanair1 from "../../assets/projets/humanair/1.png";
    import Humanair2 from "../../assets/projets/humanair/2.png";
    import Humanair3 from "../../assets/projets/humanair/3.png";
    import HumanairVideo1 from "../../assets/projets/humanair/video1.mp4";
    import HumanairDesktop1 from "../../assets/projets/humanair/Desktop1.png";
    import HumanairDesktop2 from "../../assets/projets/humanair/Desktop2.png";
    import HumanairMobile1 from "../../assets/projets/humanair/Mobile1.png";
    import HumanairLogo from "../../assets/projets/humanair/Logo.png";
    import HumanairFinal from "../../assets/projets/humanair/Final.png";

    import LightAndFreeCover from "../../assets/projets/lightandfree/lightandfreeCover.jpg";
    import LightAndFree1 from "../../assets/projets/lightandfree/1.jpg";
    import LightAndFreeVideo1 from "../../assets/projets/lightandfree/video1.mp4";
    import LightAndFreeDesktop0 from "../../assets/projets/lightandfree/Desktop0.png";
    import LightAndFreeDesktop2 from "../../assets/projets/lightandfree/Desktop2.jpg";
    import LightAndFreeDesktop3 from "../../assets/projets/lightandfree/Desktop3.jpg";
    import LightAndFreeMobile1 from "../../assets/projets/lightandfree/Mobile1.jpg";
    import LightAndFreeFinal from "../../assets/projets/lightandfree/Final.jpg";

    import MintCover from "../../assets/projets/mint/MintCover.png";
    import MintDesktop1 from "../../assets/projets/mint/Desktop1.png";
    import MintDesktop2 from "../../assets/projets/mint/Desktop2.png";
    import MintDesktop3 from "../../assets/projets/mint/Desktop3.png";
    import MintFinal from "../../assets/projets/mint/Final.jpg";





export default {

    /////// BHANGARA
    bhangara: {
        title: "Bhangara",
        imgCover: BhangaraCover,
        date: "2020",
        tags: ["site web", "ecommerce", "chanvre", "nepal"],
        color: "#BEEF39", 

        customContent : [
            {
                kind: "description",
                props: {
                    title: "La Démarche Bhangara",
                    text: <p>Bhangara est une marque de sacs à dos et d’accessoires réalisés à base de chanvre népalais, 
                    façonnés, assemblés et cousus au Népal. Les créateurs souhaitent valoriser les objets confectionnés 
                    à la main et le savoir-faire artisanal. En collaboration avec un petit atelier familial, Bhangara 
                    s’engage à respecter un environnement de travail sain avec des horaires décents et des salaires 
                    supérieurs au secteur.</p>, 
                    info: <a href="https://www.smartimpact.fr" target="_blank">@ Smart Impact</a>
                }
            },
            {
                kind: "threeImgs",
                props: {
                    img1: Bhangara1,
                    img2: Bhangara2,
                    img3: Bhangara3,
                }
            },
            // {
            //     kind: "description",
            //     props: {
            //         title: "La Démarche Bhangara",
            //         text: <p>Bhangara est une marque de sacs à dos et d’accessoires réalisés à base de chanvre népalais, 
            //         façonnés, assemblés et cousus au Népal. Les créateurs souhaitent valoriser les objets confectionnés 
            //         à la main et le savoir-faire artisanal. En collaboration avec un petit atelier familial, Bhangara 
            //         s’engage à respecter un environnement de travail sain avec des horaires décents et des salaires 
            //         supérieurs au secteur.</p>, 
            //         info: <a href="https://www.smartimpact.fr" target="_blank">@ Smart Impact</a>
            //     }
            // },
            {
                kind: "imgRegular",
                props: {
                    img: BhangaraMobile1
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: BhangaraLogo
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: BhangaraMobile2
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: BhangaraImg1
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: BhangaraMobile3
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: BhangaraDesktop1
                }
            },
            {
                kind: "siteLink",
                props: {
                    link: "https://www.bhangara-store.com/fr/",
                    title: "bhangara-store.com"
                }
            },
            {
                kind: "imgFull",
                props: {
                    img: BhangaraFinal
                }
            },
            
        ]

    },


    /////// DFLY PARIS
    dfly: {
        title: "Dfly Paris",
        imgCover: DflyCover,
        date: "2020",
        tags: ["site web", "ecommerce", "bijoux", "diamant de synthèse"],
        color: "#D9A4C5", 

        customContent : [
            {
                kind: "description",
                props: {
                    title: "La Maison Dfly",
                    text: <p>DFLY allie le fabuleux héritage de la joaillerie française avec les designs et les <span>matériaux 
                    durables</span> d’aujourd’hui. Créée par deux talents complémentaires issus de la gemmologie et du sport high tech, 
                    DFLY s’inscrit dans une joaillerie résolument tournée vers l’avenir. Des <span>créations contemporaines, 
                    confortables et épurées</span>, dont la particularité est l’utilisation de <span>matières plus respectueuses de 
                    l’homme et de la planète</span>. DFLY met ainsi en avant exclusivement le <span>diamant de synthèse ainsi que 
                    l’or recyclé</span>, et valorise pour toutes ses pièces <span>le savoir-faire des ateliers français</span>, garant d’un 
                    bijou raffiné et durable.</p>,
                    info: <a href="https://www.smartimpact.fr" target="_blank">@ Smart Impact</a>
                }
            },
            {
                kind: "threeImgs",
                props: {
                    img1: Dfly1,
                    img2: Dfly2,
                    img3: Dfly3,
                }
            },
            {
                kind: "description",
                props: {
                    title: "Un Design Contemporain",
                    text: <p>Loin des univers graphiques de ses concurrents, DFLY à la volonté de s’imposer avec 
                    un style singulier. Résolument moderne, la marque souhaite accompagner au mieux les styles 
                    d’aujourd’hui tout en proposant des bijoux alternatifs à travers le diamant de synthèse.
                    Afin de mettre en lumière les collections de bijoux, nous avons fait le choix d’un design épuré 
                    et minimaliste aux couleurs froides afin de laisser la place aux images.</p>,
                    info: " "
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: DflyDesktop1
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: DflyLogo
                }
            },
            {
                kind: "description",
                props: {
                    title: "L’Expertise Dfly",
                    text: <p>L’équipe DFLY dispose d’un showroom sur Paris qui leur permet d’accueillir 
                    les clients pour les aider à élaborer un modèle sur-mesure aux côtés d’experts. Il était 
                    essentiel de mettre en avant la prise de rdv proposant un autre type expérience et reflétant 
                    l’expertise DFLY. Il était également important d’informer sur la fabrication et les avantages 
                    du diamant de synthèse par rapport aux diamants classiques à travers des jolies pages éditos.</p>,
                    info: " "
                }
            },
            {
                kind: "videoRegular",
                props: {
                    video: DflyVideo
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: DflyDesktop2
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: DflyImg1
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: DflyDesktop3
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: DflyImg2
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: DflyMobile1
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: DflyDesktop4
                }
            },
            {
                kind: "siteLink",
                props: {
                    link: "https://www.dfly-paris.com/fr/",
                    title: "dfly-paris.com"
                }
            },
            {
                kind: "imgFull",
                props: {
                    img: DflyFinal
                }
            },
        ]
    },


    /////// MINI BIG FOREST
    minibigforest: {
        title: "MiniBigForest",
        imgCover: MiniBigForestCover,
        date: "2020",
        tags: ["site web", "ecommerce", "bijoux", "diamant de synthèse"],
        color: "#D9A4C5", 

        customContent : [
            {
                kind: "description",
                props: {
                    title: "Agissons ensemble.",
                    text: <p>Association Nantaise créée par Jim &amp; Stéphanie, MiniBigForest est née d’un double appel : 
                    celui de l’urgence qu’il y a à agir pour la planète, et celui du botaniste japonais <span>Akira Miyawaki</span> qui 
                    travaille depuis des années à <span>restaurer la végétation naturelle sur sols dégradés</span> grâce à la méthode qu’il 
                    a mise au point. Inspirés par sa méthode, ils conçoivent des <span>forêts urbaines à haut potentiel de biodiversité 
                    et de lien social</span>. Ils organisent des ateliers de plantation avec des équipes bénévoles sur différents sites 
                    (ville, école, terrain personnel, etc).</p>,
                    info: <a href="https://www.smartimpact.fr" target="_blank">@ Smart Impact</a>
                }
            },
            {
                kind: "threeImgs",
                props: {
                    img1: MiniBigForest1,
                    img2: MiniBigForest2,
                    img3: MiniBigForest3,
                }
            },
            {
                kind: "videoRegular",
                props: {
                    video: MiniBigForestVideo1
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: MiniBigForestDesktop1
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: MiniBigForestLogo
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: MiniBigForestImg1
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: MiniBigForestDesktop2
                }
            },
            {
                kind: "videoRegular",
                props: {
                    video: MiniBigForestVideo2
                }
            },
            {
                kind: "siteLink",
                props: {
                    link: "minibigforest.com/",
                    title: "minibigforest.com"
                }
            },
            {
                kind: "imgFull",
                props: {
                    img: MiniBigForestFinal
                }
            },
        ]
    },


    /////// HUMANAIR
    humanair: {
        title: "Humanair",
        imgCover: HumanairCover,
        date: "2020",
        tags: ["site web", "ecommerce", "sommeil", "troubles"],
        color: "#D9A4C5", 

        customContent : [
            {
                kind: "description",
                props: {
                    title: "L'Humain avant Tout",
                    text: <p>Association Nantaise créée par Jim &amp; Stéphanie, MiniBigForest est née d’un double appel : 
                    celui de l’urgence qu’il y a à agir pour la planète, et celui du botaniste japonais <span>Akira Miyawaki</span> qui 
                    travaille depuis des années à <span>restaurer la végétation naturelle sur sols dégradés</span> grâce à la méthode qu’il 
                    a mise au point. Inspirés par sa méthode, ils conçoivent des <span>forêts urbaines à haut potentiel de biodiversité 
                    et de lien social</span>. Ils organisent des ateliers de plantation avec des équipes bénévoles sur différents sites 
                    (ville, école, terrain personnel, etc).</p>,
                    info: <a href="https://www.smartimpact.fr" target="_blank">@ Smart Impact</a>
                }
            },
            {
                kind: "threeImgs",
                props: {
                    img1: Humanair1,
                    img2: Humanair2,
                    img3: Humanair3,
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: HumanairDesktop1
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: HumanairMobile1
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: HumanairLogo
                }
            },
            {
                kind: "videoRegular",
                props: {
                    video: HumanairVideo1
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: HumanairDesktop2
                }
            },
            {
                kind: "siteLink",
                props: {
                    link: "humanair.shop/",
                    title: "humanair.shop"
                }
            },
            {
                kind: "imgFull",
                props: {
                    img: HumanairFinal
                }
            },
        ]
    },


    /////// MINT
    mint: {
        title: "Mint",
        imgCover: MintCover,
        date: "2018",
        tags: ["application", "tablette", "radio", "musique"],
        color: "#D9A4C5", 

        customContent : [
            {
                kind: "description",
                props: {
                    title: "Lorem",
                    text: <p>Mint’ est une application radio pour tablette réalisée pour un cours de design graphique. 
                    L’objectif était d’explorer et d'affirmer son style graphique en créant une radio fictive.
                    J’ai décidé de créer une radio Nantaise qui parlerait des artistes et événements locaux mais 
                    qui réaliserait également des chroniques sur des films et des séries. Je souhaitais rendre accessible 
                    l’ensemble du contenu sur l’application tout en gardant une place principale pour la musique.</p>,
                    // info: <a href="digitaldosis.com/" target="_blank">@ Digital Dosis</a>
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: MintDesktop1
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: MintDesktop2
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: MintDesktop3
                }
            },
            {
                kind: "imgFull",
                props: {
                    img: MintFinal
                }
            },
        ]
    },


    /////// LIGHT AND FREE
    lightandfree: {
        title: "Light & Free",
        imgCover: LightAndFreeCover,
        date: "2018",
        tags: ["site web", "ecommerce", "sommeil", "troubles"],
        color: "#D9A4C5", 

        customContent : [
            {
                kind: "description",
                props: {
                    title: "Lorem",
                    text: <p>Association Nantaise créée par Jim &amp; Stéphanie, MiniBigForest est née d’un double appel : 
                    celui de l’urgence qu’il y a à agir pour la planète, et celui du botaniste japonais <span>Akira Miyawaki</span> qui 
                    travaille depuis des années à <span>restaurer la végétation naturelle sur sols dégradés</span> grâce à la méthode qu’il 
                    a mise au point. Inspirés par sa méthode, ils conçoivent des <span>forêts urbaines à haut potentiel de biodiversité 
                    et de lien social</span>. Ils organisent des ateliers de plantation avec des équipes bénévoles sur différents sites 
                    (ville, école, terrain personnel, etc).</p>,
                    info: <a href="digitaldosis.com/" target="_blank">@ Digital Dosis</a>
                }
            },
            {
                kind: "threeImgs",
                props: {
                    img1: LightAndFree1,
                    img2: LightAndFree1,
                    img3: LightAndFree1,
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: LightAndFreeDesktop0
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: LightAndFreeDesktop2
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: LightAndFreeMobile1
                }
            },
            {
                kind: "imgRegular",
                props: {
                    img: LightAndFreeDesktop3
                }
            },
            {
                kind: "videoRegular",
                props: {
                    video: LightAndFreeVideo1
                }
            },
            {
                kind: "siteLink",
                props: {
                    link: "http://lightandfree.es/",
                    title: "lightandfree.es"
                }
            },
            {
                kind: "imgFull",
                props: {
                    img: LightAndFreeFinal
                }
            },
        ]
    },
    



}