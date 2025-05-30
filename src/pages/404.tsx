import { FC } from 'react';

const Custom404: FC = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--roboto)',
      }}
    >
      <h1>404 - Page Not Found</h1>
      <p>Sorry, unable to locate the page you are looking for.</p>
    </div>
  );
};

export default Custom404;
