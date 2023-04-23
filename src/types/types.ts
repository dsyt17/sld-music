export type ReleaseType = {
    id?: number;
    _id?: number;
    cover: string;
    title: string;
    artists: Array<{
        _id: string;
        nickName: string;
    }>;
    genre?: string;
    year: number;
    link?: string;
    songs?: Array<{
        _id: string;
        title: string;
        prod: string;
        duration: string;
    }>;
    about: string;
};
