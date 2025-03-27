import React from "react";
import EventImage from "../../assets/joinus-heroImg.jpeg";

const SccEvent = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      {/* Image */}
      <img
        src={EventImage}
        alt="SCC Annual General Meeting Group"
        className="w-full rounded-md shadow-lg mb-8"
      />

      {/* Heading Text */}
      <h1 className="text-xl md:text-2xl font-bold uppercase leading-relaxed">
        Vitae magnis proin rutrum, condimentum eros pellentesque. Leo. habitasse
        facilisi condimentum, eu lacinia urna erat platea malesuada cubilia
        inceptos morbi parturient quisque penatibus mollis. Consectetuer posuere
        mattis. Ridiculus conubia eget habitant euismod sodales potenti
        molestie.
      </h1>

      <p className="text-sm text-gray-500 mt-2">Cdn February 28th, 2025</p>

      {/* Article Section */}
      <section className="mt-6 text-gray-800 text-base leading-7 space-y-6">
        <article>
          <h2 className="font-bold uppercase">
            SCC Annual General Meeting, on Feb, 28th 2025
          </h2>
          <p>
            Vitae magnis proin rutrum, condimentum eros pellentesque. Leo.
            habitasse facilisi condimentum, eu lacinia urna erat platea
            malesuada cubilia inceptos morbi parturient quisque penatibus
            mollis. Consectetuer posuere mattis. Ridiculus conubia eget habitant
            euismod sodales potenti molestie.
          </p>
          <p>
            Non tortor risus mi orci velit condimentum dolor bibendum ad
            condimentum nostra. Auctor eleifend sociosqu elit per semper
            natoque. Egestas netus magnis etiam ut euismod facilisis facilisi
            natoque.
          </p>
          <p>
            Natoque tristique consedunt. Ligula quisque magna ridiculus orci
            pharetra vitae nisl nonummy potenti tincidunt tempus, egestas
            pharetra ultricies mollis libero augue, primis felis sollicitudin
            vehicula congue interdum, rutrum justo odio. Iuctus fames torquent
            libero. Eget.
          </p>
        </article>

        {/* Repeat if needed */}
        <article>
          <h2 className="font-bold uppercase">
            SCC Annual General Meeting, on Feb, 28th 2025
          </h2>
          <p>
            Vitae magnis proin rutrum, condimentum eros pellentesque. Leo.
            habitasse facilisi condimentum, eu lacinia urna erat platea
            malesuada cubilia inceptos morbi parturient quisque penatibus
            mollis. Consectetuer posuere mattis. Ridiculus conubia eget habitant
            euismod sodales potenti molestie.
          </p>
          <p>
            Non tortor risus mi orci velit condimentum dolor bibendum ad
            condimentum nostra. Auctor eleifend sociosqu elit per semper
            natoque. Egestas netus magnis etiam ut euismod facilisis facilisi
            natoque.
          </p>
          <p>
            Natoque tristique consedunt. Ligula quisque magna ridiculus orci
            pharetra vitae nisl nonummy potenti tincidunt tempus, egestas
            pharetra ultricies mollis libero augue, primis felis sollicitudin
            vehicula congue interdum, rutrum justo odio. Iuctus fames torquent
            libero. Eget.
          </p>
        </article>
      </section>

      {/* Media Contact */}
      <footer className="mt-10 border-t pt-6">
        <h3 className="font-semibold text-lg">Media Contact:</h3>
        <p>
          <strong>A.A Olatunji</strong> <br />
          Head of Media At SCC <br />
          <a
            href="mailto:Abdolatunji@gmail.com"
            className="text-blue-600 underline"
          >
            Abdolatunji@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default SccEvent;
