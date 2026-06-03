export default function useDownloadResume() {
  const handleClick = async () => {
    let filename = "makene-resume-lsen.pdf"

    try {
      const res = await fetch("https://ipapi.co/json/")
      const data = await res.json()

      const country = data?.country_code

      if (country === "AO") {
        filename = "makene-resume-lden.pdf"
      }
    } catch {
      filename = "makene-resume-lsen.pdf"
    }

    const filePath = `/documents/${filename}`
    window.open(filePath, "_blank")

    const link = document.createElement("a")
    link.href = filePath
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return handleClick
}
