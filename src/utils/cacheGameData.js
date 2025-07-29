import fs from 'fs';

export const cacheGameData = (data, api) => {
    const filePath = './src/gameData/gameDataCache.json';
    
    // Ensure the directory exists
    fs.mkdirSync('./src/gameData', { recursive: true });

    const jsonData = JSON.stringify({api, ...data}, null, 2);

    // Write the data to the file
    fs.writeFileSync(filePath, jsonData, 'utf8');
    
    console.log(`Game data cached to ${filePath}`);
}
