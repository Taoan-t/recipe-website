import styles from "./Pagination.module.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={styles["pagination-btn"]}
      >
        Prev
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={styles["pagination-btn"]}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
