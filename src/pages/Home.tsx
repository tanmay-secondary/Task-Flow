
import React from 'react';
import Navigation from '@/components/Navigation';
import Board from '@/components/Board';
import { Card } from '@/components/ui/card';

const motivationalQuotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "It always seems impossible until it's done. - Nelson Mandela",
  "Done is better than perfect. - Sheryl Sandberg",
  "Success is not final, failure is not fatal. - Winston Churchill",
  "The best way to predict the future is to create it. - Peter Drucker"
];

const Home = () => {
  const [quote, setQuote] = React.useState('');

  React.useEffect(() => {
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted">
      <Navigation />
      <div className="p-4">
        <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 text-center mb-4">
          <p className="text-sm text-muted-foreground italic">{quote}</p>
        </Card>
      </div>
      <main className="flex-1 overflow-hidden flex flex-col">
        <Board />
      </main>
    </div>
  );
};

export default Home;
