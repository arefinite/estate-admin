import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Editor } from '@tinymce/tinymce-react'
import { useRef } from 'react'
import { Editor as TinyMCEEditor } from 'tinymce'

const amenities = [
  'Swiming Pool',
  'Gym',
  'Parking',
  'Air Conditioning',
  'High-Speed Internet',
  'Jacuzzi',
  'Kids Club',
  'Video Security',
  'Restaurant',
  'Concierge Service',
  'Breakfast',
  'Pets Allowed',
  'Elevator in Building',

  'Free Parking on Premises',
  'Smoking Allowed',
]

const AddProperty = () => {
  const editorRef = useRef<TinyMCEEditor | null>(null) // Use the specific TinyMCE editor type

  return (
    <section className='flex flex-col gap-8'>
      <h1 className='text-xl font-bold'>Add Property</h1>
      <form className='flex flex-col gap-4'>
        <div className='space-y-2'>
          <span>Enter property title</span>
          <Input />
        </div>
        <div className='space-y-2'>
          <span>Enter property location</span>
          <Input />
        </div>
        <div className='space-y-2'>
          <span>Enter price from</span>
          <Input type='number' />
        </div>
        <div className='space-y-2'>
          <span>Enter handover estimate</span>
          <Input />
        </div>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Property type' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Property type</SelectLabel>
              <SelectItem value='apartment'>Apartment</SelectItem>
              <SelectItem value='Villa'>Villa</SelectItem>
              <SelectItem value='penthouse'>Penthouse</SelectItem>
              <SelectItem value='townhouse'>Townhouse</SelectItem>
              <SelectItem value='land-plots'>Land Plots</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Developer' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Developer</SelectLabel>
              <SelectItem value='omniyat'>Omniyat</SelectItem>
              <SelectItem value='emaar'>Emaar</SelectItem>
              <SelectItem value='damac'>Damac</SelectItem>
              <SelectItem value='meraas'>Meraas</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className='space-y-2'>
          <span>Select images for this property</span>
          <Input type='file' multiple />
        </div>
        <div className='space-y-2'>
          <span>Floor plan image</span>
          <Input type='file' />
        </div>
        <div className='space-y-2'>
          <span>Property Description</span>

          <Editor
            apiKey='h55lzz0adkr96de4cvidi9s9phsz6d6nfk0uhc26afswhqxj'
            onInit={(_evt, editor) => {
              if (editor !== null) {
                editorRef.current = editor
              }
            }}
            initialValue='<p>Please start typing...</p>'
            init={{
              height: 350,
              menubar: false,
              plugins: [
                'advlist',
                'autolink',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'fullscreen',
                'insertdatetime',
                'media',
                'table',
                'code',
                'help',
                'wordcount',
              ],
              toolbar:
                'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
        </div>
        <div className='space-y-2'>
          <span>Amenities</span>
          <div className='flex items-center gap-2 flex-wrap'>
            {amenities.map(amenity => (
              <>
                <Checkbox id={amenity} />
                <label htmlFor={amenity}>{amenity}</label>
              </>
            ))}
          </div>
        </div>
        <div className='space-y-2'>
          <span>Nearby locations</span>
          <div className='grid grid-cols-3 gap-4'>
            <Input placeholder='nearby location #1' />
            <Input placeholder='nearby location #2' />
            <Input placeholder='nearby location #3' />
            <Input placeholder='nearby location #4' />
            <Input placeholder='nearby location #5' />
            <Input placeholder='nearby location #6' />
            <Input placeholder='nearby location #7' />
            <Input placeholder='nearby location #8' />
            <Input placeholder='nearby location #9' />
          </div>
        </div>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Developer' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Developer</SelectLabel>
              <SelectItem value='omniyat'>Omniyat</SelectItem>
              <SelectItem value='emaar'>Emaar</SelectItem>
              <SelectItem value='damac'>Damac</SelectItem>
              <SelectItem value='meraas'>Meraas</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className='space-y-2'>
          <span>Payment plan</span>
          <div className='grid grid-cols-3 gap-4'>
            <Input placeholder='payment plan #1' />
            <Input placeholder='payment plan #2' />
            <Input placeholder='payment plan #3' />
            <Input placeholder='payment plan #4' />
          </div>
        </div>
        <Button>Save</Button>
      </form>
    </section>
  )
}
export default AddProperty
