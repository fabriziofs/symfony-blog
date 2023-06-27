import {Editor} from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'

const postContent = document.querySelector('span[data-post-content]');
const postContentInput = document.querySelector('#post_content');

new Editor({
    element: document.querySelector('.tip-tap'),
    extensions: [
        StarterKit,
        Highlight,
        Typography,
    ],
    content: postContent.innerHTML,
    onUpdate: ({ editor }) => {
        postContentInput.value = editor.getHTML();
    },
})
