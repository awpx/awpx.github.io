import { useEffect } from 'react'
import { renderCanvas } from './renderCanvas'

export const Hero = () => {
  useEffect(() => {
    renderCanvas()
  }, [])

  return (
    <div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
      <div className="relative z-10 flex h-[calc(100vh_-_135px)] items-center justify-center">
        <div className="px-4 text-3xl md:text-4xl">
          <span>「学无止境」</span>
        </div>
      </div>
    </div>
  )
}
