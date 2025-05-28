import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <SignIn 
        appearance={{
          elements: {
            formButtonPrimary: 'bg-primary hover:bg-primary/90',
            card: 'shadow-lg'
          }
        }}
        redirectUrl="/"
        fallbackRedirectUrl="/"
      />
    </main>
  );
