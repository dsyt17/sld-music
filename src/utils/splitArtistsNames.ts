export const splitArtistsNames = (artists: Array<{ _id: string; nickName: string }>) => {
    const artistsNames = artists.map(a => a.nickName);
    return artistsNames.join(', ');
};
