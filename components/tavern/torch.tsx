"use client"

export function Torch({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Torch handle */}
      <div className="w-4 h-16 bg-wood-light rounded-b-lg mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      
      {/* Torch head */}
      <div className="w-8 h-6 bg-wood mx-auto -mt-1 rounded-t-lg" />
      
      {/* Flame container */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        {/* Outer glow */}
        <div className="absolute inset-0 w-16 h-16 bg-flame/30 rounded-full blur-xl animate-flicker" />
        
        {/* Inner flame */}
        <div className="relative w-8 h-12 mx-auto">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-10 bg-gradient-to-t from-accent via-primary to-yellow-200 rounded-full animate-flicker blur-sm" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-8 bg-gradient-to-t from-primary to-yellow-100 rounded-full animate-flicker" style={{ animationDelay: '0.1s' }} />
        </div>
      </div>
    </div>
  )
}
