import moment from 'moment';

const Newsitem = (props) => {

   
        let { title, description,urlToImage,url,publishedAt ,author} = props;
        title = title || 'No Title';
        description = description || 'No Description';
        urlToImage = urlToImage || 'https://via.placeholder.com/150';
        url = url || '/';
        author = author || 'No Author';
        publishedAt = publishedAt || moment().format('MMMM Do YYYY');

        return (
           
                <div className="col-lg-4 mt-5">
                    <div className="card">
                        <img src={urlToImage} className="card-img-top" alt="..." height="250" />
                     
                        <div className="card-body" >
                        <small className="badge badge-primary bg-dark my-2" style={{"fontSize":"10px"}}>{ moment( publishedAt ).format('MMMM Do YYYY hh:mm:ss') }</small> 
                        <small className="badge badge-primary bg-dark my-2 m-2" style={{"fontSize":"10px"}}>Source: { author }</small>

                            <h5 className="card-title">{title.substring(0,50) + '...' }</h5>
                            <p className="card-text">{description.substring(0,100) + '...' }</p>
                            <a href={`${url}`} target="_blank" className="btn btn-primary">Get detail</a>
                        </div>
                    </div>
                </div>
        
        )
   
}

export default Newsitem
