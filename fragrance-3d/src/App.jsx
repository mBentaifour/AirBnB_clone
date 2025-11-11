import { useState } from 'react'
import Scene3D from './components/Scene3D'
import './App.css'

function App() {
  const [selectedFragrance, setSelectedFragrance] = useState(null)

  const fragrances = [
    {
      id: 1,
      name: "Crimson Passion",
      description: "A bold and seductive blend of rose, amber, and vanilla",
      price: "$189",
      color: "#8B0000",
      notes: ["Rose", "Amber", "Vanilla", "Musk"]
    },
    {
      id: 2,
      name: "Ruby Noir",
      description: "Dark and mysterious with hints of oud and leather",
      price: "$225",
      color: "#DC143C",
      notes: ["Oud", "Leather", "Tobacco", "Patchouli"]
    },
    {
      id: 3,
      name: "Scarlet Dreams",
      description: "Fresh and elegant with citrus and jasmine undertones",
      price: "$165",
      color: "#FF6B6B",
      notes: ["Bergamot", "Jasmine", "Cedar", "White Musk"]
    },
    {
      id: 4,
      name: "Velvet Rose",
      description: "Luxurious rose petals with warm sandalwood base",
      price: "$199",
      color: "#B22222",
      notes: ["Rose", "Sandalwood", "Iris", "Tonka Bean"]
    }
  ]

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-ruby-800/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gold-400 text-shadow-gold">ROUGE</h1>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#home" className="text-white hover:text-gold-400 transition-colors">Home</a>
            <a href="#collection" className="text-white hover:text-gold-400 transition-colors">Collection</a>
            <a href="#about" className="text-white hover:text-gold-400 transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-gold-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-ruby-900/20 via-transparent to-transparent"></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-ruby-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-crimson-700 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
          <div className="text-center lg:text-left space-y-6">
            <h2 className="text-7xl lg:text-8xl font-bold text-gold-400 text-shadow-gold leading-tight">
              Essence of
              <span className="block text-white">Elegance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-xl">
              Discover our exclusive collection of luxury fragrances, crafted with the finest ingredients 
              to capture the essence of sophistication and allure.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-ruby-600 hover:bg-ruby-700 text-white font-semibold rounded-lg transition-all glow-red hover:scale-105">
                Explore Collection
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black font-semibold rounded-lg transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="h-[600px] relative">
            <Scene3D bottleColor="#8B0000" autoRotate={true} />
          </div>
        </div>
      </section>

      <section id="collection" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ruby-950/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-gold-400 text-shadow-gold mb-4">Our Collection</h2>
            <p className="text-xl text-gray-300">Handcrafted perfumes for the discerning connoisseur</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fragrances.map((fragrance) => (
              <div
                key={fragrance.id}
                className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-ruby-800/30 hover:border-gold-400/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedFragrance(fragrance)}
              >
                <div className="h-64 mb-6 relative overflow-hidden rounded-xl">
                  <Scene3D bottleColor={fragrance.color} autoRotate={false} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{fragrance.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{fragrance.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {fragrance.notes.slice(0, 3).map((note, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-ruby-900/50 text-gold-300 rounded-full border border-ruby-700/50">
                      {note}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gold-400">{fragrance.price}</span>
                  <button className="px-4 py-2 bg-ruby-600 hover:bg-ruby-700 text-white text-sm font-semibold rounded-lg transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-6xl font-bold text-gold-400 text-shadow-gold">The Art of Perfumery</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Each fragrance in our collection is a masterpiece, meticulously crafted by world-renowned perfumers. 
            We source only the rarest and most exquisite ingredients from around the globe, ensuring every bottle 
            embodies luxury, sophistication, and timeless elegance.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-4">
              <div className="text-5xl text-ruby-500">✦</div>
              <h3 className="text-2xl font-bold text-white">Premium Ingredients</h3>
              <p className="text-gray-400">Sourced from the finest suppliers worldwide</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl text-ruby-500">✦</div>
              <h3 className="text-2xl font-bold text-white">Master Craftsmanship</h3>
              <p className="text-gray-400">Created by award-winning perfumers</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl text-ruby-500">✦</div>
              <h3 className="text-2xl font-bold text-white">Timeless Elegance</h3>
              <p className="text-gray-400">Designs that transcend trends</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-ruby-800/30 bg-black/40">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gold-400 mb-4">ROUGE</h3>
          <p className="text-gray-400 mb-6">Luxury Fragrances Since 2025</p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>

      {selectedFragrance && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedFragrance(null)}
        >
          <div
            className="bg-gradient-to-br from-ruby-950 to-black border border-gold-400/30 rounded-2xl p-8 max-w-2xl w-full glow-gold"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-96">
                <Scene3D bottleColor={selectedFragrance.color} autoRotate={true} />
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-gold-400">{selectedFragrance.name}</h3>
                <p className="text-gray-300">{selectedFragrance.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gold-300 mb-3">FRAGRANCE NOTES</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedFragrance.notes.map((note, idx) => (
                      <span key={idx} className="px-4 py-2 bg-ruby-900/50 text-white rounded-lg border border-ruby-700/50">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-6 border-t border-ruby-800/50">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-gold-400">{selectedFragrance.price}</span>
                    <span className="text-sm text-gray-400">50ml Eau de Parfum</span>
                  </div>
                  <button className="w-full py-4 bg-ruby-600 hover:bg-ruby-700 text-white font-semibold rounded-lg transition-all glow-red">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedFragrance(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
