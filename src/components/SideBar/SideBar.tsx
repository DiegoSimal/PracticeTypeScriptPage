import { useState } from 'react';
import SidebarItem from './SideBarItem';
import Image from 'next/image';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

// This sidebar component is for both mobile and desktop
function Sidebar({ children, expanded, setExpanded }: {children: React.ReactNode, expanded: boolean, setExpanded: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div className="relative border">
      {/* 
        This div is used to create the background overlay when the sidebar is expanded
        It is only visible on mobile screens
      */}
      <div
        className={`fixed inset-0 -z-10 block bg-gray-400  ${expanded ? 'block sm:hidden' : 'hidden'}`}
      />
      <aside
      // Aqui para editar el tamaño:
        className={`box-border h-full transition-all ${expanded ? 'w-5/6 sm:w-64' : 'w-0 sm:w-20'}`}
      >
        <nav className="flex h-full flex-col border-r bg-blue-900 text-white shadow-sm">
          <div className="flex items-center justify-between p-4 pb-2">
            <Image
              src="/tu-sonrisa.jpg"
              className={`overflow-hidden transition-all ${
                expanded ? 'w-32' : 'w-0'
              }`}
              alt=""
              width={200}
              height={200}
            />
            <div className={`${expanded ? '' : 'hidden sm:block'}`}>
              <button
                onClick={() => setExpanded((curr: boolean) => !curr)}
                className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
              >
                {expanded ? (
                  <FaArrowRight className="h-7 w-6" />
                ) : (
                  <FaArrowLeft className="h-7 w-6" />
                )}
              </button>
            </div>
          </div>
          <br/>
          <ul className="flex-1 px-3">{children}</ul>
          <div className="flex border-t p-3">
            {/* <Image
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Mark+Ruffalo"
              alt=""
              className="h-10 w-10 rounded-md"
              width={200}
              height={200}
            />  */}
            <div
              className={`
              flex items-center justify-between
              overflow-hidden transition-all ${expanded ? 'ml-3 w-52' : 'w-0'}
          `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Cuenta</h4>
                <span className="text-xs text-white">Correo</span>
              </div>
              <FaEllipsisV className="h-6 w-6" />
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
}

export default function MakeSidebar() {
  const [expanded, setExpanded] = useState(true);
  const navBarItems = [
    {
      icon: <FaHome />,
      text: 'Home',
      // active: true,
    },
    {
      icon: <FaUser />,
      // subMenu: [
      //   {
      //     icon: <FaUser />,
      //     text: 'Profile',
      //   },
      //   {
      //     icon: <FaCog />,
      //     text: 'Settings',
      //   },
      // ],
      text: 'Profile',
    },
    {
      icon: <FaCog />,
      text: 'Settings',
    },
  ];

  // Desktop Sidebar
  return (
    <Sidebar expanded={expanded} setExpanded={setExpanded}>
      {navBarItems.map((item, index) => (
        <SidebarItem key={index} expanded={expanded} {...item} />
      ))}
    </Sidebar>
  );
}