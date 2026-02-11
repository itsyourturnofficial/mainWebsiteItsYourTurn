import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Its Your Turn - IoT & Embedded Training",
        short_name: "Its Your Turn",
        description: "Launch your career in Embedded Systems and IoT with industry-led training.",
        start_url: "/",
        display: "standalone",
        background_color: "#0f172a", // brand-base
        theme_color: "#1e293b", // brand-dark
        icons: [
            {
                src: "/icon.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
