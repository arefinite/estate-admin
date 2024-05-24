import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
  return (
    <main className='grid w-screen place-items-center h-screen'>
      <section>
        <div className='flex justify-center mb-8 gap-2 items-center'>
          <Lock size={30} color='red' />
          <h1 className='text-2xl font-bold'>Admin Login</h1>
        </div>
        <Tabs defaultValue='account' className='w-[400px]'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='account'>Admin Account</TabsTrigger>
            <TabsTrigger value='website'>Your Website</TabsTrigger>
          </TabsList>
          <TabsContent value='account'>
            <Card>
              <CardHeader>
                <CardTitle>Admin Panel</CardTitle>
                <CardDescription>
                  Enter email and password to login to your admin panel
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                <div className='space-y-1'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    defaultValue='test@gmail.com'
                  />
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='password'>Username</Label>
                  <Input id='password' type='password' defaultValue='123456' />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild><Link to='/admin/dashboard'>Login</Link></Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value='website'>
            <Card>
              <CardHeader>
                <CardTitle>Return to website</CardTitle>
                <CardDescription>
                  You can return back to your website using following link
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                <a href='https://real-estate-client-frontend.netlify.app/' target='_blank'>Return back to website</a>
              </CardContent>
              
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}

export default AdminLogin
