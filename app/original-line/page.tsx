import { Coffee, columns } from "../shared/columns";
import { DataTable } from "../shared/data-table";
import Script from "next/script";

async function getDataOriginal(): Promise<Coffee[]> {
  return [
    {
      name: "Caramello",
      type: "Barista Creations",
      size: "3.7 oz",
      profile: "Caramel, biscuit & nutty",
      roast: "MEDIUM ROAST",
      caffeine: "62 mg",
    },
    {
      name: "Cioccolatino",
      type: "Barista Creations",
      size: "3.7 oz",
      profile: "Dark chocolate & biscuit cereal",
      roast: "MEDIUM ROAST",
      caffeine: "62 mg",
    },
    {
      name: "Nocciola",
      type: "Barista Creations",
      size: "3.7 oz",
      profile: "Rich & nutty",
      roast: "MEDIUM ROAST",
      caffeine: "62 mg",
    },
    {
      name: "Vaniglia",
      type: "Barista Creations",
      size: "3.7 oz",
      profile: "Sweet biscuit & cereal",
      roast: "MEDIUM ROAST",
      caffeine: "62 mg",
    },
    {
      name: "Freddo Delicato",
      type: "Barista Creations",
      size: "1.35 oz",
      profile: "Fruity",
      roast: "MEDIUM ROAST",
      caffeine: "72 mg",
    },
    {
      name: "Corto",
      type: "Barista Creations",
      size: "1.35 oz",
      profile: "Spicy & roasted",
      roast: "DARK ROAST",
      caffeine: "103 mg",
    },
    {
      name: "Scuro",
      type: "Barista Creations",
      size: "1.35 oz",
      profile: "Roasted & chocolatey",
      roast: "DARK ROAST",
      caffeine: "73 mg",
    },
    {
      name: "Chiaro",
      type: "Barista Creations",
      size: "1.35 oz",
      profile: "Natural caramel, sweet biscuit",
      roast: "LIGHT ROAST",
      caffeine: "49 mg",
    },
    {
      name: "Freddo Intenso",
      type: "Barista Creations",
      size: "1.35 oz",
      profile: "Roasted & chocolatey",
      roast: "DARK ROAST",
      caffeine: "56 mg",
    },
    {
      name: "Peru Organic",
      type: "Single Origin",
      size: "1.35 oz",
      profile: "Fruity & complex",
      roast: "MEDIUM ROAST",
      caffeine: "60 mg",
    },
    {
      name: "Colombia",
      type: "Single Origin",
      size: "1.35 oz",
      profile: "Winey & red fruits",
      roast: "MEDIUM ROAST",
      caffeine: "64 mg",
    },
    {
      name: "Nicaragua",
      type: "Single Origin",
      size: "1.35 oz",
      profile: "Honey & sweet cereal",
      roast: "LIGHT ROAST",
      caffeine: "65 mg",
    },
    {
      name: "India",
      type: "Single Origin",
      size: "1.35 oz",
      profile: "Woody & spicy",
      roast: "DARK ROAST",
      caffeine: "105 mg",
    },
    {
      name: "Indonesia",
      type: "Single Origin",
      size: "1.35 oz",
      profile: "Tobacco leaves & woody",
      roast: "MEDIUM ROAST",
      caffeine: "72 mg",
    },
    {
      name: "Venezia",
      type: "Ispirazione Italiana",
      size: "0.85 oz",
      profile: "Nutty & balanced",
      roast: "MEDIUM ROAST",
      caffeine: "77 mg",
    },
    {
      name: "Napoli",
      type: "Ispirazione Italiana",
      size: "0.85 oz",
      profile: "Roasted & chocolatey",
      roast: "DARK ROAST",
      caffeine: "109 mg",
    },
    {
      name: "Palermo Kazaar",
      type: "Ispirazione Italiana",
      size: "1.35 oz",
      profile: "Woody & spicy ",
      roast: "DARK ROAST",
      caffeine: "113 mg",
    },
    {
      name: "Ristretto Italiano",
      type: "Ispirazione Italiana",
      size: "1.35 oz",
      profile: "Roasted & chocolatey",
      roast: "DARK ROAST",
      caffeine: "75 mg",
    },
    {
      name: "Firenze Arpeggio",
      type: "Ispirazione Italiana",
      size: "1.35 oz",
      profile: "Roasted & chocolatey",
      roast: "DARK ROAST",
      caffeine: "63 mg",
    },
    {
      name: "Firenze Arpeggio Decaffeinato",
      type: "Ispirazione Italiana",
      size: "1.35 oz",
      profile: "Roasted & chocolatey",
      roast: "DARK ROAST",
      caffeine: "2 mg",
    },
    {
      name: "Roma",
      type: "Ispirazione Italiana",
      size: "1.35 oz",
      profile: "Woody & earthy",
      roast: "MEDIUM ROAST",
      caffeine: "63 mg",
    },
    {
      name: "Genova Livanto",
      type: "Ispirazione Italiana",
      size: "1.35 oz",
      profile: "Nutty & sweet caramel",
      roast: "MEDIUM ROAST",
      caffeine: "64 mg",
    },
    {
      name: "Ristretto Italiano Decaffeinato",
      type: "Ispirazione Italiana",
      size: "1.35 oz",
      profile: "Roasted & chocolatey",
      roast: "DARK ROAST",
      caffeine: "2 mg",
    },
    {
      name: "Rio de Janeiro Espresso",
      type: "World Explorations",
      size: "1.35 oz",
      profile: "Herbal & sandalwood",
      roast: "DARK ROAST",
      caffeine: "77 mg",
    },
    {
      name: "Paris Espresso",
      type: "World Explorations",
      size: "1.35 oz",
      profile: "Cereal & citrus",
      roast: "DARK ROAST",
      caffeine: "75 mg",
    },
    {
      name: "Istanbul Espresso",
      type: "World Explorations",
      size: "1.35 oz",
      profile: "Ripe Fruits & nutty",
      roast: "DARK ROAST",
      caffeine: "85 mg",
    },
    {
      name: "Miami Espresso",
      type: "World Explorations",
      size: "1.35 oz",
      profile: "Cereal",
      roast: "DARK ROAST",
      caffeine: "85 mg",
    },
    {
      name: "Stockholm Fortissio Lungo",
      type: "World Explorations",
      size: "3.7 oz",
      profile: "Roasted & chocolatey",
      roast: "DARK ROAST",
      caffeine: "80 mg",
    },
    {
      name: "Tokyo Vivalto Lungo",
      type: "World Explorations",
      size: "3.7 oz",
      profile: "Flowery & complex",
      roast: "MEDIUM ROAST",
      caffeine: "82 mg",
    },
    {
      name: "Vienna Linizio Lungo",
      type: "World Explorations",
      size: "3.7 oz",
      profile: "Nutty & balanced",
      roast: "MEDIUM ROAST",
      caffeine: "75 mg",
    },
    {
      name: "Shanghai Lungo",
      type: "World Explorations",
      size: "3.7 oz",
      profile: "Fruitiness & fine acidity",
      roast: "LIGHT ROAST",
      caffeine: "82 mg",
    },
    {
      name: "Buenos Aires Lungo",
      type: "World Explorations",
      size: "3.7 oz",
      profile: "Sweet & cereal",
      roast: "LIGHT ROAST",
      caffeine: "104 mg",
    },
    {
      name: "Cape Town Envivo Lungo",
      type: "World Explorations",
      size: "3.7 oz",
      profile: "Woody & earthy",
      roast: "DARK ROAST",
      caffeine: "110 mg",
    },
    {
      name: "Volluto",
      type: "Espresso",
      size: "1.35 oz",
      profile: "Fruity, biscuit & cereal",
      roast: "LIGHT ROAST",
      caffeine: "64 mg",
    },
    {
      name: "Volluto Decaffeinato",
      type: "Espresso",
      size: "1.35 oz",
      profile: "Fruity, biscuit & cereal",
      roast: "LIGHT ROAST",
      caffeine: "2 mg",
    },
    {
      name: "Cosi",
      type: "Espresso",
      size: "1.35 oz",
      profile: "Toasted cereal & fruity",
      roast: "LIGHT ROAST",
      caffeine: "59 mg",
    },
    {
      name: "Capriccio",
      type: "Espresso",
      size: "1.35 oz",
      profile: "Woody & earthy",
      roast: "LIGHT ROAST",
      caffeine: "70 mg",
    },
  ];
}

export default async function NespressoOriginalPage() {
  const data = await getDataOriginal();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Nespresso Original Coffee Pods",
    itemListElement: data.map((pod, index) => ({
      "@type": "Product",
      position: index + 1,
      name: pod.name,
      brand: {
        "@type": "Brand",
        name: "Nespresso",
      },
      description: `${pod.profile}. ${pod.roast} with about ${pod.caffeine} caffeine.`,
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Type",
          value: pod.type,
        },
        {
          "@type": "PropertyValue",
          name: "Size",
          value: pod.size,
        },
      ],
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
      },
    })),
  };

  return (
    <div className="container mx-auto py-10">
      <header className="py-6 relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Nespresso Original Caffeine Chart
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Use this Original line caffeine chart to compare and filter Nespresso
          pods by caffeine, roast, origin, and flavor.
        </p>
      </header>
      <DataTable columns={columns} data={data} />
      <Script
        id="structured-data-original"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
