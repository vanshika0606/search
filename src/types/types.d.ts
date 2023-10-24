export type searchResult = {
    objectID: number;
    title: string| undefined;
   author: string| undefined;
    url: string| undefined;
    story_title: string | undefined;
   story_author: string| undefined;
    story_url: string| undefined;

}

export type cardDetails = {
    title: string| undefined;
    comments: string[];
    points: number;
}