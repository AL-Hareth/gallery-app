import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useEffect, useState } from 'react';

export default function Welcome({ auth, _csrfToken, imagesOfUser, laravelVersion, phpVersion }:
    PageProps<{
        laravelVersion: string, phpVersion: string, imagesOfUser: Array<string>, _csrfToken: string
    }>) {

    const [imagesLinks, setImagesLinks] = useState<Array<string>>([]);

    useEffect(() => {
        const paths: string[] = [];
        if (imagesOfUser) {
            imagesOfUser.forEach((image) => {
                paths.push(`/storage/${image}`);
            });

            setImagesLinks(paths);
        }
    }, []);

    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div className="py-20 text-white ">
                    <h1 className="pb-8 text-center dark:text-gray-200 text-6xl font-bold ">Your Gallery</h1>
                    {auth.user ? (
                        <>
                            <form className="w-3/4 mx-auto p-4 flex items-center bg-gray-800 rounded-md" method='post' action={route('upload')} encType='multipart/form-data'>
                                <input
                                    type="file"
                                    name="image"
                                    className="mr-4 block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                                <input type="hidden" name="_token" value={_csrfToken} />
                                <button className="bg-blue-500 text-white p-2 rounded w-1/3">Submit file</button>
                            </form>
                            <div className="py-8 px-10 grid grid-cols-3 gap-2 h-full w-3/4 mx-auto">
                                {imagesLinks && imagesLinks.map((image) => (
                                    <img key={image} src={image} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <p className="text-center text-2xl font-bold">please login or register</p>
                    )}
                </div>
            </div>


            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
