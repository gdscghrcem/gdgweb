export interface GalleryItem {
    id: string;
    type: 'image' | 'video';
    src: string;
    alt: string;
  }
  
  export interface GallerySection {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    items: GalleryItem[];
  }
  
  export const gallerySections: GallerySection[] = [
    {
      id: 'genAi-2024',
      title: 'GenAI-2024',
      description: 'The Gen AI Event .',
      coverImage: 'https://i.pinimg.com/736x/d4/37/0c/d4370cfb8a33ae5556fb9587996300f4.jpg',
      items: [
        { id: '1', type: 'image', src: 'https://i.pinimg.com/736x/d4/37/0c/d4370cfb8a33ae5556fb9587996300f4.jpg', alt: 'This is alt !' },
        { id: '2', type: 'video', src: 'https://www.youtube.com/shorts/sRFZyMo-3cQ', alt: 'This is alt !' },
        { id: '3', type: 'image', src: '/placeholder.svg?height=600&width=800', alt: 'Workshop Session' },
        { id: '4', type: 'image', src: '/placeholder.svg?height=600&width=800', alt: 'This is alt !' },
      ],
    },
    {
      id: 'code-for-govtech',
      title: 'CODE FOR GOVERNEMENT TECHNOLOGY',
      description: 'This is an super engaging event with treat 😋',
      coverImage: 'https://imgs.search.brave.com/k6SsbCEbSY0CEQraAlQRntfWcqztiB4r4GRvDuWy7nY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/NTMwNDc4Ni9waG90/by93b21hbi11c2lu/Zy1pbnRlcmFjdGl2/ZS10b3VjaHNjcmVl/bi1kaXNwbGF5LWF0/LXRlY2hub2xvZ3kt/ZXhoaWJpdGlvbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/bEVaZUktbEo3Z2Zp/ZzllT0g5Z1gwSl9O/cUJScGlfQ1NzUDF4/aFVYdVRncz0',
      items: [
        { id: '1', type: 'image', src: 'https://imgs.search.brave.com/k6SsbCEbSY0CEQraAlQRntfWcqztiB4r4GRvDuWy7nY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/NTMwNDc4Ni9waG90/by93b21hbi11c2lu/Zy1pbnRlcmFjdGl2/ZS10b3VjaHNjcmVl/bi1kaXNwbGF5LWF0/LXRlY2hub2xvZ3kt/ZXhoaWJpdGlvbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/bEVaZUktbEo3Z2Zp/ZzllT0g5Z1gwSl9O/cUJScGlfQ1NzUDF4/aFVYdVRncz0', alt: 'This is alt !' },
        { id: '2', type: 'video', src: 'https://www.example.com/io-extended-2023-recap.mp4', alt: 'This is alt !' },
        { id: '3', type: 'image', src: '/placeholder.svg?height=600&width=800', alt: 'Live Coding Session' },
      ],
    }
  ];
  
  