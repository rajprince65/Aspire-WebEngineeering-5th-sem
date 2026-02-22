import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

const store = (set, get)=>({
    count:5,
    myinfo:"we are inside store",
    increment:()=>{
        set((state)=>({count:state.count+1}))
    },
    decrement:()=>{

        const {count}=get()
        set({count:count-1})
    },
    capitalize:()=>{
        const {myinfo}=get()
        set({
            myinfo:myinfo.toUpperCase()
        })
    }

})
export const useMyStore = create(devtools(persist(store,{name:"myStore"})))