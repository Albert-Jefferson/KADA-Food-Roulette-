import { useState } from 'react';

type FilterCategory = 'Mức giá' | 'Khoảng cách' | 'Gu ẩm thực' | 'Khẩu vị';

interface FilterState {
  label: FilterCategory;
  opts: string[];
  active: string;
}

const INITIAL_FILTERS: FilterState[] = [
  { label: 'Mức giá', opts: ['$', '$$', '$$$', '$$$$'], active: '$' },
  { label: 'Khoảng cách', opts: ['Gần (<2km)', 'Trung bình (2-5km)', 'Xa (>5km)'], active: 'Trung bình (2-5km)' },
  { label: 'Gu ẩm thực', opts: ['Ăn no', 'Ăn nhanh', 'Cơm', 'Đồ nước'], active: 'Cơm' },
  { label: 'Khẩu vị', opts: ['Chua', 'Cay', 'Mặn', 'Ngọt'], active: 'Cay' },
];

export function useHomeFilters() {
  const [filters, setFilters] = useState<FilterState[]>(INITIAL_FILTERS);

  const setFilterActive = (label: FilterCategory, option: string) => {
    setFilters((prev) =>
      prev.map((f) =>
        f.label === label ? { ...f, active: option } : f
      )
    );
  };

  return {
    filters,
    setFilterActive,
  };
}
