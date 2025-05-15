'use client';
import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    AgentInitializer: {
      init: (config: any) => void;
    };
  }
}

export const AIChatBot = () => {
  useEffect(() => {
    const initializeWidget = () => {
      if (window.AgentInitializer) {
        window.AgentInitializer.init({
          rootId: process.env.NEXT_PUBLIC_AGENT_ROOT_ID,
          formID: process.env.NEXT_AGENT_FORM_ID,
          queryParams: ['skipWelcome=1', 'maximizable=1'],
          domain: 'https://www.jotform.com',
          isInitialOpen: false,
          isDraggable: false,
          background: 'linear-gradient(180deg, #D3CBF4 0%, #D3CBF4 100%)',
          buttonBackgroundColor: '#8797FF',
          buttonIconColor: '#01091B',
          variant: false,
          customizations: {
            greeting: 'Yes',
            greetingMessage: 'Hi! How can I assist you?',
            pulse: 'Yes',
            position: 'right',
          },
        });
      }
    };

    if (window.AgentInitializer) {
      initializeWidget();
    } else {
      window.addEventListener('DOMContentLoaded', initializeWidget);
    }

    return () => {
      window.removeEventListener('DOMContentLoaded', initializeWidget);
    };
  }, []);

  return (
    <Script
      src="https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.AgentInitializer) {
          window.AgentInitializer.init({
            rootId: 'JotformAgent-0196d497364c7f028db8c9335898b21db6bc',
            formID: '0196d497364c7f028db8c9335898b21db6bc',
            queryParams: ['skipWelcome=1', 'maximizable=1'],
            domain: 'https://www.jotform.com',
            isInitialOpen: false,
            isDraggable: false,
            background: 'linear-gradient(180deg, #D3CBF4 0%, #D3CBF4 100%)',
            buttonBackgroundColor: '#8797FF',
            buttonIconColor: '#01091B',
            variant: false,
            customizations: {
              greeting: 'Yes',
              greetingMessage: 'Hi! How can I assist you?',
              pulse: 'Yes',
              position: 'right',
            },
          });
        }
      }}
    />
  );
};
