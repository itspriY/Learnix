/*import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const RichTextEditor = ({ input, setInput }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: input.description || '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      setInput({ ...input, description: html })
    },
  })

  if (!editor) return null

  return (
    <div className="border rounded-md p-2 min-h-[150px]">
      <EditorContent editor={editor} />
    </div>
  )
}

export default RichTextEditor */
import React, { useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const RichTextEditor = ({ input, setInput }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: input.description || '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      setInput((prev) => ({ ...prev, description: html }))
    },
  })

  // ✅ Sync backend data to editor
  useEffect(() => {
    if (editor && input.description !== editor.getHTML()) {
      editor.commands.setContent(input.description || "")
    }
  }, [input.description, editor])

  if (!editor) return null

return (
  <div className="border rounded-md overflow-hidden bg-white">
    
    {/* Toolbar */}
    <div className="flex gap-3 p-2 border-b bg-gray-100 text-sm">
      <button onClick={() => editor.chain().focus().toggleBold().run()}>
        <b>B</b>
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()}>
        <i>I</i>
      </button>
      <button onClick={() => editor.chain().focus().toggleStrike().run()}>
        <s>S</s>
      </button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
        • List
      </button>
    </div>

    {/* Editor */}
    <EditorContent
      editor={editor}
      className="min-h-[150px]"
    />
  </div>
)
}

export default RichTextEditor






