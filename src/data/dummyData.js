import Adrien from "../assets/team-photo/adrien.webp"
import Anais from "../assets/team-photo/anais.webp"
import Andoni from "../assets/team-photo/andoni.webp"
import Audrey from '../assets/team-photo/audrey.webp'
import Cecile from "../assets/team-photo/cecile.webp"
import Fabien from "../assets/team-photo/fabien.webp"
import Gaby from '../assets/team-photo/gaby.webp'
import Gilles from '../assets/team-photo/gilles.webp'
import Jacques from '../assets/team-photo/jacques.webp'
import Florian from '../assets/team-photo/florian.webp'
import stories1 from "../assets/stories/1-stories.webp"
import stories2 from "../assets/stories/2-stories.webp"
import stories3 from "../assets/stories/3-stories.webp"
import stories4 from "../assets/stories/4-stories.webp"
import stories5 from "../assets/stories/5-stories.webp"
import stories6 from "../assets/stories/6-stories.webp"
import step1 from "../assets/brasserie-photo/step-1.webp"
import step2 from "../assets/brasserie-photo/step-2.webp"
import step3 from "../assets/brasserie-photo/step-3.webp"
import step4 from "../assets/brasserie-photo/step-4webp.webp"
import brsPhoto1 from "../assets/brasserie-photo/1-brasserie-swipe.webp"
import brsPhoto2 from "../assets/brasserie-photo/2-brasserie-swipe.webp"
import brsPhoto3 from "../assets/brasserie-photo/3-brasserie-swipe.webp"
import brsPhoto4 from "../assets/brasserie-photo/4-brasserie-swipe.webp"
import brsPhoto5 from "../assets/brasserie-photo/5-brasserie-swipe.webp"
import brsPhoto6 from "../assets/brasserie-photo/6-brasserie-swipe.webp"
import brsPhoto7 from "../assets/brasserie-photo/7-brasserie-swipe.webp"
import brsPhoto8 from "../assets/brasserie-photo/8-brasserie-swipe.webp"
import brsPhoto9 from "../assets/brasserie-photo/9-brasserie-swipe.webp"
import brsPhoto10 from "../assets/brasserie-photo/10-brasserie-swipe.webp"
import brsPhoto11 from "../assets/brasserie-photo/11-brasserie-swipe.webp"
import brsPhoto12 from "../assets/brasserie-photo/12-brasserie-swipe.webp"
import brsPhoto13 from "../assets/brasserie-photo/13-brasserie-swipe.webp"
import brsPhoto14 from "../assets/brasserie-photo/14-brasserie-swipe.webp"
export const beers = [
  {
    title: " Neipa",
    img: [
      "/1-neipa-can.png",
      '/2-neipa-botle.png'

    ],
    bgColor: ' #f0cf76',
    variety: [
      'Canette 33cl',
      'Bouteille 33Cl',
      'Alc 5.5%'
    ],
    cover: '/cover-naipe.webp'

  },
  {
    title: 'Tropical SOUR',
    img: [
      "/1-tropical_sour-can.png",
      "/2-tropical_sour-botle.png"
    ]
    ,

    bgColor: " #e99268",
    variety: [
      "Canette 33Cl",
      'Bouteille 33Cl',
      "Alc 4.5%"
    ],
    cover: '/cover-tropical-sour.webp'

  },
  {
    title: "Blonde ALE",
    img: [
      "/1-blonde_ale-botle.png",
      '/2-blonde_ale.webp',
      "/3-blonde_ale-botle.webp",
    ]
    ,
    bgColor: " #c0aa86",
    variety: [
      "Bouteille 33 Cl",
      "Canette 33 Cl",
      "Bouteille 75 Cl",
      "Alc 5%"
    ],
    cover: '/cover-blonde-ale.webp'
  },
  {
    title: 'West Coast IPA',
    img: [
      "/1-west_coast-can.png",
    ]
    ,
    bgColor: " #6bb5a5",
    variety: [
      "Canette 33Cll",
      "Alc 6%"
    ],
    cover: "/cover-Tropical.html"
  },
  {
    title: 'Wheat Beer',
    img: [
      "/1-wheat-botle.png",
    ]
    ,
    bgColor: " #00b0e0",
    variety: [
      "Bouteille 33 Cl",
      "Alc 5%"
    ]
  },
  {
    title: 'Impérial Pale ALE',
    img: [
      "/1-imperial_pale_ipa.png",
      "/2-imperial_pale_ipa.png",
    ]
    ,
    bgColor: " #363431",
    variety: [
      "Bouteille 33 Cl",
      "Bouteille 75 Cl",
      "Alc 8%"
    ]
  },
 
 
]
export const team = [
  {
    name: "Adrien",
    img: Adrien
  },
  {
    name: 'Anais',
    img: Anais
  },
  {
    name: 'Andoni',
    img: Andoni
  },
  {
    name: "Audrey",
    img: Audrey
  },
  {
    name: "Cecile",
    img: Cecile
  },
  {
    name: "Fabien",
    img: Fabien
  },
  {
    name: "Gaby",
    img: Gaby
  },
  {
    name: "Gilles",
    img: Gilles
  },
  {
    name: "Jacques",
    img: Jacques
  },
  {
    name: "Florian",
    img: Florian
  }
]
export const stories = [
  {
    img: stories1
  },
  {
    img: stories2
  },
  {
    img: stories3
  },
  {
    img: stories4
  },
  {
    img: stories5
  },
  {
    img: stories6
  },
]
export const brasserieSwiper = [
  {
    img: step1,
    title: "Le  maltage",
    description: "Pour la préparation du malt, le grain d’orge est trempé dans l’eau pour le faire germer. Il est ensuite touraillé, c'est-à-dire soumis à une technique de séchage pour stopper la germination du grain. Finalement, dans certaines recettes, le malt peut être grillé pour faire ressortir de nouveaux arômes : c’est ce qu’on appelle la torréfaction. Cette étape est réalisée par notre fournisseur de malt.",
    bgColer: '#f0cf76'
  },
  {
    img: step2,
    title: "Le  brassage",
    description: 
      ["Les grains d'orge sont concassés jusqu’à l’obtention d’une mouture fine, comprenant le grain et l'écorce. Ensuite, le malt d'orge est introduit dans la première cuve de brassage, où il est mélangé avec de l'eau chaude. C’est l’étape de l'empâtage. ",

      "À la fin de l’infusion, le mélange d'eau et de malt est transféré dans une seconde cuve pour être filtré, pour séparer le jus sucré (le moût) des substances solides (les drêches). ",

      " Après la filtration, le moût est porté à ébullition. On y ajoute le houblon amérisant au début de ce processus puis le houblon aromatique vers la fin, préservant ainsi son profil aromatique. ",

      "Après le refroidissement, le moût est transféré dans la cuve de fermentation."],
    bgColer: "#ea9268"
  },
  {
    img: step3,
    title: "Le  fermentation",
    description: "C’est à ce moment-là que les levures sont ajoutées, ces organismes vivants réalisent la fermentation. Au cours de celle-ci, le sucre sera transformé en alcool et en dioxyde de carbone tout en apportant des goûts qui sont propres à la souche de levures sélectionnée. Cette phase dure environ une semaine.",
    bgColer: "#6bb5a5"
  },
  {
    img: step4,
    title: " Le  garde",
    description: "On passe la cuve à une température de 0°. La levure s’endort et tombe au fond de la cuve. On purge alors afin de récupérer cette dernière. Lors de cette étape, les goûts s’affinent et se développent. Une dernière étape de filtration des résidus est réalisée. La bière est ainsi clarifiée. Certaines bières ne sont pas filtrées afin de conserver leurs aspects troubles, notamment la blanche, et les différents types d’IPA. Enfin, c’est la mise en bouteille ou en canettes de notre production de bières.",
    bgColer: "#c2ac89"
  },
]
export const brasseriesPhoto = [
  {
    img: brsPhoto1
  },
  {
    img: brsPhoto2
  },
  {
    img: brsPhoto3
  },
  {
    img: brsPhoto4
  },
  {
    img: brsPhoto5
  },
  {
    img: brsPhoto6
  },
  {
    img: brsPhoto7
  },
  {
    img: brsPhoto8
  },
  {
    img: brsPhoto9
  },
  {
    img: brsPhoto10
  },
  {
    img: brsPhoto11
  },
  {
    img: brsPhoto12
  },
  {
    img: brsPhoto13
  },
  {
    img: brsPhoto14
  },
]
