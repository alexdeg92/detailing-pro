"use client";

import Image from "next/image";
import { useState } from "react";

/* ─── NAV ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#galerie", label: "Galerie" },
    { href: "#tarifs", label: "Tarifs" },
    { href: "#avis", label: "Avis" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed top-0 w-full bg-gray-950/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3l14 9-14 9V3z" /></svg>
            </div>
            <div>
              <span className="text-lg font-bold text-white leading-tight block">Détailing Pro</span>
              <span className="text-xs text-amber-400 font-medium tracking-widest">LAURENTIDES</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-400 hover:text-amber-400 transition-colors">{l.label}</a>
            ))}
            <a href="#contact" className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:-translate-y-0.5">
              Soumission gratuite
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-4 pb-4 space-y-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-gray-300 hover:text-amber-400">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block text-center bg-amber-400 text-gray-900 py-2.5 rounded-full font-bold mt-2">Soumission gratuite</a>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-950">
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=1920&h=1080&fit=crop" alt="Voiture détaillée" width={1920} height={1080} className="w-full h-full object-cover opacity-30" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 text-amber-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            #1 en esthétique automobile dans les Laurentides
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
            Votre auto mérite le{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">traitement VIP</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed break-words">
            Détailing intérieur, extérieur et revêtement céramique professionnel. Des résultats qui parlent d&apos;eux-mêmes depuis 2015.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:-translate-y-0.5">
              Soumission gratuite
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="tel:5147089087" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-amber-400 hover:text-amber-400 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (514) 708-9087
            </a>
          </div>
          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">2500+</div>
              <div className="text-xs sm:text-sm text-gray-500">Véhicules traités</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">9 ans</div>
              <div className="text-xs sm:text-sm text-gray-500">D&apos;expérience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">4.9★</div>
              <div className="text-xs sm:text-sm text-gray-500">Google Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
function Services() {
  const services = [
    {
      title: "Détailing Extérieur",
      desc: "Lavage à la main, décontamination, polissage et cire de protection. Votre carrosserie retrouve son éclat d'origine.",
      features: ["Lavage à la main premium", "Décontamination à l'argile", "Polissage machine", "Cire ou scellant de protection"],
      img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&h=400&fit=crop",
      icon: "🚗",
    },
    {
      title: "Détailing Intérieur",
      desc: "Nettoyage profond de l'habitacle, traitement du cuir, extraction vapeur et désodorisation complète.",
      features: ["Aspiration et extraction vapeur", "Traitement et conditionnement du cuir", "Nettoyage des plastiques et vinyles", "Désodorisation à l'ozone"],
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
      icon: "🪑",
    },
    {
      title: "Revêtement Céramique",
      desc: "Protection céramique professionnelle qui protège votre peinture pendant 2 à 5 ans. Brillance et hydrophobie incomparables.",
      features: ["Correction de peinture complète", "Application céramique Gtechniq", "Protection 2-5 ans garantie", "Hydrophobie extrême"],
      img: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&h=400&fit=crop",
      icon: "💎",
    },
  ];
  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Nos services</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">L&apos;excellence du <span className="text-amber-400">détailing</span></h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Chaque véhicule reçoit un traitement personnalisé avec des produits professionnels haut de gamme.</p>
        </div>
        <div className="space-y-16">
          {services.map((s, i) => (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <div className={`relative rounded-2xl overflow-hidden shadow-2xl group ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image src={s.img} alt={s.title} width={600} height={400} className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-5xl">{s.icon}</div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-3xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── GALLERY ─── */
