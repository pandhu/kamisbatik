import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'http://endpoint.kamisbatik.com'
  })
}
