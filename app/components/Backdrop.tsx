export default function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="grid-overlay absolute inset-x-0 top-0 h-[46rem]" />
      <div className="absolute -left-24 -top-32 h-[34rem] w-[34rem] rounded-full bg-violet-600/20 blur-[130px]" />
      <div className="absolute -right-32 top-1/3 h-[30rem] w-[30rem] rounded-full bg-cyan-500/15 blur-[130px]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/10 blur-[130px]" />
    </div>
  );
}
