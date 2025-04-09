'use client'

import Link from "next/link"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { useState } from "react"
import { cn, fetcher } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { ChevronDown, ChevronRight } from "lucide-react"
import useSWR from "swr"

import Logo from '@assets/mainstack-logo.svg'
import WidgetIcon from '@assets/widgets.svg'
import HomeIcon from "@assets/home.svg"
import NotificationIcon from '@assets/notifications.svg'
import ChatIcon from '@assets/chat.svg'
import MenuIcon from '@assets/menu.svg'
import UsersIcon from '@assets/CRM User.svg'
import AnalyticsIcon from '@assets/Analytics.svg'
import RevenueIcon from '@assets/revenue.svg'

const NavbarItems = [
  { logo: <HomeIcon />, title: 'Home' },
  { logo: <AnalyticsIcon />, title: 'Analytics' },
  { logo: <RevenueIcon />, title: 'Revenue' },
  { logo: <UsersIcon />, title: 'CRM' },
  { logo: <WidgetIcon />, title: 'Apps', isPopover: true },
]

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Revenue')
  const { data: user } = useSWR(`${process.env.NEXT_PUBLIC_BASE_API_URL}/user`, fetcher)
 
  return (
    <header className="bg-white sticky top-4 w-full h-16 px-8 z-50">
      <div className="border border-white rounded-full shadow-xs shadow-[#2d3b43]/20 flex justify-between items-center py-2 px-8">
        <div>
          <Link href='/'>
            <Logo />
          </Link>
        </div>

        <nav className="flex items-center gap-x-5">
          {NavbarItems.map((item) => (
            <div
              key={item.title}
              className={cn(
                activeTab === item.title ? "bg-[#131316] text-white rounded-4xl" : "hover:bg-[#eff1f6] hover:rounded-lg text-[#56616b]",
                "flex items-center gap-1 py-2 px-4 cursor-default transition-colors ease-in duration-200"
              )}
              onClick={() => setActiveTab(item.title)}
            >
              {item?.isPopover ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="flex items-center gap-2 divide-x divide-white/15">
                      <div className="flex items-center gap-1">
                        {item.logo}
                        <span className="font-semibold mt-1 mr-2">{item.title}</span>
                      </div>
                      {activeTab === item.title && (
                        <p className="flex gap-x-2 items-center mt-1">
                          Link in Bio
                          <span>
                            <ChevronDown color="white" />
                          </span>
                        </p>
                      )}
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="mt-6 border-none bg-white">
                    <AppsPopoverContent />
                  </PopoverContent>
                </Popover>
              ) : (
                <>
                  {item.logo}
                  <span className="font-semibold mt-1">{item.title}</span>
                </>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="p-2.5">
            <NotificationIcon />
          </div>
          <div className="p-2.5">
            <ChatIcon />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex gap-2 items-center bg-[#eff1f6] p-2 rounded-full">
                <Avatar>
                  <AvatarFallback className="rounded-full text-white bg-black">{user?.first_name[0] + user?.last_name[0]}</AvatarFallback>
                </Avatar>
                <MenuIcon />
              </div>
            </PopoverTrigger>
            <PopoverContent className="-translate-x-8 mt-2 border-none">
              <MenuPopoverContent user={user} />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  )
}

function MenuPopoverContent({ user }: { user: Record<string, string> }) {
  const menuItems = [
    { icon: '⚙️', title: 'Settings' },
    { icon: '🛍️', title: 'Purchase History' },
    { icon: '🎁', title: 'Refer and Earn' },
    { icon: '🔌', title: 'Integrations' },
    { icon: '🐛', title: 'Report Bug' },
    { icon: '🔄', title: 'Switch Account' },
    { icon: '🚪', title: 'Sign Out' },
  ]

  return (
    <div className="py-2 px-1 bg-white">
      <div className="flex items-center gap-3 px-2 pb-4">
        <Avatar>
          <AvatarFallback className="rounded-full text-white bg-black">OJ</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-[#131316]">{user?.first_name + user?.last_name}</h3>
          <p className="text-sm text-[#56616b]">{user?.email}</p>
        </div>
      </div>
      <div className="mt-2">
        {menuItems.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-base font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AppsPopoverContent() {
  const apps = [
    { icon: '🔗', title: 'Link in Bio', description: 'Manage your Link in Bio' },
    { icon: '🏪', title: 'Store', description: 'Manage your Store activities' },
    { icon: '📱', title: 'Media Kit', description: 'Manage your Media Kit' },
    { icon: '📄', title: 'Invoicing', description: 'Manage your Invoices' },
    { icon: '📅', title: 'Bookings', description: 'Manage your Bookings' },
  ]

  return (
    <div className="py-2">
      {apps.map((app) => (
        <div
          key={app.title}
          className="flex items-start gap-3 p-3 hover:shadow rounded-lg cursor-pointer group"
        >
          <span className="text-xl">{app.icon}</span>
          <div className="flex items-center justify-between w-full">
            <div className="group-hover:-translate-x-1 transition-transform">
              <h3 className="font-semibold text-[#131316]">{app.title}</h3>
              <p className="text-sm text-[#56616b]">{app.description}</p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight color="black" className="h-4 w-4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}