import React from "react"
import DefaultHeader from "../components/headers/DefaultHeader"
import ShowcaseSection from "../components/showcase-section/ShowcaseSection"
import WorkResume from "../components/WorkResume"
import { works } from "../data/works"

export default function Work() {
  return (
    <React.Fragment>
      <DefaultHeader
        title="My Work"
        description="Algumas coisas você vê e segue em frente. Outras te param. Te fazem olhar duas vezes. Te fazem se perguntar como foram feitas. Esse é o único tipo de trabalho que vale a pena. Porque a atenção não é mais barata — tudo compete por ela ao mesmo tempo. Se o seu trabalho não cria uma pausa, mesmo que seja por um segundo, então é apenas ruído com tipografia melhor."
      />

      <ShowcaseSection title="Last Works" items={works} />
      <WorkResume />
    </React.Fragment>
  )
}
