import { AngularEditorConfig } from "@kolkov/angular-editor";

export const AngularEditorConf: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  minHeight: "3rem",
  placeholder: "Enter text here...",
  translate: "no",
  defaultParagraphSeparator: "p",
  // defaultFontName: "Arial",
  customClasses: [
    // {
    //   name: "quote",
    //   class: "quote",
    // },
    // {
    //   name: 'redText',
    //   class: 'redText'
    // },
    // {
    //   name: "titleText",
    //   class: "titleText",
    //   tag: "h1",
    // },
  ],
  toolbarHiddenButtons: [
    [
      // 'undo',
      // 'redo',
      // 'bold',
      // 'italic',
      // 'underline',
      "strikeThrough",
      "subscript",
      "superscript",
      "justifyLeft",
      "justifyCenter",
      "justifyRight",
      "justifyFull",
      "indent",
      "outdent",
      // 'insertUnorderedList',
      // 'insertOrderedList',
      "heading",
      "fontName",
    ],
    [
      // "fontSize",
      "textColor",
      "backgroundColor",
      "customClasses",
      "link",
      "unlink",
      "insertImage",
      "insertVideo",
      "insertHorizontalRule",
      "removeFormat",
      "toggleEditorMode",
    ],
  ],
};
