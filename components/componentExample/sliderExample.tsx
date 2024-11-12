import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
type SliderProps = React.ComponentProps<typeof Slider>;
export const SliderExample = ({ className, ...props }: SliderProps) => {
  return (
    <div className="example-container">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        {...props}
      />
    </div>
  );
};
