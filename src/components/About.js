import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Bonjour et Bienvenue!
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            Je m'appelle Kevin Delattre, Etudiant développeur d'applications en alternance depuis 2 ans maintenant au
            Lycée Gaston Berger, (BTS SIO SLAM).
            Ayant commencé en auto-didacte pour ensuite retourner derrières les bancs de l'école tout en étant
            embauché par une jeune start-up, l'informatique fût une reconversion réussie.
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Vous trouverez également la grille d'évaluation de BTS SIO SLAM 2022-2023 afin
                 d'illustrer mes différentes compétences acquéries durant mes 2 années d'études.
            </a>
            <a
              href="#testimonial"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Vous pourrez enfin me contacter avec les différents liens mis à disposition en bas de page.
            </a>
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Vous pourrez enfin me contacter avec les différents liens mis à disposition en bas de page.
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}