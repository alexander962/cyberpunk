import React, { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import styles from './FileUpload.module.scss';

interface FileUploadProps {
  register: UseFormRegister<any>;
}

const FileUpload: React.FC<FileUploadProps> = ({ register }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className={styles.fileUpload}>
      <input
        type="file"
        id="screenshot"
        {...register('screenshot')}
        className={styles.hiddenInput}
        onChange={handleFileChange}
      />
      {fileName ? (
        <>
          <div className={styles.fileName}>Выбран файл: {fileName}</div>
        </>
      ) : (
        <label htmlFor="screenshot" className={styles.customFileUpload}>
          Прикрепить скриншот
          <span>.png / .jpg / .pdf</span>
        </label>
      )}
    </div>
  );
};

export default FileUpload;
