import { clsx } from 'clsx';
import AvatarEditor from 'react-avatar-editor';
import {
  useRef,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useState,
} from 'react';

import styles from './ImageInput.module.scss';
import { Check as CheckIcon } from '~/assets/images/icons/SvgIcons';
import Image from '~/components/Image';

function ImageInput(
  {
    initialImage = null,
    className,
    width = 310,
    height = 310,
    scale = 1.3,
    onAccept,
  },
  ref,
) {
  const [avatarPreview, setAvatarPreview] = useState(initialImage);
  const [resultImage, setResultImage] = useState('');

  const avatarEditorRef = useRef();

  useImperativeHandle(ref, () => ({
    value: resultImage,
  }));

  const handleAccept = () => {
    const canvasScaled = avatarEditorRef.current
      .getImageScaledToCanvas()
      .toDataURL();

    setResultImage(canvasScaled);

    onAccept && onAccept();
  };

  const handlePreview = (event) => {
    const file = event.target.files[0];

    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    return () => {
      if (avatarPreview) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  return (
    <div
      className={clsx([
        styles.wrapper,
        {
          [className]: className,
        },
      ])}
    >
      <div
        style={{
          width: width,
          height: height,
        }}
        className={styles.editorWrapper}
      >
        {avatarPreview ? (
          <AvatarEditor
            className={styles.avatarEditor}
            image={avatarPreview}
            width={width}
            height={height}
            border={0}
            borderRadius={10000000}
            scale={scale}
            rotate={0}
            ref={avatarEditorRef}
          />
        ) : (
          <Image className={styles.avatarEditorAlt} />
        )}
      </div>
      <label htmlFor="upload-avatar" className={styles.uploadLabel}>
        Choose a image
      </label>
      <input
        id="upload-avatar"
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        onChange={handlePreview}
      />
      {avatarPreview && (
        <button onClick={handleAccept} className={styles.accept}>
          <CheckIcon className={styles.checkIcon} />
        </button>
      )}
    </div>
  );
}

export default forwardRef(ImageInput);
