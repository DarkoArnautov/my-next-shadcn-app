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
  {
    title: "A sidebar with submenus as dropdowns.",
    url: "sidebar/collapsible-dropdown-sidebar",
  },
  {
    title: "A sidebar that collapses to icons",
    url: "sidebar/collapses-icons-sidebar",
  },
  {
    title: "An inset sidebar with secondary navigation.",
    url: "sidebar/secondary-navigation-sidebar",
  },
  {
    title: "Collapsible nested sidebars.",
    url: "sidebar/collapsible-nested-sidebar",
  },
  {
    title: "A sidebar in a popover.",
    url: "sidebar/popover-sidebar",
  },
  {
    title: "A sidebar with a collapsible file tree.",
    url: "sidebar/collapsible-tree-sidebar",
  },
  {
    title: "A sidebar with a calendar.",
    url: "sidebar/calendar-sidebar",
  },
  {
    title: "A sidebar in a dialog.",
    url: "sidebar/dialog-sidebar",
  },
  {
    title: "A sidebar on the right.",
    url: "sidebar/right-sidebar",
  },
  {
    title: "A left and right sidebar.",
    url: "sidebar/left-right-sidebar",
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
