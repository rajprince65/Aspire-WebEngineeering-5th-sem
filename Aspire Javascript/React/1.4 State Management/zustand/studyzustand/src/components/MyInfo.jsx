import React from 'react'
import { useMyStore } from '../store/store'


export const MyInfo = () => {
    const state= useMyStore()
  return (
    <div>MyInfo: {state.myinfo}</div>
  )
}
