import requests from "../utils/requests"
import Thumnail from "./Thumnail"
import FlipMove from "react-flip-move";
function Results({ results }) {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2
        xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results.map((result) => (
                <Thumnail key={result.id}
                    result={result} />
            ))}
        </div>
    )
}

export default Results
