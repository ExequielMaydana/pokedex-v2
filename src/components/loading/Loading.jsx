import React from "react";
import './styles/styleLoading.css'

const Loading = () => {
  return (
    <section className="container-loading">
      <article className="loading-wrapper">
        <div className="loader">
          <div className="loader loader-inner"></div>
        </div>
      </article>
    </section>
  );
};

export default Loading;
