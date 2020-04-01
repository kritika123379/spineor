import Container from "../container";
import PropertyCard from "./propertyCard";

export default ({
    listing
}) => {
    return (
        <Container>
            <div>
                {
                    !!listing && listing.length > 0 &&
                    listing.map((prop, i) => (
                        <PropertyCard data={prop} index={i}/>
                    ))
                }
            </div>
        </Container>
    )
}