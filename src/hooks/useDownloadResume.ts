export default function useDownloadResume() {
  const filePath = "/documents/ls-makene-resume.pdf"

  const handleClick = () => {
    window.open(filePath, "_blank")

    const link = document.createElement("a")
    link.href = filePath
    link.download = "ls-makene-resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return handleClick
}
