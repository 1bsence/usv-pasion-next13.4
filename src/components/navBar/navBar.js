export default function NavBar() {
  return (
    <nav className="flex flex-row flex-wrap sm:justify-center justify-evenly space-x-4">
      {[
        ["Orar", "/"],
        ["Examene", "/examene"],
        ["Pasionati", "/pasionati"],
      ].map(([title, url], index) => (
        <a
          key={index}
          href={url}
          className="rounded-lg px-3 py-2  font-medium hover:bg-slate-100 hover:text-black"
        >
          {title}
        </a>
      ))}
    </nav>
  );
}
