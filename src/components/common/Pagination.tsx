interface PaginationProps {
  activePage: number;
  pages: number;
  setActivePage: (page: number) => void;
}

const Pagination = ({ activePage, pages, setActivePage }: PaginationProps) => {
  const getPages = () => {
    const elements = [];
    for (let i = 1; i <= pages; i++) {
      elements.push(
        <div className={`${activePage === i ? 'active' : ''}`} onClick={() => setActivePage(i)} key={i}>
          {i < 10 ? `${i}` : i}
        </div>
      );
    }
    return elements;
  };

  return (
    <div className="pagination">
      <div
        className={`pagination-arrow ${activePage === 1 ? 'inactive' : ''}`}
        onClick={() => activePage !== 1 && setActivePage(activePage - 1)}
      >
        {'<'}
      </div>
      {getPages()}
      <div
        className={`pagination-arrow ${activePage === pages ? 'inactive' : ''}`}
        onClick={() => activePage !== pages && setActivePage(activePage + 1)}
      >
        {'>'}
      </div>
    </div>
  );
};

export default Pagination;
