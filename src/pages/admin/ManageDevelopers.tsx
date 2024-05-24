import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const ManageDevelopers = () => {
  return (
    <main className='flex flex-col gap-8 w-full'>
      <h1 className='text-xl font-bold'>Manage Developer</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>SL</TableHead>
            <TableHead>Developer Name</TableHead>
            <TableHead>Logo</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>1</TableCell>
            <TableCell>OMNIYAT</TableCell>
            <TableCell>LOGO</TableCell>
            <TableCell className='text-right'>
              <Button variant='destructive'>Delete</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>2</TableCell>
            <TableCell>EMAAR</TableCell>
            <TableCell>LOGO</TableCell>
            <TableCell className='text-right'>
              {' '}
              <Button variant='destructive'>Delete</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>3</TableCell>
            <TableCell>DAMAC</TableCell>
            <TableCell>LOGO</TableCell>
            <TableCell className='text-right'>
              {' '}
              <Button variant='destructive'>Delete</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>4</TableCell>
            <TableCell>MERAAS</TableCell>
            <TableCell>LOGO</TableCell>
            <TableCell className='text-right'>
              {' '}
              <Button variant='destructive'>Delete</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  )
}
export default ManageDevelopers
