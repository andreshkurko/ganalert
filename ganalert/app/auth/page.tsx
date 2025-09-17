'use client'
import { supabase } from '@/lib/supabaseClient'
import { useState } from 'react'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  async function handleLogin() {
    await supabase.auth.signInWithOtp({ email })
    alert('Check your email for the magic link!')
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Login to GanAlert</h1>
      <input
        className="border p-2 mt-4"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="mt-4 px-4 py-2 bg-green-500 text-white" onClick={handleLogin}>
        Send Magic Link
      </button>
    </div>
  )
}

