import React from 'react'
import { useAppSelector } from '@app/hooks'

const useFolderListHook = () => {
  const folders = useAppSelector((state) => state.folders)

  return {
    folders
  }
}

export default useFolderListHook
