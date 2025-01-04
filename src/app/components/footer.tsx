export default function Footer() {
    const socialLinks = [
      { name: 'Instagram', href: 'https://www.instagram.com/anasss.el22/' },
      { name: 'Github', href: 'https://github.com/ansss22' },
      { name: 'Linkedin', href: 'https://www.linkedin.com/in/anass-elamrany' }
    ]
  
    return (
      <footer className="py-16 text-gray-400 border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="flex justify-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    )
  }
  
  