import React from "react";

const projects = [
  {
    id: 1,
    title: "Projet HTML",
    description: "Première page web simple.",
    imageUrl: "https://via.placeholder.com/600x300",
  },
  {
    id: 2,
    title: "Projet CSS",
    description: "Mise en page responsive.",
    imageUrl: "https://via.placeholder.com/600x300",
  },
  {
    id: 3,
    title: "Projet React",
    description: "Mini application React.",
    imageUrl: "https://via.placeholder.com/600x300",
  },
];

const PortfolioPage: React.FC = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Portfolio</h1>

      <div className="row g-4 mb-5">
        {projects.map((p) => (
          <div className="col-md-4" key={p.id}>
            <div className="card h-100">
              <img src={p.imageUrl} className="card-img-top" alt={p.title} />
              <div className="card-body">
                <h5>{p.title}</h5>
                <p>{p.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Galerie</h2>
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`carousel-item ${i === 0 ? "active" : ""}`}
            >
              <img src={p.imageUrl} className="d-block w-100" alt={p.title} />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default PortfolioPage;
