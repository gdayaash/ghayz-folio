// src/app/case-study/layout.tsx

export default function CaseStudyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen bg-black text-white">{children}</div>;
}
