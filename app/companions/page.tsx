import { getAllCompanions } from '@/lib/actions/companion.actions';
import CompanionCard from '@/components/CompanionCard';
import { getSubjectColor } from '@/lib/utils';
import SearchInput from '@/components/ui/SearchInput';
import SubjectFilter from '@/components/ui/SubjectFilter';
import { Search } from 'lucide-react';
// import { SearchParams } from 'next/dist/server/request/search-params';

const companionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';

  const topic = filters.topic ? filters.topic : '';
  const companions = await getAllCompanions({ subject, topic });

  return (
    <main>
      <section>
        <h1>Companions Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section>
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject) || '#000'}
          />
        ))}
      </section>
    </main>
  );
};

export default companionsLibrary;
