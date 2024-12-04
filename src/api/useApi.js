import { api } from './api'
import { ref } from 'vue'

// export function useApi() {
//   const resData = ref(null)
//   const resErr = ref(null)
//   const load = ref(false)

//   const get = async (url, params = {}) => {
//     try {
//       load.value = true
//       const response = await api.get(url, { params })
//       resData.value = response
//     } catch (err) {
//       resErr.value = err
//     } finally {
//       load.value = false
//     }
//   }

//   const post = async (url, payload) => {
//     try {
//       load.value = true
//       const response = await api.post(url, payload)
//       resData.value = response.data
//     } catch (err) {
//       resErr.value = err
//     } finally {
//       load.value = false
//     }
//   }

//   const put = async (url, payload) => {
//     try {
//       load.value = true
//       const response = await api.put(url, payload)
//       resData.value = response.data
//     } catch (err) {
//       resErr.value = err
//     } finally {
//       load.value = false
//     }
//   }

//   const del = async (url) => {
//     try {
//       load.value = true
//       const response = await api.delete(url)
//       resData.value = response.data
//     } catch (err) {
//       resErr.value = err
//     } finally {
//       load.value = false
//     }
//   }
//   const data = resData.value,
//     loading = load.value,
//     error = resErr.value
//   return { data, error, loading, get, post, put, del }
// }

export const useApi = (url) => {
  const loading = ref(false)
  const error = ref(null)
  const data = ref(null)

  const fetchData = async () => {
    try {
      loading.value = true
      const res = await api.get(url)
      data.value = res.data
    } catch (err) {
      console.error('Error fetching API data:', err)
      error.value = err.message || 'Something went wrong!'
    } finally {
      loading.value = false
    }
  }

  fetchData() // API ma'lumotini olishni boshlaymiz
  return { loading, error, data } // Qaytish qiymatlari
}
