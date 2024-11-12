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
  {
    title: "Pagination",
    url: "/pagination",
  },
  {
    title: "Popover",
    url: "/popover",
  },
  {
    title: "Progress",
    url: "/progress",
  },
  {
    title: "Radio Group",
    url: "/radio-group",
  },
  {
    title: "Resizable",
    url: "/resizable",
  },
  {
    title: "Scroll Area",
    url: "/scroll-area",
  },
  {
    title: "Select",
    url: "/select",
  },
  {
    title: "Seperator",
    url: "/seperator",
  },
  {
    title: "Sheet",
    url: "/sheet",
  },
  {
    title: "Skeleton",
    url: "/skeleton",
  },
  {
    title: "Slider",
    url: "/slider",
  },
  {
    title: "Sooner",
    url: "/sooner",
  },
  {
    title: "Switch",
    url: "/switch",
  },
  {
    title: "Table",
    url: "/table",
  },
  {
    title: "Tabs",
    url: "/tabs",
  },
  {
    title: "Textarea",
    url: "/textarea",
  },
  {
    title: "Toast",
    url: "/toast",
  },
  {
    title: "Toggle",
    url: "/toggle",
  },
  {
    title: "Toggle Group",
    url: "/toggle-group",
  },
  {
    title: "Tooltip",
    url: "/tooltip",
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
