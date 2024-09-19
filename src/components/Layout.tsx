import { Link } from "react-router-dom"
import CGTrustLogo from "../assets/CGTrustLogo.svg"
import ClientLoginIcon from "../assets/icons/ClientLoginIcon.svg"
// import ContactIcon from "../assets/icons/Contact.svg"
// import SearchIcon from "../assets/icons/Search.svg"
// import SpanishIcon from "../assets/icons/Spanish.svg"

export default function Layout() {
    return (
        // <div className='bg-[rgb(41,48,74)] flex justify-between items-center min-h-[94px] px-[70px] py-[16px]'>
        //     <div>
        //         <img src={CGTrustLogo} alt='logo' className='w-44 h-16'></img>
        //     </div>
        //     {/* <div className='flex gap-10'>
        //         <a href="" className="font-tiempos-text font-medium">OUR SERVICES</a>
        //         <a href="" className="font-tiempos-text font-medium">ABOUT US</a>
        //         <a href="" className="font-tiempos-text font-medium">RESOURCES</a>
        //     </div> */}
        //     <div className='flex gap-10'>
        //         {/* <div className='flex gap-8 items-center'>
        //             <a href="">
        //                 <img

        //                     src={SpanishIcon}
        //                     alt="Follow us on Twitter"
        //                     className='w-6 h-6'
        //                 />
        //             </a>
        //             <a href="">
        //                 <img

        //                     src={ContactIcon}
        //                     alt="Follow us on Twitter"
        //                     className='w-6 h-6'
        //                 />
        //             </a>
        //             <a href="">
        //                 <img

        //                     src={SearchIcon}
        //                     alt="Follow us on Twitter"
        //                     className='w-6 h-6'
        //                 />
        //             </a>
        //         </div> */}
        //         <div>
        //             <button className='border border-white px-4 py-2 flex gap-5 items-center font-neue-grotesk font-medium'>
        //                 <img
        //                     src={ClientLoginIcon}
        //                     alt="Follow us on Twitter"
        //                     className='w-5 h-5'
        //                 />
        //                 Client Login</button>
        //         </div>
        //     </div>
        // </div>
        <div className="bg-[rgb(41,48,74)] flex justify-center w-full">
            <div className="w-full max-w-[1280px] flex justify-between items-center min-h-[60px] sm:min-h-[80px] md:min-h-[94px] px-4 sm:px-6 md:px-[70px] py-2 sm:py-3 md:py-[16px]">
                <div className="flex-shrink-0">
                    <img
                        src={CGTrustLogo}
                        alt="logo"
                        width={176}
                        height={64}
                        className="w-24 h-9 sm:w-32 sm:h-12 md:w-44 md:h-16"
                    />
                </div>
                <div>
                    <Link
                        to="https://innovue21.innovestsystems.com/r4.1prod/to3/LogOn"
                        className="border border-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 flex gap-2 sm:gap-3 md:gap-5 items-center font-neue-grotesk text-xs sm:text-sm md:text-base font-medium text-white whitespace-nowrap"
                    >
                        <img
                            src={ClientLoginIcon}
                            alt="Client Login Icon"
                            width={20}
                            height={20}
                            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                        />
                        Client Login
                    </Link>
                </div>
            </div>
        </div>
    )
}
