import React, { useEffect, useState } from 'react';
import './Editor.scss';
// import { convertToRaw } from 'draft-js';
// import bold from '../../assets/bold.svg';
// import italic from '../../assets/Italic.svg';
import { Editor } from 'react-draft-wysiwyg';
// import { EditorState } from 'draft-js';
// import draftToMarkdown from 'draftjs-to-markdown';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function EditorBar() {
  const [editorState, setEditorState] = useState();
  const onEditorStateChange = (value) => {
    setEditorState(value);
  };
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="IconsMenuBarContainer"
        wrapperClassName="editorWrapper"
        editorClassName="textArea"
        placeholder="Enter some text"
        // toolbarOnFocus
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'fontFamily'],
          inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
            bold: { className: 'icons' },
            italic: { className: 'italic' },
            underline: { className: 'icons' },
            strikethrough: { className: 'icons' },
            code: { className: 'bordered-option-classname' }
          },
          blockType: {
            className: 'icons'
          },
          fontSize: {
            className: 'icons'
          },
          fontFamily: {
            className: 'icons'
          }
        }}
      />
      {/* <div {...(editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent())))} /> */}
    </div>
  );
}
export default EditorBar;
