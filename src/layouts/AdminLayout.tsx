import { AdminFooter, AdminHeader, AdminSideNav } from '@/components'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <AdminHeader />
      <section className='center flex gap-8 flex-1 mt-4 mb-4'>
        <AdminSideNav />
        <Outlet />
      </section>
      <AdminFooter />
    </div>
  )
}
export default AdminLayout
