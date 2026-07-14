import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { GiHand } from 'react-icons/gi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Organization': [
      { to: '/about', label: 'About Us' },
      { to: '/activities', label: 'Our Activities' },
      { to: '/get-involved', label: 'Get Involved' },
      { to: '/contact', label: 'Contact' },
    ],
    'Support': [
      { to: '/donate', label: 'Donate' },
      { to: '/gallery', label: 'Gallery' },
      { to: '/dashboard', label: 'Dashboard' },
    ],
    'Legal': [
      { to: '/privacy', label: 'Privacy Policy' },
      { to: '/terms', label: 'Terms of Service' },
    ],
  }

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
              {/* <GiHand className="text-primary-400" /> */}
              <span>Deenabandhu Trust</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering communities through education, healthcare, and sustainable development.
              Together, we can make a difference.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-lg mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 text-gray-400">
            <FaEnvelope className="text-primary-400" />
            <span className="text-sm">deenabandhuoffice@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <FaPhone className="text-primary-400" />
            <span className="text-sm">+91 6360421077</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <FaMapMarkerAlt className="text-primary-400" />
            <span className="text-sm">WXC3+QVM, Siddhartha Nagar, Chamarajanagar, Karnataka 571313, India</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Deenabandhu Trust. Made with <FaHeart className="inline text-red-500" /> for humanity.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)