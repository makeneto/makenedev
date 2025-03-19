export const gitProjects = async () => {
    const response = await fetch('https://api.github.com/users/makeneto/repos?per_page=2&sort=created&direction=desc', {})

    if (response.ok) {
        const data = await response.json()
        return data
    }
    else {
        throw new Error('Unable to fetch projects')
    }
}