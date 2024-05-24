import { ShieldCheck } from 'lucide-react'
import { Button } from '../ui/button'
import { ModeToggle } from './theme/ModeToggle'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  const [time,setTime] = useState(new Date().toLocaleTimeString())
  const date = new Date().toDateString()
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <header>
      <section className='center flex space-x-4 justify-end items-center py-4'>
        <span>Welcome, Admin</span>
        <Button variant='destructive' asChild><Link to='/administrator/login'>Logout</Link></Button>
        <ModeToggle />
      </section>
      <section>
        <div className='bg-muted py-4 flex items-center'>
          <div className='center flex justify-between'>
            <div className='flex items-center gap-2'>
              <ShieldCheck color='red' size={30} />
              <h1 className='text-xl md:text-2xl font-bold'>Admin Dashboard</h1>
            </div>
            <div className='hidden md:block'>
              {date} | {time}
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}
export default AdminHeader
