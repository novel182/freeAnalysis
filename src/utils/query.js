import creds from '../creds.json' with { type: 'json' }
// import { cacheGameData } from './cacheGameData.js'

export const fetchUserData = async () => {
    return fetchFromURL(`https://api.chess.com/pub/player/${creds.username}`)
}

const fetchURLsFromArchives = async () => {
    return fetchFromURL(`https://api.chess.com/pub/player/${creds.username}/games/archives`)
}

export const fetchLatestGameData = async () => {
    const urls = await fetchURLsFromArchives()
    const latestURL = urls.archives[urls.archives.length - 1]

    const monthlyGames = await fetchFromURL(latestURL)
    // cacheGameData(monthlyGames, latestURL)
    return monthlyGames.games[0]
}

const fetchFromURL = async (url) => {
    const fetchedData = fetch(url)
        .then(res => res.json())
        .then(data => { return data })
        .catch(err => err)
    return fetchedData
}