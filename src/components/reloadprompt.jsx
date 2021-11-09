import { useRegisterSW } from 'virtual:pwa-register/react';

import { text } from './reloadprompt.json';

export function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log(`SW Registered: ${r}`);
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
    <>
      {(offlineReady || needRefresh) && (
        <section>
          {offlineReady ? <p>{text.offlineReady}</p> : <p>{text.contentRefresh}</p>}
          <div class="grid">
            {needRefresh && (
              <div>
                <button class="autowidth" onClick={() => updateServiceWorker(true)}>
                  {text.reloadButton}
                </button>
              </div>
            )}
            <div>
              <button class="autowidth" onClick={() => close()}>
                {text.closeButton}
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
