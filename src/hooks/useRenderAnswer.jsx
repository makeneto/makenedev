import { StyledLink } from "../components/ui/FAQItem"

export default function useRenderAnswer() {
    const renderAnswer = (text) => {
        const linkRegex = /<a href="(.*?)" target="_blank">(.*?)<\/a>/g
        const parts = text.split(linkRegex)

        return parts.map((part, index) => {
            if (index % 3 === 0) {
                return part
            } else if (index % 3 === 1) {
                const href = part
                const linkText = parts[index + 1]

                return (
                    <StyledLink key={index} to={href} target="_blank">
                        {linkText}
                    </StyledLink>
                )
            }
            return null
        })
    }

    return renderAnswer
}
