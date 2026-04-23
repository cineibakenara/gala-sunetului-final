const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const eventData = {
  hero: {
    title: "Gala Sunetului",
    subtitle: "De la scena filarmonicii la microfonul școlii",
    date: "1 MAI | 18:00 PM",
    location: "Redal Events, Sibiu",
    dressCode: "Formal & Masquerade"
  },
  attractions: [
    {
      id: 1,
      title: "Orchestra Filarmonică Sibiu",
      description: "Moment elegant inspirat din atmosfera filarmonicii clasice."
    },
    {
      id: 2,
      title: "Teatru & Dans Contemporan",
      description: "Interpretare de teatru susținută de elevi CNOG, urmată de coregrafie modernă și DJ."
    },
    {
      id: 3,
      title: "Invitat Special: Cristiana Damian",
      description: "Câștigătoarea Marelui Trofeu la Festivalul Mamaia 2025."
    }
  ],
  localArtists: [
    {
      id: 1,
      title: "Ioana Tocoaie",
      description: "Expoziție de artă vizuală contemporană."
    },
    {
      id: 2,
      title: "Edi Săvulescu",
      description: "Lansarea romanului „Fragmentarea sentimentului imposibil”."
    },
    {
      id: 3,
      title: "ELIZE",
      description: "Bijuterii și decorațiuni handmade în stil fantasy."
    }
  ],
  ticket: {
    price: 190,
    wave: "Admitere Generală (Wave 1)",
    partners: ["BUONAVISTA", "BENJAMIN STEAKHOUSE", "SORY", "ALTEX"]
  },
  about: {
    description: "Noi suntem echipa Cashpuff Girls, formată din eleve ale clasei a X-a de la Colegiul Național „Octavian Goga” din Sibiu, profil filologie – intensiv engleză. Participarea la proiectul de educație financiară desfășurat în școala noastră ne-a inspirat să privim dincolo de teorie și să ne implicăm activ într-o inițiativă care poate aduce o schimbare reală în comunitatea școlară. Astfel, am decis să ne înscriem în acest concurs cu dorința de a transforma ideile și cunoștințele dobândite într-un proiect concret.",
    team: [
      { role: "CEO", name: "Simionescu Antonia", text: "În calitate de CEO, m-am ocupat de coordonarea generală a activităților, stabilirea direcției strategice și supravegherea organizării evenimentelor." },
      { role: "CFO", name: "Lauer Ariana", text: "În calitate de CFO, m-am ocupat de gestionarea profitului, stabilirea prețurilor biletelor și coordonarea financiară a evenimentelor, inclusiv contractarea trupelor." },
      { role: "CCO", name: "Miron Alexia", text: "Am ales rolul de CCO, deoarece mă pasionează creativitatea și dezvoltarea de conținut. Îmi place să transform ideile în concepte vizuale și să contribui la identitatea unui proiect prin originalitate și viziune." },
      { role: "CMO", name: "Pamfiloiu Sara", text: "Ca CMO, am dezvoltat strategii care au crescut vizibilitatea și au generat lead-uri. Am optimizat campaniile pe baza datelor, obținând creștere sustenabilă." },
      { role: "CTO", name: "Muntiu Maria", text: "Am fost CTO, responsabil de partea tehnică a proiectului, respectiv crearea site-ului de eveniment. Am stabilit echipamentele necesare și utilizarea lor eficientă, coordonând planificarea și soluțiile digitale pentru funcționarea Goga Radio." }
    ],
    sponsors: [
      { name: "BUONAVISTA catering banqueting", logo: "/sponsors/buonavista.png" },
      { name: "BENJAMIN STEAKHOUSE & BAR", logo: "/sponsors/benjamin.png" },
      { name: "SORY", logo: "/sponsors/sory.png" },
      { name: "ALTEX", logo: "/sponsors/altex.png" },
      { name: "Redal Events", logo: "/sponsors/redal.png" }
    ],
    instagram: "https://www.instagram.com/gala.sunetului._.sibiu/",
    email: "maria.muntiu1@gmail.com",
    phone: "0742376764"
  }
};

app.get('/api/event-info', (req, res) => {
  res.json(eventData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});