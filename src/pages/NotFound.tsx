import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-8xl font-orbitron font-black text-cosmic text-glow animate-glow-pulse">
          404
        </div>
        <h1 className="text-2xl font-orbitron font-bold">
          Page Not Found in the Cosmic Void
        </h1>
        <p className="text-muted-foreground max-w-md">
          The page you're looking for has drifted into space. Let's navigate back to DESPOTIX 2K25.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_hsl(255_80%_70%_/_0.3)]"
        >
          Return to DESPOTIX 2K25
        </a>
      </div>
    </div>
  );
};

export default NotFound;
