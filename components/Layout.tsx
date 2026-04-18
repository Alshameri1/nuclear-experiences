import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "./Footer"
import { CTASection } from "./CTASection"

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-background transition-colors duration-300">
            {/* Navigation */}
            <Navigation />
            {/* Main content */}
            <div className="relative z-10 pageClass">
                {children}
                <CTASection />
                <Footer />
            </div>
        </main>
    )
}
