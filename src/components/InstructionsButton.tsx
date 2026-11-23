import React, { useState } from 'react';
import '../App.css';
import Modal from './Modal';
import BartoUnlockContent from './BartoUnlockContent';
import { FAVICON_SRC } from '../constants/assets';

interface InstructionsButtonProps {
  bartoSectionVisible: boolean;
  onBartoUnlock: () => void;
}

interface InstructionsContentProps {
  onClose: () => void;
  bartoSectionVisible: boolean;
  onOpenUnlock: () => void;
}

const InstructionsContent: React.FC<InstructionsContentProps> = ({
  onClose,
  bartoSectionVisible,
  onOpenUnlock,
}) => {

  return (
    <div className="instructions-modal" role="document">
      <button
        className="close-button"
        onClick={onClose}
        aria-label="Cerrar instrucciones"
        title="Cerrar (ESC)"
        type="button"
      >
        &times;
      </button>

      <div className="modal-header">
        <div className="modal-icon modal-icon--crystal" aria-hidden="true">
          <img src={FAVICON_SRC} alt="" width={50} height={50} draggable={false} />
        </div>
        <h2 id="modal-title">¿Cómo jugar?</h2>
      </div>

      <div className="instructions-content" id="modal-description">
        <div className="instruction-step">
          <p>
            Tú preguntas, el otro responde, así hasta el hartazgo.
          </p>
        </div>

        {!bartoSectionVisible && (
          <div className="instructions-footer-discreet">
            <button
              type="button"
              className="barto-access-link barto-access-link--text"
              onClick={onOpenUnlock}
              aria-label="Abrir easter egg"
            >
              Abrir easter egg
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

type ActiveModal = 'none' | 'instructions' | 'unlock';

const InstructionsButton: React.FC<InstructionsButtonProps> = ({
  bartoSectionVisible,
  onBartoUnlock,
}) => {
  const [activeModal, setActiveModal] = useState<ActiveModal>('none');

  const handleClose = () => setActiveModal('none');

  const handleOpenInstructions = () => setActiveModal('instructions');

  const handleOpenUnlock = () => setActiveModal('unlock');

  return (
    <>
      <button
        className="instructions-button"
        onClick={handleOpenInstructions}
        aria-label="Mostrar instrucciones"
        title="Cómo jugar"
        type="button"
      >
        <span className="instructions-button-emoji" aria-hidden="true">
          ?
        </span>
      </button>

      <Modal
        open={activeModal === 'instructions'}
        onClose={handleClose}
        ariaLabelledBy="modal-title"
      >
        <InstructionsContent
          onClose={handleClose}
          bartoSectionVisible={bartoSectionVisible}
          onOpenUnlock={handleOpenUnlock}
        />
      </Modal>

      <Modal
        open={activeModal === 'unlock'}
        onClose={handleClose}
        ariaLabelledBy="barto-unlock-title"
      >
        <BartoUnlockContent onClose={handleClose} onUnlock={onBartoUnlock} />
      </Modal>
    </>
  );
};

export default InstructionsButton;
