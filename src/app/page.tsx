import { Button } from '@/components/ui/button'
import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
import { LogIn, LogInIcon } from 'lucide-react'
import FileUpload from '@/components/ui/FileUpload'

export default async function Home () {
  const { userId } = await auth()
  const isAuth = !!userId
  return (
    <div className='w-screen min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='mr-3 text-5xl font-semibold'>Chat with any PDF</h1>
          <UserButton afterSignOutUrl='/' />
        </div>
        <div className='flex mt-2 items-center'>
          {isAuth && <Button>Go to Chats</Button>}
        </div>
        <p className='max-w-xl mt-1 text-lg'>
          Join absolutly no one to answer questions about and understand nothing
          at all whatsoever.
        </p>

        <div className='w-full mt-4'>
          {isAuth ? (
            <FileUpload/>
          ) : (
            <Link href='/sign-in'>
              <Button className='items-center text-center'>
                Login to get started
                <LogIn className='w-4 m-4 ml-2' />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
