export type bookMark = {


    
        id: number,
        title: string,
        description: string,
        link: string,
        category:string,
}

export type category = {
    name:string,
    id:number,
    image:string,
    bookMarks:bookMark[]
}

export type addbook = {
    

}


export type data = {
    name:string,
    type:string
}

export type stateTemplate = {
    input : string,
    value:string
}