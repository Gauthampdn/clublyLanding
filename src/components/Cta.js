import React from 'react';
import Link from './Link';
 
function Cta() {
  return (
    <div className="cta-container">
      <h2 className="cta-title">Be a part of Clubly</h2>
      <p className="cta-description">Fill out the form to be one of the first clubs to be on our app.</p>
      <div className="cta-link-container">
        <Link href="#" style="inverted">Get Started</Link>
      </div>
    </div>
  );
}

export default Cta;
