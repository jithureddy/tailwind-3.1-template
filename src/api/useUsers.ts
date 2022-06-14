import useSWR from 'swr'
import { API_URLS } from 'constants/apiUrls'


export function useUsers(){
	return useSWR(API_URLS.USERS)
}