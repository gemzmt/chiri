import React from 'react';

export default {
  title: 'Chirimoya/chirimoya-alert',
};

export const TwoShortActions = () => {
  return (
    <div style={{ backgroundColor: 'grey', padding: '20px' }}>
      <chirimoya-alert isVisible={true}>
        <p slot="title">Alert title</p>
        <p slot="message">The alert message goes here. It can grow multiple lines.</p>
        <chirimoya-alert-action slot="actions" role="primary">
          Action
        </chirimoya-alert-action>
        <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
      </chirimoya-alert>
    </div>
  );
};

export const TwoLongActions = () => {
  return (
    <div style={{ backgroundColor: 'grey', padding: '20px' }}>
      <chirimoya-alert isVisible={true}>
        <p slot="title">Alert title</p>
        <p slot="message">The alert message goes here. It can grow multiple lines.</p>
        <chirimoya-alert-action slot="actions" role="primary">
          Action with a very long text as label
        </chirimoya-alert-action>
        <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
      </chirimoya-alert>
    </div>
  );
};

export const OverflowingOption = () => {
  return (
    <div style={{ backgroundColor: 'grey', padding: '20px' }}>
      <chirimoya-alert isVisible={true}>
        <p slot="title">Alert title</p>
        <p slot="message">The alert message goes here. It can grow multiple lines.</p>
        <chirimoya-alert-action slot="actions" role="primary">
          Action with a very very very very very long text as label
        </chirimoya-alert-action>
        <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
      </chirimoya-alert>
    </div>
  );
};

export const FourActions = () => {
  return (
    <div style={{ backgroundColor: 'grey', padding: '20px' }}>
      <chirimoya-alert isVisible={true}>
        <p slot="title">Alert title</p>
        <p slot="message">The alert message goes here. It can grow multiple lines.</p>
        <chirimoya-alert-action slot="actions" role="primary">
          Action
        </chirimoya-alert-action>
        <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
        <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
        <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
      </chirimoya-alert>
    </div>
  );
};

export const OpenAlert = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const alertRef = React.useRef<HTMLElement>();

  React.useEffect(() => {
    function handleEvent(event: any) {
      console.log(`on ${event.detail}`);
    }

    alertRef.current && alertRef.current.addEventListener('show', handleEvent);
    alertRef.current && alertRef.current.addEventListener('hide', handleEvent);

    return () => {
      alertRef.current && alertRef.current.removeEventListener('show', handleEvent);
      alertRef.current && alertRef.current.removeEventListener('hide', handleEvent);
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'grey', padding: '20px' }}>
      <chirimoya-button onClick={() => setIsVisible((v) => !v)}>Toggle alert</chirimoya-button>
      <chirimoya-alert ref={alertRef} isVisible={isVisible}>
        <p slot="title">Alert title</p>
        <p slot="message">The alert message goes here. It can grow multiple lines.</p>
        <chirimoya-alert-action slot="actions" role="primary">
          Action
        </chirimoya-alert-action>
        <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
      </chirimoya-alert>
    </div>
  );
};
