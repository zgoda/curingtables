import React from 'react';
import styles from './reloadprompt.module.css';

import { useRegisterSW } from 'virtual:pwa-register/react';

export function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log('SW Registered: ' + r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div className={styles.reloadPromptContainer}>
      {(offlineReady || needRefresh) && (
        <div className={styles.reloadPromptToast}>
          <div className={styles.reloadPromptMessage}>
            {offlineReady ? (
              <span>App ready to work offline</span>
            ) : (
              <span>New content available, click on reload button to update.</span>
            )}
          </div>
          {needRefresh && (
            <button
              className={styles.reloadPromptToastButton}
              onClick={() => updateServiceWorker(true)}
            >
              Reload
            </button>
          )}
          <button className={styles.reloadPromptToastButton} onClick={() => close()}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
