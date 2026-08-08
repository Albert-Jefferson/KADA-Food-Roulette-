import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { restaurantApi, type RestaurantFilters } from '@/api';

export function useRestaurants(filters?: RestaurantFilters) {
  const restaurantsQuery = useQuery({
    queryKey: ['restaurants', filters],
    queryFn: () => restaurantApi.list(filters),
  });

  return {
    restaurants: restaurantsQuery.data ?? [],
    isLoading: restaurantsQuery.isLoading,
    error: restaurantsQuery.error,
  };
}

export function useNearbyRestaurants(lat: number, lng: number, radius = 5) {
  const restaurantsQuery = useQuery({
    queryKey: ['restaurants', 'nearby', lat, lng, radius],
    queryFn: () => restaurantApi.nearby(lat, lng, radius),
    enabled: !!lat && !!lng,
  });

  return {
    restaurants: restaurantsQuery.data ?? [],
    isLoading: restaurantsQuery.isLoading,
    error: restaurantsQuery.error,
  };
}

export function useRestaurant(id: string) {
  const restaurantQuery = useQuery({
    queryKey: ['restaurant', id],
    queryFn: () => restaurantApi.get(id),
    enabled: !!id,
  });

  return {
    restaurant: restaurantQuery.data,
    isLoading: restaurantQuery.isLoading,
    error: restaurantQuery.error,
  };
}

export function useCreateRestaurant() {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: restaurantApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] });
    },
  });

  return {
    create: createMutation.mutateAsync,
    isCreating: createMutation.isPending,
    error: createMutation.error,
  };
}
