function chunkString(str, chunkLength) {
    if (str === null || chunkLength <= 0) {
        return [];
    }

    const chunks = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        chunks.push(str.substring(i, i + chunkLength));
    }

    return chunks;
}
