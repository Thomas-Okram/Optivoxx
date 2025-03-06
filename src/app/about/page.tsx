export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 mt-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      {/* Gradient background for the futuristic effect */}

      {/* Introductory Card */}
      <div className="max-w-3xl mx-auto mb-8 p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-5xl font-bold text-center text-emerald-500 mb-6">
          About Optivoxx Technologies
        </h1>
        <p className="text-lg text-white">
          At <strong>Optivoxx Technologies</strong>, we are driven by a passion
          for innovation and excellence. Our mission is to empower businesses
          with cutting-edge software solutions and equip the next generation of
          tech professionals with the skills they need to succeed in
          today&apos;s competitive job market.
        </p>
      </div>

      {/* Card: Mission */}
      <div className="max-w-3xl mx-auto mb-8 p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeIn animate__delay-2s">
        <h2 className="text-3xl font-semibold text-emerald-500 mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-white">
          We aim to bridge the gap between businesses and technology by offering
          tailored solutions that help organizations improve efficiency,
          increase productivity, and drive growth. Additionally, our IT career
          training platform empowers students with the necessary skills to
          launch successful careers in the tech industry.
        </p>
      </div>

      {/* Card: What We Do */}
      <div className="max-w-3xl mx-auto mb-8 p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeIn animate__delay-3s">
        <h2 className="text-3xl font-semibold text-emerald-500 mb-4">
          What We Do
        </h2>
        <p className="text-lg text-white mb-4">
          - Provide customized software development solutions for businesses.
          <br />
          - Offer career-oriented IT training with 100% job assistance.
          <br />
          - Enable real-time business insights with AI and data analytics.
          <br />
          - Help professionals upskill with industry-relevant courses and
          programs.
          <br />
        </p>
      </div>

      {/* Card: Why Choose Us */}
      <div className="max-w-3xl mx-auto mb-8 p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeIn animate__delay-4s">
        <h2 className="text-3xl font-semibold text-emerald-500 mb-4">
          Why Choose Us
        </h2>
        <p className="text-lg text-white">
          With years of expertise in both software development and education, we
          bring a unique blend of business insights and technical knowledge to
          every project we undertake. Our &quot;Pay after Placement&quot; model
          ensures that students can focus on their education without financial
          pressure, and our client-first approach guarantees that every solution
          we deliver is tailored to meet your specific needs.
        </p>
      </div>

      {/* Call to Action Button */}
      <div className="text-center mt-8 animate__animated animate__fadeIn animate__delay-5s">
        <a
          href="#contact"
          className="px-6 py-3 bg-emerald-600 text-white text-lg font-semibold rounded-md hover:bg-emerald-700 transition duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}
