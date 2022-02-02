# Game Hub 
Na ovom linku se nalazi GitHub Repozitorijum ovog projekta [GitHub Repo](https://github.com/Banega00/iteh_3_domaci)

## Opis Aplikacije
Projekat je deo trećeg domaćeg zadatka u okviru kursa Internet Tehnologije na Fakultetu Organizacionih Nauka u Beogradu.

Aplikacija pod nazivom **Game Hub** koristi javni **RAWG.io API** kako bi ljubiteljima video igrica pružila velik broj informacija o najpopularnijim igricama.<br/>
Korisnik ulaskom na aplikaciju dobija izlistane trenutno najpopularnije video igrice.
RAWG.io API trenutno poseduje informacije o preko 600 različitih igrica. <br/>
Zbog velikog broja igrica Game Hub pruža pregled igrica sa paginicijom. <br/>
Takođe o svakoj igrici je moguće dobiti dodatne informacije kao i slike iz gameplay-a same video igrice.

## Korišćene tehnologije
1. **ReactJS** - frontend je razvijen korišćenjem ReactJS - javascript biblioteke
2. **Typescript** - ReactJS je korišćen u kombinaciji sa Typescriptom kao supersetom javascript jezika kako bi se smanjio rizik od grešaka i povećala sigurnost tokom izrade aplikacije
3. **TailwindCSS** - Za stilizovanje aplikacije korišćena je TailwindCSS biblioteka(framework) za CSS, koji omogućava brzo i lako stilizovanje html elemenata dodavanjem određenih klasa
4. **RAWG.io API** - javni api koji pruža uvid u bazu podataka koja sadrži ogromnu količinu podataka o video igricama

## Izgled aplikacije
Na početnoj strani aplikacije prikazan je banner sa logo-om Game Hub-a, nakon kojeg su izlistane 20 najpopularnijih video igrica.

![home page screenshot](/doc/doc-screenshots/home.png)

Na dnu stranice nalaze se dugmići za paginaciju, odnosno izbor strane sa igricama. <br/>
Na početnoj stranici nalazi se prva strana igrica.

![pagination screenshot](/doc/doc-screenshots/pagination.png)

Kliknom na neku od igrica korisniku se otvara stranica sa detaljnim podacima o igrici

![game details page screenshot](/doc/doc-screenshots/game-details-page.png)

## Implementacija
Za učitavanje podataka korišćen je **fetch** api koji implementira web browser. <br/>
Linija koda koja šalje HTTP zahtev za podacima o igricama izgleda ovako: `const response = await fetch(url.toString());`

URL RAWG.io API-ja je: https://api.rawg.io/api/games.<br/>
Na ovaj URL potrebno je api key i stranicu(page) kao query parametre.

Sama React aplikacija sastavljena je od 3 komponente (ne računajući App componentu koja je na vrhu hijerarhije)
1. Home - komponenta koja se otvara kada se otvori početna strana aplikacije.
2. GameCard - komponenta koja predstavlja video igricu kao karticu na početnoj strani.
3. GameDetails - komponenta koja prikazuje detaljne podatke o igrici.

Rutiranje je obezbeđeno putem *react-router-dom* paketa.<br/>
Pristupom na *praznu rutu* **/** renderovaće se **Home** komponenta odnosno početna stranica.<br/>
Ruta /game/:id renderovaće **GameDetails** komponentu na kojoj je prikazana igrica sa određenim id-jem koji se prosleđuje kao parametar rute.

## Buduća unapređenja
Za buduća unapređena aplikacije planirano je učitavanje videa na kojima je snimljen gameplay aplikacije.