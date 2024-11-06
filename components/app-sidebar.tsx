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
  {
    title: "Chart",
    url: "/chart",
  },
  {
    title: "Checkbox",
    url: "/checkbox",
  },
  {
    title: "Collapsible",
    url: "/collapsible",
  },
  {
    title: "Combobox",
    url: "/combobox",
  },
  {
    title: "Command",
    url: "/command",
  },
  {
    title: "Context Menu",
    url: "/context-menu",
  },
  {
    title: "Data Table",
    url: "/data-table",
  },
  {
    title: "Date Picker",
    url: "/date-picker",
  },
  {
    title: "Dialog",
    url: "/dialog",
  },
  {
    title: "Drawer",
    url: "/drawer",
  },
  {
    title: "Dropdown Mneu",
    url: "/dropdown-menu",
  },
  {
    title: "Form",
    url: "/form",
  },
  {
    title: "Hover Card",
    url: "/hover-card",
  },
  {
    title: "Input",
    url: "/input",
  },
  {
    title: "Input OTP",
    url: "/input-otp",
  },
  {
    title: "Label",
    url: "/label",
  },
  {
    title: "Menubar",
    url: "/menubar",
  },
  {
    title: "Navigation Menu",
    url: "/navigation-menu",
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
