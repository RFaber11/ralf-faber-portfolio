export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ralf Faber",
    url: "https://ralf-faber.vercel.app",
    jobTitle: "Portrait and Fashion Photographer",
    image: "https://ralf-faber.vercel.app/opengraph-image.jpg",
    sameAs: [
      "https://www.instagram.com/ralf.fabermedia",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "NL",
    },
    knowsAbout: [
      "Portrait photography",
      "Fashion photography",
      "Editorial photography",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}