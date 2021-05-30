import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { filterPhoto } from 'features/Photo/PhotoSlice';
import Select from 'react-select'
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import { useDispatch } from 'react-redux';

PhotoFilter.propTypes = {
    PHOTO_CATEGORY_OPTIONS : PropTypes.array.isRequired
}
PhotoFilter.defaultProps = {
    PHOTO_CATEGORY_OPTIONS: []
}
function PhotoFilter(props){
    const {hangleFilterChange} = props;
    const handleSelectedOptionChange = (selectOption) => {
        let categoryId = selectOption ? selectOption.value : 0;
        hangleFilterChange(categoryId);
    }
    return(
        <div className='photo-filter mx-auto my-5 w-50'>
             <Select
                defaultValue={PHOTO_CATEGORY_OPTIONS[0]}
                label="Category Select"
                options={PHOTO_CATEGORY_OPTIONS}
                onChange={handleSelectedOptionChange}
             />
        </div>
    )
}

export default PhotoFilter