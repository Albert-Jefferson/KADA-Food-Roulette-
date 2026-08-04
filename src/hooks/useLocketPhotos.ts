import { useState, useEffect } from 'react';

export interface LocketPhoto {
  id: string;
  dataUrl: string;
  createdAt: number;
}

export function useLocketPhotos() {
  const [photos, setPhotos] = useState<LocketPhoto[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('locket_photos');
    if (saved) {
      try {
        setPhotos(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse locket photos', e);
      }
    }
  }, []);

  const addPhoto = (dataUrl: string) => {
    const newPhoto: LocketPhoto = {
      id: Math.random().toString(36).substr(2, 9),
      dataUrl,
      createdAt: Date.now(),
    };
    
    setPhotos((prev) => {
      const newPhotos = [newPhoto, ...prev];
      localStorage.setItem('locket_photos', JSON.stringify(newPhotos));
      return newPhotos;
    });
  };

  return { photos, addPhoto };
}
