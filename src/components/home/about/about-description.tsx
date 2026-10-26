import { getYearsLabel } from "@/utils/get-years-of-experience"

export default function AboutDescription() {
  const years = getYearsLabel()

  return (
    <div className="grid gap-4">
      <p className="text-(--text-secondary)">
        I’m a software engineer with over {years} years of experience, turning
        ideas into digital products built to last.
      </p>
      <p className="text-(--text-secondary)">
        I care about the things most people overlook: the decisions behind the
        interface, the precision behind the code, and the details that turn
        something functional into something exceptional. I build with purpose,
        refine with intention, and believe the best work speaks for itself.
      </p>
    </div>
  )
}
