import React from 'react';
import './style.css';


const ProfilePicture = props => (
<div className="profilepiccont">
          <div className="profilepiccont2">
            <div className="profilepiccirclewrap1">
              <div className="profilepiccirclewrap2">
              {props.children}
              </div>
            </div>
          </div>
        </div>
)

export default ProfilePicture