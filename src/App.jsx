import React from 'react'

const App = () => {
  const text = "APRIL FOOL SAHIL ";

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white text-6xl font-bold">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-fadeBounce"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char === " " ? "\u00A0" : char} {/* Preserve space */}
        </span>
      ))}
    </div>
  );
}

export default App