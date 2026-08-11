export function getDeviceId() {
  const key = "wisp-device-id"
  const stored =
    typeof window !== "undefined" ? window.localStorage.getItem(key) : null
  if (stored) return stored
  const id = `${crypto.randomUUID()}-${Date.now()}`
  window.localStorage.setItem(key, id)
  return id
}
