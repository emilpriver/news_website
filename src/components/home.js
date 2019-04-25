import React, { Component } from 'react'

//modules
import SingleSmallArticle from '../modules/single_small_article'
import 'boxicons'

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.REACT_APP_NEWS_API_KEY);

export default class Home extends Component {

  constructor(props) {
      super(props)
      this.state = {
        articles: [],
        articles_loaded: false,
        articles_status: '',
        search_value: '',
        search_sent: false,
        page: 1
      }    
  }
  componentDidMount() {    
    //jump to top
    window.scrollTo(0, 0)
  }

  load_posts = async (e) => {

    e.preventDefault();

    this.setState({
      search_sent: true,
      articles_loaded: false
    })

    //fetch data
    await newsapi.v2.everything({
      q: this.state.search_value,
      page: this.state.page,
    }).then(response => {
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
    });

  }
    
  render() {

    const {articles,articles_loaded,articles_status,search_sent} = this.state

    let posts 

    if(articles_loaded === false){

      posts = <box-icon name='compass' animation='burst' size='lg'></box-icon>

    }else{

      if(articles_status === true){
        posts = articles.map((data,index) =>  { return( <SingleSmallArticle data={data} key={index} />  )})
      }else{
        posts = <h3> Sorry, no articles found</h3>
      }

    }

    return (
      <div id="front_page">

        <div className="wrapper">

          <div className="search_box">
            <form onSubmit={this.load_posts}>
              <input type="text" placeholder="Search the web..." onChange={value => this.setState({search_value: value.target.value})} />
              <button type="submit">
                <box-icon name='search-alt' size='lg' ></box-icon>
              </button>
            </form>
          </div>
          
        </div>

        <div className="con">
          
          <div className="articles">
            
            { 
              search_sent === true ? 

                posts

              : ''
          
            }

          </div>

        </div>

      </div>
    );
  }
}