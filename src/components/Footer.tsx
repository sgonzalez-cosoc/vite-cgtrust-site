
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#29304A] text-white flex flex-col justify-center items-center p-4 md:p-8">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-8 lg:space-y-0">
        <div className="space-y-4 lg:max-w-[50%]">
          <p className="text-sm font-tiempos-text text-[#98A2B3]">© 2024 Coral Gables Trust. All Rights Reserved.</p>
          <p className="text-xs font-neue-grotesk text-[#98A2B3]">
            "Investment and related products are: Not Insured by the FDIC, the United States Government or any Governmental Agency or by Coral Gables Trust or any of its affiliates. Not obligations of the Trust Company or guaranteed by the Trust Company. Subject to investment risk and may lose value."
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <p className="text-sm font-tiempos-text text-[#98A2B3]">Connect with Us</p>
          <div className="flex justify-center items-center space-x-6">
            <Link to="#" className="hover:opacity-80 transition-opacity">
              <img src="/src/assets/icons/social-icons/LinkedIn.svg" className="w-[36px] h-[36px]" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link to="#" className="hover:opacity-80 transition-opacity">
              <img src="/src/assets/icons/social-icons/Facebook.svg" className="w-[36px] h-[36px]" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link to="#" className="hover:opacity-80 transition-opacity">
              <img src="/src/assets/icons/social-icons/X.svg" className="w-[36px] h-[36px]" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link to="#" className="hover:opacity-80 transition-opacity">
              <img src="/src/assets/icons/social-icons/Instagram.svg" className="w-[36px] h-[36px]" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link to="#" className="hover:opacity-80 transition-opacity">
              <img src="/src/assets/icons/social-icons/Youtube.svg" className="w-[36px] h-[36px]" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}