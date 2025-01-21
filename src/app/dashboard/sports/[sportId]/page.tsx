import FormCardSkeleton from '@/components/form-card-skeleton';
import PageContainer from '@/components/layout/page-container';
import SportViewPage from '@/features/sport/components/sport-view-page';
import { Suspense } from 'react';

export const metadata = {
  title: 'Dashboard : Sport View'
};

type PageProps = { params: Promise<{ sportId: string }> };

export default async function Page(props: PageProps) {
  const params = await props.params;
  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<FormCardSkeleton />}>
          <SportViewPage sportId={params.sportId} />
        </Suspense>
      </div>
    </PageContainer>
  );
}
