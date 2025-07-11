import Header from '@/components/Header'
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <main className='root-container bg-[#111624]'>
        <div className='flex flex-col mx-auto max-w-7xl items-center'>
            <Header />
            <div className='mt-20 pb-20'>
                {children}
            </div>
        </div>
    </main>
  ) 
}

export default layout 