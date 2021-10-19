import React, { SetStateAction } from 'react';
import { range } from '../../utils/utils';
import './styles.scss';

type PaginationProps = {
  page: number;
  paginate: (pageNumber: number) => void;
  setPage: React.Dispatch<SetStateAction<number>>;
  // eslint-disable-next-line react/require-default-props
  limit?: number;
  totalItens: number;
}

export function Pagination({
  page, paginate, limit = 30, totalItens, setPage,
}: PaginationProps) {
  const neighborsCount = 2;
  const lastPage = Math.ceil(totalItens / limit);
  return (
    <div className="pagination">
      {page - neighborsCount <= 1 ? '' : <button type="button" onClick={() => setPage((state) => state - 1)}>&laquo;</button>}
      {range(Math.max(page - neighborsCount, 1), page + neighborsCount).map((num) => (
        <button className={page === num ? 'active' : ''} type="button" key={num} onClick={() => paginate(num)}>
          {num}
        </button>
      ))}
      {page > (lastPage - neighborsCount - 1) ? '' : <button type="button" onClick={() => setPage((state) => state + 1)}>&raquo;</button>}
    </div>
  );
}
