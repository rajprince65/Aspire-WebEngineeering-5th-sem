import { create } from "zustand";

export const useMyStore = create((set)=>(
    {
        count: 0,
        myinfo:"our Aspire college",
        increment: () => set((state)=>({count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
    }
))