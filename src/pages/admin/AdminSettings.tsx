import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const AdminSettings = () => {
  return (
    <section className='flex flex-col gap-4'>
      <h1 className='text-xl font-bold'>Change Password</h1>
      <form className='flex flex-col gap-4 w-72'>
        <div className='space-y-2'>
          <Input placeholder='Enter Previous Password' />
        </div>
        <div className='space-y-2'>
          <Input placeholder='Enter New Password' />
        </div>
        <div className='space-y-2'>
          <Input placeholder='Confirm New Password' />
        </div>
        <Button>Save</Button>
      </form>
    </section>
  )
}
export default AdminSettings
