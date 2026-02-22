import React from 'react'
import { Button } from '../ui/button'
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export const LearnButton = () => {
  return (
    <>
     <Button variant="destructive" className='h-32 w-32'>Click</Button>
     <Button variant="default">Click</Button>
     <Button variant="aspire">Click</Button>
     
    </>
  )
}
