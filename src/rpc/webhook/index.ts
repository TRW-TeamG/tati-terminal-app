import { apiRequest } from '@/utils/api'

export const verifyAsset = async (mint: string) => {
  const response = await apiRequest('/assets/mint', {
    method: 'POST',
    body: JSON.stringify({ mint }),
    requireAuth: true,
  })
  return response as { name: string; collection: string; mint: string; image: string }
}
