import CompanionComponents from '@/components/CompanionComponents';
import { getCompanions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import { redirect } from 'next/navigation';

interface CompanionSessionProps {
  params: Promise<{ id: string }>;
}

const companionSession = async ({ params }: CompanionSessionProps) => {
  const { id } = await params;

  const companion = await getCompanions(id);
  const { name, subject, topic, duration } = companion;
  const user = await currentUser();

  if (!user) redirect('/sign-in');

  if (!name) redirect('/companions');

  return (
    <main>
      <article className="flex rounded-border gap-2 justify-between p-6 max-md:flex-col">
        <div className="flex items-center gap-2">
          <div
            className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden "
            style={{
              backgroundColor: getSubjectColor(subject) || '#000',
            }}
          >
            <Image
              src={`/icons/${subject}.svg`}
              alt={''}
              height={35}
              width={35}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">{name}</p>
              <div className="subject-badge max-sm:hidden">{subject}</div>
            </div>
            <p className="text-lg">{topic}</p>
          </div>
        </div>
        <div className="items-start text-2xl max-md:hidden">
          {duration} Minutes
        </div>
      </article>
      <CompanionComponents
        {...companion}
        companionId={id}
        userName={user.firstName!}
        userImage={user.imageUrl!}
      />
    </main>
  );
};

export default companionSession;
