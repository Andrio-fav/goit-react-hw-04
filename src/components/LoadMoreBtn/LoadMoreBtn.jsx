import styles from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <button type="button" className={styles.loadMoreBtn} onClick={onLoadMore}>
      Load more
    </button>
  );
}