function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop", label: "BMW Série 5 — Céramique" },
    { src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop", label: "Porsche 911 — Correction" },
    { src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&h=400&fit=crop", label: "Mercedes AMG — Complet" },
    { src: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop", label: "Audi RS — Extérieur" },
    { src: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop", label: "Tesla Model 3 — Céramique" },
    { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop", label: "Corvette — Polissage" },
  ];
  return (
    <section id="galerie" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Galerie</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">Nos <span className="text-amber-400">réalisations</span></h2>
          <p className="mt-4 text-lg text-gray-400">Les résultats parlent d&apos;eux-mêmes.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.label} className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer">
              <Image src={img.src} alt={img.label} width={600} height={400} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ─── */
function Pricing() {
  const plans = [
    {
      name: "Essentiel",
      desc: "Nettoyage de base intérieur et extérieur",
      price: "149",
      features: ["Lavage extérieur à la main", "Aspirateur intérieur", "Vitres intérieures/extérieures", "Pneus et jantes", "Parfum intérieur"],
      popular: false,
    },
    {
      name: "Premium",
      desc: "Détailing complet intérieur + extérieur",
      price: "349",
      features: ["Tout du forfait Essentiel", "Décontamination à l'argile", "Polissage en une étape", "Traitement du cuir", "Scellant de protection 3 mois", "Extraction vapeur des sièges"],
      popular: true,
    },
    {
      name: "Céramique",
      desc: "Protection ultime avec revêtement céramique",
      price: "899",
      features: ["Tout du forfait Premium", "Correction de peinture 2 étapes", "Revêtement céramique Gtechniq", "Protection 3-5 ans", "Kit d'entretien offert", "Suivi annuel inclus"],
      popular: false,
    },
  ];
  return (
    <section id="tarifs" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Tarifs</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">Nos <span className="text-amber-400">forfaits</span></h2>
          <p className="mt-4 text-lg text-gray-400">Prix pour véhicule de taille standard. Supplément pour VUS et camions.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-3xl p-8 ${p.popular ? "bg-gradient-to-b from-amber-400/10 to-orange-500/5 border-2 border-amber-400/30 shadow-2xl shadow-amber-500/10" : "bg-gray-900 border border-gray-800"}`}>
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  ⭐ Le plus populaire
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
              <p className="text-gray-400 mb-6">{p.desc}</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-white">{p.price}$</span>
                <span className="text-gray-500 ml-1">/ véhicule</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block text-center py-4 rounded-full font-bold transition-all hover:-translate-y-0.5 ${p.popular ? "bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 shadow-lg shadow-amber-500/25" : "border-2 border-gray-700 text-white hover:border-amber-400 hover:text-amber-400"}`}>
                Réserver maintenant
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── REVIEWS ─── */
function Reviews() {
  const reviews = [
    { name: "Marc-Antoine D.", car: "BMW X5 2023", text: "Incroyable! Ma BMW ressemble à une voiture neuve. Le revêtement céramique est absolument parfait. Je ne vais nulle part d'autre.", stars: 5 },
    { name: "Stéphanie P.", car: "Tesla Model Y", text: "Service impeccable du début à la fin. Très professionnel et le résultat est bien au-delà de mes attentes. Merci!", stars: 5 },
    { name: "François L.", car: "Audi A4 2022", text: "J'ai essayé plusieurs détailleurs dans la région et Détailing Pro est de loin le meilleur. Rapport qualité-prix imbattable.", stars: 5 },
    { name: "Julie M.", car: "Mercedes GLC", text: "Mon intérieur beige était dans un état lamentable. Après le traitement, on dirait du neuf! Je suis cliente à vie.", stars: 5 },
  ];
  return (
    <section id="avis" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Avis clients</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">Ils nous font <span className="text-amber-400">confiance</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="bg-gray-950 border border-gray-800 rounded-2xl p-8 hover:border-amber-400/30 transition-colors">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{r.name}</div>
                  <div className="text-sm text-gray-500">Avis vérifié</div>
                </div>
                <div className="text-amber-400 text-sm font-medium">{r.car}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── BEFORE/AFTER ─── */
function BeforeAfter() {
  const items = [
    { before: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=300&fit=crop", after: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=300&fit=crop", label: "Correction de peinture — Porsche 911" },
    { before: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afe?w=600&h=300&fit=crop", after: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=300&fit=crop", label: "Détailing complet — BMW M4" },
  ];
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Avant / Après</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">La différence est <span className="text-amber-400">évidente</span></h2>
        </div>
        <div className="space-y-12">
          {items.map((item) => (
            <div key={item.label} className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative rounded-xl overflow-hidden">
                  <Image src={item.before} alt="Avant" width={600} height={300} className="w-full h-56 object-cover" unoptimized />
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">AVANT</div>
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <Image src={item.after} alt="Après" width={600} height={300} className="w-full h-56 object-cover" unoptimized />
                  <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">APRÈS</div>
                </div>
              </div>
              <p className="text-center text-gray-400 mt-4 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">Prêt à redonner vie à votre véhicule?</h2>
        <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
          Obtenez une soumission gratuite en moins de 24 heures. Service mobile disponible — on se déplace chez vous!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-gray-800 transition-all hover:-translate-y-0.5">
            Demander une soumission
          </a>
          <a href="tel:5147089087" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur text-gray-900 px-8 py-4 rounded-full text-lg font-bold border-2 border-gray-900/20 hover:bg-white/30 transition-all">
            (514) 708-9087
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Contact</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">Obtenez votre <span className="text-amber-400">soumission</span> gratuite</h2>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Envoyez-nous quelques photos de votre véhicule et nous vous préparerons une soumission personnalisée en moins de 24 heures.
          </p>
          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <div className="font-semibold text-white text-lg">(514) 708-9087</div>
                <div className="text-gray-500 text-sm">Lun-Sam 8h-18h</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <div className="font-semibold text-white text-lg">alex@perroquet.io</div>
                <div className="text-gray-500 text-sm">Réponse en moins de 24h</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <div className="font-semibold text-white text-lg">Blainville & environs</div>
                <div className="text-gray-500 text-sm">Service mobile disponible</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-white mb-6">Demande de soumission</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Prénom</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-700 text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition placeholder-gray-600" placeholder="Marc" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Nom</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-700 text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition placeholder-gray-600" placeholder="Tremblay" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Courriel</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-700 text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition placeholder-gray-600" placeholder="marc@exemple.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Téléphone</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-700 text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition placeholder-gray-600" placeholder="(450) 555-1234" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Marque / Modèle</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-700 text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition placeholder-gray-600" placeholder="BMW X5 2023" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Forfait souhaité</label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-700 text-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition">
                  <option>Essentiel (149$)</option>
                  <option>Premium (349$)</option>
                  <option>Céramique (899$)</option>
                  <option>Autre / Sur mesure</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
              <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-700 text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition resize-none placeholder-gray-600" placeholder="Décrivez l'état de votre véhicule..." />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 py-4 rounded-xl font-bold text-lg shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:-translate-y-0.5">
              Envoyer la demande
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3l14 9-14 9V3z" /></svg>
              </div>
              <span className="text-xl font-bold text-white">Détailing Pro Laurentides</span>
            </div>
            <p className="text-gray-500 max-w-md leading-relaxed">
              Service professionnel d&apos;esthétique automobile dans les Laurentides. Détailing intérieur, extérieur et revêtement céramique.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Détailing extérieur</li>
              <li>Détailing intérieur</li>
              <li>Revêtement céramique</li>
              <li>Correction de peinture</li>
              <li>Protection PPF</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Heures</h4>
            <ul className="space-y-2 text-sm">
              <li>Lun-Ven: 8h - 18h</li>
              <li>Samedi: 9h - 16h</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">&copy; 2025 Détailing Pro Laurentides. Tous droits réservés.</p>
          <p className="text-sm text-gray-500">Conçu par <a href="mailto:alex@perroquet.io" className="text-amber-400 hover:text-amber-300">Perroquet.io</a></p>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <Gallery />
      <Pricing />
      <Reviews />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
