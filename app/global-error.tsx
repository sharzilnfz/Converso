'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <h1>Something went wrong!</h1>
          <p>An unexpected error occurred. Please try refreshing the page.</p>
          {process.env.NODE_ENV === 'development' && (
            <details style={{ marginTop: '20px' }}>
              <summary>Error Details (Development Only)</summary>
              <pre
                style={{
                  background: '#f5f5f5',
                  padding: '10px',
                  marginTop: '10px',
                  overflow: 'auto',
                }}
              >
                {error.message}
              </pre>
            </details>
          )}
        </div>
      </body>
    </html>
  );
}
