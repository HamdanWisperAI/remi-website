import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFax } from 'react-icons/fa'

function Footer() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <div className="w-full bg-[#f5f9fc] flex flex-col overflow-x-hidden">
        {/* Social Links Section */}
        <div className={`w-full bg-[#625bff] flex ${isDesktop ? 'flex-row' : 'flex-col'} items-center ${isDesktop ? 'justify-between' : 'justify-center gap-4'} ${isDesktop ? 'px-8' : 'px-4 sm:px-6'} py-${isDesktop ? '6' : '4'}`}>
            <h3 className={`text-white ${isDesktop ? 'text-base' : 'text-xs sm:text-sm'} font-medium text-center flex-shrink-0`}>Get Connected with us on social networks:</h3>
            <div className="flex gap-4 sm:gap-6 md:gap-8 justify-center items-center flex-wrap">
                <a href="#" aria-label="Facebook" className="text-white no-underline text-base hover:opacity-80 transition-opacity"><FaFacebookF color="white" size={isDesktop ? 18 : 14} /></a>
                <a href="#" aria-label="X" className="text-white no-underline text-base hover:opacity-80 transition-opacity"><FaTwitter color="white" size={isDesktop ? 18 : 14} /></a>
                <a href="#" aria-label="Instagram" className="text-white no-underline text-base hover:opacity-80 transition-opacity"><FaInstagram color="white" size={isDesktop ? 18 : 14} /></a>
                <a href="#" aria-label="LinkedIn" className="text-white no-underline text-base hover:opacity-80 transition-opacity"><FaLinkedinIn color="white" size={isDesktop ? 18 : 14} /></a>
                <a href="#" aria-label="GitHub" className="text-white no-underline text-base hover:opacity-80 transition-opacity"><FaGithub color="white" size={isDesktop ? 18 : 14} /></a>
            </div>
        </div>

        {/* Main Content Section */}
        <div className={`w-full flex ${isDesktop ? 'flex-row justify-around' : 'flex-col'} ${isDesktop ? 'items-start' : 'items-stretch'} ${isDesktop ? 'pt-[30px] px-[50px]' : 'pt-8 px-5 sm:px-8'} box-border gap-${isDesktop ? '0' : '8'}`}>
          
          {/* Company Info */}
          <div className={`flex flex-col ${isDesktop ? 'gap-[30px]' : 'gap-6'} ${isDesktop ? 'min-w-fit' : 'w-full'}`}>
              <div className="flex flex-col">
                  <h2 className={`text-black ${isDesktop ? 'text-[1.2rem]' : 'text-lg'} font-bold`}>WisperAI Inc</h2>
                  <div className={`h-[3px] ${isDesktop ? 'w-[100px]' : 'w-[80px]'} bg-[#625bff] mt-2`}></div>
              </div>
              <h2 className={`text-black ${isDesktop ? 'text-base leading-relaxed' : 'text-sm leading-relaxed'}`}>WisperAI builds intelligence tools <br className={isDesktop ? 'block' : 'hidden'} />that help banks and credit unions <br className={isDesktop ? 'block' : 'hidden'} />compete smarter — empowering trust, <br className={isDesktop ? 'block' : 'hidden'} />compliance, and growth without disruption.</h2>
          </div>

          {/* Products */}
          <div className={`flex flex-col ${isDesktop ? 'gap-[30px]' : 'gap-6'} ${isDesktop ? 'min-w-fit' : 'w-full'}`}>
              <div className="flex flex-col">
                  <h2 className={`text-black ${isDesktop ? 'text-[1.2rem]' : 'text-lg'} font-bold`}>Products</h2>
                  <div className={`h-[3px] ${isDesktop ? 'w-[100px]' : 'w-[80px]'} bg-[#625bff] mt-2`}></div>
              </div>
              <div>
                  <ul className={`list-disc ${isDesktop ? 'pl-[1.2rem]' : 'pl-5'} m-0 flex flex-col ${isDesktop ? 'gap-[5px]' : 'gap-3'} [&>li]:text-black [&>li::marker]:text-[#625bff] [&>li>a]:text-black [&>li>a]:no-underline [&>li>a:hover]:text-[#625bff]`}>
                      <li><a href="/product/financialLiteracy" className={`${isDesktop ? 'text-base' : 'text-sm'}`}>Consumer Financial Literacy Platform</a></li>
                      <li><a href="/product/CI" className={`${isDesktop ? 'text-base' : 'text-sm'}`}>Competitive Intelligence Dashboard</a></li>
                      <li><a href="/product/CRA" className={`${isDesktop ? 'text-base' : 'text-sm'}`}>CRA Compliance & Tracking</a></li>
                  </ul>
              </div>
          </div>

          {/* Resources */}
          <div className={`flex flex-col ${isDesktop ? 'gap-[30px]' : 'gap-6'} ${isDesktop ? 'min-w-fit' : 'w-full'}`}>
              <div className="flex flex-col">
                  <h2 className={`text-black ${isDesktop ? 'text-[1.2rem]' : 'text-lg'} font-bold`}>Resources</h2>
                  <div className={`h-[3px] ${isDesktop ? 'w-[100px]' : 'w-[80px]'} bg-[#625bff] mt-2`}></div>
              </div>
              <div>
                  <ul className={`list-disc ${isDesktop ? 'pl-[1.2rem]' : 'pl-5'} m-0 flex flex-col ${isDesktop ? 'gap-[5px]' : 'gap-3'} [&>li]:text-black [&>li::marker]:text-[#625bff] [&>li>a]:text-black [&>li>a]:no-underline [&>li>a:hover]:text-[#625bff]`}>
                      <li><a href="#" className={`${isDesktop ? 'text-base' : 'text-sm'}`}>Blog/Insights</a></li>
                      <li><a href="#" className={`${isDesktop ? 'text-base' : 'text-sm'}`}>Financial Literacy Content Library</a></li>
                      <li><a href="#" className={`${isDesktop ? 'text-base' : 'text-sm'}`}>Research & Reports</a></li>
                      <li><a href="#" className={`${isDesktop ? 'text-base' : 'text-sm'}`}>Guides & Whitepapers</a></li>
                  </ul>
              </div>
          </div>

          {/* Contact Us */}
          <div className={`flex flex-col ${isDesktop ? 'gap-[30px]' : 'gap-6'} ${isDesktop ? 'min-w-fit' : 'w-full'}`}>
              <div className="flex flex-col">
                  <h2 className={`text-black ${isDesktop ? 'text-[1.2rem]' : 'text-lg'} font-bold`}>Contact Us</h2>
                  <div className={`h-[3px] ${isDesktop ? 'w-[100px]' : 'w-[80px]'} bg-[#625bff] mt-2`}></div>
              </div>
              <div>
                  <ul className={`list-none pl-0 m-0 flex flex-col ${isDesktop ? 'gap-[5px]' : 'gap-3'}`}>
                      <li className={`flex items-center ${isDesktop ? 'gap-2' : 'gap-3'}`}><FaMapMarkerAlt color="#625bff" size={isDesktop ? 16 : 14} /><a href="#" className={`text-black no-underline ${isDesktop ? 'text-base' : 'text-sm'} hover:text-[#625bff]`}>San Jose, CA 95135</a></li>
                      <li className={`flex items-center ${isDesktop ? 'gap-2' : 'gap-3'}`}><FaPhoneAlt color="#625bff" size={isDesktop ? 16 : 14} /><a href="#" className={`text-black no-underline ${isDesktop ? 'text-base' : 'text-sm'} hover:text-[#625bff]`}>1-800-555-1234</a></li>
                      <li className={`flex items-center ${isDesktop ? 'gap-2' : 'gap-3'}`}><FaEnvelope color="#625bff" size={isDesktop ? 16 : 14} /><a href="#" className={`text-black no-underline ${isDesktop ? 'text-base' : 'text-sm'} hover:text-[#625bff]`}>wisperai@support.com</a></li>
                      <li className={`flex items-center ${isDesktop ? 'gap-2' : 'gap-3'}`}><FaFax color="#625bff" size={isDesktop ? 16 : 14} /><a href="#" className={`text-black no-underline ${isDesktop ? 'text-base' : 'text-sm'} hover:text-[#625bff]`}>1-800-555-5678 (fax)</a></li>
                  </ul>
              </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="w-full bg-[#f1f1f1ff] flex justify-center items-center py-4 px-5 mt-8">
            <p className="text-black text-center text-xs sm:text-sm leading-relaxed">
                © 2025 WisperAI&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="#" className="text-black no-underline hover:text-[#625bff] transition-colors">Terms</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="#" className="text-black no-underline hover:text-[#625bff] transition-colors">Privacy Policy</a>
            </p>
        </div>
    </div>
  )
}

export default Footer