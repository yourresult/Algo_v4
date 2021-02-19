import React from 'react';

const Home = () => {
  return (
    <div>
      <a
        className="btn btn-primary"
        data-mdb-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Link with href
      </a>
      <button
        className="btn btn-primary"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Button with data-mdb-target
      </button>

      <div className="collapse mt-3" id="collapseExample">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
        squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
        sapiente ea proident.
      </div>
    </div>
  );
};

export default {
  component: Home
};