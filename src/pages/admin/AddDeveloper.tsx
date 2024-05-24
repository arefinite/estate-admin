import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { Editor as TinyMCEEditor } from 'tinymce'; 

const AddDeveloper = () => {
  const editorRef = useRef<TinyMCEEditor | null>(null); // Use the specific TinyMCE editor type

  return (
    <section className='flex flex-col gap-8'>
      <h1 className='text-xl font-bold'>Add dubai developer</h1>
      <form className='flex flex-col gap-4'>
        <div className='space-y-2'>
          <span>Enter developer name</span>
          <Input placeholder='Enter the title' />
        </div>
        <div className='space-y-2'>
          <span>Select a logo of developer</span>
          <Input type='file' />
        </div>
        <div className='space-y-2'>
          <span>Developer information</span>
          
          <Editor
            apiKey='h55lzz0adkr96de4cvidi9s9phsz6d6nfk0uhc26afswhqxj'
            onInit={(_evt, editor) => {
              if (editor !== null) {
                editorRef.current = editor;
              }
            }}
            initialValue="<p>Please start typing...</p>"
            init={{
              height: 350,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
        </div>
        <Button>Save</Button>
      </form>
    </section>
  );
}
export default AddDeveloper