import { useRef, useEffect } from 'react';
import { Button, Page, Flex } from './components';

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

      <Flex gap={4} vertical style={{ marginTop: '5rem' }}>
        <Button ref={buttonRef} type="primary" />
        <Button ref={buttonRef} outlined type="secondary" />
      </Flex>
    </Page>
  );
};
