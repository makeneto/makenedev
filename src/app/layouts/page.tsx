"use client"

import { Check, Search } from "lucide-react"
import { works } from "@/data/works"
import Link from "next/link"
import React from "react"

import { useUserLocale } from "@/hooks/useUserLocale"
import { useFormatCurrency } from "@/utils/formatCurrency"

export default function Layouts() {
  const { locale } = useUserLocale()
  const formatCurrency = useFormatCurrency()

  const isAngola = locale === "AO"

  return (
    <body className="layoutPage">
      <header className="layoutPage__header">
        <div>
          <h1 className="headerPage--default__title">Browse layouts</h1>
          <p className="description--normal">
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

      <ul className="layoutPage__templates">
        {works.map((template) => (
          <Link href="/templates" key={template.id} aria-label={template.title}>
            <img src={template.imageUrl} alt={template.title} />

            <div className="layoutPage__templates--content">
              <div>
                <h2>{template.title}</h2>
                <p>
                  {!isAngola && <span>$</span>} {formatCurrency(120000)}{" "}
                  {isAngola && <span>AOA</span>}
                </p>
              </div>

              <span className="tag tag--small templateTag">Portfolio</span>
            </div>
          </Link>
        ))}
      </ul>
    </body>
  )
}
