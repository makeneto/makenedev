"use client"

import { useState } from "react"
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Code2,
  FileText,
  GitBranch,
  LayoutDashboard,
  MessageSquare,
  MoreHorizontal,
  Settings2,
  Sparkles,
  Users,
  Wifi,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { GithubGraphClient } from "@/components/github/GithubGraphClient"

const periods = ["7 dias", "30 dias", "90 dias"]

const metrics = [
  { label: "Visitantes", value: "12.840", change: "+18,4%", icon: Users },
  { label: "Engajamento", value: "8,6%", change: "+2,1%", icon: Activity },
  { label: "Conteúdos", value: "24", change: "+3 este mês", icon: FileText },
  { label: "Mensagens", value: "07", change: "2 não lidas", icon: MessageSquare },
]

const activity = [
  { time: "14:32", title: "Novo like em “Construindo com Next.js”", type: "engagement" },
  { time: "12:08", title: "Deploy publicado em produção", type: "system" },
  { time: "10:44", title: "Novo contato recebido", type: "message" },
  { time: "09:20", title: "6 contribuições no GitHub", type: "github" },
]

const content = [
  { title: "Construindo com Next.js", type: "Artigo", views: "4.821", status: "Publicado" },
  { title: "Designing for the web", type: "Artigo", views: "2.109", status: "Publicado" },
  { title: "Wisp CMS Starter", type: "Projeto", views: "1.842", status: "Em destaque" },
]

function MetricCard({ metric }: { metric: (typeof metrics)[number] }) {
  const Icon = metric.icon
  return (
    <article className="border border-border bg-card p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">{metric.label}</span>
        <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
      </div>
      <div className="mt-5 flex items-end justify-between gap-3">
        <strong className="font-mono text-2xl font-medium tracking-tight">{metric.value}</strong>
        <span className="text-xs text-muted-foreground">{metric.change}</span>
      </div>
    </article>
  )
}

function ActivityChart() {
  const bars = [35, 48, 42, 68, 54, 78, 62, 84, 71, 91, 76, 88, 66, 73, 96, 82, 87, 69, 79, 94, 72, 83, 91, 98, 75, 89, 93, 81, 86, 95]
  return (
    <div className="flex h-40 items-end gap-1.5 border-b border-border px-1 pb-0 pt-5 sm:gap-2">
      {bars.map((height, index) => (
        <div key={index} className="group flex h-full flex-1 items-end">
          <div
            className="w-full bg-foreground/75 transition-colors group-hover:bg-foreground"
            style={{ height: `${height}%` }}
            title={`${height * 4} visitantes`}
          />
        </div>
      ))}
    </div>
  )
}

