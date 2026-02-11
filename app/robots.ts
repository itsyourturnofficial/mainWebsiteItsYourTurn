import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/", // Example of disallowed path
        },
        sitemap: "https://www.itsyourturn.co.in/sitemap.xml",
    };
}
