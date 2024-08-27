import React, { useCallback, useEffect, useRef } from 'react'

const WaveAnimation: React.FC = () => {
  const wavePathRef1 = useRef<SVGPathElement | null>(null)
  const wavePathRef2 = useRef<SVGPathElement | null>(null)
  const wavePathRef3 = useRef<SVGPathElement | null>(null)

  const generateWavePath = (
    amplitude: number,
    frequency: number,
    phase: number,
    points: number,
  ): string => {
    const width = 1440
    const height = 300
    let path = `M0,${height / 2} `

    for (let i = 0; i <= points; i++) {
      const x = (i / points) * width
      const y =
        height / 2 +
        amplitude * Math.sin((i / points) * frequency * 2 * Math.PI + phase)
      path += `L${x},${y} `
    }

    path += `L${width},${height} L0,${height} Z`
    return path
  }

  const updateWave = useCallback(() => {
    const amplitude = 50
    const frequency = 2
    const phase = performance.now() / 1000
    const points = 100
    const path = generateWavePath(amplitude, frequency, phase, points)
    if (wavePathRef1.current) {
      wavePathRef1.current.setAttribute('d', path)
    }
    requestAnimationFrame(updateWave)
  }, [])

  const updateWave2 = useCallback(() => {
    const amplitude = 20
    const frequency = 5
    const phase = performance.now() / 1000
    const points = 100
    const path = generateWavePath(amplitude, frequency, phase, points)
    if (wavePathRef2.current) {
      wavePathRef2.current.setAttribute('d', path)
    }
    requestAnimationFrame(updateWave2)
  }, [])

  const updateWave3 = useCallback(() => {
    const amplitude = 30
    const frequency = 4
    const phase = performance.now() / 1000
    const points = 100
    const path = generateWavePath(amplitude, frequency, phase, points)
    if (wavePathRef3.current) {
      wavePathRef3.current.setAttribute('d', path)
    }
    requestAnimationFrame(updateWave3)
  }, [])

  useEffect(() => {
    updateWave()
    updateWave2()
    updateWave3()
  }, [updateWave, updateWave2, updateWave3])

  return (
    <div
      style={{
        background: 'transparent',
        height: '100vh',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 300"
        style={{ position: 'absolute', bottom: 0, width: '100%' }}
      >
        <path
          id="wavePath3"
          ref={wavePathRef3}
          fill="#fff"
          fillOpacity="1"
          style={{ opacity: 0.2 }}
        ></path>
      </svg>

      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 310"
        style={{ position: 'absolute', bottom: 0, width: '100%' }}
      >
        <path
          id="wavePath2"
          ref={wavePathRef2}
          fill="#fff"
          fillOpacity="1"
          style={{ opacity: 0.5 }}
        ></path>
      </svg>

      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 290"
        style={{ position: 'absolute', bottom: 0, width: '100%' }}
      >
        <path
          id="wavePath1"
          ref={wavePathRef1}
          fill="#fff"
          fillOpacity="1"
        ></path>
      </svg>
    </div>
  )
}

export default WaveAnimation
