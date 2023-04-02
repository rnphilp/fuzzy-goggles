/** @jsxImportSource @emotion/react */

import PT from 'prop-types';

const styles = {
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
};

function BackgroundImg({ src, alt, children, ...props }) {
  return (
    <>
      <img {...{ src, ...props }} alt={alt} css={styles.image} />
      {children}
    </>
  );
}

BackgroundImg.defaultProps = {
  alt: '',
};

BackgroundImg.propTypes = {
  src: PT.string.isRequired,
  alt: PT.string,
  children: PT.node.isRequired,
};

export default BackgroundImg;
