import React from 'react';
import './Modal.css';


const modal = props => (
<div className="modal">

<header className="modalheader"><h1>{props.title}</h1></header>
<section className="modalcontent">
{props.children}
</section>

<section className="modalactions">
{props.goBack &&<button onClick={props.onGoBack}>Go Back</button>}
{props.logOut &&<button><a href="/">LOG OUT</a></button>}
</section>

</div>
)

export default modal