import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const AddExperienceModal = ({ isOpen, onRequestClose }) => {
  const [qualifica, setQualifica] = useState('');
  const [tipoImpiego, setTipoImpiego] = useState('');
  const [nomeAzienda, setNomeAzienda] = useState('');
  const [localita, setLocalita] = useState('');
  const [inizioMese, setInizioMese] = useState('');
  const [inizioAnno, setInizioAnno] = useState('');
  const [fineMese, setFineMese] = useState('');
  const [fineAnno, setFineAnno] = useState('');

  const handleSave = () => {
    
    console.log('Dati salvati:', {
      qualifica,
      tipoImpiego,
      nomeAzienda,
      localita,
      inizioMese,
      inizioAnno,
      fineMese,
      fineAnno,
    });

    
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Aggiungi Esperienza"
    >
      <div>
        <label>
          Qualifica
          <input
            type="text"
            value={qualifica}
            onChange={(e) => setQualifica(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Tipo di Impiego
          <select
            value={tipoImpiego}
            onChange={(e) => setTipoImpiego(e.target.value)}
          >
            <option value="">Seleziona...</option>
            <option value="tempo_pieno">A Tempo Pieno</option>
            <option value="part_time">Part Time</option>
            <option value="autonomo">Autonomo</option>
            <option value="freelance">Freelance</option>
            <option value="contratto">A Contratto</option>
            <option value="stage">Stage</option>
            <option value="apprendistato">Apprendistato</option>
            <option value="stagionale">Stagionale</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Nome Azienda
          <input
            type="text"
            value={nomeAzienda}
            onChange={(e) => setNomeAzienda(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Località
          <input
            type="text"
            value={localita}
            onChange={(e) => setLocalita(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Data di Inizio
          <select
            value={inizioMese}
            onChange={(e) => setInizioMese(e.target.value)}
          >
           
          </select>
          <select
            value={inizioAnno}
            onChange={(e) => setInizioAnno(e.target.value)}
          >
            
          </select>
        </label>
      </div>

      <div>
        <label>
          Data di Fine
          <select
            value={fineMese}
            onChange={(e) => setFineMese(e.target.value)}
          >
           
          </select>
          <select
            value={fineAnno}
            onChange={(e) => setFineAnno(e.target.value)}
          >
           
          </select>
        </label>
      </div>

      <button onClick={handleSave}>Salva</button>
    </Modal>
  );
};

export default AddExperienceModal;
