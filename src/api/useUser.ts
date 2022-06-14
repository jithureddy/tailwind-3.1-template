import useSWR from 'swr'
import { API_URLS } from 'constants/apiUrls'

export function useUser(userId: any){
	return useSWR(`${API_URLS.USERS}/${userId}`)
}