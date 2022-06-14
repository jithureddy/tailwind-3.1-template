import { resolveApiUrl } from 'utils/resolveApiUrl'
import { API_URLS } from 'constants/apiUrls'

const BASE_APP_URL = 'https://sample-api'
test('API URL', () => {
  expect(resolveApiUrl(API_URLS.PRODUCTS_COUNT)).toBe(`${BASE_APP_URL}/company/dashboard`)
})
