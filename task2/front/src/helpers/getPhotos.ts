export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export const getPhotos = async (userId: number): Promise<Photo[]> => {
    try {
        const url_base = `http://127.0.0.1:5000/api/photos/user/${userId}`;
        const response = await fetch(url_base);

        if (!response.ok) {
            throw new Error("Failed to fetch photos");
        }

        const data = await response.json();
        const photos: Photo[] = data.map((photo: any) => ({
            albumId: photo.albumId,
            id: photo.id,
            title: photo.title,
            url: photo.url,
            thumbnailUrl: photo.thumbnailUrl
        }));

        return photos;
    } catch (error) {
        console.error(error);
        return [];
    }
}