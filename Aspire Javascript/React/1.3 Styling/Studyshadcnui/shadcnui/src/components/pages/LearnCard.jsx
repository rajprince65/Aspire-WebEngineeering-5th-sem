import React from 'react'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const LearnCard = () => {
  return (
    <>
        <Card>
            <CardHeader>
                <CardTitle>BioData</CardTitle>
                <CardDescription>Raj shahis professor at aspore college</CardDescription>
                <CardAction>Please call him</CardAction>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    
    </>
  )
}
