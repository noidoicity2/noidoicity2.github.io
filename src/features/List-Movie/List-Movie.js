import React, {Fragment, useState} from 'react';
import Item from "../Item/item";
import "./style.css";

const ListMovie = () => {
    const [title, setTitle] = useState("This is page name")
    return (
        <Fragment>
            <div className="row">
                <div className="col-12">
                    <h2 className="p-2">
                        {title}
                    </h2>
                </div>
            </div>
            <div className="row">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>

        </Fragment>


    );
};

export default ListMovie;