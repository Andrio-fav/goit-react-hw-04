import Modal from 'react-modal';
import css from './ImageModal.module.css';

export default function ImageModal({ isOpen, closeModal, url }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={url} alt="modal content" className={css.image} />
    </Modal>
  );
}
