import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Button from '../components/Button';
import Card from '../components/Card';

interface Item {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
    color: string;
}

const ALL_ITEMS: Item[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Elemento #${i + 1}`,
    category: ['Tecnología', 'Diseño', 'Marketing', 'Ventas'][i % 4],
    description: 'Este es un ejemplo de contenido generado para demostrar la paginación dinámica en React.',
    image: `https://picsum.photos/seed/${i + 1}/400/300`,
    color: ['bg-blue-500', 'bg-purple-500', 'bg-emerald-500', 'bg-amber-500'][i % 4]
}));

export default function EffectPage() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [isLoading, setIsLoading] = useState(true);

    // Efecto para simular carga de datos cuando cambia la paginación
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 400); // Pequeño delay de 400ms para efecto visual

        return () => clearTimeout(timer);
    }, [currentPage, itemsPerPage]);

    const totalPages = Math.ceil(ALL_ITEMS.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = ALL_ITEMS.slice(indexOfFirstItem, indexOfLastItem);

    const goToPage = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset a primera página al cambiar cantidad
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                    <div>
                        <Button
                            mode="normal"
                            text="← Volver"
                            action={() => navigate('/')}
                            className="mb-6"
                        />
                        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                            Efecto de <span className="text-blue-600">paginación</span>
                        </h1>
                        <p className="mt-2 text-lg text-slate-600">
                            Demostración de <code>useEffect</code> y <code>useState</code> para gestionar listas.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
                        <label htmlFor="itemsPerPage" className="font-semibold text-slate-700">Mostrar:</label>
                        <select
                            id="itemsPerPage"
                            value={itemsPerPage}
                            onChange={handleItemsPerPageChange}
                            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none"
                        >
                            {[6, 9, 12, 18].map(size => (
                                <option key={size} value={size}>{size} elementos</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Grid de Cards */}
                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center opacity-40 transition-opacity duration-300">
                        {[...Array(itemsPerPage)].map((_, i) => (
                            <div key={i} className="w-full max-w-sm bg-white rounded-2xl h-96 animate-pulse border border-slate-100 shadow-sm"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center transition-opacity duration-300">
                        {currentItems.map((item) => (
                            <Card
                                key={item.id}
                                image={item.image}
                                title={item.name}
                                description={item.description}
                                tags={[item.category]}
                            />
                        ))}
                    </div>
                )}

                {/* Paginación */}
                <div className="mt-16 flex flex-col items-center gap-6">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`p-3 rounded-xl border transition-all ${currentPage === 1
                                ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                                : 'bg-white text-slate-700 border-slate-200 hover:border-blue-500 hover:text-blue-600 shadow-sm'
                                }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>

                        <div className="flex items-center gap-2 px-2">
                            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                let pageNum;
                                if (totalPages <= 5) pageNum = i + 1;
                                else if (currentPage <= 3) pageNum = i + 1;
                                else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                                else pageNum = currentPage - 2 + i;

                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => goToPage(pageNum)}
                                        className={`w-10 h-10 rounded-xl font-bold transition-all ${currentPage === pageNum
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-500'
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`p-3 rounded-xl border transition-all ${currentPage === totalPages
                                ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                                : 'bg-white text-slate-700 border-slate-200 hover:border-blue-500 hover:text-blue-600 shadow-sm'
                                }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>

                    <span className="text-slate-400 text-sm font-medium uppercase tracking-widest">
                        Página {currentPage} de {totalPages}
                    </span>
                </div>
            </div>
        </div>
    );
}
