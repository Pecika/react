import React from 'react';

const Pocetna = () => {
  
  return (
    <div>
      <div style={{ backgroundColor: '#F0F0F0', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
        <h2 style={{ color: '#000', fontSize: '3em' }}>Dobrodošli na našu platformu za kreiranje To-Do liste!</h2>
      </div>
      <div style={{ backgroundColor: '#C3F9DC', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', width: '100%' }}>
        <p style={{ color: '#000', textAlign: 'center', maxWidth: '800px', fontSize: '1.5em' }}>
          Naša platforma vam omogućava jednostavno i efikasno upravljanje vašim zadacima. Bez obzira da li organizujete svoje lične zadatke, poslovne obaveze ili učeničke zadatke, ova To-Do lista će vam pomoći da ostanete fokusirani i produktivni.
          <br />
          <br />
          Kreiranje To-Do liste nikada nije bilo lakše. Na stranici "Kreiraj zadatak", unesite naziv zadatka, opis zadatka i rok za obavljanje, a zatim jednostavno kliknite na "Dodaj na To-Do listu". Vaš zadatak će biti automatski dodat na listu, spremna za praćenje.
          <br />
          <br />
          Na stranici "To-Do lista", možete pregledno videti sve vaše zadatke u obliku kartica, sa nazivom, opisom i rokom za obavljanje, a možete ih označiti i kao završene.
          <br />
          <br />
          Spremni ste da organizujete svoj život i postignete sve svoje ciljeve? Počnite sa kreiranjem svoje To-Do liste odmah!
        </p>
      </div>
    </div>
  );
};

export default Pocetna;

