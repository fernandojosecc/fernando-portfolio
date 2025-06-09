// Navbar component that stays fixed at the top of the page
export default function Navbar() {
  return (
    <header
      className="fixed top-0 w-full h-[80px] px-6 flex items-center justify-between
                 bg-white/80 backdrop-blur-md z-50"
    >
      {/* Left side: Profile picture */}
      <img
        src="/profile.jpg"
        alt="Portrait of Fernando"
        className="w-10 h-10 rounded-full object-cover"
      />

      {/* Right side: Navigation links and button, shown only on medium and bigger screens */}
      <nav className="hidden md:flex items-center gap-6">
        {/* Link that scrolls to the projects section */}
        <a href="#projects" className="text-gray-800 font-medium hover:underline">
          Projects
        </a>

        {/* Link to GitHub profile, opens in a new tab */}
        <a
          href="https://github.com/fernandojosecc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 font-medium hover:underline"
        >
          GitHub
        </a>

        {/* Button to start a new project */}
        <button
          className="bg-white text-black px-4 py-2 rounded-full shadow-md
                     hover:shadow-lg transition-shadow"
        >
          Start a Project
        </button>
      </nav>
    </header>
  );
}
