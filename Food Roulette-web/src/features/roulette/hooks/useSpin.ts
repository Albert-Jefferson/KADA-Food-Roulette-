import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { rouletteApi } from '@/api';
import { SPIN_DURATION_MS } from '@/lib';

export function useSpin() {
  const queryClient = useQueryClient();

  const spinMutation = useMutation({
    mutationFn: rouletteApi.spin,
    onSuccess: () => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const isSpinning = spinMutation.isPending;

  return {
    spin: spinMutation.mutateAsync,
    result: spinMutation.data,
    isSpinning,
    error: spinMutation.error,
    reset: spinMutation.reset,
  };
}
