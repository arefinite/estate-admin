import { Button } from '@/components/ui/button'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const ManageProperties = () => {
  return (
    <main className='flex flex-col gap-8 w-full'>
      <h1 className='text-xl font-bold'>Manage Properties</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>SL</TableHead>
            <TableHead>Property Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Developer</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>1</TableCell>
            <TableCell>Demo property name</TableCell>
            <TableCell>Demo location</TableCell>
            <TableCell>AED 5000000</TableCell>
            <TableCell>Omniyat</TableCell>
            <TableCell className='text-right space-x-2'>
              <Button variant='secondary'>Update</Button>
              <Button variant='destructive'>Delete</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>2</TableCell>
            <TableCell>Demo property name</TableCell>
            <TableCell>Demo location</TableCell>
            <TableCell>AED 5000000</TableCell>
            <TableCell>Omniyat</TableCell>
            <TableCell className='text-right space-x-2'>
              <Button variant='secondary'>Update</Button>
              <Button variant='destructive'>Delete</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>3</TableCell>
            <TableCell>Demo property name</TableCell>
            <TableCell>Demo location</TableCell>
            <TableCell>AED 5000000</TableCell>
            <TableCell>Omniyat</TableCell>
            <TableCell className='text-right space-x-2'>
              <Button variant='secondary'>Update</Button>
              <Button variant='destructive'>Delete</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </main>
  )
}
export default ManageProperties
