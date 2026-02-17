// src/pages/AboutPage.tsx
import React from "react";
import photo from "../assets/photo.jpg";

const AboutPage: React.FC = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4">À propos de moi</h1>

      <div className="row g-4">
        <div className="col-md-4 d-flex justify-content-center">
          <img
            src={photo}
            alt="Moi"
            className="img-fluid rounded-circle"
            style={{
              width: "220px",
              height: "220px",
              objectFit: "cover",
              border: "4px solid #0d6efd",
            }}
          />
        </div>

        <div className="col-md-8">
          <h2>Présentation</h2>
          <p>
            Je m&apos;appelle Lounes et je suis étudiant en développement web.
            Mon objectif est de devenir développeur full-stack en m&apos;appuyant
            sur les bases que j&apos;ai acquises à l&apos;ETNA.
          </p>

          <h2 className="mt-4">Parcours de formation</h2>
          <ul>
            <li>
              <strong>FDI-UNIX</strong> : fondamentaux des systèmes Linux
              (lignes de commande, gestion de fichiers, scripts simples).
            </li>
            <li>
              <strong>FDI-ELM1 / ELM2</strong> : bases de Python, logique,
              conditions, boucles, fonctions et premiers projets comme Quizify.
            </li>
            <li>
              <strong>FDI-DOKR</strong> : introduction à Docker et à la
              conteneurisation.
            </li>
            <li>
              <strong>IDV-VUJS</strong> : base de Vue.js avec un To-Do Manager.
            </li>
            <li>
              <strong>IDV-ANGU</strong> : base d&apos;Angular avec un Contact CRM.
            </li>
            <li>
              <strong>IDV-REAC</strong> : fondamentaux React avec un blog
              complet.
            </li>
          </ul>

          <h2 className="mt-4">Projets réalisés</h2>
          <ul>
            <li>
              <strong>Quizify</strong> : projet en Python, avec de bons retours
              sur la qualité du code.
            </li>
            <li>
              <strong>To-Do Manager</strong> : application Vue.js pour gérer des
              tâches, avec un focus sur l&apos;architecture.
            </li>
            <li>
              <strong>Contact CRM</strong> : gestion de contacts avec Angular.
            </li>
            <li>
              <strong>Blog React</strong> : blog avec plusieurs pages et gestion
              des composants.
            </li>
          </ul>

          <h2 className="mt-4">Compétences</h2>

          <div className="mb-3">
            <strong>HTML / CSS</strong>
            <div className="progress">
              <div className="progress-bar" style={{ width: "70%" }}>
                Niveau intermédiaire
              </div>
            </div>
          </div>

          <div className="mb-3">
            <strong>Python</strong>
            <div className="progress">
              <div className="progress-bar" style={{ width: "65%" }}>
                Bases solides
              </div>
            </div>
          </div>

          <div className="mb-3">
            <strong>JavaScript / TypeScript</strong>
            <div className="progress">
              <div className="progress-bar" style={{ width: "55%" }}>
                En progression
              </div>
            </div>
          </div>

          <div className="mb-3">
            <strong>React / Vue / Angular</strong>
            <div className="progress">
              <div className="progress-bar" style={{ width: "50%" }}>
                Bases des frameworks front
              </div>
            </div>
          </div>

          <div className="mb-3">
            <strong>Linux / Docker</strong>
            <div className="progress">
              <div className="progress-bar" style={{ width: "45%" }}>
                Utilisation de base
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
