import {
  Card,
  CardContent,
  CardDescription,
  
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const AdminDashboard = () => {
  return (
    <main>
      <section className='flex flex-col md:flex-row gap-4'>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Listed Projects</CardTitle>
            <CardDescription>
              Your total projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>50</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Rented Projects</CardTitle>
            <CardDescription>
             Your rented projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>30</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Total Developers</CardTitle>
            <CardDescription>
              Total developer onboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>10</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Area Coverage</CardTitle>
            <CardDescription>
              Total Area Coverage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>20</h1>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
export default AdminDashboard
