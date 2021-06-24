import { Link } from 'react-router-dom'

import illsutrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button'
//import { useAuth } from '../hooks/useAuth'

import '../styles/auth.scss'

export function NewRoom() {
    //const { user } = useAuth()

    return (
        <div id="page-auth">
            <aside>
                <img src={illsutrationImg} alt="Ilustração" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Veja as principais duvidas da sua audiência em tempo-real.</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">Criar Sala</Button>
                        <p>Quer entrar em uma sala existente? <Link to="/">clique</Link></p>
                    </form>
                </div>
            </main>
        </div>
    )
}