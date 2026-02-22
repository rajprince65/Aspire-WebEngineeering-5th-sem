import React from 'react'
import { Button } from '../ui/button'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export const Home = () => {
  return (
    <>
    <div className='flex justify-center items-center h-100'>
        <Button className="bg-primary">Click</Button>
    </div>

       <div className='flex justify-center items-start h-screen'  >

    <Alert>
        
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
            You can add components and dependencies to your app using the cli.
        </AlertDescription>
    
    </Alert>

       </div>

            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Show Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        from our servers.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>


                <div>
                        <Drawer>
                            <DrawerTrigger>Open</DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                </DrawerHeader>
                                <DrawerFooter>
                                <Button>Submit</Button>
                                <DrawerClose>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                            </Drawer>



                </div>

    
    </>
    
  )
}
