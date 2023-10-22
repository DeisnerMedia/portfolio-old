// githubApi.tsx

// Schnittstellen-Definition für GitHub-Repos
export interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    fork: boolean;
}

// Eine Funktion zum Abrufen von GitHub-Repos
export async function getGitHubRepos(githubUsername: string): Promise<GitHubRepo[]> {
    try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
        if (response.ok) {
            const data: GitHubRepo[] = await response.json();
            return data;
        } else {
            throw new Error('GitHub API-Anfrage fehlgeschlagen');
        }
    } catch (error) {
        throw error;
    }
}
