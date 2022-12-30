export type Movie={
    _id:string,
    backgroundImg:string,
    cardImg:string,
    description:string,
    subTitle:string,
    title:string,
    titleImg:string,
    type:string
}

export type MoviesMap={
    [key:string]:Movie[]
}
