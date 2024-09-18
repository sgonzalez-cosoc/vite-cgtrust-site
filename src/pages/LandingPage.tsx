import { useState, useRef, useEffect } from 'react';

export default function LandingPage() {
    const [progress, setProgress] = useState<number>(0);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const updateProgress = (): void => {
        if (sliderRef.current) {
            const scrollWidth = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
            const scrolled = sliderRef.current.scrollLeft;
            setProgress((scrolled / scrollWidth) * 100);
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('scroll', updateProgress);
            return () => slider.removeEventListener('scroll', updateProgress);
        }
    }, []);

    const scroll = (direction: 'left' | 'right'): void => {
        if (sliderRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };


    return (
        <div>
            <div className="bg-hero-pattern bg-cover bg-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center">
                <div className="w-full px-4 sm:ps-32">
                    <div className="flex flex-col gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-[45px] text-gray-200 max-w-[700px] leading-tight sm:leading-[50px] md:leading-[60px] font-tiempos-head font-medium">
                            We are the largest independent and privately held trust company headquartered in South Florida.
                        </h1>
                        <p className="font-neue-grotesk text-sm sm:text-md text-white max-w-[700px]">
                            Please pardon the inconvenience while we are constructing and rolling out our new website.
                        </p>
                        {/* <button
                            className="border border-white px-4 sm:px-5 py-2 text-sm sm:text-base font-bold text-white font-neue-grotesk hover:bg-white hover:text-[#29304A] transition-colors duration-300 mt-2 sm:mt-4"
                        >
                            MORE ABOUT US
                        </button> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-[#F5F5F9] py-12 sm:py-16 md:py-24 px-4 sm:pl-8 md:pl-28">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div>
                        <h1 className="text-[#A39159] font-tiempos-head font-medium text-2xl sm:text-3xl md:text-[36px]">Our Services</h1>
                        <p className="max-w-[592px] text-[#29304A] mt-2 font-tiempos-text text-sm sm:text-base">
                            A leading provider of Trust and Estate, Wealth Management, and Financial Planning services throughout the State, CGT also serves clients nationwide and internationally.
                        </p>
                    </div>
                    {/* <div>
                        <button className="border border-black px-5 py-2 font-bold font-poppins text-black">
                            LEARN MORE
                        </button>
                    </div> */}
                </div>
                <div className="mt-8 sm:mt-12 md:mt-[60px]">
                    <div className="w-full overflow-hidden relative">
                        <div
                            ref={sliderRef}
                            className="flex space-x-4 overflow-x-auto scroll-smooth scroll-hidden pb-4"
                            id="sliderItemArea"
                        >
                            {[
                                { title: "Trust & Estate <br />Planning", bg: "bg-[#29304A]", textColor: "text-white" },
                                { title: "Investment<br />Management", bg: "bg-[#29304ACC]", textColor: "text-white" },
                                { title: "Directed<br />Trusts", bg: "bg-[#29304A99]", textColor: "text-white" },
                                { title: "Special Needs<br />Trust", bg: "bg-[#29304A66]", textColor: "text-[#29304A]" },
                                { title: "Financial<br />Planning", bg: "bg-[#29304a40]", textColor: "text-[#29304A]" },
                                { title: "Escrow<br />Services", bg: "bg-[#29304A33]", textColor: "text-[#29304A]" },
                                { title: "Cash<br />Management", bg: "bg-[#29304A33]", textColor: "text-[#29304A]" },
                                { title: "Estate Settlement<br />Services", bg: "bg-[#29304A33]", textColor: "text-[#29304A]" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`min-w-[300px] h-[135px] text-[24px] font-tiempos-head ${item.bg} flex justify-start items-end ${item.textColor}`}
                                >
                                    <h2 className="ps-6 pb-5 pe-[60px] text-ellipsis overflow-hidden line-clamp-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-center mt-4">
                            <button onClick={() => scroll('left')} className="rotate-180 p-3 focus:outline-none">
                                <svg width="40" height="29" viewBox="0 0 40 29" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.8104 28.436C25.3566 28.436 24.9111 28.2508 24.5908 27.9288C24.2721 27.5951 24.0986 27.1647 24.0986 26.7092C24.0986 26.2537 24.2721 25.8233 24.5858 25.4963L34.0956 16.0015H1.64378C1.04316 15.9698 0.510944 15.6361 0.218976 15.1106C-0.0729919 14.5834 -0.0729919 13.9561 0.218976 13.4305C0.510944 12.9033 1.04316 12.5713 1.64378 12.5396H34.0956L24.6141 3.04814C24.2488 2.73782 24.0285 2.28736 24.0068 1.80853C23.9852 1.3247 24.1687 0.849209 24.5124 0.50719C24.8394 0.180186 25.2731 0 25.7353 0C25.7603 0 25.787 0 25.8137 0.00166839C26.2925 0.0233574 26.7447 0.245253 27.055 0.61063L39.4845 13.0401C39.8115 13.3538 40 13.8009 40 14.2597C40 14.7185 39.8098 15.1656 39.4795 15.4843L27.0283 27.9355C26.703 28.2625 26.2692 28.441 25.8087 28.441L25.8104 28.436Z" fill="#29304A" />
                                </svg>
                            </button>
                            <button onClick={() => scroll('right')} className="p-3 focus:outline-none">
                                <svg width="40" height="29" viewBox="0 0 40 29" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.8104 28.436C25.3566 28.436 24.9111 28.2508 24.5908 27.9288C24.2721 27.5951 24.0986 27.1647 24.0986 26.7092C24.0986 26.2537 24.2721 25.8233 24.5858 25.4963L34.0956 16.0015H1.64378C1.04316 15.9698 0.510944 15.6361 0.218976 15.1106C-0.0729919 14.5834 -0.0729919 13.9561 0.218976 13.4305C0.510944 12.9033 1.04316 12.5713 1.64378 12.5396H34.0956L24.6141 3.04814C24.2488 2.73782 24.0285 2.28736 24.0068 1.80853C23.9852 1.3247 24.1687 0.849209 24.5124 0.50719C24.8394 0.180186 25.2731 0 25.7353 0C25.7603 0 25.787 0 25.8137 0.00166839C26.2925 0.0233574 26.7447 0.245253 27.055 0.61063L39.4845 13.0401C39.8115 13.3538 40 13.8009 40 14.2597C40 14.7185 39.8098 15.1656 39.4795 15.4843L27.0283 27.9355C26.703 28.2625 26.2692 28.441 25.8087 28.441L25.8104 28.436Z" fill="#29304A" />
                                </svg>
                            </button>
                            <div className="w-full ml-4">
                                <div className="w-full bg-gray-200  h-1 dark:bg-gray-300">
                                    <div className="bg-[#A39159] h-1" style={{ width: `${progress}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className="flex flex-col">
                <div className="grid grid-cols-2 pt-[96px] gap-[96px] items-center">
                    <div>
                        <img src="/media/StocksImage.svg" alt="stockImage" />
                    </div>
                    <div className="flex flex-col gap-[32px]  max-w-[512px]">
                        <p className="text-[#A39159] text-sm font-neue-grotesk">INVESTMENT INSIGHTS</p>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-[#29304A] text-[36px] font-tiempos-head leading-[48px]">This Week's Investment
                                News in Six Charts</h1>
                            <p className="text-gray-400 font-light font-neue-grotesk">March 6, 2024</p>
                        </div>
                        <p className="font-tiempos-text text-md text-[#29304A]">
                            It was a big week for federal government data. Here are six charts encapsulating the latest news on
                            economic fundamentals driving investment prices.
                        </p>
                        <button className="border border-black px-5 py-2 font-bold font-neue-grotesk text-black max-w-[160px]">
                            READ ARTICLE
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 py-[96px] items-center">
                    <div className="flex flex-col ms-[96px] gap-[32px] max-w-[512px]">
                        <p className="text-[#A39159] text-sm font-neue-grotesk">INVESTMENT INSIGHTS</p>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-[#29304A] text-[36px] font-tiempos-head leading-[48px]">This Week's Investment
                                News in Six Charts</h1>
                            <p className="text-gray-400 font-light font-neue-grotesk">March 6, 2024</p>
                        </div>
                        <p className="font-tiempos-text text-md text-[#29304A]">
                            It was a big week for federal government data. Here are six charts encapsulating the latest news on
                            economic fundamentals driving investment prices.
                        </p>
                        <button className="border border-black px-5 py-2 font-bold font-neue-grotesk text-black max-w-[160px]">
                            READ ARTICLE
                        </button>
                    </div>
                    <div className="flex justify-end">
                        <img src="/media/StocksImage.svg" alt="stockImage" />
                    </div>
                </div>
            </div> */}
            {/* <div className="bg-[#ECEBF3] flex items-center justify-center">
                <div className="flex justify-between min-w-[85%] my-[72px]">
                    <div>
                        <h1 className="text-[#A39159] font-head_tiempos_med text-[36px]">Sign up for expert commentary</h1>
                        <p className="font-text_tiempos_reg mt-1 text-lg">Receive emails on topics that interest you.</p>
                    </div>
                    <div>
                        <div className="flex gap-3">
                            <input type="text" placeholder="Enter your email"
                                className="border-0 bg-white min-w-[430px] px-5 placeholder:text-gray-500 placeholder:font-poppins" />
                            <button className="px-5 py-2 bg-black text-white font-poppins font-bold">SUBSCRIBE</button>
                        </div>
                        <p className="font-poppins font-light text-gray-400 text-xs py-2">We care about your data in our privacy
                            policy</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
