import React from 'react';
import PropTypes from 'prop-types'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './style.scss';

Pagination.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  listClassName: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string
};

PaginationItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

PaginationLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  next: PropTypes.bool,
  previous: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string
};

const PaginationUI = (props) => {
  const{page,totalPages,handlePageChange} = props;
  const renderPages = () => {
    let templates = [];
    for(let p = 1 ; p <= totalPages ; p++){
      templates.push(
        <PaginationItem key={p} active={p === +page}>
          <PaginationLink onClick={() => handlePageChange(p)} > {p} </PaginationLink>
        </PaginationItem>
      )
    }
    return templates;
  }
  renderPages();
  return (
    <Pagination size="md" aria-label="Page Pagination Custom" className='d-flex justify-content-center'>

        {/* <PaginationItem>
            <PaginationLink first={first} href="#" />
        </PaginationItem> */}

        <PaginationItem disabled={page <= 1}>
            <PaginationLink 
              previous={true} 
              onClick={() => handlePageChange(page - 1)} 
            />
        </PaginationItem>
        {
          renderPages()
        }
        <PaginationItem disabled={page >= totalPages}>
            <PaginationLink
              next={true}
              onClick={() => handlePageChange(page + 1)}
            />
        </PaginationItem>

        {/* <PaginationItem>
            <PaginationLink last={last} href="#" />
        </PaginationItem> */}

    </Pagination>
  );
}

export default PaginationUI;