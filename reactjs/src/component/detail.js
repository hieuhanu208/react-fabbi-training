import React, { Component } from 'react'
import data from './data.json'


export default class Detail extends Component {
  
  render() {
   
    
    
  return (
   
    data.map((value,key) => {
      if(value.id == this.props.match.params.id){
      return( <div>
        <div>
          <header className="masthead" style={{backgroundImage: 'url("img/post-bg.jpg")'}}>
            <div className="overlay" />
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="post-heading">
                      <h1>{value.title}</h1>
                      <h2 className="subheading">{value.sub_title}</h2>
                      <span className="meta">Posted by
                        <a href="">{value.creator}</a>
                        on {value.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
          </header>
    {/* Post Content */}
          <article>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto"> 
                    <h2 className="section-heading">{value.sub_heading}</h2>
                    <p>{value.content.content1}</p>
                    
                    
                    
                    <a href="">
                      <img className="img-fluid" src={value.image} alt="" />
                    </a>
                    <span className="caption text-muted">{value.note_image}</span>
                    <p>{value.content.content2}</p>
       
                    <p>Placeholder text by
                      <a href="http://spaceipsum.com/">Space Ipsum</a>. Photographs by
                      <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>.</p>
                </div>
              </div>
            </div>
          </article>
          <hr />
         </div>
       </div>)
      }
    })
   
   
   
    )       
  }
}
