import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import PhotoCard from '../PhotoCard';
import '../../../../../node_modules/react-grid-layout/css/styles.css';
import '../../../../../node_modules/react-resizable/css/styles.css';
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import PhotoList from '../PhotoList';

PhotoGridList.propTypes = {
    photoList: PropTypes.array,
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func
}

PhotoGridList.defaultProps = {
    photoList: [],
    onEditClick: null,
    onRemoveClick: null
}

function PhotoGridList(props){
    const {photoList,onPhotoEditClick,onPhotoRemoveClick,onPhotoLikeClick} = props;
    const [layout,setLayout] = useState([]);
    const [defaultProps,setDefaultProps] = useState({
        className: "layout",
        rowHeight: 53,
        onLayoutChange: function() {},
        cols: 12,
        isResizable:false,
        margin:[20,20],
        isBounded:true
    });
    const ReactGridLayout = WidthProvider(RGL);
    useEffect(()=>{
        const generateLayout = () =>{
            const p = defaultProps;
            return _.map(photoList, function(item, i) {
            const y = _.result(p, "y") || Math.ceil(i * 4) + 1;
            return {
                x: (i * 3) % 12,
                y: Math.floor(i / 4) * y,
                w: 3,
                h: 4,
                i: i.toString()
            };
        });
    };
        setLayout(generateLayout());
    },[photoList,defaultProps])
    const generateDOM = () => {
        return _.map(photoList, function(photo,i) {
          return (
            <div key={i}>
                <PhotoCard 
                    photo={photo} 
                    onEditClick={onPhotoEditClick} 
                    onRemoveClick={onPhotoRemoveClick}
                    onLikeClick={onPhotoLikeClick}
                /> 
            </div>
          );
        });
    }
    const onLayoutChange = (layout) => {
        setDefaultProps({
            ...defaultProps,
            onLayoutChange : onLayoutChange(layout)
        })
    }
    return(
        <ReactGridLayout
         layout={layout} onLayoutChange={onLayoutChange}
         items={PhotoList.length}
         {...defaultProps} 
        >
           {generateDOM()}
        </ReactGridLayout>
    )
}

export default PhotoGridList;