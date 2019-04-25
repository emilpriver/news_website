import React, { Component } from 'react'
import Moment from 'moment'

export default class Single_small_article extends Component {
    

    render() {    
        
        const {data} =  this.props
        
        return (
            <div className="article">
                <h3>
                    <a href={data.url} rel="noopener noreferrer" target="_blank">
                        {data.title}
                    </a>
                </h3>
                <div className="info_post">
                    <span>Written by: {data.author}</span>
                    <span>Published: { Moment(data.publishedAt).calendar() }</span>
                </div>
            </div>
        );
    }

}