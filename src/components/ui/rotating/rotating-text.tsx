import { RolePhase } from "@/hooks/use-rotating-role"

type RoleTextProps = {
  text: string
  phase: RolePhase
}

const PHASE_CLASS: Record<RolePhase, string> = {
  idle: "",
  out: "role-out",
  in: "role-in role-shine"
}

export default function RoleText({ text, phase }: RoleTextProps) {
  return (
    <span data-text={text} className={`role ${PHASE_CLASS[phase]}`.trim()}>
      {text}
    </span>
  )
}
