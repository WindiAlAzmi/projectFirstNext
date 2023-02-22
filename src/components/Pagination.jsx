import React from 'react';
import CardList from './Articles/CardList';

const Pagination = ({data}) => {
     if (!data) {
       return null;
     }

    return (
      <div>
        ini Pagination
        <CardList data={data} />
      </div>
    );
}

export default Pagination;