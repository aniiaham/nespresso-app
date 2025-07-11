import { Coffee, columns } from "../shared/columns";
import { DataTable } from "../shared/data-table";
import Script from "next/script";

async function getDataVertuo(): Promise<Coffee[]> {
  // Fetch data from your API here.
  return [
    {
      name: "ICE FORTE",
      type: "Barista Creations",
      size: "7.77 oz",
      profile: "Cereal, woody & peppery",
      roast: "DARK ROAST",
      caffeine: "165 mg",
    },
    {
      name: "ICE LEGGERO",
      type: "Barista Creations",
      size: "2.7 oz",
      profile: "Fruity & cereal",
      roast: "MEDIUM ROAST",
      caffeine: "165 mg",
    },
    {
      name: "SWEET VANILLA",
      type: "Barista Creations",
      size: "7.77 oz",
      profile: "Sweet biscuit, candied & cereal",
      roast: "MEDIUM ROAST",
      caffeine: "166 mg",
    },
    {
      name: "GOLDEN CARAMEL",
      type: "Barista Creations",
      size: "7.77 oz",
      profile: "Caramel flavor, sweet biscuit",
      roast: "MEDIUM ROAST",
      caffeine: "159 mg",
    },
    {
      name: "RICH CHOCOLATE",
      type: "Barista Creations",
      size: "7.77 oz",
      profile: "Dark chocolate, caramel & cereal",
      roast: "MEDIUM ROAST",
      caffeine: "160 mg",
    },
    {
      name: "ROASTED HAZELNUT",
      type: "Barista Creations",
      size: "7.77 oz",
      profile: "Hazelnut, biscuits & caramel",
      roast: "MEDIUM ROAST",
      caffeine: "170 mg",
    },
    {
      name: "BIANCO PICCOLO",
      type: "Barista Creations",
      size: "1.35 oz",
      profile: "Biscuits & caramel",
      roast: "DARK ROAST",
      caffeine: "75 mg",
    },
    {
      name: "BIANCO DOPPIO",
      type: "Barista Creations",
      size: "2.7 oz",
      profile: "Fruity, biscuity",
      roast: "LIGHT ROAST",
      caffeine: "105 mg",
    },
    {
      name: "BIANCO FORTE",
      type: "Barista Creations",
      size: "7.77 oz",
      profile: "Roasted, cereal",
      roast: "DARK ROAST",
      caffeine: "160 mg",
    },
    {
      name: "CAFECITO DE PUERTO RICO",
      type: "Reviving Origins",
      size: "2.7 oz",
      profile: "Dark cocoa, pepper & brown spice ",
      roast: "DARK ROAST",
      caffeine: "165 mg",
    },
    {
      name: "KAHAWA YA CONGO",
      type: "Reviving Origins",
      size: "7.77 oz",
      profile: "Toasted cereal, nutty & fruitiness",
      roast: "MEDIUM ROAST",
      caffeine: "150 mg",
    },
    {
      name: "EL SALVADOR",
      type: "Single Origins",
      size: "7.77 oz",
      profile: "Sweet, biscuit, fruity jam",
      roast: "LIGHT ROAST",
      caffeine: "140 mg",
    },
    {
      name: "PERU ORGANIC",
      type: "Single Origins",
      size: "1.35 oz",
      profile: "Toasted cereal & fruit",
      roast: "MEDIUM ROAST",
      caffeine: "85 mg",
    },
    {
      name: "COSTA RICA",
      type: "Single Origins",
      size: "5.07 oz",
      profile: "Malty sweet cereal",
      roast: "MEDIUM ROAST",
      caffeine: "140 mg",
    },
    {
      name: "MEXICO",
      type: "Vertuo",
      size: "7.77 oz",
      profile: "Intense roasted & spiced",
      roast: "MEDIUM ROAST",
      caffeine: "190 mg",
    },
    {
      name: "COLOMBIA",
      type: "Vertuo",
      size: "7.77 oz",
      profile: "Candied apple & red berry",
      roast: "LIGHT ROAST",
      caffeine: "165 mg",
    },
    {
      name: "VIVIDA",
      type: "Coffee+",
      size: "7.77 oz",
      profile: "Cereal, honeyed sweetness",
      roast: "MEDIUM ROAST",
      caffeine: "170 mg",
    },
    {
      name: "MELOZIO BOOST",
      type: "Coffee+",
      size: "7.77 oz",
      profile: "Cereal & honeyed sweetness",
      roast: "MEDIUM ROAST",
      caffeine: "200 mg",
    },
    {
      name: "STORMIO BOOST",
      type: "Coffee+",
      size: "7.77 oz",
      profile: "Woody & Earthy",
      roast: "MEDIUM ROAST",
      caffeine: "200 mg",
    },
    {
      name: "COLD BREW STYLE",
      type: "XL Coffees",
      size: "12 oz",
      profile: "Roasted caramel",
      roast: "MEDIUM ROAST",
      caffeine: "114 mg",
    },
    {
      name: "ALTO AMBRATO",
      type: "XL Coffees",
      size: "12 oz",
      profile: "Toasted cereal & sweet caramel",
      roast: "LIGHT ROAST",
      caffeine: "170 mg",
    },
    {
      name: "ALTO ONICE",
      type: "XL Coffees",
      size: "12 oz",
      profile: "Cocoa & spice",
      roast: "MEDIUM ROAST",
      caffeine: "190 mg",
    },
    {
      name: "POUR-OVER STYLE",
      type: "XL Coffees",
      size: "18 oz",
      profile: "Smoky, woody & earthy",
      roast: "DARK ROAST",
      caffeine: "230 mg",
    },
    {
      name: "INTENSO",
      type: "Vertuo",
      size: "7.77 oz",
      profile: "Roasted & chocolatey",
      roast: "DARK ROAST",
      caffeine: "195 mg",
    },
    {
      name: "STORMIO",
      type: "Vertuo",
      size: "7.77 oz",
      profile: "Spicy, woody, cereal",
      roast: "MEDIUM ROAST",
      caffeine: "170 mg",
    },
    {
      name: "ODACIO",
      type: "Vertuo",
      size: "7.77 oz",
      profile: "Cereal, bold",
      roast: "MEDIUM ROAST",
      caffeine: "170 mg",
    },
    {
      name: "MELOZIO",
      type: "Vertuo",
      size: "7.77 oz",
      profile: "Nutty & balanced",
      roast: "MEDIUM ROAST",
      caffeine: "170 mg",
    },
    {
      name: "MELOZIO DECAFFEINATO",
      type: "Vertuo",
      size: "7.77 oz",
      profile: "Nutty & balanced",
      roast: "MEDIUM ROAST",
      caffeine: "11 mg",
    },
    {
      name: "SOLELIO",
      type: "Vertuo",
      size: "7.77 oz",
      profile: "Toasted cereal & fruity",
      roast: "LIGHT ROAST",
      caffeine: "133 mg",
    },
    {
      name: "HALF CAFFEINATO",
      type: "Vertuo",
      size: "7.77 oz",
      profile: "Biscuit, sweet & velvety",
      roast: "LIGHT ROAST",
      caffeine: "83 mg",
    },
    {
      name: "RISTRETTO INTENSO",
      type: "Vertuo",
      size: "0.85 oz",
      profile: "Peppery spices & wood",
      roast: "DARK ROAST",
      caffeine: "120 mg",
    },
    {
      name: "IL CAFFÈ",
      type: "Vertuo",
      size: "1.35 oz",
      profile: "Cereal, roasted & chocolatey",
      roast: "DARK ROAST",
      caffeine: "152 mg",
    },
    {
      name: "DIAVOLITTO",
      type: "Vertuo",
      size: "1.35 oz",
      profile: "Roasted & chocolatey",
      roast: "DARK ROAST",
      caffeine: "144 mg",
    },
    {
      name: "ALTISSIO",
      type: "Vertuo",
      size: "1.35 oz",
      profile: "Cereal, roasted & chocolatey",
      roast: "DARK ROAST",
      caffeine: "108 mg",
    },
    {
      name: "ALTISSIO DECAFFEINATO",
      type: "Vertuo",
      size: "1.35 oz",
      profile: "Cereal, roasted & chocolatey",
      roast: "DARK ROAST",
      caffeine: "4 mg",
    },
    {
      name: "ORAFIO",
      type: "Vertuo",
      size: "1.35 oz",
      profile: "Caramel & roasted",
      roast: "MEDIUM ROAST",
      caffeine: "110 mg",
    },
    {
      name: "TOCCANTO",
      type: "Vertuo",
      size: "1.35 oz",
      profile: "Berry & winey",
      roast: "MEDIUM ROAST",
      caffeine: "84 mg",
    },
    {
      name: "VOLTESSO",
      type: "Vertuo",
      size: "1.35 oz",
      profile: "Nutty & balanced",
      roast: "LIGHT ROAST",
      caffeine: "64 mg",
    },
    {
      name: "DOUBLE ESPRESSO DOLCE",
      type: "Double Espresso",
      size: "2.7 oz",
      profile: "Cereal & malted",
      roast: "MEDIUM ROAST",
      caffeine: "133 mg",
    },
    {
      name: "DOUBLE ESPRESSO SCURO",
      type: "Double Espresso",
      size: "2.7 oz",
      profile: "Cocoa & vanilla",
      roast: "MEDIUM ROAST",
      caffeine: "150 mg",
    },
    {
      name: "DOUBLE ESPRESSO CHIARO",
      type: "Double Espresso",
      size: "2.7 oz",
      profile: "Woody & earthy",
      roast: "MEDIUM ROAST",
      caffeine: "135 mg",
    },
    {
      name: "INIZIO",
      type: "Gran Lungo",
      size: "5.07 oz",
      profile: "Toasted cereal & floral",
      roast: "MEDIUM ROAST",
      caffeine: "120 mg",
    },
    {
      name: "FORTADO",
      type: "Gran Lungo",
      size: "5.07 oz",
      profile: "Cocoa & oak",
      roast: "MEDIUM ROAST",
      caffeine: "195 mg",
    },
    {
      name: "FORTADO DECAFFEINATO",
      type: "Gran Lungo",
      size: "5.07 oz",
      profile: "Cocoa & oak",
      roast: "MEDIUM ROAST",
      caffeine: "7 mg",
    },
    {
      name: "ARONDIO",
      type: "Gran Lungo",
      size: "5.07 oz",
      profile: "Cereal & mild",
      roast: "MEDIUM ROAST",
      caffeine: "150 mg",
    },
  ];
}

export default async function NespressoVertuoPage() {
  const data = await getDataVertuo();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Nespresso Vertuo Coffee Pods",
    itemListElement: data.map((pod, index) => ({
      "@type": "Product",
      position: index + 1,
      name: pod.name,
      brand: {
        "@type": "Brand",
        name: "Nespresso",
      },
      description: `${pod.profile}. ${pod.roast} with about ${pod.caffeine} of caffeine.`,
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
        <h1 className="text-4xl md:text-5xl mx-2 font-bold tracking-tight text-gray-900">
          Nespresso Vertuo Caffeine Chart
        </h1>
        <p className="text-base md:text-lg text-gray-600 mx-2">
          Use this caffeine chart to compare and filter Nespresso pods by
          caffeine, roast, and flavor.
        </p>
      </header>

      <DataTable columns={columns} data={data} />
      <Script
        id="structured-data-vertuo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
