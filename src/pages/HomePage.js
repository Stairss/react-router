import React from 'react';
import Article from '../componnents/Article'

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cumque, nemo minus quis inventore consequuntur laudantium eligendi, nulla quidem vitae explicabo totam dolores officiis a quod at deserunt alias dolore!"
    },
    {
        id: 2,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cumque, nemo minus quis inventore consequuntur laudantium eligendi, nulla quidem vitae explicabo totam dolores officiis a quod at deserunt alias dolore!"
    },
    {
        id: 3,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cumque, nemo minus quis inventore consequuntur laudantium eligendi, nulla quidem vitae explicabo totam dolores officiis a quod at deserunt alias dolore!"
    }
]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;