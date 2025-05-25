import styles from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.querry.value;
    if (searchQuery.trim() === '') {
      return toast('Search field must not be empty!');
    }
    onSearch(searchQuery);
    e.target.reset();
  };

  return (
    <header className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          name="querry"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
}