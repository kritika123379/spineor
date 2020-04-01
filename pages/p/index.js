import ListProperty from "../../components/listProperty";
import { fetcher } from "../../shared/globalFunc";
import { getListings } from "../api/getListings/getListingFunc";

export default ({
    listing
}) => {
    return (
        <ListProperty listing={listing}/>
    )
}

export async function getStaticProps(){
    const res = await getListings()
    if(!!res){
        const post = await res.json();
        console.log("res" )
        return {
            props: {listing: post.data}
        }
    }
}