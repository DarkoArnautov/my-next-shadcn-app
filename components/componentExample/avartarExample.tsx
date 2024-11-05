import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AvatarExample = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};
