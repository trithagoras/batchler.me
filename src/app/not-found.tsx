import Link from "next/link";

const NotFound = () => (
    <div className="justify-between mx-auto p-4 text-center space-y-8">
        <h1 className="text-3xl">Not found</h1>
        <p className="text-lg">The page you are looking for does not exist.</p>
        <Link href="/">
            <p className="text-blue-500 hover:underline">Go back to home page</p>
        </Link>
    </div>
);

export default NotFound;