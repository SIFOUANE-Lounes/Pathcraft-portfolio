import { useState } from 'react';
import { Button } from '../Button';
import { Card } from '../Card';
import { Lock, Mail } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6C63FF] to-[#5ABFFF] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-white mb-2">Plateforme Formation</h1>
          <p className="text-white/80">Connectez-vous pour accéder à vos cours</p>
        </div>

        <Card>
          <h2 className="mb-6">Connexion</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9D9D9]" size={20} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="votre.email@formation.fr"
                  className="w-full pl-12 pr-4 py-3 bg-[#F6F6F6] rounded-lg outline-none focus:ring-2 focus:ring-[#6C63FF]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9D9D9]" size={20} />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-[#F6F6F6] rounded-lg outline-none focus:ring-2 focus:ring-[#6C63FF]"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[#6C63FF]" />
                <small>Se souvenir de moi</small>
              </label>
              <small className="text-[#6C63FF] cursor-pointer hover:underline">
                Mot de passe oublié ?
              </small>
            </div>

            <Button type="submit" className="w-full">
              Se connecter
            </Button>

            <div className="text-center">
              <small className="text-[#666]">
                Pas encore de compte ?{' '}
                <span className="text-[#6C63FF] cursor-pointer hover:underline">
                  S'inscrire
                </span>
              </small>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-[#D9D9D9]">
            <p className="text-center text-[#666] mb-4">
              <small>Ou continuer avec</small>
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#F6F6F6] rounded-lg hover:bg-[#D9D9D9] transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <small>Google</small>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#F6F6F6] rounded-lg hover:bg-[#D9D9D9] transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <small>Facebook</small>
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
