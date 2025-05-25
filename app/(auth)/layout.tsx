export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={`flex justify-between items-center px-4 py-2`}>
        NextJS
        <button className="text-xl font-bold bg-green-500 hover:opacity-70 focus:outline-none">
          &times;
        </button>
      </div>
      {children}
    </>
  );
}
