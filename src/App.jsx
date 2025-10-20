import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "./App.css";

export default function App() {

  const [expanded, setExpanded] = useState({
    skroty: false,
    typy: false,
    bonusy: false,
    sportbuzz: false,
  });

  const topMenu = [
    { name: "Newsy" },
    { name: "Wyniki na żywo" },
    { name: "Sportbuzz" },
    { name: "Skróty" },
    { name: "Typy" },
    { name: "Bukmacherzy"},
  ];

  const cards = [
    {
      key: "skroty",
      title: "SKRÓTY",
      items: [
        "Legia Warszawa - Samsunspor 0:1",
        "Raków Częstochowa - Universitatea Craiova 2:0",
        "Jagiellonia Białystok - Hamrun Spartans 1:0",
        "Lech Poznań - SK Rapid Wiedeń 4:1",
        "Gol Karola Świderskiego w Lidze Europy",
        "Oprawa kibiców Jagiellonii",
      ],
    },
    {
      key: "typy",
      title: "TYPY",
      items: [
        "Lechia Gdańsk - Wisła Płock",
        "Pogoń Szczecin - Piast Gliwice",
        "Hoffenheim - FC Köln",
        "Hellas Verona - US Sassuolo Calcio",
        "Manchester City - Arsenal",
      ],
    },
    {
      key: "bonusy",
      title: "BONUSY",
      items: [
        "Superbet kod promocyjny",
        "Betclic kod promocyjny",
        "STS kod promocyjny",
        "Fortuna kod promocyjny",
        "Oferta powitalna 100%",
      ],
    },
    {
      key: "sportbuzz",
      title: "SPORTBUZZ",
      items: [
        "Kibice Crystal Palace na meczu...",
        "Jędrzejczyk chciał ściągnąć z boiska...",
        "Gol Karola Świderskiego w Lidze Europy",
        "Oprawa kibiców Jagiellonii",
        "Kontrowersje sędziowskie",
      ],
    },
  ];

  const liveTiles = [
    { id: 1, title: "GDA - WISP", time: "Dziś 18:00" },
    { id: 2, title: "STAL - CHR", time: "Dziś 18:00" },
    { id: 3, title: "KAL - SAN", time: "Dziś 18:00" },
    { id: 4, title: "POG - PIA", time: "Dziś 18:00" },
    { id: 5, title: "HOF - KOL", time: "Dziś 18:00" },
    { id: 6, title: "POL - RZES", time: "Dziś 18:00" },
    { id: 7, title: "PAR - LOR", time: "Dziś 18:00" },
    { id: 8, title: "BOU - FUL", time: "Dziś 18:00" },
    { id: 9, title: "OSA - GET", time: "Dziś 18:00" },
    { id: 10, title: "LEE - TOT", time: "Dziś 18:00" },
    { id: 11, title: "POD - ŁKS2", time: "Jutro 13:30" },
    { id: 12, title: "REAL - LEV", time: "Jutro 13:30" },
  ];

  const smallNews = [
    { id: 1, title: "Krótki news 1", img: "https://picsum.photos/seed/right0/120/80", date: "23:30" },
    { id: 2, title: "Krótki news 2", img: "https://picsum.photos/seed/right1/120/80", date: "22:31" },
    { id: 3, title: "Krótki news 3", img: "https://picsum.photos/seed/right2/120/80", date: "21:32" },
    { id: 4, title: "Krótki news 4", img: "https://picsum.photos/seed/right3/120/80", date: "20:33" },
    { id: 5, title: "Krótki news 5", img: "https://picsum.photos/seed/right4/120/80", date: "19:34" },
    { id: 6, title: "Krótki news 6", img: "https://picsum.photos/seed/right5/120/80", date: "18:35" },
    { id: 7, title: "Krótki news 7", img: "https://picsum.photos/seed/right6/120/80", date: "17:36" },
    { id: 8, title: "Krótki news 8", img: "https://picsum.photos/seed/right7/120/80", date: "16:37" },
  ];


  const competitions = [
  { name: "Eliminacje MŚ - Europa", img: "https://pliki.meczyki.pl/live-score/soccer/competition/224/original.png" },
  { name: "Liga Mistrzów", img: "https://pliki.meczyki.pl/live-score/soccer/competition/10/original-dark.png" },
  { name: "Liga Europy", img: "https://pliki.meczyki.pl/live-score/soccer/competition/18/original-dark.png" },
  { name: "Liga Konferencji", img: "https://pliki.meczyki.pl/live-score/soccer/competition/1676/original-dark.png" },
  { name: "Ekstraklasa", img: "https://pliki.meczyki.pl/live-score/soccer/competition/119/original.png" },
  { name: "Premier League", img: "https://pliki.meczyki.pl/live-score/soccer/competition/8/original-dark.png" },
  { name: "La Liga", img: "https://pliki.meczyki.pl/live-score/soccer/competition/7/original.png" },
  { name: "Bundesliga", img: "https://pliki.meczyki.pl/live-score/soccer/competition/9/original.png" },
  { name: "Serie A", img: "https://pliki.meczyki.pl/live-score/soccer/competition/13/original.png" },
  { name: "Ligue 1", img: "https://pliki.meczyki.pl/live-score/soccer/competition/16/original-dark.png" }
];

  const countries = [
    { name: "Anglia", img: "https://pliki.meczyki.pl/live-score/soccer/country/68/original.png" },
    { name: "Arabia Saudyjska", img: "https://pliki.meczyki.pl/live-score/soccer/country/164/original.png" },
    { name: "Belgia", img: "https://pliki.meczyki.pl/live-score/soccer/country/27/original.png" },
    { name: "Chorwacja", img: "https://pliki.meczyki.pl/live-score/soccer/country/56/original.png" },
    { name: "Cypr", img: "https://pliki.meczyki.pl/live-score/soccer/country/58/original.png" },
    { name: "Czechy", img: "https://pliki.meczyki.pl/live-score/soccer/country/59/original.png" },
    { name: "Dania", img: "https://pliki.meczyki.pl/live-score/soccer/country/61/original.png" },
    { name: "Francja", img: "https://pliki.meczyki.pl/live-score/soccer/country/76/original.png" },
    { name: "Grecja", img: "https://pliki.meczyki.pl/live-score/soccer/country/82/original.png" },
    { name: "Hiszpania", img: "https://pliki.meczyki.pl/live-score/soccer/country/176/original.png" },
    { name: "Holandia", img: "https://pliki.meczyki.pl/live-score/soccer/country/138/original.png" },
    { name: "Niemcy", img: "https://pliki.meczyki.pl/live-score/soccer/country/80/original.png" },
    { name: "Polska", img: "https://pliki.meczyki.pl/live-score/soccer/country/155/original.png" }
  ];

  return (
    <div className="bg-dark text-light min-vh-100">
      <header className="navbar-working">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <div className="logo d-flex align-items-center" style={{ cursor: "pointer" }}>
              <img
                src="https://pliki.meczyki.pl/_nuxt/meczyki-logotyp-fullcolor-reversed.svg"
                className="img-logo"
                width="120"
                height="40"
              />
            </div>
            <div className="theme-toggle ms-2">
              <div className="toggle-icon">
                <i className="bi bi-sun-fill"></i>
                <i className="bi bi-moon-fill"></i>
              </div>
            </div>
          </div>
          <nav>
            <ul className="navbar-working-menu">
              {topMenu.map((item, id) => (
                <li key={id}>
                  {item.name}
                  {item.name == "Bukmacherzy" && <i className="bi bi-caret-down-fill ms-1"></i>}
                </li>
              ))}
            </ul>
          </nav>
          <button className="btn-login">Zaloguj się</button>
        </div>
      </header>

      <main className="container py-4">
        <div className="row g-3 mb-4">
          {cards.map((card) => (
            <div className="col-12 col-md-6 col-lg-3" key={card.key}>
              <div className="widget-card">
                <div className="widget-card-header d-flex justify-content-between align-items-center mb-2">
                  <h6 className="widget-card-title">
                    <i className={`bi ${
                      card.key === "skroty" ? "bi-trophy-fill" :
                      card.key === "typy" ? "bi-clipboard-data-fill" :
                      card.key === "bonusy" ? "bi-percent" :
                      "bi-people-fill"
                    }`}></i>
                    {card.title}
                  </h6>
                  {card.key === "sportbuzz" && (
                    <span className="widget-add small fw-bold">Dodaj +</span>
                  )}
                </div>

                <ul className="list-unstyled mb-2">
                  {(expanded[card.key] ? card.items : card.items.slice(0, 4)).map((item, id) => (
                    <li key={id} className="widget-row">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="widget-card-footer d-flex justify-content-between">
                  <button
                    className="btn btn-link p-0 widget-expand text-success small"
                    onClick={() =>
                      setExpanded((state) => ({
                        ...state,
                        [card.key]: !state[card.key],
                      }))
                    }
                  >
                    {expanded[card.key] ? "Zwiń ▲" : "Rozwiń ▼"}
                  </button>
                  <button className="btn btn-outline-success btn-sm widget-more">Więcej</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <section className="mb-4">
          <h6 className="mb-2">WYNIKI NA ŻYWO</h6>
          <div className="d-flex flex-row flex-wrap gap-2">
            {liveTiles.map((live) => (
              <div key={live.id} className="live-tile p-2 text-center">
                <div className="small right-news-stats">{live.time}</div>
                <div className="fw-bold mt-1">{live.title}</div>
              </div>
            ))}
          </div>
        </section>
        <div className="row">
          <aside className="col-lg-2 col-md-3 d-none d-md-block px-0">
            <div className="sidebar-card">
              <h5>Popularne</h5>
              <ul className="sidebar-list">
                {competitions.map((competition) => (
                  <li key={competition.name}>
                    <img className="sidebar-icon" src={competition.img} />
                    <span>{competition.name}</span>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="icon icon right arrow-icon"
                        width="14"
                        height="14"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                        ></path>
                      </svg>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sidebar-card">
              <h5>Ważne</h5>
              <ul className="sidebar-list">
                {countries.map((country) => (
                  <li key={country.name}>
                    <img className="sidebar-icon" src={country.img} />
                    <span>{country.name}</span>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="icon icon right arrow-icon"
                        width="14"
                        height="14"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                        ></path>
                      </svg>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <section className="col-12 col-lg-6 mb-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <h5 className="mb-0 d-flex align-items-center">
                <span className="me-2 dot"></span>
                NEWSY
              </h5>
              <div className="custom-tab-group">
                <button className="custom-tab active">Ważne</button>
                <button className="custom-tab popularne">Popularne</button>
                <button className="custom-tab">Dziś</button>
                <button className="custom-tab">Wczoraj</button>
                <button className="custom-tab">Przedwczoraj</button>
              </div>
            </div>
            <div className="card bg-dark text-white mb-3 position-relative border-0 overflow-hidden" style={{ height: "300px" }}>
              <img src="https://pliki.meczyki.pl/big700/597/68f54d3f5ccc4.jpg" className="w-100 h-100 object-fit-cover" alt="main-news" />
              <div className="position-absolute top-0 start-0 w-100 h-100"></div>
              <div className="position-absolute bottom-0 p-3 w-100">
                <div className="d-flex justify-content-between small text-light mb-2 text-white">
                  <span><i className="bi bi-chat-left-text me-1"></i> 64</span>
                </div>
                <h4 className="m-0">Triumf Realu przed El Clasico! Rywal wyleciał z czerwoną kartką po minucie</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="card bg-dark text-white mb-3 position-relative border-0 overflow-hidden" style={{ height: "150px" }}>
                  <img src="https://pliki.meczyki.pl/big/597/68f54ac79ab67.JPG" className="w-100 h-100 object-fit-cover" alt="ferran" />
                  <div className="position-absolute top-0 start-0 w-100 h-100"></div>
                  <div className="position-absolute bottom-0 p-2 w-100">
                    <div className="d-flex justify-content-between small text-light mb-1 text-white">
                      <span><i className="bi bi-chat-left-text me-1"></i> 4</span>
                    </div>
                    <div className="small">Jest decyzja ws. Ferrana Torresa. Barcelona nie ma wątpliwości</div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card bg-dark text-white mb-3 position-relative border-0 overflow-hidden" style={{ height: "150px" }}>
                  <img src="https://pliki.meczyki.pl/big/597/68f54c5717f48.jpg" className="w-100 h-100 object-fit-cover" alt="leao" />
                  <div className="position-absolute top-0 start-0 w-100 h-100"></div>
                  <div className="position-absolute bottom-0 p-2 w-100">
                    <div className="d-flex justify-content-between small text-light mb-1 text-white">
                      <span><i className="bi bi-chat-left-text me-1"></i> 5</span>
                    </div>
                    <div className="small">Milan na szczycie Serie A! Leao bohaterem San Siro</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <aside className="col-12 col-lg-3 mb-4">
            <div className="sidebar-title text-center mb-3">
              <span className="dot me-2"></span>
              <span>ZOBACZ TAKŻE</span>
            </div>
            <div className="list-group mt-2">
              {smallNews.map((news) => (
                <div key={news.id} className="right-news-item d-flex gap-2 p-2 align-items-start">
                  <img src={news.img} alt={news.title} className="right-news-thumb" />
                  <div className="flex-grow-1">
                    <div className="right-news-title">{news.title}</div>
                    <div className="d-flex justify-content-between text-muted small mt-1 right-news-stats">
                      <span>{news.date}</span>
                      <span><i className="bi bi-chat-left-text"></i> {Math.floor(Math.random() * 25)}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center right-news-text mt-2 ps-2" style={{ cursor: 'pointer' }}>
                Zobacz więcej
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}