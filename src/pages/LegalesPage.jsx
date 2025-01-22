import { Link } from "react-router"
export default function LegalesPage() {
  return (
    <div className="legales">
      <div to="/" className="legales-title">
        <Link>Accueil /</Link>
        <p>Mentions légales</p>
      </div>
      <div>
        <h1>Mentions légales</h1>
        <p> <em> Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l’économie numérique, il est précisé aux utilisateurs du site HAPCHOT l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi. </em></p>
        <h2>Edition du site</h2>
        <p>Le présent site, accessible à l’URL https://hapchot.com (le « Site »), est édité par :</p>
        <p>OGEU GROUPE, société au capital de 9 593 836, euros, inscrite au R.C.S. de PAU sous le numéro Pau B 483867008, dont le siège social est situé au 5 AV DES FONTAINES, 64680 OGEU-LES-BAINS, représenté par M Jean-Herve CHASSAIGNE dûment habilité</p>
        <p>Le numéro individuel TVA de l’éditeur est : FR13483867008.</p>
        <h2>Directeur de publication</h2>
        <p>Le Directeur de la publication du site HAPCHOT est M Jean-Herve CHASSAIGNE.</p>
        <h2>Conception et maintenance</h2>
        <p>
          <Link to="https://newwwave.com/" >Agence web Newwave</Link>
          &nbsp;– Création de sites web sur-mesure
          <br />
          Adresse : 91 rue Lamouly, 64600 Anglet.</p>
        <h2>Hébergement</h2>
        <p>Serveur géré par l’Agence Newwwave chez l’hébergeur O2SWITCH<br />
          RCS Clermont-Ferrand B 510 909 807<br />
          Siège social : 222 Boulevard Gustave Flaubert<br />
          63000 Clermont-Ferrand – France</p>
        <h2>Accès au site</h2>
        <p>Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.</p>
        <p >En cas de modification, interruption ou suspension du Site, l’Editeur ne saurait être tenu responsable.</p>
      </div>
    </div>
  )
}