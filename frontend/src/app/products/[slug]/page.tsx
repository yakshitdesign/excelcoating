import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excel CoolCoat - Advanced Heat Reflective Coating",
  description: "Excel CoolCoat reflects sunlight, reduces roof temperature by up to 20°C, and saves energy.",
  openGraph: {
    title: "Excel CoolCoat - Advanced Heat Reflective Coating",
    description: "Excel CoolCoat reflects sunlight, reduces roof temperature by up to 20°C, and saves energy.",
    images: [{ url: "/images/coolcoat.jpg" }],
  },
  alternates: {
    canonical: "https://www.excelcoatings.com/products/coolcoat",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Excel CoolCoat",
      image: "https://www.excelcoatings.com/images/coolcoat.jpg",
      description: "Advanced heat reflective coating that reduces roof temperature by up to 20°C.",
      brand: {
        "@type": "Brand",
        name: "Excel Coatings",
      },
      offers: {
        "@type": "Offer",
        price: "1999.00",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    }),
  },
};