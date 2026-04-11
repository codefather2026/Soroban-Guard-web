import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <p className="mb-2 font-mono text-6xl font-bold text-slate-700">404</p>
      <h1 className="mb-4 text-xl font-semibold text-slate-300">Page not found</h1>
      <p className="mb-8 text-sm text-slate-500">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-500"
      >
        Back to scanner
      </Link>
    </div>
  )
}
