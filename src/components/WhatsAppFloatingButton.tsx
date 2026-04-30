import { useEffect, useState } from "react";

const WhatsAppFloatingButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const heroSection = document.getElementById("hero");

        const handleScroll = () => {
            if (!heroSection) return;

            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            setIsVisible(window.scrollY > heroBottom - 100);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const phoneNumber = "+5215510483170"; 
    const message = "Hola, quisiera hacer una consulta.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    if (!isVisible) return null;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#25D366] hover:text-white"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="h-8 w-8"
            >
                <path d="M16.04 2.003c-7.72 0-14 6.28-14 14 0 2.47.65 4.88 1.88 7L2 30l7.18-1.88a13.91 13.91 0 0 0 6.86 1.75h.01c7.72 0 14-6.28 14-14s-6.29-13.864-14.01-13.864Zm0 25.49h-.01a11.6 11.6 0 0 1-5.91-1.62l-.42-.25-4.26 1.12 1.14-4.15-.27-.43a11.56 11.56 0 0 1-1.79-6.16c0-6.38 5.19-11.57 11.58-11.57 3.09 0 6 1.2 8.18 3.39a11.5 11.5 0 0 1 3.39 8.18c0 6.38-5.2 11.57-11.63 11.57Zm6.35-8.66c-.35-.18-2.06-1.02-2.38-1.13-.32-.12-.55-.18-.78.18-.23.35-.89 1.13-1.09 1.36-.2.23-.4.26-.75.09-.35-.18-1.47-.54-2.8-1.72-1.03-.92-1.73-2.06-1.93-2.41-.2-.35-.02-.54.15-.72.15-.15.35-.4.52-.6.18-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.18-.78-1.88-1.07-2.58-.28-.68-.57-.59-.78-.6h-.67c-.23 0-.6.09-.92.43-.32.35-1.21 1.18-1.21 2.87s1.24 3.33 1.41 3.56c.18.23 2.44 3.72 5.91 5.21.83.36 1.47.57 1.97.73.83.26 1.58.22 2.18.13.67-.1 2.06-.84 2.35-1.65.29-.81.29-1.5.2-1.65-.08-.14-.31-.22-.66-.4Z" />
            </svg>
        </a>
    );
};

export default WhatsAppFloatingButton;