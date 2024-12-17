'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GallerySection as GallerySectionType, gallerySections } from '../lib/gallary-data'
import GalleryModal from '../components/Gallery-model'


export default function Gallery() {
  const [selectedSection, setSelectedSection] = useState<GallerySectionType | null>(null)

  return (
    <div className="container mx-auto my-12 px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">GDG Event Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gallerySections.map((section) => (
          <GallerySection
            key={section.id}
            section={section}
            onClick={() => setSelectedSection(section)}
          />
        ))}
      </div>
      {selectedSection && (
        <GalleryModal
          section={selectedSection}
          onClose={() => setSelectedSection(null)}
        />
      )}
    </div>
  )
}

function GallerySection({ section, onClick }: { section: GallerySectionType; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img
        src={section.coverImage}
        alt={section.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
        <p className="text-gray-600">{section.description}</p>
      </div>
    </motion.div>
  )
}

