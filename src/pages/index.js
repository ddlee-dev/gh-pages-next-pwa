import { useState, useEffect } from 'react';
import { useInstallPrompt } from '../client/utils/pwa/installPrompt';
import { workboxEvents } from '../client/utils/pwa/workboxEvents';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [prompt, promptToInstall] = useInstallPrompt();
  const [isVisible, setVisibleState] = useState(false);

  const hide = () => setVisibleState(false);

  // This hook only run once in browser after the component is rendered for the first time.
  // It has same effect as the old componentDidMount lifecycle callback.
  useEffect(() => {
    workboxEvents();
  }, []);

  useEffect(() => {
    if (prompt) {
      setVisibleState(true);
    }
  }, [prompt]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Next.js Hybrid PWA</h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
