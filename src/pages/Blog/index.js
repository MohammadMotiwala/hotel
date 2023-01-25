import Layout from "../Layouts";
import { Link } from "react-router-dom";
import Data from "./Data";
import "./style.css";
// import img1 from "./img/1.webp";

const Blog = () => {
    return (
        <>
            <Layout>
                <h1 className="pb-5">Our Blog</h1>
                <div className="blog">
                    {Data.map((room) => {
                        return (
                            <div className="rblock" key={room.id}>
                                <Link to={`details/${room.id}`}>
                                     <img src={room.src} alt="Room Image" />
                                </Link>
                                <div className="info">
                                    <h3><Link to={`details/${room.id}`}>{room.rname}</Link></h3>
                                    <p>{room.desc}</p>
                                    <div className="rbtns d-flex justify-content-center flex-wrap">
                                        <Link to={`details/${room.id}`} className="book-now read-more" >Read More</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </Layout>
        </>
    );
}
export default Blog;