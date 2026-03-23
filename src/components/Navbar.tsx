'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Quem Somos', href: '#dna' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Casting', href: '#casting' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="flex flex-col gap-[3px]">
              <span className="block w-5 h-[3px] bg-primary rounded-full group-hover:w-7 transition-all duration-300" />
              <span className="block w-3 h-[3px] bg-primary/50 rounded-full group-hover:w-5 transition-all duration-300" />
            </div>
            <span className="font-headline font-black text-xl tracking-tighter text-white uppercase">
              Spot Creators
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              
                key={link.href}
                href={link.href}
                onMouseEnter={() => setActive(link.href)}
                onMouseLeave={() => setActive('')}
                className="relative font-headline font-bold text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300"
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: active === link.href ? '100%' : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </a>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:block kinetic-gradient text-on-primary font-headline font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-widest shadow-lg shadow-primary/20"
          >
            Bora falar?
          </motion.a>

          {/* Mobile Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-white rounded-full"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-4 h-[2px] bg-white rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-white rounded-full"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-surface flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="font-headline font-black text-4xl text-white hover:text-primary transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contato"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMenuOpen(false)}
              className="kinetic-gradient text-on-primary font-headline font-extrabold px-10 py-4 rounded-full text-sm uppercase tracking-widest mt-4"
            >
              Bora falar?
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}