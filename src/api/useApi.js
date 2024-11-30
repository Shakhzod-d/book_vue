import {api} from './api'
import { ref } from 'vue'

export function useApi() {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const get = async (url, params = {}) => {
    try {
      loading.value = true
      const response = await api.get(url, { params })
      data.value = response.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const post = async (url, payload) => {
    try {
      loading.value = true
      const response = await api.post(url, payload)
      data.value = response.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const put = async (url, payload) => {
    try {
      loading.value = true
      const response = await api.put(url, payload)
      data.value = response.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const del = async (url) => {
    try {
      loading.value = true
      const response = await api.delete(url)
      data.value = response.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, get, post, put, del }
}
