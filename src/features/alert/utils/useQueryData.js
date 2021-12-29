import { useEffect, useState } from "react"

export const useQueryData = (promise) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  if (!promise.then || typeof promise.then !== 'function') throw new Error('请传入Promise!')
  setLoading(true)
  promise.then((res) => {
    setLoading(false)
    const { result, code, success } = res.data
    if (code === 200 && success) {
      setData(result)
    }
  }).catch((e) => {
    setError(e)
  })

  return {
    data, loading, error
  }
}