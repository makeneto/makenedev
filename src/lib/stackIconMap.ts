import type { ComponentType } from "react"

import AnthropicIcon from "../components/ui/icons/AnthropicIcon"
import ClaudeIcon from "../components/ui/icons/ClaudeIcon"
import ExpressIcon from "../components/ui/icons/ExpressIcon"
import GithubIcon from "../components/ui/icons/GithubIcon"
import GitIcon from "../components/ui/icons/GitIcon"
import JavaScriptIcon from "../components/ui/icons/JavaScriptIcon"
import MicrosoftIcon from "../components/ui/icons/MicrosoftIcon"
import NextIcon from "../components/ui/icons/NextIcon"
import NodeIcon from "../components/ui/icons/NodeIcon"
import NpmIcon from "../components/ui/icons/NpmIcon"
import OpenaiIcon from "../components/ui/icons/OpenaiIcon"
import PnpmIcon from "../components/ui/icons/PnpmIcon"
import PostgresqlIcon from "../components/ui/icons/PostgresqlIcon"
import ReactIcon from "../components/ui/icons/ReactIcon"
import ReduxIcon from "../components/ui/icons/ReduxIcon"
import SassIcon from "../components/ui/icons/SassIcon"
import ShadcnIcon from "../components/ui/icons/ShadcnIcon"
import SocketioIcon from "../components/ui/icons/SocketioIcon"
import StyledcomponentsIcon from "../components/ui/icons/StyledcomponentsIcon"
import TailwindcssIcon from "../components/ui/icons/TailwindcssIcon"
import TypescriptIcon from "../components/ui/icons/TypescriptIcon"
import UdemyIcon from "../components/ui/icons/UdemyIcon"
import VercelIcon from "../components/ui/icons/VercelIcon"
import FigmaIcon from "../components/ui/icons/FigmaIcon"
import GimpIcon from "../components/ui/icons/GimpIcon"
import MongodbIcon from "../components/ui/icons/MongodbIcon"
import WordIcon from "../components/ui/icons/WordIcon"
import ExcelIcon from "../components/ui/icons/ExcelIcon"
import PowerpointIcon from "../components/ui/icons/PowerpointIcon"
import GithubCopilotIcon from "../components/ui/icons/GithubCopilotIcon"
import ViteIcon from "../components/ui/icons/ViteIcon"
import VsCodeIcon from "../components/ui/icons/VsCodeIcon"
import DribbbleIcon from "../components/ui/icons/DribbbleIcon"
import FramerIcon from "../components/ui/icons/FramerIcon"

export const stackIconMap: Record<string, ComponentType> = {
  javascript: JavaScriptIcon,
  react: ReactIcon,
  typescript: TypescriptIcon,
  next: NextIcon,
  redux: ReduxIcon,
  styledcomponents: StyledcomponentsIcon,
  sass: SassIcon,
  tailwindcss: TailwindcssIcon,
  shadcn: ShadcnIcon,
  framer: FramerIcon,
  node: NodeIcon,
  express: ExpressIcon,
  socketio: SocketioIcon,
  githubCopilot: GithubCopilotIcon,
  openai: OpenaiIcon,
  claude: ClaudeIcon,
  postgresql: PostgresqlIcon,
  mongodb: MongodbIcon,
  vscode: VsCodeIcon,
  figma: FigmaIcon,
  dribbble: DribbbleIcon,
  gimp: GimpIcon,
  vite: ViteIcon,
  git: GitIcon,
  github: GithubIcon,
  vercel: VercelIcon,
  pnpm: PnpmIcon,
  npm: NpmIcon,
  moword: WordIcon,
  moexcel: ExcelIcon,
  mopowerpoint: PowerpointIcon,
  udemy: UdemyIcon,
  anthropic: AnthropicIcon,
  microsoft: MicrosoftIcon,
}
