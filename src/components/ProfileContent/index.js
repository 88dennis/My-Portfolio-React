import React from 'react';
import './style.css';


const profileContent = props => (
    <div className="profileWrap">
<div className="profileCont">

<header className="profileContentHeader"><h1>{props.profilegreet}</h1></header>
<section className="profileContent">
{props.children}
</section>

{/* <section className="profileButtons">
{props.goBack &&<button onClick={props.onGoBack}>Go Back</button>}
{props.logOut &&<button><a href="/">LOG OUT</a></button>}
</section> */}

</div>
</div>
)

export default profileContent