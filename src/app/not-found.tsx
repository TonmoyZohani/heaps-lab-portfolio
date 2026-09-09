import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Not Found' };

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Not Found</h1>
      <p className="text-muted-foreground">This page has been scaffolded for the LMS route structure.</p>
    </div>
  );
}
