import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./bookmark.css"

const BookMarks = ()=>{

    const quotes = useSelector(state => state.Bookmarks.quote);
    const authors = useSelector(state => state.Bookmarks.authors);
    return(
        <div id="Bmark">
            <div className="header-2">
                <h1 className="hw"><Link style={{textDecoration: 'none',color: "#FFFFFF"}} to="/">Home</Link></h1>
                <p >Bookmarks</p>
            </div>
            <h2>Add to Bookmark</h2>
            {quotes.map((values,i)=>{
                return(
                    <div className="main-2">
                        <h4>{values}</h4>
                        <p>- {authors[i]}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default BookMarks;