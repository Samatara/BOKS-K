import Bookcard from "./bookcard";

export default function SearchResults({content}){
    const thebooks = content?.docs;
    console.log(content?.docs)

    return (
    <span className="display-Books">
        {thebooks?.map(Book => 
        <Bookcard className="card" 
            key={Book._version_} 
            title={Book.title} 
            first_publish_year={Book.first_publish_year}
            author_name={Book.author_name}
            ratings_average={Book.ratings_average}
            img={jpg_cover}>
        </Bookcard>)}
    </span>
    )
}