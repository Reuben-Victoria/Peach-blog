import React from 'react';
import './Editor.scss';
import PropTypes from 'prop-types';
import boldImage from 'assets/bold.svg';
import italicImage from 'assets/Italic.svg';
import { Editor } from 'react-draft-wysiwyg';
import underlineIcon from 'assets/underline.svg';
// import textMore from '../../assets/textMore.svg';
import strikeThrough from 'assets/strikethrough.svg';
import alignLeft from 'assets/alignLeft.svg';
import alignCenter from 'assets/alignCenter.svg';
import codeIcon from 'assets/code.svg';
import orderedList from 'assets/orderedList.svg';
import unorderedList from 'assets/unorderedList.svg';
import indent from 'assets/indent.svg';
import outdent from 'assets/outdent.svg';
import justify from 'assets/justify.svg';
import smile from 'assets/smile.svg';
import paragraphMore from 'assets/paragraphMore.svg';
// import { EditorState } from 'draft-js';
// import draftToMarkdown from 'draftjs-to-markdown';

function EditorBar({ editorState, onEditorStateChange, ...rest }) {
  // useEffect(() => {
  //   console.log(editorState);
  // }, [editorState]);

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbar"
        wrapperClassName
        editorClassName="textArea"
        placeholder="Enter some text"
        onEditorStateChange={onEditorStateChange}
        toolbarOnFocus
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'emoji'],
          inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
            bold: { icon: boldImage, className: 'icons' },
            italic: { icon: italicImage, className: 'italic' },
            underline: { icon: underlineIcon, className: 'icons' },
            strikethrough: { icon: strikeThrough, className: 'icons' },
            code: { img: { codeIcon }, className: 'code' }
          },
          blockType: {
            icon: paragraphMore
            // className:
          },
          fontSize: {
            // className: 'icons'
          },

          list: {
            unordered: { icon: unorderedList, className: 'icons' },
            ordered: { icon: orderedList, className: 'icons' },
            indent: { icon: outdent, className: 'icons' },
            outdent: { icon: indent, className: 'icons' }
          },
          textAlign: {
            left: { icon: alignLeft, className: 'icons' },
            center: { icon: alignCenter, className: 'icons' },
            justify: { icon: justify, className: 'icons' }
          },
          emoji: { icon: smile, className: 'icons', popupClassName: 'demo-popup-custom' },
          history: { inDropdown: true }
        }}
        {...rest}
      />
      {/* <div {...(editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent())))} /> */}
    </div>
  );
}
export default EditorBar;

EditorBar.propTypes = {
  editorState: PropTypes.any,
  onEditorStateChange: PropTypes.any
};
