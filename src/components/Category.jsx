import React from 'react'
import { IMAGE_END_POINT } from '../containers/App/constants'

export default function Category(props) {
    const {category:item}=props;
    return (
        <div className="card">
              <div className="">
                <figure className="">
                <img src={IMAGE_END_POINT+item.images.main} alt="Placeholder image"/>
                </figure>
              </div>
        </div>
    );
}
