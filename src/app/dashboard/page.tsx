import type { Metadata } from "next"

import DashboardView from "@/components/dashboard/DashboardView"

export const metadata: Metadata = {
  title: "Admin Dashboard — MakeneDev",
  description: "Visão administrativa do portfólio, conteúdo, engajamento e atividade GitHub.",
}

export default function DashboardPage() {
  return <DashboardView />
}
