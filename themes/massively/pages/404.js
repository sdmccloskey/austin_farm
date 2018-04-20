import React from 'react';
import Template from '../layouts/index';

export default () =>
  <Template {...props}>
    <div id="main">
      <section className="post">
        <header className="major">
        <h1>NOT FOUND</h1>
        </header>
        <div className="image main"><img src="images/pic01.jpg" alt=""/></div>
        <p>You just hit a route that does not exist... the sadness.</p>
      </section>
    </div>
  </Template>
