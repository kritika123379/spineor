import { fetcher } from "../../../../../shared/globalFunc";
import { useRouter } from 'next/router'
import { getListings } from "../../../../api/getListings/getListingFunc";

export default () => {
    const router = useRouter()
    const {address, city, state} = router.query;
    return (
        <div>
            <p>Address:-> {address}</p>
            <p>City:-> {city}</p>
            <p>State:-> {state}</p>
        </div>
    )
}

export async function getStaticPaths(context) {
    const res = await getListings()
    console.log("res getStaticPaths", res)
    if(!!res){
        const post = await res;
        let paths = [];
        post.data.map(item => {
            paths.push({params: {
                state: 'nj',
                city: item.City,
                address: item.Address
            }})
        })
        return {
          // Only `/posts/1` and `/posts/2` are generated at build time
          paths: paths,
          // Enable statically generating additional pages
          // For example: `/posts/3`
          fallback: true,
        }
    }
}

export async function getStaticProps(context){
    console.log("res getStaticProps", context)
    const res = await fetcher('http://localhost:3000/api/getListings')
    if(!!res){
        const post = await res.json();
        return {
            props: {listing: post.data}
        }
    }
}