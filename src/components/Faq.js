import React from "react";

const Faq = () => {
  return (
    <div className="container">
        <div className="my-5">
            <img src="https://cdn.discordapp.com/attachments/1078705696490668092/1078717212384305252/Faq.png" alt="" style={{width:'20vw',display:'inline'}} />

            <div className="position-absolute d-inline mx-5">
            <h1 id="faq" className="mx-5">Frequently Asked Questions (FAQ's)</h1>
            <form class="d-flex my-5" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:'40vw'}} />
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>

        </div>
        <div>
            
        </div>
    </div>
    
  );
};

export default Faq;