import React from "react";
import BlogItem from "./BlogItem";

class Blog extends React.Component {
    render() {
        return (
            <div className="container">
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
        );
    }
}

export default Blog;