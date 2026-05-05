import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <h1 className="text-3xl font-bold text-amber-500 mb-4">🔧 SOMAI</h1>
      <p className="mb-4">Sistema de Manutenção Industrial com IA</p>
      
      <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
        <h2 className="text-xl font-semibold mb-2">Status da Conexão</h2>
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${navigator.onLine ? 'bg-emerald-500' : 'bg-red-500'}`} />
          <span>{navigator.onLine ? 'Online ✅' : 'Offline 🔴'}</span>
        </div>
      </div>
      
      <button 
        onClick={() => setCount(c => c + 1)}
        className="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-slate-900 font-bold rounded-lg transition"
      >
        Teste Interativo: {count}
      </button>
    </div>
  )
}