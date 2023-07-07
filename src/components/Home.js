import React from 'react'
import chatbot from '../assets/chatbot.jpg'

function Home() {
    return (
        <div className='container d-flex flex-wrap'>
            <div class="jumbotron col-lg-6">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
            <img src={chatbot} className='img-fluid w-50 d-none d-lg-flex'/>
        </div>
    )
}

export default Home