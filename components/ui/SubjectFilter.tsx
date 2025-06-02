'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { subjects } from '@/constants';

import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SubjectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('subject') || '';

  const [subject, setSubject] = useState(query);

  useEffect(() => {
    let newUrl = '';
    if (subject === 'all') {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ['subject'],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'subject',
        value: subject,
      });
    }
    router.push(newUrl, { scroll: false });
  }, [subject]);

  return (
    <Select value={subject} onValueChange={setSubject}>
      <SelectTrigger className="input capitalize w-[180px]">
        <SelectValue placeholder="Select Subjects" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value="all">All subjects</SelectItem>

        {subjects.map((subject) => (
          <SelectItem key={subject} value={subject} className="capitalize">
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
