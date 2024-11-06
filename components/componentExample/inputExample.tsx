import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
export const InputExample = () => {
  return (
    <div className="example-container">
      <div className="flex flex-col gap-2">
        <div>
          <Input type="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
        <div>
          <Input disabled type="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="flex flex-row gap-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};
