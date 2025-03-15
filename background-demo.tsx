export default function BackgroundDemo() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-white">
        <h1 className="text-2xl font-bold">Pango App Background</h1>
        <p className="mt-2">This is the gradient background used in the onboarding screen</p>
      </div>
    </div>
  )
}

