import { Card } from '../Card';
import { MessageCircle, ThumbsUp, Users } from 'lucide-react';

export function Community() {
  const posts = [
    {
      id: 1,
      author: 'Marie Leclerc',
      avatar: 'ML',
      time: 'Il y a 2 heures',
      content: 'Quelqu\'un peut m\'aider avec le projet React ? Je bloque sur la gestion d\'état...',
      likes: 12,
      comments: 5
    },
    {
      id: 2,
      author: 'Thomas Bernard',
      avatar: 'TB',
      time: 'Il y a 4 heures',
      content: 'Super cours sur TypeScript ! J\'ai enfin compris les interfaces et les types génériques 🎉',
      likes: 24,
      comments: 8
    },
    {
      id: 3,
      author: 'Sophie Martin',
      avatar: 'SM',
      time: 'Hier',
      content: 'Est-ce que quelqu\'un veut former un groupe d\'étude pour le module Node.js ?',
      likes: 15,
      comments: 12
    }
  ];

  return (
    <div className="space-y-6">
      <h1>Communauté</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#E8E7FF] flex items-center justify-center">
              <Users className="text-[#6C63FF]" size={24} />
            </div>
            <div>
              <h3>245</h3>
              <small className="text-[#666]">Étudiants actifs</small>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#E8E7FF] flex items-center justify-center">
              <MessageCircle className="text-[#6C63FF]" size={24} />
            </div>
            <div>
              <h3>128</h3>
              <small className="text-[#666]">Discussions</small>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#E8E7FF] flex items-center justify-center">
              <ThumbsUp className="text-[#6C63FF]" size={24} />
            </div>
            <div>
              <h3>1.2k</h3>
              <small className="text-[#666]">Likes</small>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <textarea
          placeholder="Partagez quelque chose avec la communauté..."
          rows={3}
          className="w-full px-4 py-3 bg-[#F6F6F6] rounded-lg outline-none focus:ring-2 focus:ring-[#6C63FF] resize-none"
        />
        <div className="flex justify-end mt-3">
          <button className="px-6 py-2 bg-[#6C63FF] text-white rounded-lg hover:bg-[#5850E5]">
            Publier
          </button>
        </div>
      </Card>

      <div className="space-y-4">
        {posts.map(post => (
          <Card key={post.id}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#6C63FF] flex items-center justify-center text-white flex-shrink-0">
                {post.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p>{post.author}</p>
                  <small className="text-[#666]">• {post.time}</small>
                </div>
                <p className="text-[#666] mb-4">{post.content}</p>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-[#666] hover:text-[#6C63FF]">
                    <ThumbsUp size={18} />
                    <small>{post.likes}</small>
                  </button>
                  <button className="flex items-center gap-2 text-[#666] hover:text-[#6C63FF]">
                    <MessageCircle size={18} />
                    <small>{post.comments} commentaires</small>
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
