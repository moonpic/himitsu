import axios from 'axios'

interface GitHubRelease {
  url: string
  assets_url: string
  upload_url: string
  html_url: string
  id: number
  author: {
    login: string
    id: number
    // ...
  }
  // ...
}

async function data(): Promise<GitHubRelease[]> {
  const releases: GitHubRelease[] = []
  let page = 1
  let hasMore = true

  while (hasMore) {
    const response = await axios.get<GitHubRelease[]>(
      `https://api.github.com/repos/RepoDevil/Himitsu/releases`,
      {
        params: {
          per_page: 100,
          page,
        },
      }
    )

    if (response.data.length > 0) {
      releases.push(...response.data)
      page++
    } else {
      hasMore = false
    }
  }

  return releases
}

export { data }