import React from 'react';
import data from './data.json';
import { Link } from 'react-router-dom';

const findTag = function(id) {
    const isTag = t => {
        return t.id === id;
    };
    return data.find(isTag)
};



const Tag = (props) => {
    const tag = findTag(props.match.params.id);

    if (!tag) {
        return <div>Sorry, but the tag was not found</div>
    }

    const tagInfo = {
        positive: tag.sentiment.positive || 0,
        negative: tag.sentiment.negative || 0,
        neutral: tag.sentiment.neutral || 0,
        pageTypes: []
    };

    tagInfo.total = tagInfo.positive + tagInfo.negative + tagInfo.neutral;

    for (let key in tag.pageType ) {
        tagInfo.pageTypes.push(key);
    };

    return (
        <div className='tag-info'>
            <Link to='/'>Back to tag cloud</Link>

            <p>Label: {tag.label}</p>
            <p>Total Mentions: {tagInfo.total}</p>
            <p>Positive Mentions: {tagInfo.positive}</p>
            <p>Negative Mentions: {tagInfo.negative}</p>
            <p>Neutral Mentions: {tagInfo.neutral}</p>
            <p>List of page types: </p>
            <ul>  {
                tagInfo.pageTypes.map(type => (
                    <li key={type}>
                        {type}
                    </li>
                ))
            }</ul>
        </div>
    )
};

export default Tag