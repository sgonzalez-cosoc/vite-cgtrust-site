import CGTrustLogo from "../assets/CGTrustLogo.svg"
import ClientLoginIcon from "../assets/icons/ClientLoginIcon.svg"
import ContactIcon from "../assets/icons/Contact.svg"
import SearchIcon from "../assets/icons/Search.svg"
import SpanishIcon from "../assets/icons/Spanish.svg"

export default function Layout() {
    return (
        <div className='bg-[rgb(41,48,74)] flex justify-between items-center min-h-[94px] px-[70px] py-[30px]'>
            <div>
                <img src={CGTrustLogo} alt='logo' className='w-44 h-16'></img>
            </div>
            {/* <div className='flex gap-10'>
                <a href="" className="font-tiempos-text font-medium">OUR SERVICES</a>
                <a href="" className="font-tiempos-text font-medium">ABOUT US</a>
                <a href="" className="font-tiempos-text font-medium">RESOURCES</a>
            </div> */}
            <div className='flex gap-10'>
                {/* <div className='flex gap-8 items-center'>
                    <a href="">
                        <img

                            src={SpanishIcon}
                            alt="Follow us on Twitter"
                            className='w-6 h-6'
                        />
                    </a>
                    <a href="">
                        <img

                            src={ContactIcon}
                            alt="Follow us on Twitter"
                            className='w-6 h-6'
                        />
                    </a>
                    <a href="">
                        <img

                            src={SearchIcon}
                            alt="Follow us on Twitter"
                            className='w-6 h-6'
                        />
                    </a>
                </div> */}
                <div>
                    <button className='border border-white px-4 py-2 flex gap-5 items-center font-neue-grotesk font-medium'>
                        <img

                            src={ClientLoginIcon}
                            alt="Follow us on Twitter"
                            className='w-5 h-5'
                        />
                        Client Login</button>
                </div>
            </div>
        </div>
    )
}
