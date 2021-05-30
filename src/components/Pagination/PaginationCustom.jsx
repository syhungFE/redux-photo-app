import React from "react"
import PropTypes from "prop-types"
import PaginationUI from "./PaginationUI";


PaginationCustom.propTypes = {
    pagination : PropTypes.object.isRequired,
    onPageChange : PropTypes.func
}
PaginationCustom.defaultProps = {
    onPageChange : null
}
function PaginationCustom(props) {
    const {pagination,onPageChange} = props;
    const {totalRows, page, limit} = pagination;
    const totalPages = Math.ceil(totalRows/limit);
    const handlePageChange = (newPage) => {
        if(onPageChange){
            onPageChange(newPage);
        }
    }
    return(
        <PaginationUI
            page={page}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
        />
    )
}

export default PaginationCustom;