import { useState } from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router';

// 1. Example using 'if' statement (Component-level)
function LoginStatus({ isLoggedIn }: { isLoggedIn: boolean }) {
    if (isLoggedIn) {
        return (
            <div className="p-4 bg-green-100 text-green-800 rounded-xl border border-green-200">
                <h3 className="font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Sesión iniciada (usando sentencia if)
                </h3>
            </div>
        );
    }

    return (
        <div className="p-4 bg-red-100 text-red-800 rounded-xl border border-red-200">
            <h3 className="font-bold">Sesión cerrada (usando sentencia if)</h3>
        </div>
    );
}

export default function ConditionalPage() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
                        Renderizado <span className="text-indigo-600">condicional</span>
                    </h1>
                    <p className="text-xl text-gray-500">
                        Tres formas de mostrar u ocultar contenido en React basado en el estado.
                    </p>
                    <div className="mt-8">
                        <Button
                            mode="outline"
                            text="Volver al Inicio"
                            action={() => navigate('/')}
                        />
                    </div>
                </div>

                <div className="space-y-12">
                    {/* Section 1: IF STATEMENT */}
                    <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">1. Sentencia 'if'</h2>
                                <p className="text-gray-600 max-w-md">
                                    Útil cuando quieres devolver un JSX completamente diferente o para retornos tempranos.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 min-w-[300px]">
                                <LoginStatus isLoggedIn={isLoggedIn} />
                                <Button
                                    mode="normal"
                                    text={isLoggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión'}
                                    action={() => setIsLoggedIn(!isLoggedIn)}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 2: TERNARY OPERATOR */}
                    <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">2. Operador ternario</h2>
                                <p className="text-gray-600 max-w-md">
                                    Perfecto para cambios en línea entre dos opciones: <code className="bg-gray-200 px-1 rounded text-sm">condition ? A : B</code>.
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-4 min-w-[300px]">
                                <div className="text-4xl">
                                    {showDetails ? '📖' : '📕'}
                                </div>
                                <div className="text-center italic text-gray-500 min-h-[1.5rem]">
                                    {showDetails ? 'El libro está abierto y puedes ver el contenido.' : 'El libro está cerrado.'}
                                </div>
                                <Button
                                    mode="outline"
                                    text={showDetails ? 'Cerrar Libro' : 'Abrir Libro'}
                                    action={() => setShowDetails(!showDetails)}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 3: LOGICAL && */}
                    <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">3. Operador lógico &&</h2>
                                <p className="text-gray-600 max-w-md">
                                    Se usa para mostrar un elemento SOLO si la condición es verdadera: <code className="bg-gray-200 px-1 rounded text-sm">condición && elemento</code>.
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-4 min-w-[300px]">
                                <div className="relative p-4 bg-white rounded-2xl shadow-inner border border-gray-200">
                                    <span className="text-4xl">🛒</span>
                                    {cartCount > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-bounce">
                                            {cartCount}
                                        </span>
                                    )}
                                </div>
                                <div className="flex gap-2">
                                    <Button mode="text" text="- 1" action={() => setCartCount(Math.max(0, cartCount - 1))} />
                                    <Button mode="text" text="+ 1" action={() => setCartCount(cartCount + 1)} />
                                </div>
                                <p className="text-sm text-gray-400">El número solo aparece si es mayor que 0</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
