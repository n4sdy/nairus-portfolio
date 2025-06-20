import { ArrowDown } from "lucide-react";



export const HeroSection = () => {
    return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="contatainer max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">

                <div className="flex justify-center animate-fade-in  mb-2">
                    <img
                        src="/images/nasd.png"
                        alt="Nairus Decena"
                        className="w-48 h-48 md:w-50 md:h-50 rounded-full object-cover border-4 border-primary shadow-lg opacity-0 animate-fade-in"
                    />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Nairus</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Decena</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    A passionate web developer with a love for creating beautiful and functional websites.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Projects
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>

    </section>
    )
}