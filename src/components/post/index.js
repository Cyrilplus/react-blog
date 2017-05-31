import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/styles';
import styles from './index.scss';

// eslint-disable-next-line
const Code = ({language, literal}) => {
    return (
        <SyntaxHighlighter
            showLineNumbers
            language={language}
            style={solarizedDark}
        >
            {literal}
        </SyntaxHighlighter>
    );
};

class Post extends Component {
    static propTypes = {
        className: PropTypes.string
    }

    static defaultProps = {
        className: ''
    }
    
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }

    componentWillMount() {
        fetch('/api/detail').then(response => {
            return response.text();
        }).then(result => {
            this.setState({
                content: result
            });
        });
    }

    render() {
        const className = this.props.className;
        const content = this.state.content;
        return <ReactMarkdown className={`${styles.post} ${className}`} renderers={{CodeBlock: Code, Code}} source={content} />;
    }
}

export default Post;
