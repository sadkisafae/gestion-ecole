
const AdminInterface = () => {


  return (
    <div className="flex h-screen ">




      <div className="flex flex-col flex-1">

        <header className="bg-gray-100 shadow">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/classes" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">classes</a>
                  <a href="/eleves" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">eleves</a>
                  <a href="/enseignant" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">enseignants</a>
                  <a href="/matiere" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">matieres</a>


                  <a href="/profil" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ">Profil</a>
                  <a href="/Logout" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">logout</a>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4">
          {/* Your main content goes here */}
        </main>
      </div>
    </div>
  );
};

export default AdminInterface;
