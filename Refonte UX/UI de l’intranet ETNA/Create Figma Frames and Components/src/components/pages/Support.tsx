import { useState } from 'react';
import { Card } from '../Card';
import { Button } from '../Button';
import { MessageSquare, Eye, Clock, CheckCircle, Plus } from 'lucide-react';

export function Support() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    priority: 'normal'
  });
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: 'Problème de connexion',
      category: 'Technique',
      status: 'open',
      date: '15 Nov 2025',
      description: 'Je ne peux pas accéder au module React'
    },
    {
      id: 2,
      title: 'Question sur le projet final',
      category: 'Pédagogique',
      status: 'answered',
      date: '12 Nov 2025',
      description: 'Quelle technologie utiliser pour le backend ?'
    },
    {
      id: 3,
      title: 'Certificat de formation',
      category: 'Administratif',
      status: 'closed',
      date: '8 Nov 2025',
      description: 'Demande de certificat pour le module TypeScript'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTicket = {
      id: tickets.length + 1,
      title: formData.title,
      category: formData.category.charAt(0).toUpperCase() + formData.category.slice(1),
      status: 'open',
      date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }),
      description: formData.description,
      priority: formData.priority
    };
    
    setTickets([newTicket, ...tickets]);
    setFormData({ title: '', category: '', description: '', priority: 'normal' });
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <h1>Support & Tickets</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Créer un ticket */}
        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setShowForm(!showForm)}>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-[#E8E7FF] flex items-center justify-center mb-4">
              <MessageSquare className="text-[#6C63FF]" size={32} />
            </div>
            <h2 className="mb-2">Créer un ticket</h2>
            <p className="text-[#666]">Besoin d'aide ? Contactez notre équipe support</p>
          </div>
        </Card>

        {/* Voir mes tickets */}
        <Card>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-[#E8E7FF] flex items-center justify-center mb-4">
              <Eye className="text-[#6C63FF]" size={32} />
            </div>
            <h2 className="mb-2">Mes tickets</h2>
            <p className="text-[#666]">{tickets.length} tickets au total</p>
          </div>
        </Card>
      </div>

      {/* Formulaire de création */}
      {showForm && (
        <Card>
          <h2 className="mb-6">Nouveau ticket</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Titre</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Décrivez brièvement votre problème"
                className="w-full px-4 py-3 bg-[#F6F6F6] rounded-lg outline-none focus:ring-2 focus:ring-[#6C63FF]"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Catégorie</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 bg-[#F6F6F6] rounded-lg outline-none focus:ring-2 focus:ring-[#6C63FF]"
                required
              >
                <option value="">Sélectionnez une catégorie</option>
                <option value="technique">Technique</option>
                <option value="pedagogique">Pédagogique</option>
                <option value="administratif">Administratif</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Décrivez votre problème en détail..."
                rows={6}
                className="w-full px-4 py-3 bg-[#F6F6F6] rounded-lg outline-none focus:ring-2 focus:ring-[#6C63FF] resize-none"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Priorité</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full px-4 py-3 bg-[#F6F6F6] rounded-lg outline-none focus:ring-2 focus:ring-[#6C63FF]"
                required
              >
                <option value="normal">Normal</option>
                <option value="high">Haute</option>
                <option value="urgent">Urgente</option>
              </select>
            </div>

            <div className="flex gap-3">
              <Button type="submit" className="flex-1">Envoyer</Button>
              <Button type="button" variant="secondary" onClick={() => setShowForm(false)}>
                Annuler
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Liste des tickets */}
      <div>
        <h2 className="mb-4">Historique des tickets</h2>
        <div className="space-y-3">
          {tickets.map(ticket => (
            <Card key={ticket.id}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3>{ticket.title}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        ticket.status === 'open'
                          ? 'bg-[#FFD15C]'
                          : ticket.status === 'answered'
                          ? 'bg-[#5ABFFF]'
                          : 'bg-[#61D26A]'
                      }`}
                    >
                      <small>
                        {ticket.status === 'open'
                          ? 'Ouvert'
                          : ticket.status === 'answered'
                          ? 'Répondu'
                          : 'Fermé'}
                      </small>
                    </span>
                  </div>
                  <p className="text-[#666] mb-3">{ticket.description}</p>
                  <div className="flex items-center gap-4 text-[#666]">
                    <small className="flex items-center gap-1">
                      <Clock size={14} />
                      {ticket.date}
                    </small>
                    <small>{ticket.category}</small>
                  </div>
                </div>
                {ticket.status === 'open' ? (
                  <Clock className="text-[#FFD15C]" size={24} />
                ) : ticket.status === 'answered' ? (
                  <MessageSquare className="text-[#5ABFFF]" size={24} />
                ) : (
                  <CheckCircle className="text-[#61D26A]" size={24} />
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}