import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import "./style.css"

const Item = () => {
    return (
        <div className="col-md-4 mb-3">
            <a href="#" className="item shadow shadow-lg h-100">
                <div className="item-img p-1">
                    <img className="item-img_img" src="https://vlxx.tube/img1/1844.jpg" alt=""/>
                </div>
                <div className="item-name p-1">
                    <p className="item-name-link">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                        content is a little bit longer
                    </p>
                </div>
            </a>
        </div>

    );
};

export default Item;