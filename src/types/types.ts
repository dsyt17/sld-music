export type ReleaseType = {
    id?: string;
    _id: string;
    cover: string;
    title: string;
    artists: Array<{
        _id: string;
        nickName: string;
        link: string;
    }>;
    otherArtists?: Array<string>;
    genre: string;
    year: number;
    link: string;
    songs: Array<{
        _id: string;
        title: string;
        prod: string;
        duration: string;
        artists: Array<{
            _id: string;
            nickName: string;
            link: string;
        }>;
    }>;
    about: string;
};

export type ArtistType = {
    _id: string;
    fullName: string;
    nickName: string;
    birthDate: string;
    about: string;
    link: string;
    releases: Array<{
        _id: string;
        title: string;
        link: string;
        cover: string;
        year: number;
        artists: Array<{
            _id: string;
            nickName: string;
        }>;
    }>;
    songs: Array<{
        _id: string;
        title: string;
        prod: string;
        duration: string;
    }>;
};
