import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { locketApi, type CreateLocketRequest } from '@/api';

export function useLockets(visibility?: 'PRIVATE' | 'FRIENDS' | 'PUBLIC') {
  const locketsQuery = useQuery({
    queryKey: ['lockets', visibility],
    queryFn: () => locketApi.list(visibility),
  });

  return {
    lockets: locketsQuery.data ?? [],
    isLoading: locketsQuery.isLoading,
    error: locketsQuery.error,
  };
}

export function useLocket(id: string) {
  const locketQuery = useQuery({
    queryKey: ['locket', id],
    queryFn: () => locketApi.get(id),
    enabled: !!id,
  });

  return {
    locket: locketQuery.data,
    isLoading: locketQuery.isLoading,
    error: locketQuery.error,
  };
}

export function useCreateLocket() {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (data: CreateLocketRequest) => locketApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lockets'] });
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  return {
    create: createMutation.mutateAsync,
    isCreating: createMutation.isPending,
    error: createMutation.error,
  };
}

export function useDeleteLocket() {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: locketApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lockets'] });
    },
  });

  return {
    deleteLocket: deleteMutation.mutateAsync,
    isDeleting: deleteMutation.isPending,
  };
}
