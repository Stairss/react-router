import React from 'react';
const Article = ({ title, author, text }) => {
    const styles = {
        marginTop: '40px'
    }
    return (
        <article style={styles}>
            <h3 style={{
                marginBottom: '3px',
                textTransform: 'uppercase'
            }}>{title}</h3>
            <span style={{
                display: 'block',
                marginBottom: 10,
                fontSize: 16
            }}>{author}</span>
            <p style={{
                fontSize: 16
            }}>{text}</p>
        </article>);
}

export default Article;