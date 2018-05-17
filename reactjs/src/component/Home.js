import React, { Component } from 'react'
import News_Item from './news_items'
import data from '../component/data.json'



export default class Home extends Component {

  constructor(props) {
    super(props)
    
  }
  render() {
    return (
      <div>
        <div>
        <header className="masthead" style={{backgroundImage: 'url("img/home-bg.jpg")'}}>
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Fabbi Blog</h1>
                  <span className="subheading">A Blog By Inspiration Time in Working</span>
                </div>
              </div>
            </div>
          </div>
        </header>
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
              {
                data.map((value,key)=> <News_Item   key ={key}  id = {value.id} title = {value.title} subtitle= {value.sub_title} creator = {value.creator} date= {value.date}/>)
              }

      </div>
    </div>
  </div>
  <hr />
</div>

      </div>
    )
  }
}
