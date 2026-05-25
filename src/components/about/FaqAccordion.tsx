import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

export function FaqAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          How do you estimate the time for a task?
        </AccordionTrigger>

        <AccordionContent>
          I ask what nobody asked, break down what seems simple, and double what
          seems fast. Not out of pessimism — out of experience.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          Do you prefer remote, hybrid or in-person work? Why?
        </AccordionTrigger>

        <AccordionContent>
          I adapt to whatever makes the project work best. I'm disciplined
          remotely, but I value in-person when the moment calls for it — key
          alignments, project kickoffs, complex problem-solving. The format is a
          detail, the delivery is what matters.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>How do you learn a new technology?</AccordionTrigger>

        <AccordionContent>
          I build something real with it as fast as possible. Infinite tutorials
          don't teach technology — they teach tutorials. I grab the official
          docs, understand the problem it solves, and get my hands on the code.
          Mistakes teach me more than any video.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>
          What do you no longer do after learning the hard way?
        </AccordionTrigger>

        <AccordionContent>
          Say yes to everything out of fear of seeming difficult. I learned that
          saying no at the right time is more respectful than saying yes and not
          delivering. With deadlines, with scope, with people — those who
          respect themselves get respected. It took time to learn, but it was
          worth it.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" disabled>
        <AccordionTrigger>How much do you charge?</AccordionTrigger>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>
          What do you deliver that goes beyond the code?
        </AccordionTrigger>
        <AccordionContent>
          Clarity. When I join a project, I organize what was messy, ask the
          questions nobody was asking, and deliver something the next dev can
          understand without calling me. Anyone can write code — the hard part
          is leaving the project better than you found it.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
