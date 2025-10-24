import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFax } from 'react-icons/fa'

function Footer() {
  return (
    <div style={{height:"40%", backgroundColor:"#f5f9fc", display:"flex", flexDirection:"column"}}>
        <div style={{height:"18%", width:"100%", backgroundColor:"#625bff", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingLeft:"20px", paddingRight:"20px"}}>
            <h3>Get Connected with us on social networks: </h3>
            <div className="socials" style={{width:"40%",display:"flex", gap:"40px", justifyContent:"flex-end", alignItems:"center"}}>
                <a href="#" aria-label="Facebook" style={{color:'inherit', textDecoration:'none', fontSize:'1rem'}}><FaFacebookF color="white" /></a>
                <a href="#" aria-label="X" style={{color:'inherit', textDecoration:'none', fontSize:'1rem'}}><FaTwitter color="white" /></a>
                <a href="#" aria-label="Instagram" style={{color:'inherit', textDecoration:'none', fontSize:'1rem'}}><FaInstagram color="white" /></a>
                <a href="#" aria-label="LinkedIn" style={{color:'inherit', textDecoration:'none', fontSize:'1rem'}}><FaLinkedinIn color="white" /></a>
                <a href="#" aria-label="GitHub" style={{color:'inherit', textDecoration:'none', fontSize:'1rem'}}><FaGithub color="white" /></a>
            </div>
            <style jsx>{`
                .socials a svg { color: #625; font-size: 1rem; }
            `}</style>
        </div>
        <div style={{height:"72%", width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"flex-start", paddingTop:"30px", paddingLeft:"50px", paddingRight:"50px", boxSizing:"border-box"}}>
            <div style={{display:"flex", flexDirection:"column", gap:"30px"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <h2 style={{color:"black", fontSize:"1.2rem", fontWeight:"bold"}}>WisperAI Inc</h2>
                    <div style={{height:"3px", width:"100px", backgroundColor:"#625bff"}}></div>
                </div>
                <h2 style={{color:"black"}}>WisperAI builds intelligence tools <br></br>that help banks and credit unions <br></br>compete smarter — empowering trust, <br></br>compliance, and growth without disruption.</h2>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"30px"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <h2 style={{color:"black", fontSize:"1.2rem", fontWeight:"bold"}}>Products</h2>
                    <div style={{height:"3px", width:"100px", backgroundColor:"#625bff"}}></div>
                </div>
                <div>
                    <ul className="products-list" style={{listStyleType: 'disc', paddingLeft: '1.2rem', margin: 0}}>
                        <li><a href="#">Consumer Financial Literacy Platform</a></li>
                        <li><a href="#">Competitive Intelligence Dashboard</a></li>
                        <li><a href="#">CRA Compliance & Tracking</a></li>
                    </ul>
                    <style jsx>{`
                        .products-list { list-style-type: disc; padding-left: 1.2rem; margin: 0; display: flex; flex-direction: column; gap: 5px; }
                        .products-list li { color: black; }
                        .products-list li::marker { color: #625bff; }
                        .products-list a { color: black; text-decoration: none; }
                        .products-list a:hover { color: #625bff; }
                    `}</style>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"30px"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <h2 style={{color:"black", fontSize:"1.2rem", fontWeight:"bold"}}>Resources</h2>
                    <div style={{height:"3px", width:"100px", backgroundColor:"#625bff"}}></div>
                </div>
                <div>
                    <ul className="products-list" style={{listStyleType: 'disc', paddingLeft: '1.2rem', margin: 0}}>
                        <li><a href="#">Blog/Insights</a></li>
                        <li><a href="#">Financial Literacy Content Library</a></li>
                        <li><a href="#">Research & Reports</a></li>
                        <li><a href="#">Guides & Whitepapers</a></li>
                    </ul>
                    <style jsx>{`
                        .products-list { list-style-type: disc; padding-left: 1.2rem; margin: 0; display: flex; flex-direction: column; gap: 5px; }
                        .products-list li { color: black; }
                        .products-list li::marker { color: #625bff; }
                        .products-list a { color: black; text-decoration: none; }
                        .products-list a:hover { color: #625bff; }
                    `}</style>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"30px"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <h2 style={{color:"black", fontSize:"1.2rem", fontWeight:"bold"}}>Contact Us</h2>
                    <div style={{height:"3px", width:"100px", backgroundColor:"#625bff"}}></div>
                </div>
                <div>
                    <ul className="contact-list" style={{listStyleType: 'none', paddingLeft: 0, margin: 0}}>
                        <li className="contact-item"><FaMapMarkerAlt color="#625bff" /><a href="#">San Jose, CA 95135</a></li>
                        <li className="contact-item"><FaPhoneAlt color="#625bff" /><a href="#">1-800-555-1234</a></li>
                        <li className="contact-item"><FaEnvelope color="#625bff" /><a href="#">wisperai@support.com</a></li>
                        <li className="contact-item"><FaFax color="#625bff" /><a href="#">1-800-555-5678 (fax)</a></li>
                    </ul>
                    <style jsx>{`
                        .contact-list { list-style: none; padding-left: 0; margin: 0; display: flex; flex-direction: column; gap: 5px; }
                        .contact-item { display: flex; align-items: center; gap: 8px; }
                        .contact-item svg { font-size: 1rem; color: #625bff; }
                        .contact-item a { color: black; text-decoration: none; font-size: 1rem; }
                        .contact-item a:hover { color: #625bff; }
                    `}</style>
                </div>
            </div>
        </div>
        <div style={{width:"100%", height:"10%", backgroundColor:"#f1f1f1ff", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <p style={{color:"black", fontSize:"0.8rem"}}>
                © 2025 WisperAI&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="#" className="footer-link">Terms</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="#" className="footer-link">Privacy Policy</a>
            </p>
            <style jsx>{`
                .footer-link { color: black; text-decoration: none; }
                .footer-link:hover { color: #625bff; }
            `}</style>
        </div>
    </div>
  )
}

export default Footer