import React, { useState } from "react"
import Img from "gatsby-image"
import {graphql,Link} from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { GatsbyImage } from "gatsby-plugin-image"

import { useFlexSearch } from 'react-use-flexsearch';


export default function Store({ data: {
    allContentfulProduk: { edges },
},}) {
    // const unFlattenResults = results =>{
    //     results!=[]&&results.map(post => {
    //         const {id,name,description,images,default_price,currency,unit_amount,unit_amount_decimal} = post;
            
    //         return { edges: { id,name,description,images,default_price,currency,unit_amount,unit_amount_decimal } };
    //     });
    //     return results;
    // }
    
    // const [loading, setLoading] = useState(false)
    // async function redirectToCheckout(price){
    //     setLoading(true)
    //     const stripe = await getStripe()
    //     const { error } = await stripe.redirectToCheckout({
    //         mode: "payment",
    //         lineItems: [{ price: price, quantity: 1 }],
    //         successUrl: `http://localhost:8000/`,
    //         cancelUrl: `http://localhost:8000/Checkout`,
    //     })
    //     if (error) {
    //         console.warn("Error:", error)
    //         setLoading(false)
    //     }
        
    // }
    // const [allMarkdownRemak, setallMarkdownRemak]  = React.useState([]); 
    
    // const { search } = window.location;
    // const query = new URLSearchParams(search).get('s')
    // const [searchQuery, setSearchQuery] = React.useState(query || '');

    // const results = useFlexSearch(searchQuery, index, store);
    // const posts = searchQuery ? unFlattenResults(results) : edges;
    const posts = edges;


    function header_store(){
        return(
            <div id="breadcrumb" className="section">
            {/* container */}
            <div className="container">
                {/* row */}
                <div className="row">
                <div className="col-md-12">
                    <ul className="breadcrumb-tree">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">All Categories</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li className="active">Headphones (227,490 Results)</li>
                    </ul>
                </div>
                </div>
                {/* /row */}
            </div>
            {/* /container */}
            </div>

        )
    }
    function categories(){
        return(
        <div className="section">
        {/* container */}
        <div className="container">
            {/* row */}
            <div className="row">
            <div id="store" className="col-md-9">
                {/* store products */}
                <div className="row">
                    {/* product */}
                    {posts.map((e,index)=>{
                        return(
                            <div className="col-md-4 col-xs-6" key={index}>
                                <div className="product">
                                    <div className="product-img">
                                        <img src={e.node.images.url} alt="img" />
                                        <div className="product-label">
                                        
                                        </div>
                                    </div>
                                    <div className="product-body">
                                        
                                        <h3 className="product-name">{e.node.namaProduk}</h3>

                                        <h4 className="product-price">Rp {e.node.hargaProduk}</h4>
                                        <div className="product-rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        </div>
                                    </div>
                                    <div className="add-to-cart">
                                        <button className="add-to-cart-btn" ><i className="fa fa-shopping-cart" /> add to cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                {/* /product */}
                </div>
                {/* /store products */}
                {/* store bottom filter */}
                <div className="store-filter clearfix">
                <span className="store-qty">Showing 20-100 products</span>
                {/* <ul className="store-pagination">
                    <li className="active">1</li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                </ul> */}
                </div>
                {/* /store bottom filter */}
            </div>
            {/* /STORE */}
            </div>
            {/* /row */}
        </div>
        {/* /container */}
        </div>

        )
    }
    return (
        <div>
            <Header
                // searchQuery={searchQuery}
                // setSearchQuery={setSearchQuery}
                searchData={{  }}
            />
                { header_store()}
                { categories()}
            <Footer/>
        </div>
    )
}

export const query = graphql`
    query {
        allContentfulProduk {
            edges {
              node {
                deskripsi {
                  raw
                }
                hargaProduk
                images {
                  url
                }
                namaProduk
              }
            }
        }
    }
`


