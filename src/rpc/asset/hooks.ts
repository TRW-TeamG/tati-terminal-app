import { useQuery } from '@tanstack/react-query'

import { apiRequest } from '@/utils/api'

export const useUnrewarded = () => {
  return useQuery<number>({
    queryKey: ['unrewarded'],
    queryFn: async () => {
      const response = await apiRequest('/tasks/unrewarded')
      return response as number
    },
  })
}
