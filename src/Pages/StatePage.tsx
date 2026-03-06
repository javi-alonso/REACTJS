import { useState } from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router';

export default function StatePage() {
    const navigate = useNavigate();

    // Initial complex state
    const [user, setUser] = useState({
        firstName: 'Pepe',
        lastName: 'Palotes',
        professional: {
            title: 'Desarrollador Fullstack',
            company: 'Tech Solutions'
        },
        settings: {
            theme: 'dark',
            notifications: true,
            layout: {
                sidebar: true,
                compactSize: false
            }
        }
    });

    // 1. Updating a simple top-level property
    const updateName = (newName: string) => {
        setUser({
            ...user, // Copy everything else
            firstName: newName // Overwrite just this
        });
    };

    // 2. Updating a nested object (Professional)
    const updateJob = (field: 'title' | 'company', value: string) => {
        setUser({
            ...user,
            professional: {
                ...user.professional, // Copy nested professional object
                [field]: value // Overwrite professional field
            }
        });
    };

    // 3. Updating a deeply nested object (Layout)
    const toggleSidebar = () => {
        setUser({
            ...user,
            settings: {
                ...user.settings, // Copy settings
                layout: {
                    ...user.settings.layout, // Copy layout
                    sidebar: !user.settings.layout.sidebar // Toggle deeply nested field
                }
            }
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-4">
                        Gestión de <span className="text-emerald-500">estado</span>
                    </h1>
                    <p className="text-xl text-slate-500 italic">
                        "Nunca mutar el estado directamente, siempre crear una copia."
                    </p>
                    <div className="mt-8">
                        <Button
                            mode="outline"
                            text="Volver al Inicio"
                            action={() => navigate('/')}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* EDITOR SECTION */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Editor de Perfil</h2>

                            <div className="space-y-4">
                                {/* Simple Update */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-600 mb-1">Nombre (Nivel superior)</label>
                                    <input
                                        type="text"
                                        value={user.firstName}
                                        onChange={(e) => updateName(e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                {/* Nested Update */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1">Puesto</label>
                                        <input
                                            type="text"
                                            value={user.professional.title}
                                            onChange={(e) => updateJob('title', e.target.value)}
                                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1">Empresa</label>
                                        <input
                                            type="text"
                                            value={user.professional.company}
                                            onChange={(e) => updateJob('company', e.target.value)}
                                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Deeply Nested Update */}
                                <div className="pt-4 border-t">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-600">Barra lateral (Deep State)</span>
                                        <Button
                                            mode="text"
                                            text={user.settings.layout.sidebar ? '✅ Visible' : '❌ Oculta'}
                                            action={toggleSidebar}
                                            className="py-1 px-4 text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 italic text-emerald-800 text-sm">
                            💡 Nota: Usamos el <strong>operador spread (...)</strong> para mantener las propiedades que NO estamos cambiando. Si no lo hiciéramos, esas propiedades se perderían al actualizar.
                        </div>
                    </div>

                    {/* JSON VIEW SECTION */}
                    <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
                        <h2 className="text-xl font-bold text-emerald-400 mb-4 font-mono">Inspeccionando el estado</h2>
                        <pre className="text-emerald-300 font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap">
                            {JSON.stringify(user, null, 2)}
                        </pre>
                    </div>

                </div>
            </div>
        </div>
    );
}