function ActivityTimeline() {
  return (
    <div className="flex flex-col gap-5">
      {activity.map((item) => (
        <div key={`${item.time}-${item.title}`} className="flex gap-3">
          <span className="mt-0.5 font-mono text-[11px] text-muted-foreground">{item.time}</span>
          <div className="flex min-w-0 flex-1 gap-3">
            <span className="mt-1.5 size-1.5 shrink-0 bg-foreground" aria-hidden="true" />
            <p className="text-sm leading-5 text-foreground">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function DashboardSidebar({ active, onChange }: { active: string; onChange: (value: string) => void }) {
  const items = [
    { label: "Overview", icon: LayoutDashboard },
    { label: "Analytics", icon: Activity },
    { label: "Content", icon: FileText },
    { label: "Engagement", icon: Sparkles },
    { label: "GitHub", icon: GitBranch },
    { label: "Messages", icon: MessageSquare },
  ]
  return (
    <aside className="hidden w-56 shrink-0 border-r border-border bg-background px-4 py-5 lg:block">
      <div className="flex items-center gap-2 px-2 pb-8">
        <span className="flex size-7 items-center justify-center bg-foreground font-mono text-xs text-background">M</span>
        <span className="font-semibold tracking-tight">makene<span className="text-muted-foreground">/admin</span></span>
      </div>
      <nav className="flex flex-col gap-1" aria-label="Dashboard navigation">
        <p className="px-2 pb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Workspace</p>
        {items.map((item) => {
          const Icon = item.icon
          const selected = active === item.label
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onChange(item.label)}
              className={`flex items-center gap-3 px-2.5 py-2 text-left text-sm ${selected ? "bg-secondary font-medium text-foreground" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"}`}
              aria-current={selected ? "page" : undefined}
            >
              <Icon className="size-4" aria-hidden="true" />
              {item.label}
            </button>
          )
        })}
      </nav>
      <div className="mt-auto flex flex-col gap-1 pt-12">
        <button type="button" className="flex items-center gap-3 px-2.5 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"><Settings2 className="size-4" />Settings</button>
        <a href="/" className="flex items-center gap-3 px-2.5 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"><ArrowUpRight className="size-4" />View portfolio</a>
      </div>
    </aside>
  )
}

export default function DashboardView() {
  const [active, setActive] = useState("Overview")
  const [period, setPeriod] = useState("30 dias")

  return (
    <main className="min-h-screen bg-background text-foreground lg:flex">
      <DashboardSidebar active={active} onChange={setActive} />
      <div className="min-w-0 flex-1">
        <header className="flex flex-col gap-4 border-b border-border px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center border border-border lg:hidden"><Code2 className="size-4" /></div>
            <div><p className="text-xs text-muted-foreground">Tuesday, August 18, 2026</p><h1 className="text-lg font-semibold tracking-tight">{active}</h1></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2 border border-border px-2.5 py-1.5 text-xs text-muted-foreground"><Wifi className="size-3 text-foreground" />All systems operational</span>
            <Button variant="outline" size="sm"><MoreHorizontal data-icon="inline-start" />Actions</Button>
          </div>
        </header>
        <div className="flex flex-col gap-6 px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
          <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">System overview</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">O seu portfólio está vivo.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Uma visão dos bastidores: pessoas chegando, conteúdo circulando e código sendo produzido.</p></div>
            <div className="flex items-center border border-border p-1" role="group" aria-label="Período dos dados">
              {periods.map((item) => <button key={item} type="button" onClick={() => setPeriod(item)} className={`px-2.5 py-1.5 text-xs ${period === item ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}>{item}</button>)}
            </div>
          </section>
          <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Key metrics">{metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}</section>
          <section className="grid gap-4 xl:grid-cols-[1.4fr_0.8fr]">
            <article className="border border-border bg-card p-4 sm:p-5"><div className="flex items-start justify-between gap-4"><div><h2 className="font-medium">Visitas ao portfólio</h2><p className="mt-1 text-xs text-muted-foreground">Últimos {period}</p></div><span className="font-mono text-xs text-muted-foreground">12.840 total</span></div><ActivityChart /><div className="mt-3 flex justify-between text-[10px] uppercase tracking-wider text-muted-foreground"><span>01 ago</span><span>08 ago</span><span>18 ago</span></div></article>
            <article className="border border-border bg-card p-4 sm:p-5"><div className="flex items-center justify-between"><div><h2 className="font-medium">Atividade recente</h2><p className="mt-1 text-xs text-muted-foreground">O que aconteceu por aqui</p></div><Button variant="ghost" size="icon" aria-label="Ver toda a atividade"><ChevronDown className="size-4" /></Button></div><div className="mt-6"><ActivityTimeline /></div></article>
          </section>
          <section className="border border-border bg-card p-4 sm:p-5"><div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-medium">GitHub activity</h2><p className="mt-1 text-xs text-muted-foreground">Contribuições nos últimos 12 meses</p></div><a href="https://github.com/makenedev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">Abrir GitHub <ArrowUpRight className="size-3" /></a></div><div className="mt-5 overflow-hidden"><GithubGraphClient /></div></section>
          <section className="grid gap-4 xl:grid-cols-[1.3fr_0.7fr]">
            <article className="border border-border bg-card p-4 sm:p-5"><div className="flex items-center justify-between"><div><h2 className="font-medium">Conteúdo em destaque</h2><p className="mt-1 text-xs text-muted-foreground">O que está movimentando o portfólio</p></div><Button variant="outline" size="sm">Gerenciar</Button></div><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[540px] text-left text-sm"><thead className="border-b border-border text-[10px] uppercase tracking-wider text-muted-foreground"><tr><th className="pb-3 font-medium">Título</th><th className="pb-3 font-medium">Tipo</th><th className="pb-3 font-medium">Views</th><th className="pb-3 font-medium">Status</th></tr></thead><tbody>{content.map((item) => <tr key={item.title} className="border-b border-border last:border-0"><td className="py-3 font-medium">{item.title}</td><td className="py-3 text-muted-foreground">{item.type}</td><td className="py-3 font-mono text-xs text-muted-foreground">{item.views}</td><td className="py-3"><span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"><CheckCircle2 className="size-3.5" />{item.status}</span></td></tr>)}</tbody></table></div></article>
            <article className="border border-border bg-card p-4 sm:p-5"><div className="flex items-center justify-between"><div><h2 className="font-medium">Stack mais acessada</h2><p className="mt-1 text-xs text-muted-foreground">Por visualizações de projeto</p></div><BookOpen className="size-4 text-muted-foreground" /></div><div className="mt-6 flex flex-col gap-4">{[["TypeScript", "42%"], ["Next.js", "31%"], ["React", "18%"], ["Node.js", "9%"]].map(([name, value]) => <div key={name}><div className="mb-2 flex justify-between text-xs"><span>{name}</span><span className="font-mono text-muted-foreground">{value}</span></div><div className="h-1 bg-secondary"><div className="h-full bg-foreground" style={{ width: value }} /></div></div>)}</div></article>
          </section>
        </div>
      </div>
    </main>
  )
}
