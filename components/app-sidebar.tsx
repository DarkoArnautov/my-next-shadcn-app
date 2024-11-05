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
    title: "Accordion",
    url: "/accordion",
  },
  {
    title: "Alert",
    url: "/alert",
  },
  {
    title: "Alert Dialog",
    url: "/alert-dialog",
  },
  {
    title: "Aspect Ratio",
    url: "/aspect-ratio",
  },
  {
    title: "Avatar",
    url: "/avatar",
  },
  {
    title: "Badge",
    url: "/badge",
  },
  {
    title: "Breadcrumb",
    url: "/breadcrumb",
  },
  {
    title: "Button",
    url: "/button",
  },
  {
    title: "Calendar",
    url: "/calendar",
  },
  {
    title: "Card",
    url: "/card",
  },
  {
    title: "Carousel",
    url: "/carousel",
  },
];

export function AppSidebar() {
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
}
