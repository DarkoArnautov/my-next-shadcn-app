import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Simple sidebar",
    url: "sidebar/simple-sidebar",
  },
  {
    title: "A sidebar with collapsible sections",
    url: "sidebar/collapsible-sidebar",
  },
  {
    title: "A sidebar with submenus",
    url: "sidebar/submenu-sidebar",
  },
  {
    title: "A floating sidebar with submenus.",
    url: "sidebar/floating-ssubmenu-sidebar",
  },
  {
    title: "A sidebar with collapsible submenus.",
    url: "sidebar/collapsible-submenu-sidebar",
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
