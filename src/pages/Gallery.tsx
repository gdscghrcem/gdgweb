'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GallerySection as GallerySectionType, gallerySections } from '../lib/gallary-data'
import GalleryModal from '../components/Gallery-model'


export default function Gallery() {
  const [selectedSection, setSelectedSection] = useState<GallerySectionType | null>(null)

  return (
    <div className="container px-4 py-12 mx-auto my-12">
      <h2 className="mb-8 text-3xl font-bold text-center">GDG Event Gallery</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      className="overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <img
        src={section.coverImage}
        alt={section.title}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold">{section.title}</h3>
        <p className="text-gray-600">{section.description}</p>
      </div>
    </motion.div>
  )
}

