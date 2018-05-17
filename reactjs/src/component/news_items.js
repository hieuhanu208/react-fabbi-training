import React, { Component } from 'react'

export default class News_Item extends Component {

    convert = (Text) => 
    
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}
    
  render() {
    return (
        <div>
        <div className="post-preview">
          <a href={"/detail/" + this.convert(this.props.title) + "." + this.props.id}>
            <h1 className="post-title">
              {this.props.title}
            </h1>
            <h3 className="post-subtitle">
              {this.props.subtitle}
            </h3>
          </a>
          <p className="post-meta">Posted by 
            <a href>{this.props.creator}</a> 
               on {this.props.date}</p>
        </div>
        <hr />
      </div>      
    )
  }
}
