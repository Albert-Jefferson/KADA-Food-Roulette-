import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface DishItem {
  id: string;
  name: string;
}

export function useGroupSpin() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [dishes, setDishes] = useState<DishItem[]>([
    { id: '1', name: 'Phở Bò' },
    { id: '2', name: 'Cơm Tấm' },
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const addDish = () => {
    if (!inputValue.trim()) return;
    const newDish: DishItem = {
      id: Math.random().toString(36).substr(2, 9),
      name: inputValue.trim(),
    };
    setDishes((prev) => [...prev, newDish]);
    setInputValue('');
  };

  const removeDish = (id: string) => {
    setDishes((prev) => prev.filter((d) => d.id !== id));
  };

  const handleSpin = () => {
    if (dishes.length < 2 || isSpinning) return;
    setIsSpinning(true);
    
    // Choose random dish
    const selectedIndex = Math.floor(Math.random() * dishes.length);
    const selectedDish = dishes[selectedIndex];
    
    // Calculate rotation: spin at least 5 times (1800deg) + angle to selected item
    // Angle per item is 360 / length.
    const sliceAngle = 360 / dishes.length;
    // We want the selected slice to end up at the top (which is -90deg in our SVG setup, or 270deg).
    // A simple random rotation for visual effect:
    const randomDeg = Math.floor(Math.random() * 360) + 1800;
    setRotation(randomDeg);

    setTimeout(() => {
      setIsSpinning(false);
      navigate('/spin-result', { state: { customDish: selectedDish } });
    }, 3000);
  };

  return {
    inputValue,
    setInputValue,
    dishes,
    addDish,
    removeDish,
    handleSpin,
    isSpinning,
    rotation,
  };
}
