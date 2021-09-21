import { useCallback } from 'react'

export const useMessage = () => {

  return useCallback(text => {
    console.log('useMessage:', text);
  }, [])
}
