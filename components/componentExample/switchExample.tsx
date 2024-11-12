import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
export const SwitchExample = () => {
  return (
    <div className="example-container">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </div>
  );
};
