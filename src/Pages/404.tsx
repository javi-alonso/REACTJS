import { useNavigate } from 'react-router'
import Button from '../components/Button'

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center text-black font-bold font-sans rtl">
            <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" className="mb-5 mt-20 h-[342px]" />
            <span className="text-[3.3em] font-extrabold mb-10">404</span>

            <Button
                mode="normal"
                text="INICIO"
                action={() => navigate('/')}
                className="text-2xl"
            />

        </div>
    )
}
