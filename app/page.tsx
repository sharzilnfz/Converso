import React from 'react';
import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import { recentSessions } from '@/constants';

const Page = () => {
  return (
    <main>
      <h1 className="">Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id={Math.random().toString(36).slice(2, 11)}
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={Math.floor(Math.random() * 60) + 20}
          color="#ffda6e"
          bookmarked={false}
        />
        <CompanionCard
          id={Math.random().toString(36).slice(2, 11)}
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="science"
          duration={Math.floor(Math.random() * 60) + 20}
          color="#e5d0ff"
          bookmarked={false}
        />
        <CompanionCard
          id={Math.random().toString(36).slice(2, 11)}
          name="Lexi the Language Sage"
          topic="Creative Writing"
          subject="language"
          duration={Math.floor(Math.random() * 60) + 20}
          color="#aee9e1"
          bookmarked={false}
        />
      </section>
      <section className="home-section">
        <CompanionsList
          companions={recentSessions}
          className="w-2/3 lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
