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
    title: "Dashboard",
    url: "example/dashboard",
  },
  {
    title: "Authentication",
    url: "example/authentication",
  },
  {
    title: "Card",
    url: "example/cards",
  },
  {
    title: "Mail",
    url: "example/mail",
  },
  {
    title: "Music",
    url: "example/music",
  },
  {
    title: "Playground",
    url: "example/playground",
  },
  {
    title: "Tasks",
    url: "example/tasks",
  },
  {
    title: "Forms",
    url: "example/forms",
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
