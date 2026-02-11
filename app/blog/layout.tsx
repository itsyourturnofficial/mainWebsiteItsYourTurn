import { Navbar } from "@/components/placement/Navbar";
import { ScrollProgress } from "@/components/placement/ScrollProgress";
import { ScrollToTop } from "@/components/placement/ScrollToTop";
import { Footer } from "@/components/placement/Footer";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ScrollProgress />
            <ScrollToTop />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
