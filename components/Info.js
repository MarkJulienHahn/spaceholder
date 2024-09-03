import React from "react";

const Info = () => {
  return (
    <>
      <div className="infoWrapper">
        <div className="infoInner">
          <p>
            Steigende Preise, Flächenknappheit und der kaum regulierte
            Gewerbeflächenmarkt führen unaufhaltsam zur Verdrängung der weniger
            profitablen sozialen und kulturellen Angebote, ganz besonders aus
            den Innenstadtlagen.
          </p>
          <p>
            Der Verein “Spaceholder – Verein für gemeinwohlorientierte
            Raumentwicklung” setzt sich für den Erhalt und den Ausbau von
            Gewerberaum für soziale wie kulturelle Infrastruktur ein. Für die
            Mitglieder dreht es sich um die grundlegende Frage, ob und für wen
            Berlin weiter lebenswert bleibt und ob die Stadt auch zukünftig ein
            Angebot für die unterschiedlichsten Bedürfnisse bieten können wird.
            Dabei ist insbesondere Berlin historisch ganz erheblich von seinem
            diversen und (sub)kulturellen Angebot geprägt.
          </p>{" "}
          <p>
            Dieses gilt es konsequent zu erhalten, zu unterstützen und weiter
            auszubauen. Stadtentwicklungsgeschichtlich sind kulturelle Nutzungen
            in Berlin häufig Aneignungsprozesse von Freiräumen und Leerstand
            gewesen. Geprägt von einem starken Ethos der Improvisation rangieren
            sie innerhalb und außerhalb aller legalen Grauzonen, um mit den
            Umständen und begrenzten Spielräumen zurecht zu kommen. Diese Praxis
            der Flächenaneignung ist den heutigen wirtschaftlichen, rechtlichen
            und baulichen Herausforderungen der Stadt- und Immobilienentwicklung
            jedoch nicht gewachsen. Dies führt im Ergebnis zu der zu
            beobachtenden Verdrängung, Ausbeutung oder Wegbruch Berlins
            kultureller Vielfalt.
          </p>{" "}
          <p>
            Um dieser Entwicklung der heutigen Stadtentwicklung sach- und
            fachgerecht zu begegnen, haben wir die Kompetenz einer
            professionellen gemeinwohlorientierten Projektentwicklung und
            Projektsteuerung mit der Schaffenskraft und Kreativität der
            Akteur*innen und Aktiven aus der Kulturbranche und dem sozialen
            Sektor vereint, um gemeinsam nachhaltig und dauerhaft eine
            gemeinwohlorientierte, auf die Bedürfnisse der Nutzer*innen und
            Stadtbewohner*innen ausgerichtete Infrastruktur zu schaffen.
          </p>
          <p>
            Der Verein “Spaceholder – Verein für gemeinwohlorientierte
            Raumentwicklung” vereint Macher*innen und alle Menschen, die
            gemeinsam um den Erhalt der sozialen und kulturellen Vielfalt in der
            Stadt kämpfen!
          </p>
          <div className="infoBig">
            <p>
              Für mehr Informationen kontaktieren Sie uns unter —{" "}
              <a href="mailto:info@spaceholder.berlin">
                info@spaceholder.berlin
              </a>
              <br /> 
              ©{new Date().getFullYear()}, Spaceholder e.V., Vereinsregister-Nr. VR 40234 B
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
