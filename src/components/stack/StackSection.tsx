import AnthropicIcon from "../ui/icons/AnthropicIcon"
import ClaudeIcon from "../ui/icons/ClaudeIcon"
import ExpressIcon from "../ui/icons/ExpressIcon"
import GithubIcon from "../ui/icons/GithubIcon"
import GitIcon from "../ui/icons/GitIcon"
import JavaScriptIcon from "../ui/icons/JavaScriptIcon"
import MicrosoftIcon from "../ui/icons/MicrosoftIcon"
import NextIcon from "../ui/icons/NextIcon"
import NodeIcon from "../ui/icons/NodeIcon"
import NpmIcon from "../ui/icons/NpmIcon"
import OpenaiIcon from "../ui/icons/OpenaiIcon"
import PnpmIcon from "../ui/icons/PnpmIcon"
import PostgresqlIcon from "../ui/icons/PostgresqlIcon"
import ReactIcon from "../ui/icons/ReactIcon"
import ReduxIcon from "../ui/icons/ReduxIcon"
import SassIcon from "../ui/icons/SassIcon"
import ShadcnIcon from "../ui/icons/ShadcnIcon"
import SocketioIcon from "../ui/icons/SocketioIcon"
import TailwindcssIcon from "../ui/icons/TailwindcssIcon"
import TypescriptIcon from "../ui/icons/TypescriptIcon"
import UdemyIcon from "../ui/icons/UdemyIcon"
import StackHeader from "./StackHeader"

export default function StackSection() {
  return (
    <section>
      <StackHeader title="Front-end" />
      <div className="stack-grid">
        <TypescriptIcon />
        <JavaScriptIcon />
        <ReactIcon />
        <NextIcon />
        <ReduxIcon />
        <SassIcon />
        <TailwindcssIcon />
        <ShadcnIcon />
        <NodeIcon />
        <ExpressIcon />
        <SocketioIcon />
        <PostgresqlIcon />
        <ClaudeIcon />
        <OpenaiIcon />
        <GitIcon />
        <GithubIcon />
        <PnpmIcon />
        <NpmIcon />
        <UdemyIcon />
        <MicrosoftIcon />
        <AnthropicIcon />
      </div>
    </section>
  )
}
