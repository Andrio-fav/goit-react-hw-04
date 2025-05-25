import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ openModal, images }) {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => {
        return (
          <li className={styles.galleryItem} key={image.id}>
            <ImageCard
              open={openModal}
              descr={image.alt_description}
              url={image.urls.small}
              large={image.urls.regular}
            />
          </li>
        );
      })}
    </ul>
  );
}