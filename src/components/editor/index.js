import React, { Component } from 'react';
import { Editor, EditorState, CompositeDecorator } from 'draft-js';

const h1Regex = /^\#\s.*/g;
const h2Regex = /^\##\s.*/g;
const h3Regex = /^\###\s.*/g;
const h4Regex = /^\####\s.*/g;
const linkRegex = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/g;

const codeRegex = /^```\s[\w]+.*```$/gm;

// eslint-disable react/prop-types
const H1 = (props) => {
    return <h1>{props.children}</h1>;
};

const H2 = (props) => {
    return <h2>{props.children}</h2>;
};

const H3 = (props) => {
    return <h3>{props.children}</h3>;
};

const H4 = (props) => {
    return <h4>{props.children}</h4>;
};

const A = (props) => {
    return <a href={props.children}>{props.children}</a>;
};

const Code = (props) => {
    return <pre>{props.children}</pre>;
};

function findWithRegex(regex) {
    return (contentBlock, callback/*, contentState */) => {
        const text = contentBlock.getText();
        let matchArr, start;
        while ((matchArr = regex.exec(text)) !== null) {
            start = matchArr.index;
            callback(start, start + matchArr[0].length);
        }
    };
}

export default class DemoEditor extends Component {


    constructor(props) {
        super(props);
        const compositeDecorator = new CompositeDecorator([
            {
                strategy: findWithRegex(h1Regex),
                component: H1
            },
            {
                strategy: findWithRegex(h2Regex),
                component: H2
            },
            {
                strategy: findWithRegex(h3Regex),
                component: H3
            },
            {
                strategy: findWithRegex(h4Regex),
                component: H4
            },
            {
                strategy: findWithRegex(codeRegex),
                component: Code
            },
            {
                strategy: findWithRegex(linkRegex),
                component: A
            }
        ]);
        this.state = {
            editorState: EditorState.createEmpty(compositeDecorator),
        };
    }

    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    focus = () => {
        this.editor.focus();
    }

    render() {
        return (
            <div style={{width: '100%', height: '100%'}} onClick={this.focus}>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    ref={ref => this.editor = ref}
                />
            </div>
        );
    }
}
