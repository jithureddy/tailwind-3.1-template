import useSWR from 'swr'
import { API_URLS } from 'constants/apiUrls'

export function useUser(userId: string | undefined) {
  return useSWR(`${API_URLS.USERS}/${userId}`)
}
