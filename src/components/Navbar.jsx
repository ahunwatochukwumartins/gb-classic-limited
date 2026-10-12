
import { useState } from "react";

const navigation = [
  { name: "Home", href: "#home" },
  {
    name: "About",
    href: "#about",
    submenu: [
      { name: "Biography", href: "#biography" },
      { name: "Education", href: "#education" },
      { name: "Career", href: "#career" },
      { name: "Businesses", href: "#businesses" },
      { name: "Achievements", href: "#achievements" },
    ],
  },
  {
    name: "Business",
    href: "#business",
    submenu: [
      { name: "Investments", href: "#investments" },
      { name: "Real Estate", href: "#real-estate" },
      { name: "Record Label", href: "#record-label" },
      { name: "Agriculture", href: "#agriculture" },
      { name: "Hospitality", href: "#hospitality" },
      { name: "Logistics", href: "#logistics" },
    ],
  },
  {
    name: "News & Updates",
    href: "#news",
    submenu: [
      { name: "Business Announcements", href: "#announcements" },
      { name: "Events", href: "#events" },
      { name: "Interviews", href: "#interviews" },
      { name: "Achievements", href: "#news-achievements" },
      { name: "Community Activities", href: "#community" },
    ],
  },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="sticky top-0 z-50 bg-white text-black shadow-md border-b-2 border-yellow-400">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Brand */}
        <a href="#home" className="shrink-0">
             <img
    src="/logo.png"
    alt="GB Classic Limited Logo"
    className="h-20 w-20 object-contain sm:h-40 sm:w-40"
  />
          
          <span className="hidden text-xs tracking-widest text-gray-600 sm:block">
            BUSINESS • LEADERSHIP • IMPACT
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          {navigation.map((item) => (
            <div key={item.name} className="group relative">
              <a
                href={item.href}
                className="flex items-center gap-1 py-2 text-sm font-semibold transition hover:text-yellow-600"
              >
                {item.name}
                {item.submenu && (
                  <span aria-hidden="true" className="text-xs">⌄</span>
                )}
              </a>

              {item.submenu && (
                <div className="invisible absolute left-0 top-full min-w-56 rounded-lg border border-gray-200 bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.submenu.map((subitem) => (
                    <a
                      key={subitem.name}
                      href={subitem.href}
                      className="block px-4 py-3 text-sm text-black transition hover:bg-yellow-100 hover:text-yellow-700"
                    >
                      {subitem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Appointment Button */}
        <a
          href="#appointment"
          className="hidden rounded-md bg-yellow-400 px-4 py-3 text-sm font-bold text-black transition hover:bg-yellow-500 xl:inline-flex"
        >
          Book Appointment
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md border border-gray-300 p-2 text-2xl text-black transition hover:border-yellow-500 hover:text-yellow-600 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-gray-200 bg-white px-5 pb-5 lg:hidden">
          {navigation.map((item) => (
            <div key={item.name} className="border-b border-gray-200">
              <div className="flex items-center justify-between">
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 py-4 font-semibold text-black hover:text-yellow-600"
                >
                  {item.name}
                </a>

                {item.submenu && (
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )
                    }
                    className="px-4 py-3 text-yellow-700"
                    aria-label={`Toggle ${item.name} submenu`}
                    aria-expanded={activeDropdown === item.name}
                  >
                    {activeDropdown === item.name ? "−" : "+"}
                  </button>
                )}
              </div>

              {item.submenu && activeDropdown === item.name && (
                <div className="pb-3 pl-4">
                  {item.submenu.map((subitem) => (
                    <a
                      key={subitem.name}
                      href={subitem.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-3 text-sm text-gray-700 hover:text-yellow-700"
                    >
                      {subitem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href="#appointment"
            onClick={() => setMenuOpen(false)}
            className="mt-5 block rounded-md bg-yellow-400 px-4 py-3 text-center font-bold text-black transition hover:bg-yellow-500"
          >
            Book an Appointment
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
