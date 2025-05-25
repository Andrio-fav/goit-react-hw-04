import Modal from 'react-modal';

export default function ImageModal({ closeModal, isOpen, url }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <img src={url} />
      </Modal>
    </div>
  );
};