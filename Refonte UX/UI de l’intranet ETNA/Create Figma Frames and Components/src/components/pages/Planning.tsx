import { Card } from '../Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Planning() {
  const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  const dates = ['18', '19', '20', '21', '22', '23', '24'];

  const courses = [
    {
      day: 0,
      time: '09:00 - 11:00',
      title: 'JavaScript ES6+',
      room: 'Salle A203',
      professor: 'Prof. Martin Dubois',
      color: '#6C63FF'
    },
    {
      day: 0,
      time: '14:00 - 16:00',
      title: 'Développement Web Avancé',
      room: 'Salle A203',
      professor: 'Prof. Martin Dubois',
      color: '#5ABFFF'
    },
    {
      day: 1,
      time: '10:00 - 12:00',
      title: 'React Fundamentals',
      room: 'Salle B105',
      professor: 'Prof. Sophie Laurent',
      color: '#6C63FF'
    },
    {
      day: 1,
      time: '15:00 - 17:00',
      title: 'TypeScript Basics',
      room: 'Salle A201',
      professor: 'Prof. Jean Dupont',
      color: '#61D26A'
    },
    {
      day: 2,
      time: '09:00 - 11:00',
      title: 'CSS & Tailwind',
      room: 'Salle C302',
      professor: 'Prof. Marie Petit',
      color: '#FFD15C'
    },
    {
      day: 3,
      time: '10:00 - 12:00',
      title: 'Node.js Backend',
      room: 'Salle A203',
      professor: 'Prof. Martin Dubois',
      color: '#6C63FF'
    },
    {
      day: 3,
      time: '14:00 - 16:00',
      title: 'Git & GitHub',
      room: 'Salle B105',
      professor: 'Prof. Sophie Laurent',
      color: '#5ABFFF'
    },
    {
      day: 4,
      time: '09:00 - 11:00',
      title: 'Projet Final',
      room: 'Salle A203',
      professor: 'Prof. Martin Dubois',
      color: '#6C63FF'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1>Planning</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#F6F6F6] rounded-lg">
            <ChevronLeft size={20} />
          </button>
          <span>Semaine du 18 - 24 Nov</span>
          <button className="p-2 hover:bg-[#F6F6F6] rounded-lg">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Desktop view: Weekly grid */}
      <div className="hidden md:block">
        <Card className="overflow-x-auto">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-8 gap-4 mb-4">
              <div className="text-center"></div>
              {days.map((day, index) => (
                <div key={day} className="text-center">
                  <p>{day}</p>
                  <small className="text-[#666]">{dates[index]} Nov</small>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-8 gap-4">
              <div className="space-y-2 text-right pr-4 pt-2">
                <div className="h-32 flex items-start">
                  <small className="text-[#666]">09:00</small>
                </div>
                <div className="h-32 flex items-start">
                  <small className="text-[#666]">10:00</small>
                </div>
                <div className="h-32 flex items-start">
                  <small className="text-[#666]">14:00</small>
                </div>
                <div className="h-32 flex items-start">
                  <small className="text-[#666]">15:00</small>
                </div>
              </div>

              {days.map((day, dayIndex) => (
                <div key={day} className="space-y-2">
                  {courses
                    .filter(course => course.day === dayIndex)
                    .map((course, courseIndex) => (
                      <div
                        key={courseIndex}
                        className="p-3 rounded-lg text-white"
                        style={{ backgroundColor: course.color }}
                      >
                        <small className="opacity-90">{course.time}</small>
                        <p className="mt-1 mb-1">{course.title}</p>
                        <small className="opacity-90">{course.room}</small>
                        <br />
                        <small className="opacity-90">{course.professor}</small>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Mobile view: List by day */}
      <div className="md:hidden space-y-4">
        {days.map((day, dayIndex) => {
          const dayCourses = courses.filter(course => course.day === dayIndex);
          
          if (dayCourses.length === 0) return null;
          
          return (
            <div key={day}>
              <h3 className="mb-3">{day} {dates[dayIndex]} Nov</h3>
              <div className="space-y-3">
                {dayCourses.map((course, courseIndex) => (
                  <Card key={courseIndex}>
                    <div className="flex gap-3">
                      <div
                        className="w-1 rounded-full"
                        style={{ backgroundColor: course.color }}
                      ></div>
                      <div className="flex-1">
                        <small className="text-[#666]">{course.time}</small>
                        <h3 className="mt-1 mb-2">{course.title}</h3>
                        <div className="space-y-1">
                          <small className="text-[#666] block">{course.room}</small>
                          <small className="text-[#666] block">{course.professor}</small>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
