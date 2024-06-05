import { Octokit } from '@octokit/rest'
import type { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'

const octokit = new Octokit()

type GitHubRelease = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.getLatestRelease>

export interface AppRelease {
  stable: GitHubRelease
  beta: GitHubRelease
}

async function data(): Promise<AppRelease> {
    const { data: stable } = await octokit.repos.getLatestRelease({
      owner: 'RepoDevil',
      repo: 'Himitsu',
    })

    const { data: beta } = await octokit.repos.getLatestRelease({
      owner: 'RepoDevil',
      repo: 'TsubakiBuilder',
    })

    return { stable, beta }
}
export { data }