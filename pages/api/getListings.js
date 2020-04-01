import { getListings } from "./getListings/getListingFunc"

export default async (req, res) => {
    try{
        const resData = await getListings()
        if(!!resData){
            // res.statusCode = 200;
            // res.setHeader('Content-type', 'application/json');
            const result = {
                status: 200,
                data: resData
            }
            res.status(200).json(result);
        // res.end(JSON.stringify(result))
        }
    }catch(err){
        console.log('err', err)
        // res.statusCode = 400;
        // res.setHeader('Content-type', 'application/json');
        const result = {
            status: 400,
            data: err
        }
        // res.end(JSON.stringify(result))
        res.status(400).json(result);
    }
}