import { FC } from 'react';

const Custom500: FC = () => {
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
      <h1>500 - Server Error</h1>
      <p>Sorry, something went wrong on our server.</p>
    </div>
  );
};

export default Custom500;