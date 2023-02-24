import React from "react";

const Faq = () => {
  return (
    <div className="container">
        <div className="my-5">
            <img src="https://cdn.discordapp.com/attachments/1078705696490668092/1078717212384305252/Faq.png" alt="" style={{width:'20vw',display:'inline'}} />

            <div className="position-absolute d-inline mx-5">
            <h1 id="faq" className="mx-5">Frequently Asked Questions (FAQ's)</h1>
            <form class="d-flex my-5" role="search" style={{position:'absolute',right:'0'}}>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:'30vw'}} />
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>

     <div className="flex" style={{display:'inline-block'}}>
        <div className="row">
        <div class="my-3 col-md-6">
        <button type="button" class="btn" style={{backgroundColor:'#FCA909',width:'30vw',height:'50px'}}>This is a button</button>
        </div>
        <div class="my-3 col-md-6">
        <button type="button" class="btn" style={{backgroundColor:'#FCA909',width:'30vw',height:'50px'}}>This is a button</button>
        </div>
        <div class="my-3 col-md-6">
        <button type="button" class="btn" style={{backgroundColor:'#FCA909',width:'30vw',height:'50px'}}>This is a button</button>
        </div>
        <div class="my-3 col-md-6">
        <button type="button" class="btn" style={{backgroundColor:'#FCA909',width:'30vw',height:'50px'}}>This is a button</button>
        </div>
        </div>
     </div>
    </div>
    
  );
};

export default Faq;