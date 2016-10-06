import React from 'react';
import Prism from "prismjs";


const FOLD_START = '// fold-start';
const FOLD_END = '// fold-end';

export default React.createClass({
  code() {
    return {
      '__html': Prism.highlight(this.props.code, Prism.languages.javascript)
    };
  },

  foldCode() {
    const comments = document.getElementsByClassName('comment');
    Array.from(comments).forEach((comment) => {
      if (comment.textContent === FOLD_START) {
        let folded = '';
        let node = comment.nextSibling;
        while (node && node.textContent !== FOLD_END) {
          folded += node.outerHTML || node.textContent;
          let discard = node;
          node = node.nextSibling;
          discard.remove();
        }
        node.remove();
        comment.innerHTML = folded;
        comment.className = 'folded';
        comment.addEventListener('click', () => {
          comment.className = '';
        });
      }
    });
  },

  componentDidMount() {
    this.foldCode();
  },

  render() {
    return (
      <section id={this.props.id}>
        <div className="example-form">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                {this.props.component}
              </div>
            </div>
          </div>
        </div>
        <div className="example-code">
          <pre
            className="language-javascript"
            dangerouslySetInnerHTML={this.code()}
          />
        </div>
      </section>
    );
  }
});

