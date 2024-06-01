import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
    <div className="bg-white shadow-md rounded-lg p-10 text-center">
      <h2 className="text-4xl font-bold text-red-600 mb-4">404 - Not Found</h2>
      <p className="text-lg mb-6">Product Not Found</p>
      <Link href="/">Return Home</Link>
    </div>
    </div>
  )
}