import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  const characterByEgo = <p className="card-text">{characters}</p>;

  return (
    <>
      <div className="col animate__animated animate__fadeIn">
        <div className="card h-100">
          <div className="row no-gutters">
            <div className="col-4 ">
              <img src={heroImageUrl} alt={superhero} className="card-img" />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{superhero}</h5>

                <p className="card-text">{alter_ego}</p>
                {
                    alter_ego !== characters && characterByEgo
                }
    
                <p className="card-text">
                  <small className="text-muted">{first_appearance}</small>
                </p>
                <p className="card-text">{publisher}</p>

                <Link to={`/hero/${id}`} className="btn btn-success">
                  Más...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
