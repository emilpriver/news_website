import React, { Component } from 'react'

//modules
import single_small_article from '../modules/single_small_article'

export default class Home extends Component {

  constructor(props) {
      super(props)
      this.state = {
        articles: [],
        articles_loaded: false,
        articles_status: '',
        search_value: '',
        search_sent: false,
      }    
  }
  componentDidMount() {    
    //jump to top
    window.scrollTo(0, 0)
  }

  load_posts = async () => {
    //fetch data
    await fetch('https://newsapi.org/v2/everything?q=google&apiKey=dcb193d0ebd64653bf2c8a08b76437c1')
      .then(response => {

        if (response.status === 'ok') {
          this.setState({
            articles: response.articles,
            articles_loaded: true,
            articles_status: true
          })
        } else {
          this.setState({
            articles_loaded: false,
            articles_status: false
          })
        }

    })
    .catch(err => {

    })

  }
    
  render() {

    const {articles,articles_loaded,articles_status} = this.state

    return (
      <div id="front_page">

        <div className="wrapper">

          <div className="search_box">
            <input type="text" placeholder="Search the web for news..." onChange={value => this.setState({search_value: value.target.value})} />
          </div>
          
        </div>

        <div className="con">
          
          {articles_loaded === true ? 

            articles.map((data,index) => <single_small_article key={index} data={data} /> )
        
          : 'Loading'}

        </div>

      </div>
    );
  }
}