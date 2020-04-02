import Link from "next/link";

export default ({
    data,
    index
}) => (
    <div key={index}>
        <Link href={`/p/[state]/[city]/[address]`} as={`/p/nj/${data.City}/${data.Address}`}>
            <a>
                {data.Address}
            </a>
        </Link>
    </div>
)