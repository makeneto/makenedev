"use client"

import { Check, Search } from "lucide-react"
import React from "react"

export default function Layouts() {
  return (
    <React.Fragment>
      <header className="layoutPage__header">
        <div>
          <h1>Browse layouts</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            exercitationem porro accusantium eum doloremque in libero.
          </p>
          <ul>
            <li>
              <span>
                <Check />
              </span>
              Generate your brief and receive proposals–for free
            </li>
            <li>
              <span>
                <Check />
              </span>
              Browse real design and development work
            </li>

            <li>
              <span>
                <Check />
              </span>
              Hire top-rated freelancers and agencies
            </li>
          </ul>
          <button>Get Started</button>
        </div>

        <div className="layoutPage__header--image"></div>
      </header>

      <section className="layoutPage__form">
        <div className="layoutPage__form--searchBar">
          <input
            type="text"
            placeholder="What app layout are we going to build?"
          />
          <button type="submit">
            <Search />
          </button>
        </div>
      </section>
    </React.Fragment>
  )
}
