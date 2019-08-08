import React from 'react'


function TrackedPage (props){
    return(
        <section>
            <header>
                <h1>Landing Page</h1>
            </header>
            
             {props.children}
        </section>
    )
}

export default TrackedPage