import { useParams } from "react-router-dom";
import Layout from "../Layouts";
import Data from "./Data";
import "./style.css";

const SingleBlog = () => {
    const { id } = useParams();

    return (
        <>
            <Layout>
                <h1 className="pb-5">{Data[id].rname}</h1>
                <div className="singleBlog">
                    <div className="inner" key={id}>
                        <div className="img pb-3">
                            <img src={`../../${Data[id].src}`} alt="Image" />
                        </div>
                        <div className="info">
                            <h3>{Data[id].rname}</h3>
                            <p>{Data[id].desc}</p>
                            <p>{Data[id].desc2}</p>
                            <p>{Data[id].desc3}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default SingleBlog;