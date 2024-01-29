import Sidebar from '@/components/dashboard/sidebar'
import React, { PropsWithChildren } from 'react'

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className='h-full'>
        <Sidebar/>
        <div className='pl-[60px] h-full'>
          {children}
        </div>
    </main>
  )
}

export default DashboardLayout