import React from 'react';
import './Modal.css';
import { Link } from "react-router-dom";


const modal = props => (
<div className="modal">
<section className="modalcontent1">
{props.resumeModal}
</section>

<header className="modalheader"><h1>{props.title}</h1></header>
<section className="modalcontent">
{props.children}
</section>



<section className="modalactions">
{props.goBack &&<button onClick={props.onGoBack}>Go Back</button>}
{props.logOut &&<button><Link to="/">LOG OUT</Link></button>}
</section>

</div>
)

export default modal