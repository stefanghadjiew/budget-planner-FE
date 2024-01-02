import { useRef, useEffect } from 'react';
import { Button, Page } from './components';

export const App: React.FC = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      console.log(buttonRef.current);
    }
  }, []);

  return (
    <Page>
      <h1>Hello</h1>
      <h2>Stefan</h2>
      <Button ref={buttonRef} outlined type="secondary" />
    </Page>
  );
};
