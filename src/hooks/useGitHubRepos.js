import { useState, useEffect } from 'react';

const useGitHubRepos = (username) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`
                );
                if (!response.ok) throw new Error('Failed to fetch repositories');
                const data = await response.json();
                
                // Transform the data to match our project card format
                const transformedData = data.map(repo => ({
                    id: repo.id,
                    title: repo.name,
                    description: repo.description || 'No description available',
                    tech: [repo.language].filter(Boolean), // Filter out null values
                    link: repo.html_url,
                    stars: repo.stargazers_count,
                    updated: new Date(repo.updated_at).toLocaleDateString()
                }));
                
                setRepos(transformedData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username]);

    return { repos, loading, error };
};

export default useGitHubRepos;