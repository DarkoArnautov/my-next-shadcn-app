import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
export const LabelExample = () => {
  return (
    <div className="example-container">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
};
