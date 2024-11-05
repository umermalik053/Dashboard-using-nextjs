"use client"
import { Calendar, Home, Inbox, Search, Settings,LayoutDashboard,Package, LogOut } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { auth,onAuthStateChanged,signOut } from "@/Firebase/FirebaseConfig"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "products",
    url: "/product",
    icon: Package,
  },
  
]

export function AppSidebar() {

  const router = useRouter()
  const Signout = ()=>{
    signOut(auth).then(() => {
      router.push('/');
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push('/');
          // ...
        }
      });  
    }  

)
  

  return (
    <>
    <SidebarProvider>
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <button onClick={Signout} className="flex items-center justify-center w-full px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 hover:shadow-lg active:bg-gray-400 transition duration-300">
      <LogOut className="mr-2" /> {/* Logout icon with margin on the right */}
      Logout
    </button>
    </Sidebar>
    </SidebarProvider>
    </>
    
  )
}
