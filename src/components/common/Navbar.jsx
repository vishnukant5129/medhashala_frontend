const Navbar = () => {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold">
        Welcome Back 👋
      </h2>

      <div>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default Navbar;