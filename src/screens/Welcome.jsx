import React from 'react';

/*Este no puede hacer /*/

export default function Welcome({ username, onContinue, illustrationUrl }) {
  const isCustomIllustration = illustrationUrl && (illustrationUrl.startsWith('http') || illustrationUrl.startsWith('data:'));
  const illustrationStyle = isCustomIllustration ? {
    backgroundImage: `url(${illustrationUrl})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundColor: 'white'
  } : {
    backgroundImage: `url(${welcomeBg})`,
    backgroundSize: '1024px 640px',
    backgroundPosition: '-610px -150px'
  };

  return (
    <div className="flex flex-col min-h-screen bg-white select-none">
      <div className="h-16 bg-[#3f444e] w-full shrink-0" />
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center max-w-6xl w-full mx-auto px-6 py-8 gap-8 md:gap-16">
        <div className="flex-1 flex flex-col items-start text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3f444e] tracking-tight leading-tight">
            Bienvenido de vuelta a AdminITR
          </h1>

          <p className="mt-4 text-base text-gray-500 font-medium">
            Recuerda que siempre puedes contar con nosotros 💪
          </p>

          <button
            onClick={onContinue}
            className="mt-8 bg-[#4a505d] text-white font-semibold py-3 px-8 rounded-md shadow-md cursor-pointer hover:bg-[#3f444e] transition-none text-sm"
          >
            Continuar
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center w-full">
          <div
            className="w-full max-w-[350px] aspect-square bg-no-repeat rounded-lg shadow-sm border border-gray-100"
            style={illustrationStyle}
            aria-label="Ilustración de desarrollador trabajando"
          />
        </div>

      </div>
      <div className="h-16 bg-[#3f444e] w-full shrink-0" />

    </div>
  );
}
