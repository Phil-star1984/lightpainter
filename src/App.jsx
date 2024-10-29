/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.css";

function App() {
  const handleClick = () => {
    window.open(`mailto:info@phil-splash.de?subject=Portraitzeichnung "Portraits gegen Rechts"&body=Hallo Phil Splash, 

    ich möchte bei der Aktion "Portraits gegen Rechts" mitmachen und ein Portrait erstellen lassen von: (hier bitte Vor- und Nachnamen einfügen und 1 od. 2 Bilder der Person mitschicken).`);
  };

  return (
    <>
      <header>
        <div id="title">
          <h1>LIGHTPAINTER</h1>
        </div>
        <nav>
          <ul>
            {/* <li>
              <a href="#aktion">Aktion</a>
            </li> */}
            <li>
              <a href="#mitmachen">Mitmachen</a>
            </li>
            <li>
              <a href="#portraits">Portraits</a>
            </li>
            <li>
              <a href="#vernissage">Vernissage</a>
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
        <h2>Lightpainter - A unique interactive Light Art performance</h2>
        <p>
          Transform your corporate events with Lightpainter’s unique live
          portrait projections. Captivate guests as we turn any venue into a
          vibrant art gallery, projecting custom, real-time portraits onto walls
          and buildings.
        </p>
        <p>
          Our service offers a memorable, interactive art experience that
          enhances branding, engages audiences, and creates lasting impressions
          at corporate functions, product launches, and company celebrations.
          Ideal for businesses looking to make a bold, creative statement.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=_04IGBaICb4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>

      <section id="sketching-visual">
        <div id="sketching-container">{/* <h1>PHIL SKETCHING</h1> */}</div>
      </section>

      <section id="mitmachen">
        <h2>Wie kann ich mitmachen?</h2>
        <p>
          Du kannst innerhalb von wenigen Sekunden teilnehmen. Schicke ein Foto
          von der Person, die gezeichnet werden soll, sowie den Vor- und
          Nachnamen an info@phil-splash.de oder klicke unten auf den Button.
        </p>
        <p>
          Daraufhin zeichnet der Künstler das Portrait, und es wird am Tag der
          Vernissage im Rathaus Würzburg ausgestellt. Die Teilnahme bei der
          Aktion ist kostenlos; wer möchte, kann das Portrait auch direkt nach
          der Ausstellung kaufen. Starte jetzt! Lass von dir oder einer
          geliebten Person ein Portrait anfertigen und setze ein Symbol für die
          Vielfalt und gegen Rechts.
        </p>
        <button onClick={handleClick}>Portraitvorlage hier senden</button>
      </section>
      <div className="split-section">
        <section id="portraits">
          <h2>Einzigartige Portraits mit Inhalt</h2>
          <p>
            Das Einzigartige an den Portraits ist, dass sie auf Paragraph 1 des
            Deutschen Grundgesetzes als Hintergrund gezeichnet werden und somit
            zu einem individuellen Symbol für Toleranz und Vielfalt werden. Das
            Format beträgt A3 (297 x 420 mm), wodurch die Portraits problemlos
            aufgehängt werden können.
          </p>
        </section>
        {/* <div id="portraits-example"></div> */}
      </div>
      <section id="portraitvorschau"></section>
      <section id="vernissage">
        <h2>Die Vernissage der Portraits</h2>
        <p>
          Die Portraits werden gesammelt im Foyer des Rathauses Würzburg
          gezeigt. Die Vernissage ist am Donnerstag, den 04.04.2024. Die
          Ausstellung ist ab dem 04.04.24 bis zum 29.04.24 zu den regulären
          Öffnungszeiten des Rathauses zu besuchen.
        </p>
        <div id="timings">
          <h2 id="timings-wort">Timings</h2>
          <h2>Zeichenaktion (online) | 01.03. - 31.04.2024</h2>
          <h2>Vernissage Foyer Rathaus Würzburg | 04.04.2024 </h2>
          <h2>Permanente Ausstellung | 04.04. - 29.04.2024</h2>
        </div>
      </section>
      <section id="kuenstler">
        <div id="kuenstler-left-container">
          <h2>Der Künstler</h2>
          <p>
            Phil Splash ist Künstler, Web Developer und Senior Art Director.
            2015 hat er von der Presse den Titel „Der Millionen Maler“ erhalten.
            Seit er 2010 damit begonnen hat, Portraits von Menschen in der
            U-Bahn zu zeichnen, ist es sein Lebensziel, 1 Million Menschen zu
            portraitieren. Er hat bereits über 300.000 Portraits gezeichnet und
            Aktionen für Weltmarken wie Calvin Klein, Lavazza, MacCosmetics und
            Siemens gestaltet. Über seine Aktionen wurde landesweit berichtet
            (RTL, ZDF, Süddeutsche Zeitung, BILD).
          </p>
          <p>
            Link zur Künstler Website:{" "}
            <a href="http://www.phil-splash.de/" target="_blank">
              Phil-Splash.de
            </a>
          </p>
          <p>
            Link zum Main Post Artikel:{" "}
            <a
              href="https://www.mainpost.de/regional/wuerzburg/wuerzburger-kuenstler-zeichnet-portraets-gegen-hass-der-rechtsruck-in-der-gesellschaft-geht-mir-ziemlich-auf-den-keks-art-11420066"
              target="_blank"
            >
              Main-Post
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

      <section id="impressionen">
        <div className="impressionen-text">
          <h1>Impressionen</h1>
        </div>
        <section id="impressionen-gallery" className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img
              src="https://res.cloudinary.com/hzwebux5t/image/upload/v1573164242/uvncyxayeu1fyek7btfy.jpg"
              className="gallery__img"
              alt="Image 1"
            />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src="https://www.wuerzburgerleben.de/wp-content/uploads/sites/10/2020/01/Phil-Splash_Zeichnung_Bar.jpg"
              className="gallery__img"
              alt="Image 2"
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img
              src="https://res.cloudinary.com/hzwebux5t/image/upload/c_fill,dpr_2.0,f_auto,g_auto,h_360,w_500/v1635189404/fgejp6iayeqfhlsi7mu0.jpg"
              className="gallery__img"
              alt="Image 3"
            />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img
              src="https://www.wuerzburgerleben.de/wp-content/uploads/sites/10/2020/01/Collage_Phil-Splash.jpg"
              className="gallery__img"
              alt="Image 4"
            />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img
              src="https://www.wuerzburgerleben.de/wp-content/uploads/sites/10/2020/01/TheMillionPainter_Stachuspassagen_Muenchen.jpg"
              className="gallery__img"
              alt="Image 5"
            />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img
              src="https://www.wuerzburgerleben.de/wp-content/uploads/sites/10/2020/01/Phil-Splash_Malen_U-Bahn_Muenchen.jpg"
              className="gallery__img"
              alt="Image 6"
            />
          </figure>
        </section>
        <section id="ausstellung-visual">
          <div id="ausstellung-container">{/* <h1>PHIL SKETCHING</h1> */}</div>
        </section>
      </section>
      <section id="hinweis">
        <h2>Hinweis</h2>
        <p>
          Der Künstler behält sich das Recht vor ungeeignete Bilder und Bilder
          die gegen den Sinn der Aktion verstoßen von der Portraitaktion
          auszuschließen bzw. ohne Angabe von Gründen auszusortieren und die
          Anzahl der Portraits auf ein geeignetes Maß für die Vernissage zu
          reduzieren. Für unerlaubte oder unrechtmäßige Einsendungen von
          Bildmaterial erfolgt keine Haftung von Seiten des Künstlers.
        </p>
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
        <p>
          © 2024 Millionpainter | Portraits gegen Rechts. Alle Rechte
          vorbehalten.
        </p>
      </footer>
    </>
  );
}

export default App;
