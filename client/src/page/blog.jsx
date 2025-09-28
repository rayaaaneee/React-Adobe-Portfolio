import { ManageBody } from "../object/manage-body";

import { Title } from "./component/general/title";

const Blog = () => {

    ManageBody.changeClass("blog");

    return (
        <>
            <Title text={"Blog"} index={1} />
        </>
    );
}

export default Blog;