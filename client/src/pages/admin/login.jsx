import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        //validations
        if(!email || !password){
            return toast.error("Both creditials must be filled");
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(!emailRegex.test(email)){
            return toast.error("Invalid email");
        }

        //sent data to backend
        const res = await axios.post(`${import.meta.env.VITE_BACKENDAPI}/adminLogin`,{email, password});

        if(!res.data.success){
            return toast.error(res.data.message);
        }

        toast.success(res.data.message);
        localStorage.setItem('admin',res.data.success);
        navigate('/admin/codewar');

    }

    return (
        <div className='w-full flex justify-center h-screen items-center'>
            <div className='shadow-[0_0_5px]  p-5 w-80 md:w-100 lg:w-120 px-10 space-y-5 rounded-lg m-5'>
                <h1 className='text-2xl font-medium gradientEffect'>Admin Login </h1>
                <div className='grid gap-2'>
                    <Label>Email</Label>
                    <Input
                        placeholder="admin@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required
                    />
                </div>
                <div className='grid gap-2'>
                    <Label>Password</Label>
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        required
                    />
                </div>


                <Button onClick = {() => handleSubmit()} >Login</Button>
            </div>
        </div>

    )
}

export default Login