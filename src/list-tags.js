import React from 'react'
import data from './data.json'
import { Link } from 'react-router-dom'

const sentimentScores = [];

data.map(tag => (
    sentimentScores.push(tag.sentimentScore || 0)
));

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

const max = getMaxOfArray(sentimentScores);

const fontMin = 0.5;
const fontMax = 3;

function calcSize(amount) {
   return (amount / max) * (fontMax - fontMin) + fontMin;
};

const listOfTags = () => (

    <div>
        <ul className='tag-cloud'>
            {
                data.map(tag => (
                    <li key={tag.id} style={{fontSize: calcSize(tag.sentimentScore) + 'em'}}>
                        <Link to={`/${tag.id}`}>{tag.label}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default listOfTags