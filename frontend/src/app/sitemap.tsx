import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.excelcoatings.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.excelcoatings.com/products",
      lastModified: new Date(),
    },
    {
      url: "https://www.excelcoatings.com/blog",
      lastModified: new Date(),
    },
  ];
}