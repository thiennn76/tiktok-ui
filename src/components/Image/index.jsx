import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';
import images from '~/assets/images';

function Image({ src, alt, className, ...props }, ref) {
    const [fallback, setFallback] = useState();
    const handleError = () => {
        setFallback(images.noImage);
    };
    return (
        <img
            src={fallback || src}
            className={classNames(styles.wrapper, className)}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
