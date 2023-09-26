import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main meta={<Meta title="Title" description="Meta description" />}>
      <div className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">
          <a href={router.basePath} target="_blank" rel="noopener noreferrer">
            Welcome to TOKYOLIFE
          </a>
        </h1>
      </div>
    </Main>
  );
};

export default Index;
