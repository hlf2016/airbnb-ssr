import { http } from '../utils/http'

export function yesOrNo() {
  return http.httpGet('https://yesno.wtf/api', {})
}
