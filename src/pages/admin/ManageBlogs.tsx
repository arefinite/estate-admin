import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const ManageBlogs = () => {
  return (
    <main className='flex flex-col gap-8 w-full'>
      <h1 className='text-xl font-bold'>Manage Developer</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>SL</TableHead>
            <TableHead>Blog Title</TableHead>
            <TableHead>Published Date</TableHead>

            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>1</TableCell>
            <TableCell>This is sample blog 1 description</TableCell>
            <TableCell>22-05-2024</TableCell>
            <TableCell className='text-right space-x-2'>
              <Button variant='secondary'>Update</Button>
              <Button variant='destructive'>Delete</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>2</TableCell>
            <TableCell>This is sample blog 2 description</TableCell>
            <TableCell>21-05-2024</TableCell>
            <TableCell className='text-right space-x-2'>
              <Button variant='secondary'>Update</Button>
              <Button variant='destructive'>Delete</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>3</TableCell>
            <TableCell>This is sample blog 3 description</TableCell>
            <TableCell>20-05-2024</TableCell>
            <TableCell className='text-right space-x-2'>
              <Button variant='secondary'>Update</Button>
              <Button variant='destructive'>Delete</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  )
}
export default ManageBlogs
