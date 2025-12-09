import React, { useState, useEffect, useMemo } from 'react';
import { BookContent } from './components/BookContent';
import { CHAPTERS } from './constants';
import { Search, Menu, X, BookOpen, ChevronRight, Search as SearchIcon } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState<string>('');
  const [showSearchModal, setShowSearchModal] = useState(false);

  // Search Logic
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return CHAPTERS.filter(chapter => 
      chapter.title.toLowerCase().includes(query) || 
      chapter.subtitle?.toLowerCase().includes(query) ||
      chapter.keywords.some(k => k.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  // Scroll Spy for TOC highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = CHAPTERS.map(c => document.getElementById(c.id));
      const scrollPosition = window.scrollY + 150; // Offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(CHAPTERS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
      setShowSearchModal(false);
      setSearchQuery('');
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-serif selection:bg-accent/20">
      
      {/* Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
            <div className="p-4 border-b border-stone-100 flex items-center gap-3">
              <SearchIcon className="text-stone-400 w-5 h-5" />
              <input 
                autoFocus
                type="text" 
                placeholder="검색어를 입력하세요 (예: 도화살, 오행, 만세력...)"
                className="flex-1 text-lg outline-none font-sans placeholder:text-stone-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={() => setShowSearchModal(false)} className="p-1 hover:bg-stone-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-stone-500" />
              </button>
            </div>
            
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {searchQuery.length === 0 ? (
                <div className="p-8 text-center text-stone-400 font-sans text-sm">
                  궁금한 키워드를 입력해보세요.
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-1">
                  {searchResults.map(result => (
                    <button
                      key={result.id}
                      onClick={() => scrollToSection(result.id)}
                      className="w-full text-left p-4 hover:bg-stone-50 rounded-lg group transition-colors flex items-start justify-between"
                    >
                      <div>
                        <div className="font-bold text-stone-800 font-sans group-hover:text-accent transition-colors">{result.title}</div>
                        {result.subtitle && <div className="text-sm text-stone-500 mt-1">{result.subtitle}</div>}
                      </div>
                      <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-accent mt-1" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-stone-400 font-sans text-sm">
                  검색 결과가 없습니다.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-b border-stone-200 z-40 flex items-center justify-between px-4 md:px-8 shadow-sm transition-all">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center text-white shadow-sm">
            <BookOpen size={18} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-lg md:text-xl font-sans tracking-tight text-subAccent hidden sm:block">사주명리학 입문</span>
          <span className="font-bold text-lg font-sans tracking-tight text-subAccent sm:hidden">사주 입문</span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowSearchModal(true)}
            className="flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-500 px-4 py-2 rounded-full transition-all text-sm font-sans w-32 md:w-64"
          >
            <Search size={16} />
            <span className="opacity-70 truncate">검색하기...</span>
          </button>
          
          <button 
            className="p-2 text-stone-600 hover:text-accent lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="pt-24 pb-20 max-w-7xl mx-auto flex gap-8 px-4 md:px-8">
        
        {/* Sidebar Navigation (Desktop) */}
        <nav className="hidden lg:block w-64 shrink-0 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar pl-2">
          <h2 className="font-bold text-stone-900 mb-4 font-sans flex items-center gap-2 text-sm uppercase tracking-wider opacity-50">
            목차 (Contents)
          </h2>
          <ul className="space-y-1 relative border-l border-stone-200">
            {CHAPTERS.map(chapter => (
              <li key={chapter.id}>
                <button
                  onClick={() => scrollToSection(chapter.id)}
                  className={`text-left w-full py-2 px-4 text-sm font-sans transition-all duration-200 border-l-2 -ml-[1px] ${
                    activeSection === chapter.id 
                      ? 'border-accent text-accent font-bold bg-accent/5 rounded-r-md' 
                      : 'border-transparent text-stone-500 hover:text-stone-800 hover:border-stone-300'
                  }`}
                >
                  {chapter.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setIsMenuOpen(false)}>
            <div className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-xl p-6 overflow-y-auto" onClick={e => e.stopPropagation()}>
              <h2 className="font-bold text-xl mb-6 font-sans text-subAccent">목차</h2>
              <ul className="space-y-4">
                {CHAPTERS.map(chapter => (
                  <li key={chapter.id}>
                    <button
                      onClick={() => scrollToSection(chapter.id)}
                      className={`text-left w-full text-base font-sans ${
                        activeSection === chapter.id ? 'text-accent font-bold' : 'text-stone-600'
                      }`}
                    >
                      {chapter.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Content Area */}
        <main className="flex-1 min-w-0">
          {/* Cover Section */}
          <div className="flex flex-col items-center justify-center text-center py-12 md:py-24 mb-16 border-8 double border-accent bg-white relative overflow-hidden shadow-sm">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
             <div className="relative z-10 px-4">
                <p className="text-stone-500 font-sans tracking-widest text-sm md:text-base uppercase mb-4">내 운명의 지도를 펼치다</p>
                <h1 className="text-4xl md:text-6xl font-black text-subAccent mb-4 leading-tight font-serif">
                  가장 쉬운<br/>사주명리학 입문
                </h1>
                <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
                <p className="text-lg md:text-xl font-serif text-stone-600 italic">초보자를 위한 운명 해석 가이드</p>
             </div>
          </div>

          <BookContent />
        </main>
      </div>

      {/* Floating Action Button for Mobile TOC - Optional but good UX */}
      <button 
        onClick={() => setIsMenuOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-subAccent text-white rounded-full shadow-lg flex items-center justify-center z-30 hover:bg-accent transition-colors"
        aria-label="목차 열기"
      >
        <Menu />
      </button>

    </div>
  );
}

export default App;