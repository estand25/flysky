import React from "react";

/**
 * Floating island landscape with drifting clouds, bobbing sun, and parallax waves.
 * Drop into any page; it fills the parent (position: relative container is fine).
 */
export default function IslandScene() {
  return (
    <main className="relative h-dvh overflow-hidden bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100">
      {/* Sun */}
      <div className="absolute left-6 top-6 md:left-10 md:top-10">
        <div className="size-20 md:size-24 rounded-full bg-yellow-300 shadow-[0_0_60px_rgba(250,204,21,0.6)] animate-sun" />
      </div>

      {/* Clouds */}
      <div className="pointer-events-none absolute inset-x-[-20%] top-10 flex gap-10">
        <div className="animate-drift" style={{ ["--speed" as any]: "26s" }}>
          <div className="mx-10 size-20 rounded-full bg-white/90 blur-[1px]" />
        </div>
        <div
          className="animate-drift"
          style={{ ["--speed" as any]: "22s", animationDelay: "-8s" }}
        >
          <div className="mx-10 size-14 rounded-full bg-white/90 blur-[1px]" />
        </div>
        <div
          className="animate-drift"
          style={{ ["--speed" as any]: "30s", animationDelay: "-14s" }}
        >
          <div className="mx-10 size-24 rounded-full bg-white/90 blur-[1px]" />
        </div>
      </div>

      {/* Floating Island */}
      <section className="absolute inset-0 grid place-items-center">
        <div className="animate-bob">
          <div className="relative">
            {/* island top */}
            <div className="mx-auto h-28 w-[28rem] max-w-[78vw] rounded-[100%] bg-emerald-400 shadow-xl" />
            {/* grass edge */}
            <div className="absolute left-1/2 top-0 h-4 w-[26rem] max-w-[72vw] -translate-x-1/2 rounded-[100%] bg-emerald-500" />

            {/* trees */}
            <div className="absolute inset-0 flex items-center justify-center gap-6 pt-2">
              <div className="h-16 w-3 rounded bg-amber-800" />
              <div className="h-12 w-12 -translate-y-6 rounded-full bg-emerald-600" />

              <div className="h-20 w-3 rounded bg-amber-800" />
              <div className="h-14 w-14 -translate-y-8 rounded-full bg-emerald-600" />

              <div className="h-16 w-3 rounded bg-amber-800" />
              <div className="h-12 w-12 -translate-y-6 rounded-full bg-emerald-600" />
            </div>

            {/* island underside */}
            <div className="mx-auto -mt-3 h-24 w-56 max-w-[48vw] -skew-x-[10deg] rounded-b-[2rem] bg-amber-700 shadow-2xl" />

            {/* waterfalls */}
            <div className="pointer-events-none absolute left-1/4 top-6 h-16 w-6 rounded-b bg-cyan-200/80 blur-[0.3px]" />
            <div className="pointer-events-none absolute right-1/4 top-7 h-20 w-7 rounded-b bg-cyan-200/80 blur-[0.3px]" />
          </div>
        </div>
      </section>

      {/* Ocean (waves) */}
      <footer className="absolute inset-x-0 bottom-0 h-40">
        {/* strip 1 */}
        <div
          className="absolute bottom-0 w-[200%] translate-x-0 animate-wave"
          style={{ ["--speed" as any]: "12s" }}
        >
          <svg className="h-24 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M321.39,56.44c58.34,10,117.39,20.06,175.72,14.23C641.85,63.31,720,14,779.56,5.71,836-2.2,896.72,14.41,949.3,35S1050.89,79,1102.7,86.29c31.86,4.47,63.65,4.1,95.3-.53V120H0V95.8C107.42,71.79,214.72,46.39,321.39,56.44Z"
              fill="rgb(14,165,233)"
            />
          </svg>
          <svg className="h-24 -mt-1 w-full opacity-90" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M0,0V27.35C151.87,60.54,303.74,93.73,455.62,91.49,607.49,89.26,759.37,51.6,911.24,36.74,984.16,29.49,1057.08,27.2,1130,30V0Z"
              fill="rgb(2,132,199)"
            />
          </svg>
        </div>

        {/* strip 2 */}
        <div
          className="absolute bottom-0 w-[200%] translate-x-0 animate-wave"
          style={{ ["--speed" as any]: "16s", animationDelay: "-6s" }}
        >
          <svg className="h-24 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M0,0V27.35C151.87,60.54,303.74,93.73,455.62,91.49,607.49,89.26,759.37,51.6,911.24,36.74,984.16,29.49,1057.08,27.2,1130,30V0Z"
              fill="rgb(3,105,161)"
            />
          </svg>
          <svg className="h-24 -mt-1 w-full opacity-80" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M321.39,56.44c58.34,10,117.39,20.06,175.72,14.23C641.85,63.31,720,14,779.56,5.71,836-2.2,896.72,14.41,949.3,35S1050.89,79,1102.7,86.29c31.86,4.47,63.65,4.1,95.3-.53V120H0V95.8C107.42,71.79,214.72,46.39,321.39,56.44Z"
              fill="rgb(7,89,133)"
            />
          </svg>
        </div>
      </footer>
    </main>
  );
}
