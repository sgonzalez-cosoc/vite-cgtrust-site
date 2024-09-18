import { useEffect } from "react";

export default function LandingPage() {
    useEffect(() => {
        const sliderArea = document.getElementById("sliderItemArea") as HTMLDivElement | null;
        const sliderPrevControl = document.getElementById("sliderPrevControl") as HTMLButtonElement | null;
        const sliderNextControl = document.getElementById("sliderNextControl") as HTMLButtonElement | null;
        const sliderProgressBar = document.getElementById("sliderProgressBar") as HTMLDivElement | null;

        if (!sliderArea || !sliderPrevControl || !sliderNextControl || !sliderProgressBar) {
            return;
        }

        const scrollStep = 200;

        const updateScrollIndicator = () => {
            const maxScrollLeft = sliderArea.scrollWidth - sliderArea.clientWidth;
            const scrollLeft = sliderArea.scrollLeft;
            const scrollPercentage = (scrollLeft / maxScrollLeft) * 100;
            sliderProgressBar.style.width = `${scrollPercentage}%`;
        };

        const scrollContainer = (direction: number) => {
            sliderArea.scrollBy({
                left: direction * scrollStep,
                behavior: "smooth",
            });
            updateScrollIndicator();
        };

        sliderPrevControl.addEventListener("click", () => scrollContainer(-1));
        sliderNextControl.addEventListener("click", () => scrollContainer(1));
        sliderArea.addEventListener("scroll", updateScrollIndicator);

        // Initial update of the scroll indicator
        updateScrollIndicator();

        // Cleanup event listeners on component unmount
        return () => {
            sliderPrevControl.removeEventListener("click", () => scrollContainer(-1));
            sliderNextControl.removeEventListener("click", () => scrollContainer(1));
            sliderArea.removeEventListener("scroll", updateScrollIndicator);
        };
    }, []);


    return (
        <div>
            <div className="bg-hero-pattern min-h-[600px]">
                <div className="ps-32 pt-36">
                    <div className="flex flex-col gap-6 items-start">

                        <p className="text-[45px] text-gray-200 max-w-[700px] leading-[60px] font-tiempos-head font-medium">
                            We are the largest independent <br /> and privately held trust company <br /> headquartered in South Florida.</p>
                        <p className="font-neue-grotesk text-md text-white">Please pardon the inconvenience while we are constructing and rolling out our new website.</p>
                        {/* <button
                            className="border border-white px-5 py-2 font-bold text-white font-neue-grotesk hover:bg-white hover:text-[]">MORE ABOUT US</button> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-[#F5F5F9] py-[96px] ps-[112px]">
                <div className="flex flex-row justify-between items-start ">
                    <div>
                        <h1 className="text-[#A39159] font-tiempos-head font-medium text-[36px]">Our Services</h1>
                        <p className="max-w-[592px] text-[#29304A] mt-2 font-tiempos-text">A leading provider of Trust and Estate, Wealth Management, <br />and Financial Planning services throughout the State, CGT also <br />serves clients nationwide and internationally.</p>
                    </div>
                    {/* <div>
                        <button className="border border-black px-5 py-2 font-bold font-poppins text-black">
                            LEARN MORE
                        </button>
                    </div> */}
                </div>
                <div className="my-[60px]">
                    <div className="w-full overflow-hidden relative">
                        <div className="flex space-x-4 overflow-x-auto scroll-smooth scroll-hidden" id="sliderItemArea">
                            <div
                                className="min-w-[300px] h-[135px] text-[24px] font-tiempos-head bg-[#29304A] flex justify-start items-end text-white">
                                <h1 className="ps-[24px] pb-[20px] pe-[60px]">
                                    Trust & Estate <br />Planning
                                </h1>
                            </div>
                            <div
                                className="min-w-[300px] h-[135px] text-[24px] font-tiempos-head bg-[#29304ACC] flex justify-start items-end text-white">
                                <h1 className="ps-[24px] pb-[20px] pe-[60px]">
                                    Investment <br />Management
                                </h1>
                            </div>
                            <div
                                className="min-w-[300px] h-[135px] text-[24px] font-tiempos-head bg-[#29304A99] flex justify-start items-end text-white">
                                <h1 className="ps-[24px] pb-[20px] pe-[60px]">
                                    Directed <br />Trusts
                                </h1>
                            </div>
                            <div
                                className="min-w-[300px] h-[135px] text-[24px] font-tiempos-head bg-[#29304A66] flex justify-start items-end text-white">
                                <h1 className="ps-[24px] pb-[20px] pe-[60px] text-[#29304A]">
                                    Special Needs <br />Trust
                                </h1>
                            </div>
                            <div
                                className="min-w-[300px] h-[135px] text-[24px] font-tiempos-head bg-[#29304a40] flex justify-start items-end text-white">
                                <h1 className="ps-[24px] pb-[20px] pe-[60px] text-[#29304A]">
                                    Financial <br />Planning
                                </h1>
                            </div>
                            <div
                                className="min-w-[300px] h-[135px] text-[24px] font-tiempos-head bg-[#29304A33] flex justify-start items-end text-white">
                                <h1 className="ps-[24px] pb-[20px] pe-[60px] text-[#29304A]">
                                    Escrow <br />Services
                                </h1>
                            </div>
                            <div
                                className="min-w-[300px] h-[135px] text-[24px] font-tiempos-head bg-[#29304A33] flex justify-start items-end text-white">
                                <h1 className="ps-[24px] pb-[20px] pe-[60px] text-[#29304A]">
                                    Cash <br />Management
                                </h1>
                            </div>
                            <div
                                className="min-w-[300px] h-[135px] text-[24px] font-tiempos-head bg-[#29304A33] flex justify-start items-end text-white">
                                <h1 className="ps-[24px] pb-[20px] pe-[60px] text-[#29304A]">
                                    Estate Settlement <br />Services
                                </h1>
                            </div>
                        </div>


                        <div className="flex justify-between items-center mt-4">
                            <button id="sliderPrevControl" className="rotate-180 p-3 focus:outline-none">
                                <svg width="40" height="29" viewBox="0 0 40 29" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M25.8104 28.436C25.3566 28.436 24.9111 28.2508 24.5908 27.9288C24.2721 27.5951 24.0986 27.1647 24.0986 26.7092C24.0986 26.2537 24.2721 25.8233 24.5858 25.4963L34.0956 16.0015H1.64378C1.04316 15.9698 0.510944 15.6361 0.218976 15.1106C-0.0729919 14.5834 -0.0729919 13.9561 0.218976 13.4305C0.510944 12.9033 1.04316 12.5713 1.64378 12.5396H34.0956L24.6141 3.04814C24.2488 2.73782 24.0285 2.28736 24.0068 1.80853C23.9852 1.3247 24.1687 0.849209 24.5124 0.50719C24.8394 0.180186 25.2731 0 25.7353 0C25.7603 0 25.787 0 25.8137 0.00166839C26.2925 0.0233574 26.7447 0.245253 27.055 0.61063L39.4845 13.0401C39.8115 13.3538 40 13.8009 40 14.2597C40 14.7185 39.8098 15.1656 39.4795 15.4843L27.0283 27.9355C26.703 28.2625 26.2692 28.441 25.8087 28.441L25.8104 28.436Z"
                                        fill="#29304A" />
                                </svg>
                            </button>
                            <button id="sliderNextControl" className="p-3 focus:outline-none">
                                <svg width="40" height="29" viewBox="0 0 40 29" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M25.8104 28.436C25.3566 28.436 24.9111 28.2508 24.5908 27.9288C24.2721 27.5951 24.0986 27.1647 24.0986 26.7092C24.0986 26.2537 24.2721 25.8233 24.5858 25.4963L34.0956 16.0015H1.64378C1.04316 15.9698 0.510944 15.6361 0.218976 15.1106C-0.0729919 14.5834 -0.0729919 13.9561 0.218976 13.4305C0.510944 12.9033 1.04316 12.5713 1.64378 12.5396H34.0956L24.6141 3.04814C24.2488 2.73782 24.0285 2.28736 24.0068 1.80853C23.9852 1.3247 24.1687 0.849209 24.5124 0.50719C24.8394 0.180186 25.2731 0 25.7353 0C25.7603 0 25.787 0 25.8137 0.00166839C26.2925 0.0233574 26.7447 0.245253 27.055 0.61063L39.4845 13.0401C39.8115 13.3538 40 13.8009 40 14.2597C40 14.7185 39.8098 15.1656 39.4795 15.4843L27.0283 27.9355C26.703 28.2625 26.2692 28.441 25.8087 28.441L25.8104 28.436Z"
                                        fill="#29304A" />
                                </svg>
                            </button>
                            <div className="w-full mx-4 bg-gray-200">
                                <div className="h-1 bg-[#98A2B3]" id="sliderProgressBar" style={{ width: `${0}%` }}

                                ></div>
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
