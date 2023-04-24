import { QuillModules } from 'ngx-quill';

export const quillModules: QuillModules = {
  toolbar: [
    [{ header: 2 }, { header: 3 }, { font: [] }],
    [{ color: [] }, { background: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
  ],
  clipboard: {
    matchVisual: false,
  },
};

export const quillFormats = [
  'header',
  'color',
  'background',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
];
