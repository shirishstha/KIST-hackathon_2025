import { Button } from '@/components/ui/button'
import React from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center pt-50 min-h-screen'>
      <Helmet>
        <title>KIST Hackfest | Page Not Found</title>
      </Helmet>
        <div className='flex flex-col items-center space-y-2'>
            <h1 className='gradientEffect text-5xl'>404 </h1>
            <h2 className='font-medium text-lg'>Page Not Found</h2>
            <p className='text-gray-400 mb-5'>We Cannot find the page that you are looking for.</p>
            <Button onClick= {() => navigate('/')}>Go Home</Button>
        </div>
    </div>
  )
}

export default PageNotFound