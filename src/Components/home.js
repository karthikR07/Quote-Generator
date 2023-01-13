import {useState,useEffect} from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import "./home.css"
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux"
import {addBM, addAuthors} from "../features/slice/addBookmarks"

 
const HomePage = ()=>{

    const [quote, setquote] = useState("");
    const [authors, setAuthor] = useState("");
    const [tag, setTag] = useState([]);
    const [check, setCheck] = useState("");    

    const dispatch = useDispatch();

    useEffect(()=>{
        fetch("https://api.quotable.io/random",{method:"GET"}).then((res)=>{
            return res.json();
        }).then((qData)=>{
            document.querySelector(".preload").style.display = "none";
            document.getElementById("home").style.visibility = "visible";
            const {content, author} = qData;
            setquote(content);
            setAuthor(author);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    const nextquote = async()=>{
        await fetch("https://api.quotable.io/random",{method:"GET"}).then((res)=>{
            return res.json();
        }).then((gQuote)=>{
            const {content,author} = gQuote;
            setquote(content);
            setAuthor(author);
        }).catch((err)=>{console.log(err)})
        document.querySelector("h5").style.color = "#FFFFFF";
    }

    useEffect(()=>{
        fetch("https://api.quotable.io/tags",{method:"GET"}).then((res)=>{
            return res.json();
        }).then((qTag)=>{
            const tagData = qTag.map((e)=> {return e.name})
            setTag(tagData);
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    
    const onClickTag = async(e)=>{
        document.querySelector("h5").style.color = "#FFFFFF";
        var selected = await e.target.value;
        // console.log(selected);
        

        if(selected!=="Tags"&&selected!==check){
            await fetch(`https://api.quotable.io/random?tags=${selected}`,{method:"GET"}).then((res)=>{
            return res.json();
        }).then((gQuote)=>{
            const {content,author} = gQuote;
            if(content !== undefined || author!==undefined){
                setquote(content);
                setAuthor(author);
                setCheck(selected);
            }else{
                setquote("Try Different Tags")
                setAuthor("")
            }
        }).catch((err)=>{console.log(err)})
        }
    }

    function addBookmarks(){
        document.querySelector("h5").style.color = "black";
        dispatch(addBM(quote))
        dispatch(addAuthors(authors))
    }


    return(
    <div id="container">
        <div className="preload"></div>
        <div id="home">
            <div className="header">
                <h1>Home</h1>
                <Link to="/bookmarks"><button>Bookmarks</button></Link>
            </div>
            <div className="main">
                <h4>{quote}</h4>
                <div className="author">
                    <p>- {authors}</p>
                    <h5 onClick={addBookmarks}><BookmarkIcon></BookmarkIcon></h5>
                </div>
            </div>
        
            <select id="Tags"  onClick={onClickTag} >
                <option value="Tags">Tags</option>
                {tag.map((tags,i)=>{
                    return(
                        <>
                        <option value={tags}>{tags}</option>
                        </>
                    )
                })}
            </select>
            <div className="quote">
                <p  onClick={nextquote}>Next Quote</p>
            </div>
            
        </div>
    </div>
    )
}

export default HomePage;