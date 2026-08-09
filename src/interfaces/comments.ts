export interface CommentsConfig {
  enabled: boolean
  allowUrls: boolean
  allowNested: boolean
  signUpMessage: string | null
}

export interface WispComment {
  id: string
  author: string
  content: string
  url?: string | null
  createdAt: Date
  parent?: { id: string } | null
}

export interface CommentNode extends WispComment {
  replies: CommentNode[]
}

export function buildCommentTree(comments: WispComment[]): CommentNode[] {
  const map = new Map<string, CommentNode>()
  comments.forEach((c) => map.set(c.id, { ...c, replies: [] }))

  const roots: CommentNode[] = []

  comments.forEach((c) => {
    const node = map.get(c.id)!
    const parentId = c.parent?.id ?? null
    if (parentId && map.has(parentId)) {
      map.get(parentId)!.replies.push(node)
    } else {
      roots.push(node)
    }
  })

  const byDateAsc = (a: CommentNode, b: CommentNode) =>
    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  const byDateDesc = (a: CommentNode, b: CommentNode) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()

  roots.sort(byDateDesc)
  map.forEach((node) => node.replies.sort(byDateAsc))

  return roots
}
