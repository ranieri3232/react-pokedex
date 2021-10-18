import React, { useState } from 'react';
import { range } from '../../utils/utils';
import './styles.scss';

type PaginationProps = {
  page: number;
  paginate: (pageNumber: number) => void;
  // eslint-disable-next-line react/require-default-props
  limit?: number;
  totalItens: number;
}

export function Pagination({
  page, paginate, limit = 30, totalItens,
}: PaginationProps) {
  const neighborsCount = 2;
  const [currentPage, setCurrentPage] = useState(page);
  const lastPage = Math.ceil(totalItens / limit);
  return (
    <div className="pagination">
      {currentPage - neighborsCount <= 1 ? '' : <button type="button" onClick={() => setCurrentPage((state) => state - 1)}>&laquo;</button>}
      {range(Math.max(currentPage - neighborsCount, 1), currentPage + neighborsCount).map((num) => (
        <button className={page === num ? 'active' : ''} type="button" key={num} onClick={() => paginate(num)}>
          {num}
        </button>
      ))}
      {currentPage > (lastPage - neighborsCount - 1) ? '' : <button type="button" onClick={() => setCurrentPage((state) => state + 1)}>&raquo;</button>}
    </div>
  );
}
