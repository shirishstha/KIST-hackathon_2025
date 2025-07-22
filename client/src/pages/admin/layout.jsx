
import Sidebar from '@/components/adminSidebar';
import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Layout = () => {
    const [isAdmin, setAdmin] = useState(null);

    useEffect(() => {
        const adminValue = localStorage.getItem('admin');
        setAdmin(adminValue === 'true'); // ensure boolean
    }, []);

    if (isAdmin === null) return null; // or a loader
    return (
        <>
            {isAdmin ? (
                <div className="min-h-screen bg-gray-900 text-white">
                    <div className="flex">
                        <Sidebar />
                        <main className="flex-1 ml-64">
                            <div className="p-6">
                                <Outlet />
                            </div>
                        </main>
                    </div>
                </div>) : <Navigate to="/" />}
        </>
    )
}

export default Layout
