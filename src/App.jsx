
import Navbar from "./components/Navbar";

const businessAreas = [
  {
    title: "Investments",
    description:
      "Strategic investments focused on sustainable growth and long-term value creation.",
    icon: "📈",
    id: "investments",
  },
  {
    title: "Real Estate",
    description:
      "Property development, real estate opportunities, and smart property investments.",
    icon: "🏢",
    id: "real-estate",
  },
  {
    title: "Record Label & Media",
    description:
      "Music, talent development, entertainment, and creative media production.",
    icon: "🎵",
    id: "record-label",
  },
  {
    title: "Agriculture",
    description:
      "Agricultural ventures focused on production, supply, and business opportunities.",
    icon: "🌾",
    id: "agriculture",
  },
  {
    title: "Hospitality",
    description:
      "Hospitality ventures designed around quality service and memorable experiences.",
    icon: "🏨",
    id: "hospitality",
  },
  {
    title: "Logistics & Importation",
    description:
      "Trade, importation, distribution, and logistics solutions for growing businesses.",
    icon: "🚚",
    id: "logistics",
  },
];

const goldButton =
  "inline-flex items-center justify-center rounded-md bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-500";

const sectionTitle =
  "mb-4 text-3xl font-extrabold tracking-tight text-black sm:text-4xl";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-black text-white"
      >
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="mb-5 font-bold uppercase tracking-[0.25em] text-yellow-400">
              Welcome to GB Classic Limited
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Building Businesses.
              <span className="block text-yellow-400">
                Creating Impact.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Exploring opportunities across agriculture, media, real estate,
              importation, hospitality, and strategic investments.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#business" className={goldButton}>
                Explore Our Businesses
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-yellow-400 px-6 py-3 font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-300">
              <span>Entrepreneur</span>
              <span className="text-yellow-400">•</span>
              <span>Investor</span>
              <span className="text-yellow-400">•</span>
              <span>Business Strategist</span>
              <span className="text-yellow-400">•</span>
              <span>Philanthropist</span>
            </div>
          </div>

          {/* Replace this placeholder with your own professional photo */}
          <div className="flex min-h-72 items-center justify-center rounded-2xl border border-yellow-400/30 bg-linear-to-br from-gray-900 to-black p-8">
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border-2 border-yellow-400 text-4xl text-yellow-400">
                GB
              </div>
              <p className="text-xl font-bold">GB Classic Limited</p>
              <p className="mt-2 text-sm text-gray-400">
                Business • Leadership • Impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 font-bold uppercase tracking-widest text-yellow-600">
            Who We Are
          </p>

          <h2 className={sectionTitle}>About GB Classic Limited</h2>

          <p className="max-w-3xl text-lg leading-8 text-gray-600">
            GB Classic Limited is a diversified company with interests in agriculture, importation of electronic devices and electric bikes, real estate, business development, and music entertainment through its record label.
            <br></br>

            Beyond business, we are committed to cultural preservation and youth empowerment through Mmirri Nations, our NGO and foundation initiative dedicated to awakening African youths and generations yet unborn to the importance of embracing, preserving, and promoting African culture, traditions, values, and heritage.

            <br></br>
            Through innovation, strategic partnerships, and purposeful initiatives, we aim to create opportunities, drive economic growth, empower communities, and preserve Africa’s rich identity for future generations.

            <br></br>
            Join us in building businesses, creating opportunities, and preserving our heritage. Partner with GB Classic Limited, invest in our vision, and become part of a movement shaping a prosperous and culturally conscious Africa.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Biography", "biography"],
              ["Education", "education"],
              ["Career", "career"],
              ["Businesses", "businesses"],
              ["Achievements", "achievements"],
            ].map(([title, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg"
              >
                <span className="mb-3 block h-1 w-12 rounded bg-yellow-400" />
                <h3 className="font-bold text-black">{title}</h3>
                <span className="mt-3 block text-sm text-yellow-700">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Biography and Profile Sections */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <article id="biography" className="scroll-mt-24 rounded-xl bg-white p-7 shadow-sm">
            <h2 className="mb-3 text-2xl font-bold text-black">Biography</h2>
            <p className="leading-7 text-gray-600">
              Discover the story, values, vision, and experiences behind GB
              Classic Limited.
            </p>
          </article>

          <article id="education" className="scroll-mt-24 rounded-xl bg-white p-7 shadow-sm">
            <h2 className="mb-3 text-2xl font-bold text-black">Education</h2>
            <p className="leading-7 text-gray-600">
              Learn about educational background, professional development,
              and lifelong learning.
            </p>
          </article>

          <article id="career" className="scroll-mt-24 rounded-xl bg-white p-7 shadow-sm">
            <h2 className="mb-3 text-2xl font-bold text-black">Career</h2>
            <p className="leading-7 text-gray-600">
              Explore career milestones, leadership experience, and professional
              accomplishments.
            </p>
          </article>

          <article id="businesses" className="scroll-mt-24 rounded-xl bg-white p-7 shadow-sm">
            <h2 className="mb-3 text-2xl font-bold text-black">Business Journey</h2>
            <p className="leading-7 text-gray-600">
              Follow the growth, ideas, and ventures that shape the company's
              business journey.
            </p>
          </article>

          <article id="achievements" className="scroll-mt-24 rounded-xl bg-white p-7 shadow-sm md:col-span-2">
            <h2 className="mb-3 text-2xl font-bold text-black">Achievements</h2>
            <p className="leading-7 text-gray-600">
              A place to highlight verified milestones, awards, recognitions,
              and completed projects.
            </p>
          </article>
        </div>
      </section>

      {/* Business Section */}
      <section id="business" className="scroll-mt-24 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 font-bold uppercase tracking-widest text-yellow-600">
              Our Business Interests
            </p>
            <h2 className={sectionTitle}>Opportunities Across Industries</h2>
            <p className="leading-7 text-gray-600">
              Explore the sectors in which GB Classic Limited operates or plans
              to develop opportunities. Individual business details can be
              added as they become available.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessAreas.map((business) => (
              <article
                id={business.id}
                key={business.id}
                className="scroll-mt-24 group rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl"
              >
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-yellow-100 text-3xl">
                  {business.icon}
                </span>

                <h3 className="mb-3 text-xl font-bold text-black">
                  {business.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {business.description}
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-block font-bold text-yellow-700 transition group-hover:text-black"
                >
                  Make an enquiry →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* News and Updates */}
      <section id="news" className="scroll-mt-24 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 font-bold uppercase tracking-widest text-yellow-600">
            Stay Informed
          </p>
          <h2 className={sectionTitle}>News & Updates</h2>
          <p className="mb-8 max-w-2xl leading-7 text-gray-600">
            Updates about business developments, events, interviews, milestones,
            and community activities will appear here.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Business Announcements", "announcements"],
              ["Events", "events"],
              ["Interviews", "interviews"],
              ["Achievements", "news-achievements"],
              ["Community Activities", "community"],
            ].map(([title, id]) => (
              <article
                id={id}
                key={id}
                className="scroll-mt-24 rounded-xl border border-gray-200 bg-white p-5"
              >
                <span className="mb-4 block h-1 w-10 bg-yellow-400" />
                <h3 className="font-bold text-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Updates and stories will be published here.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="scroll-mt-24 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 font-bold uppercase tracking-widest text-yellow-600">
            Moments & Memories
          </p>
          <h2 className={sectionTitle}>Our Gallery</h2>
          <p className="mb-8 max-w-2xl leading-7 text-gray-600">
            Photos and videos from business meetings, conferences, awards,
            community events, travels, and projects can be displayed here.
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {["Business Meetings", "Conferences", "Awards", "Community", "Travel", "Projects"].map(
              (label) => (
                <div
                  key={label}
                  className="flex min-h-36 items-end rounded-xl border border-gray-200 bg-linear-to-br from-gray-100 to-gray-300 p-4 sm:min-h-48"
                >
                  <span className="rounded-md bg-black px-3 py-2 text-sm font-bold text-yellow-400">
                    {label}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 bg-black px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 font-bold uppercase tracking-widest text-yellow-400">
              Let's Connect
            </p>
            <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">
              Contact GB Classic Limited
            </h2>
            <p className="leading-7 text-gray-300">
              Have a business proposal, partnership opportunity, media enquiry,
              or question? Send a message using the form.
            </p>

            <div className="mt-8 space-y-4 text-gray-300">
              <p>
                <span className="font-bold text-yellow-400">Phone:</span>{" "}
                Add your business phone number
              </p>
              <p>
                <span className="font-bold text-yellow-400">WhatsApp:</span>{" "}
                Add your WhatsApp contact
              </p>
              <p>
                <span className="font-bold text-yellow-400">Email:</span>{" "}
                Add your business email address
              </p>
              <p>
                <span className="font-bold text-yellow-400">Social Media:</span>{" "}
                Add your official social media links
              </p>
            </div>
          </div>

          <form
            className="rounded-2xl bg-white p-6 text-black shadow-xl sm:p-8"
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thank you for your enquiry. Connect this form to a backend to receive messages.");
            }}
          >
            <h3 className="mb-6 text-2xl font-bold">Send an Enquiry</h3>

            <label className="mb-2 block text-sm font-semibold" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your full name"
              className="mb-5 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            />

            <label className="mb-2 block text-sm font-semibold" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="mb-5 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            />

            <label className="mb-2 block text-sm font-semibold" htmlFor="subject">
              Enquiry Type
            </label>
            <select
              id="subject"
              name="subject"
              required
              defaultValue=""
              className="mb-5 w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            >
              <option value="" disabled>
                Select an enquiry type
              </option>
              <option>Business Partnership</option>
              <option>Investment</option>
              <option>Media Enquiry</option>
              <option>Appointment</option>
              <option>General Enquiry</option>
            </select>

            <label className="mb-2 block text-sm font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              placeholder="How can we help you?"
              className="mb-6 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            />

            <button type="submit" className={`${goldButton} w-full`}>
              Submit Enquiry
            </button>

            <p className="mt-3 text-xs leading-5 text-gray-500">
              This demonstration form does not send emails yet. A backend or
              form service is required to receive enquiries.
            </p>
          </form>
        </div>
      </section>

      {/* Appointment */}
      <section
        id="appointment"
        className="scroll-mt-24 bg-yellow-400 px-6 py-16 text-center"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Let's Discuss Your Next Opportunity
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-900">
            Contact GB Classic Limited to discuss appointments, collaborations,
            and business enquiries.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex rounded-md bg-black px-7 py-3 font-bold text-white transition hover:bg-gray-800"
          >
            Request an Appointment
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <img
                src="/logo.png"
                alt="GB Classic Limited Logo"
                className="h-12 w-12 object-contain sm:h-16 sm:w-16"
  />
            <p className="mt-1 text-sm text-gray-400">
              Business • Leadership • Impact
            </p>
          </div>

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} GB Classic Limited. All rights reserved.
          </p>

          <a href="#home" className="font-semibold text-yellow-400 hover:text-yellow-300">
            Back to Top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
