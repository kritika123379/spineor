import firebase from '../../../lib/myFirebase';

export const getListings = async () => {

    try {
        // let previous = false;
        // let w = await createWhereClauses({ appliedFilters });
        let query = firebase.collection("listings");
        // for (let i of w) {
        // 	query = query.where(...i);
        // }
        // //query = query.where("PropertyType","All");
        query = query.orderBy("LastChangeTimestamp", "desc");//Matrix_Unique_ID

        // if (fetchPrevious) {
        // 	query = query.endBefore(firstListing);
        // }
        // if (startAfter) {
        // 	query = query.startAfter(lastListing);
        // 	previous = true;
        // }
        return await query
            .limit(10)
            .get()
            .then(async res => {
                // count = count + 1;
                // var circularObj = {};
                // circularObj.circularRef = res.docs[res.docs.length-1];
                // circularObj.list = [ circularObj, circularObj ];
                // lastListing = res.docs[res.docs.length - 1];
                // if(count%2 === 0 || count === 1){
                // 	if(count !== 2){
                // firstListing = res.docs[0];
                // 	}
                // }
                const data = res.docs.map(doc => {
                    return doc.data()
                });
                return data;
                // dispatch(saveFirstListObj({ data: data[0] }));
                // dispatch(getListingSuccess({ data, previous }));
            });
    } catch (error) {
        console.error("error getListings =>", error)
        return error;
    }
};