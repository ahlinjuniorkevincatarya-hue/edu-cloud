import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children,title, showBack }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0B0F19] transition-colors">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar title={title} showBack={showBack}/>

        <main className="flex-1 p-4 md:p-6 text-black dark:text-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;