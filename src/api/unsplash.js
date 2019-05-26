import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID c81f8e6caa5c57651121ce6a910f9d8c41c3f0c4889a296b1b56b554755a048c'
  }
})
