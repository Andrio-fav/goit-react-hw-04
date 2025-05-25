import ImageCard from '../ImageCard/ImageCard';
import css from './ImageModal.module.css';
import Modal from 'react-modal';

export default function ImageModal({ image, modalIsOpen, onClose }) {
  Modal.setAppElement('#modal');

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        //   onAfterOpen={afterOpenModal}
        onRequestClose={onClose}
        contentLabel="Full image Modal"
        className={css.Modal}
        overlayClassName={css.Overlay}>
        <p className={css.text}>
          Description: {image.description || image.alt_description}
        </p>
        <button
          className={css.closeBtn}
          onClick={onClose}
          aria-label="Close modal">
          x
        </button>
        <ImageCard image={image} bigImg={image.urls.regular} />
      </Modal>
    </>
  );
}