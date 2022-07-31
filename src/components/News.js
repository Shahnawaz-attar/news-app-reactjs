import Newsitem from './Newsitem'
import Spinner from './Spinner'
import propTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect, useState } from 'react'

const News = (props) => {
    const { category, country, pageSize } = props;
    const [article, setArticle] = useState({ articles: [] })
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [totalResults, setTotalResults] = useState(0)
    const [error, setError] = useState('')


    // 2b9b082eea624280a279a9b7eef96ff3
    // b6b6704f63ef40bd8772d0c8036edd0e
    //630e120cfcc142edb063eb9af782fb2c





    const updateNews = async () => {
        setLoading(true)
        const res = await fetch('https://newsapi.org/v2/top-headlines?country=' + country + '&category=' + category + '&apiKey=630e120cfcc142edb063eb9af782fb2c&pageSize=' + pageSize + '&page=' + page)
        const data = await res.json()
        setArticle(prev => ({ ...prev, articles: [...prev.articles, ...data.articles] }))
        setTotalResults(data.totalResults)
        setLoading(false)


    }



    const fetchMoreData = async () => {
        setPage(page + 1)
        const res = await fetch('https://newsapi.org/v2/top-headlines?country=' + country + '&category=' + category + '&apiKey=630e120cfcc142edb063eb9af782fb2c&pageSize=' + pageSize + '&page=' + page)
        const data = await res.json();
        setTimeout(() => {
            setArticle(prev => ({ ...prev, articles: [...prev.articles, ...data.articles] }))
            
            setTotalResults(data.totalResults)
            setLoading(false)
        }, 3000)
        
        setHasMore(data.articles.length !== totalResults);
        setTotalResults(data.totalResults)
        setLoading(false)
        if(data.articles.length === 0){
            setHasMore(false)
        }


    }

    useEffect(() => {
        updateNews()
        document.title = `${category.slice(0, 1).toUpperCase()}${category.slice(1)} News Monkey`
    }, [])







    return (
        <div className='container'>


            <h1 className='text-center my-3'>News Monkey on {props.category.slice(0, 1).toUpperCase()}{props.category.slice(1)} Category</h1>
            {/* { state.loading ? <Spinner /> : null } */}
            <InfiniteScroll
                dataLength={article.articles.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={article.articles.length < totalResults ? <Spinner /> : null}
            >
                <div className="container">
                    <div className="row mt-5">
                        {!error &&
                            article.articles.map((article, index) => (
                                <Newsitem key={index} {...article} />

                            ))
                        }
                        {error && <h1>{error}</h1>}

                        {!hasMore && <h4  className='text-center my-3'>Hey!! now you finished all news of {category} category thank you
                        &nbsp; 
                        <button className='btn btn-primary btn-sm' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Up</button>
                        </h4>}
                    </div>
                </div>
            </InfiniteScroll>


        </div>
    )

}



News.defaultProps = {
    pageSize: 10,
    page: 1,
    country: 'in',
    category: 'general'
}

News.propTypes = {
    pageSize: propTypes.number.isRequired,
    page: propTypes.number.isRequired,
    country: propTypes.string.isRequired,
    category: propTypes.string.isRequired
}


export default News
