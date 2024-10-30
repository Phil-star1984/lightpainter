/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.css";
import LightpainterIcon from "./assets/logo_blue.svg";

function App() {
  const handleClick = () => {
    /* window.open(`mailto:info@phil-splash.de?subject=Unverbindliche Anfrage "Lightpainter"&body=Hallo Phil, ich möchte hiermit unverbindlich für ein Lightpainting für folgende Veranstaltung anfragen: (Eventtitel, Ort, Datum, Budget, etc.).`); */
    window.location.href = `mailto:info@phil-splash.de?subject=Unverbindliche Anfrage "Lightpainter"&body=Hallo Phil, 
    ich möchte hiermit unverbindlich für ein Lightpainting für folgende Veranstaltung anfragen: (Eventtitel, Ort, Datum, Budget, etc.).`;
  };

  return (
    <>
      <header>
        <div id="title">
          <h1>
            LIGHT
            <img class="lightpainter_logo" src={LightpainterIcon} alt="Lightpainter Logo Blitz"/>
            PAINTER
          </h1>
        </div>
        <nav>
          <ul>
            {/* <li>
              <a href="#aktion">Aktion</a>
            </li> */}
            <li>
              <a href="#mitmachen">Interaktive Lichtkunst</a>
            </li>
            <li>
              <a href="#portraits">Portraits</a>
            </li>
            <li>
              <a href="#vernissage">Events</a>
            </li>
            <li>
              <a href="#kuenstler">Der Künstler</a>
            </li>
            {/* <li>
              <a href="#impressionen">Impressionen</a>
            </li> */}
            <li>
              <a href="#impressum">Impressum</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="key-visual">
        <div id="keyvisual-container">
          <h1>
            LIGHT ART
            <br />
            PORTRAITS
          </h1>
          <h2>#Lightpainter</h2>
        </div>
      </section>
      <section id="aktion">
        <h2>
          Lightpainter - Einzigartige <mark>interaktive Lichtkunst</mark> im
          Großformat
        </h2>
        <p>
          Bringen Sie Ihr Event mit Lightpainter zum Strahlen! Wir verwandeln
          jede Oberfläche in eine lebendige Leinwand, indem wir atemberaubende
          Licht-Portraits und animierte Firmenlogos mit einem
          Hochleistungs-Beamer von bis zu 7000 ANSI Lumen projizieren.
        </p>
        <p>
          Perfekt für Firmenveranstaltungen, Corporate Events, Branding Events
          und magische Hochzeiten. Lassen Sie Ihre Marke großflächig erstrahlen
          – mit Kunstwerken, die von niemand Geringerem als dem Münchner
          "Millionen Maler" Phil Splash erstellt werden.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_04IGBaICb4?si=TzMXxBotSObPuD39"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>

      <section id="sketching-visual">
        <div id="sketching-container">{/* <h1>PHIL SKETCHING</h1> */}</div>
      </section>

      <section id="mitmachen">
        <h2>Individuelle Lichtkunst für jeden Anlass</h2>
        <p>
          Ob eine beeindruckende Firmenfeier, eine unvergessliche Hochzeit oder
          ein einzigartiges Branding-Event, Lightpainter macht Ihre
          Veranstaltung zum visuellen Highlight. Unsere Dienstleistungen
          umfassen die Projektion von hochauflösenden, personalisierten
          Portraits und die Animation von Firmenlogos auf Fassaden oder Gebäuden
          mit einer Breite von bis zu 12 Metern. Erleben Sie, wie Ihre Marke
          oder Ihr besonderer Moment in neuem Licht erstrahlt und die Blicke
          aller Anwesenden fesselt.
        </p>
        <p>
          Bereit, Ihre Veranstaltung in ein Kunstwerk zu verwandeln?
          Kontaktieren Sie uns noch heute, um mehr darüber zu erfahren, wie
          Lightpainter Ihr nächstes Event unvergesslich machen kann. Egal, ob
          Sie eine Unternehmensfeier planen oder den schönsten Tag Ihres Lebens
          feiern möchten – wir sind hier, um jedes Detail zum Leuchten zu
          bringen.
        </p>
        <button id="anfrage-button-negativ" onClick={handleClick}>
          Jetzt unverbindlich anfragen
        </button>
      </section>
      <div className="split-section">
        <section id="portraits">
          <h2>Einzigartige Schnellzeichnungen mit WOW-Faktor</h2>
          <p>
            Der "Millionen Maler" Phil Splash zeichnet mit wenigen Linien
            innerhalb von 2-3 Minuten individuelle Portraits der Gäste, die als
            Lichtprojektion an Wänden und Häuserfassaden lebendig werden.
          </p>
        </section>
        {/* <div id="portraits-example"></div> */}
      </div>
      <section id="portraitvorschau"></section>
      <section id="vernissage">
        <h2>Einzigartige Erlebnisse für Ihre Marke</h2>
        <p>
          Lightpainter bietet mehr als nur eine Dienstleistung; wir schaffen ein
          Erlebnis, das Ihre Gäste nie vergessen werden. Unsere Projekte sind
          maßgeschneidert, um jede Veranstaltung spektakulär zu machen. Von der
          ersten Skizze bis zur letzten Projektion arbeiten wir eng mit Ihnen
          zusammen, um sicherzustellen, dass Ihre Vision perfekt umgesetzt wird.
          Mit Lightpainter wählen Sie nicht nur einen Anbieter – Sie wählen
          einen Partner, der Innovation und Kreativität auf Ihr Event bringt.
        </p>
        <div id="timings">
          <h2 id="timings-wort">USPs für ihren Event</h2>
          <h2>Einzigartiges interaktives Licht-Erlebnis für Zuschauer</h2>
          <h2>Individuelle Portraits als Give-Aways für Kunden</h2>
          <h2>
            Einbinden von vielen Menschen in ein positives Licht-Spektakel
          </h2>
        </div>
      </section>
      <section id="kuenstler">
        <div id="kuenstler-left-container">
          <h2>Der Künstler</h2>
          <p>
            Phil Splash ist Gründer von Lightpainter und Portrait-Künstler. Seit
            er 2010 damit begonnen hat, Portraits von Menschen in der U-Bahn zu
            zeichnen, ist es sein Lebensziel, 1 Million Menschen zu
            portraitieren. 2015 hat er von der Presse den Titel „Der Millionen
            Maler“ erhalten. Er hat bereits über 300.000 Portraits gezeichnet
            und Aktionen für Weltmarken wie Calvin Klein, Lavazza, NFL,
            MacCosmetics und Siemens gestaltet. Über seine Aktionen und Projekte
            wurde landesweit berichtet (RTL, ZDF, Süddeutsche Zeitung, BILD).
          </p>
          <p>
            Link zur Künstler Website:{" "}
            <a href="http://www.phil-splash.de/" target="_blank">
              Phil-Splash.de
            </a>
          </p>

          <p>
            Link zur Marketing Angeboten des Künstlers:{" "}
            <a href="http://www.phil-splash.de/" target="_blank">
              Millionpainter.de
            </a>
          </p>
          <p>
            Link zum YouTube Channel des Künstlers:{" "}
            <a
              href="https://www.youtube.com/@Theartistphil/videos"
              target="_blank"
            >
              YouTube Millionpainter
            </a>
          </p>
          <p>
            Link zum Instagram Profil des Künstlers:{" "}
            <a
              href="https://www.instagram.com/the_million_painter/"
              target="_blank"
            >
              Instagram Millionpainter
            </a>
          </p>
          <p>
            Link zum Facebook Profil des Künstlers:{" "}
            <a href="https://www.facebook.com/philsplash/" target="_blank">
              Facebook Millionpainter
            </a>
          </p>
          <p>
            Link zum Kinderbuch das er mit seiner Frau entwickelt hat:{" "}
            <a href="http://sini-blauwal.de/" target="_blank">
              Kinderbuch "Sini und die Reise zum Blauwal"
            </a>
          </p>
        </div>
        <div id="kuenstler-right-container">
          <img
            src="/kuenstler_millionpainter.png"
            alt="Image artist Phil Splash | Millionpainter"
          />
        </div>
      </section>

      <section id="gallery">
        <h2>Impressionen</h2>
        <div className="grid-gallery">
          <img src="/lightpainter_website_gallery_01.jpg" alt="Bild 1" />
          <img src="/lightpainter_website_gallery_02.jpg" alt="Bild 2" />
          <img src="/lightpainter_website_gallery_03.jpg" alt="Bild 3" />
          <img src="/lightpainter_website_gallery_05.jpg" alt="Bild 4" />
          <img src="/lightpainter_website_gallery_07.jpg" alt="Bild 1" />
          <img src="/lightpainter_website_gallery_11.jpg" alt="Bild 2" />
        </div>
      </section>
      <section id="ausstellung-visual">
        <div id="ausstellung-container">{/* <h1>PHIL SKETCHING</h1> */}</div>
      </section>

      <section id="hinweis">
        <h2>Starten Sie Ihr Lichtspektakel mit Lightpainter</h2>
        <p>
          Bereit, Ihre Veranstaltung in ein Kunstwerk zu verwandeln?
          Kontaktieren Sie uns noch heute, um mehr darüber zu erfahren, wie
          Lightpainter Ihr nächstes Event unvergesslich machen kann. Egal, ob
          Sie eine Unternehmensfeier planen oder den schönsten Tag Ihres Lebens
          feiern möchten – wir sind hier, um jedes Detail zum Leuchten zu
          bringen.
        </p>
        <button id="anfrage-button" onClick={handleClick}>
          Jetzt unverbindlich anfragen
        </button>
      </section>
      <section id="impressum">
        <h1>Impressum</h1>
        <div className="impressum_inner_container">
          <h2>Angaben gemäß § 5 TMG</h2> Philipp Mulfinger Phil* – Art+Design
          Wiesenweg 13 97084 Würzburg Ust.-Idnr: DE 288086405
          <h2>Haftungsausschluss</h2>
          Haftung für Inhalte Die Inhalte unserer Seiten wurden mit größter
          Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
          der Inhalte können wir jedoch keine Gewähr übernehmen. Als
          Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
          bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung
          von Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
          <h2>Haftung für Links</h2>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
          <h2>Urheberrecht</h2>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen. Quellen: Disclaimer
          von eRecht24, dem Portal zum Internetrecht von Rechtsanwalt Sören
          Siebert
          <h2>Datenschutzerklärung</h2>
          Datenschutz: Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
          die Datenübertragung im Internet (z.B. bei der Kommunikation per
          E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
          Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von
          im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch
          Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung
          und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
          Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
          Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
          etwa durch Spam-Mails, vor.
          <h2>
            Datenschutzerklärung für die Nutzung von Facebook-Plugins
            (Like-Button)
          </h2>
          Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook, 1601
          South California Avenue, Palo Alto, CA 94304, USA integriert. Die
          Facebook-Plugins erkennen Sie an dem Facebook-Logo oder dem
          „Like-Button“ („Gefällt mir“) auf unserer Seite. Eine Übersicht über
          die Facebook-Plugins finden Sie hier:
          http://developers.facebook.com/docs/plugins/. Wenn Sie unsere Seiten
          besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem
          Browser und dem Facebook-Server hergestellt. Facebook erhält dadurch
          die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht
          haben. Wenn Sie den Facebook „Like-Button“ anklicken während Sie in
          Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte unserer
          Seiten auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den
          Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf
          hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der
          übermittelten Daten sowie deren Nutzung durch Facebook erhalten.
          Weitere Informationen hierzu finden Sie in der Datenschutzerklärung
          von facebook unter http://de-de.facebook.com/policy.php Wenn Sie nicht
          wünschen, dass Facebook den Besuch unserer Seiten Ihrem
          Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem
          Facebook-Benutzerkonto aus. Quellen: Datenschutzerklärung eRecht24,
          Facebook-Disclaimer von eRecht24
        </div>
      </section>
      <footer>
        <p>© 2024 Millionpainter | Alle Rechte vorbehalten.</p>
      </footer>
    </>
  );
}

export default App;
