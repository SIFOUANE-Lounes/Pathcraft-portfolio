import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSuccess("Message envoyé !");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSuccess("Veuillez remplir tous les champs.");
    }
  };

  return (
    <div className="container py-5">
      <section className="hero-section bg-dark text-white rounded-3 px-4 py-5 mb-5">
        <h1 className="display-5 fw-bold">Bonjour, voici mon Portfolio</h1>
        <p className="lead">Étudiant en deuxième année de tronc commun</p>
        <div className="d-flex gap-2">
          <Link to="/a-propos" className="btn btn-primary">À propos</Link>
          <Link to="/portfolio" className="btn btn-outline-light">Portfolio</Link>
        </div>
      </section>

      <section className="mb-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 p-3">
              <h2>À propos</h2>
              <p>En savoir plus sur moi et mon parcours.</p>
              <Link to="/a-propos" className="btn btn-primary">Voir</Link>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 p-3">
              <h2>Portfolio</h2>
              <p>Découvrir mes projets.</p>
              <Link to="/portfolio" className="btn btn-primary">Voir</Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Contact</h2>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Nom" />
          </div>

          <div className="col-md-6">
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email" />
          </div>

          <div className="col-12">
            <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" rows={4} placeholder="Message"></textarea>
          </div>

          <div className="col-12">
            <button className="btn btn-success">Envoyer</button>
          </div>
        </form>

        {success && <div className="alert alert-info mt-3">{success}</div>}
      </section>
    </div>
  );
};

export default HomePage;
