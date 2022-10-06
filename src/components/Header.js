import React from 'react'
import { useStaticQuery, graphql,Link} from "gatsby"

import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { StaticImage } from "gatsby-plugin-image"
import SEO from './Seo';
export default function  Header({ searchQuery, setSearchQuery,searchData }) {
   
    
    const data = useStaticQuery(graphql`
        query HeaderQuery {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        kategori
                    }
                }
            }
        }
    `)
    const [kategori,setKategori]=React.useState(data.allMarkdownRemark.nodes)
    React.useEffect(()=>{
       
    },[])
    // const user = getProfile()
    // if(Object.keys(user).length === 0){logout()}
    // if (!isAuthenticated()) {
    //     login()
    //     return <p>Redirecting to login...</p>
    // }
  return (
    
    <div>
        <SEO/>
        {/* TOP HEADER */}
        <div id="top-header">
            <div className="container">
            <ul className="header-links pull-left">
                <h1 style={{color:"white"}}>Ecommerce Selling Gaming Laptop </h1>
                <li><Link to="/" activeClassName="active" ><i className="fa fa-phone" /> Home</Link></li>
                <li><Link to="/Store" activeClassName="active" ><i className="fa fa-map-marker" /> Store</Link></li>
            </ul>
            <ul className="header-links pull-right">
                {/* <li><a href="/"><i className="fa fa-user-o" /> {user.name}</a></li> */}
                <li><a
                    href="/logout"
                    // onClick={e => {
                    //     logout()
                    //     e.preventDefault()
                    // }}
                    ><i className="fa fa-user-o" />
                    Log Out
                </a></li>
            </ul>
            </div>
        </div> 
        {/* /TOP HEADER */}
        {/* MAIN HEADER */}
        <div id="header">
            {/* container */}
            <div className="container">
            {/* row */}
            <div className="row">
                {/* LOGO */}
                <div className="col-md-3">
                <div className="header-logo">
                    <a href="/" className="logo">
                    <StaticImage src="./img/logo.png" alt />
                    </a>
                </div>
                </div>
                {/* /LOGO */}
                {/* SEARCH BAR */}
                <div className="col-md-6">
                <div className="header-search">
                    <form
                        action="/Store"
                        method="get"
                        autoComplete="off"
                    >
                        <select className="input-select">
                            {kategori.map((e)=>{
                                return(
                                    
                                    <option value={0}>{e.frontmatter.kategori}</option>
                                )
                            })}
                        </select>
                        <input 
                            value={searchQuery}
                            onInput={(e) => setSearchQuery(e.target.value)}
                            type="text"
                            name="s"
                            className="input" placeholder="Search here" />
                        <button className="search-btn" onClick={()=>{searchData(searchQuery)}}>Search</button>
                    </form>
                </div>
                </div>
                {/* /SEARCH BAR */}
                {/* ACCOUNT */}
                <div className="col-md-3 clearfix">
                <div className="header-ctn">
                    {/* Menu Toogle */} 
                    <div className="menu-toggle">
                    <a href="/">
                        <i className="fa fa-bars" />
                        <span>Menu</span>
                    </a>
                    </div>
                    {/* /Menu Toogle */}
                </div>
                </div>
                {/* /ACCOUNT */}
            </div>
            {/* row */}
            </div>
            {/* container */}
        </div>
        {/* /MAIN HEADER */}
    </div>

  )
}

